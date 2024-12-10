import {
  catchError,
  Observable,
  of,
  switchMap,
} from 'rxjs';
import { RemoteData } from 'src/app/core/data/remote-data';
import { Community } from 'src/app/core/shared/community.model';

import { Collection } from '../../../../../core/shared/collection.model';
import { Item } from '../../../../../core/shared/item.model';
import { ItemSearchResult } from '../../../../object-collection/shared/item-search-result.model';
import { createSidebarSearchListElementTests } from '../../sidebar-search-list-element.component.spec';
import { PublicationSidebarSearchListElementComponent } from './publication-sidebar-search-list-element.component';

const object = Object.assign(new ItemSearchResult(), {
  indexableObject: Object.assign(new Item(), {
    id: 'test-item',
    metadata: {
      'dc.title': [
        {
          value: 'title',
        },
      ],
      'dc.publisher': [
        {
          value: 'publisher',
        },
      ],
      'dc.date.issued': [
        {
          value: 'date',
        },
      ],
      'dc.contributor.author': [
        {
          value: 'author',
        },
      ],
    },
  }),
});
const parent = Object.assign(new Collection(), {
  id: 'test-collection',
  metadata: {
    'dc.title': [
      {
        value: 'parent title',
      },
    ],
  },
});

function getExpectedHierarchicalTitle(parentObj: Collection, obj: ItemSearchResult): Observable<string> {
  let titles: string[] = [];
  if (obj.indexableObject.metadata['dc.title']) {
    titles = [obj.indexableObject.metadata['dc.title'][0].value];
  }
  let currentParent: Collection = parentObj;

  const fetchParentTitles = (currParent: Collection | Community): Observable<string[]> => {
    if (!currParent) {
      return of([]);
    }

    if (currParent.parentCommunity) {
      return currParent.parentCommunity.pipe(
        switchMap((remoteData: RemoteData<Community>) => {
          if (remoteData.hasSucceeded && remoteData.payload) {
            const parentTitle = remoteData.payload.name;
            titles.unshift(parentTitle);
            return fetchParentTitles(remoteData.payload);
          }
          return of([]);
        }),
        catchError(() => of([])),
      );
    } else {
      return of([]);
    }
  };

  return fetchParentTitles(currentParent).pipe(
    switchMap(() => titles.join(' > ')),
  );
}

const expectedHierarchicalTitle = getExpectedHierarchicalTitle(parent, object);
if (expectedHierarchicalTitle) {
  expectedHierarchicalTitle.subscribe((hierarchicalTitle: string) => {
    describe('PublicationSidebarSearchListElementComponent', () => {
      createSidebarSearchListElementTests(PublicationSidebarSearchListElementComponent, object, parent, hierarchicalTitle, 'title', '(publisher, date) author');
    });
  });
}
