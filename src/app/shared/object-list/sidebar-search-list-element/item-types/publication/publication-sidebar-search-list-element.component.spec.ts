import { Collection } from '../../../../../core/shared/collection.model';
import { Item } from '../../../../../core/shared/item.model';
import { ItemSearchResult } from '../../../../object-collection/shared/item-search-result.model';
import {
  createSidebarSearchListElementTests,
  getExpectedHierarchicalTitle,
} from '../../sidebar-search-list-element.component.spec';
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

const expectedHierarchicalTitle = getExpectedHierarchicalTitle(parent, object);
if (expectedHierarchicalTitle) {
  expectedHierarchicalTitle.subscribe((hierarchicalTitle: string) => {
    describe('PublicationSidebarSearchListElementComponent', () => {
      createSidebarSearchListElementTests(PublicationSidebarSearchListElementComponent, object, parent, hierarchicalTitle, 'title', '(publisher, date) author');
    });
  });
}
