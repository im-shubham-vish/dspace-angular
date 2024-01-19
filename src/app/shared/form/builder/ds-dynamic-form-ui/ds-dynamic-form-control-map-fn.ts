import {
  DYNAMIC_FORM_CONTROL_TYPE_ARRAY,
  DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX,
  DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX_GROUP,
  DYNAMIC_FORM_CONTROL_TYPE_DATEPICKER,
  DYNAMIC_FORM_CONTROL_TYPE_GROUP,
  DYNAMIC_FORM_CONTROL_TYPE_INPUT,
  DYNAMIC_FORM_CONTROL_TYPE_RADIO_GROUP,
  DYNAMIC_FORM_CONTROL_TYPE_SELECT,
  DYNAMIC_FORM_CONTROL_TYPE_TEXTAREA,
  DYNAMIC_FORM_CONTROL_TYPE_TIMEPICKER,
  DynamicDatePickerModel,
  DynamicFormControl,
  DynamicFormControlModel
} from '@ng-dynamic-forms/core';
import { Type } from '@angular/core';
import { DsDynamicFormArrayComponent } from './models/array-group/dynamic-form-array.component';
import {
  DynamicNGBootstrapCalendarComponent,
  DynamicNGBootstrapCheckboxComponent,
  DynamicNGBootstrapCheckboxGroupComponent,
  DynamicNGBootstrapInputComponent,
  DynamicNGBootstrapRadioGroupComponent,
  DynamicNGBootstrapSelectComponent,
  DynamicNGBootstrapTextAreaComponent,
  DynamicNGBootstrapTimePickerComponent
} from '@ng-dynamic-forms/ui-ng-bootstrap';
import { DynamicListCheckboxGroupModel } from './models/list/dynamic-list-checkbox-group.model';
import { DsDynamicListComponent } from './models/list/dynamic-list.component';
import { DsDatePickerInlineComponent } from './models/date-picker-inline/dynamic-date-picker-inline.component';
import { DsDynamicFormGroupComponent } from './models/form-group/dynamic-form-group.component';
import { DynamicListRadioGroupModel } from './models/list/dynamic-list-radio-group.model';
import { DYNAMIC_FORM_CONTROL_TYPE_ONEBOX } from './models/onebox/dynamic-onebox.model';
import { DsDynamicOneboxComponent } from './models/onebox/dynamic-onebox.component';
import {
  DYNAMIC_FORM_CONTROL_TYPE_SCROLLABLE_DROPDOWN
} from './models/scrollable-dropdown/dynamic-scrollable-dropdown.model';
import {
  DsDynamicScrollableDropdownComponent
} from './models/scrollable-dropdown/dynamic-scrollable-dropdown.component';
import { DYNAMIC_FORM_CONTROL_TYPE_TAG } from './models/tag/dynamic-tag.model';
import { DsDynamicTagComponent } from './models/tag/dynamic-tag.component';
import { DYNAMIC_FORM_CONTROL_TYPE_RELATION_GROUP } from './ds-dynamic-form-constants';
import { DsDynamicRelationGroupComponent } from './models/relation-group/dynamic-relation-group.components';
import { DYNAMIC_FORM_CONTROL_TYPE_DSDATEPICKER } from './models/date-picker/date-picker.model';
import { DsDatePickerComponent } from './models/date-picker/date-picker.component';
import { DYNAMIC_FORM_CONTROL_TYPE_LOOKUP } from './models/lookup/dynamic-lookup.model';
import { DsDynamicLookupComponent } from './models/lookup/dynamic-lookup.component';
import { DYNAMIC_FORM_CONTROL_TYPE_LOOKUP_NAME } from './models/lookup/dynamic-lookup-name.model';
import { DYNAMIC_FORM_CONTROL_TYPE_DISABLED } from './models/disabled/dynamic-disabled.model';
import { DsDynamicDisabledComponent } from './models/disabled/dynamic-disabled.component';
import { DYNAMIC_FORM_CONTROL_TYPE_CUSTOM_SWITCH } from './models/custom-switch/custom-switch.model';
import { CustomSwitchComponent } from './models/custom-switch/custom-switch.component';

export function dsDynamicFormControlMapFn(model: DynamicFormControlModel): Type<DynamicFormControl> | null {
  switch (model.type) {
    case DYNAMIC_FORM_CONTROL_TYPE_ARRAY:
      return DsDynamicFormArrayComponent;

    case DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX:
      return DynamicNGBootstrapCheckboxComponent;

    case DYNAMIC_FORM_CONTROL_TYPE_CHECKBOX_GROUP:
      return (model instanceof DynamicListCheckboxGroupModel) ? DsDynamicListComponent : DynamicNGBootstrapCheckboxGroupComponent;

    case DYNAMIC_FORM_CONTROL_TYPE_DATEPICKER:
      const datepickerModel = model as DynamicDatePickerModel;

      return datepickerModel.inline ? DynamicNGBootstrapCalendarComponent : DsDatePickerInlineComponent;

    case DYNAMIC_FORM_CONTROL_TYPE_GROUP:
      return DsDynamicFormGroupComponent;

    case DYNAMIC_FORM_CONTROL_TYPE_INPUT:
      return DynamicNGBootstrapInputComponent;

    case DYNAMIC_FORM_CONTROL_TYPE_RADIO_GROUP:
      return (model instanceof DynamicListRadioGroupModel) ? DsDynamicListComponent : DynamicNGBootstrapRadioGroupComponent;

    case DYNAMIC_FORM_CONTROL_TYPE_SELECT:
      return DynamicNGBootstrapSelectComponent;

    case DYNAMIC_FORM_CONTROL_TYPE_TEXTAREA:
      return DynamicNGBootstrapTextAreaComponent;

    case DYNAMIC_FORM_CONTROL_TYPE_TIMEPICKER:
      return DynamicNGBootstrapTimePickerComponent;

    case DYNAMIC_FORM_CONTROL_TYPE_ONEBOX:
      return DsDynamicOneboxComponent;

    case DYNAMIC_FORM_CONTROL_TYPE_SCROLLABLE_DROPDOWN:
      return DsDynamicScrollableDropdownComponent;

    case DYNAMIC_FORM_CONTROL_TYPE_TAG:
      return DsDynamicTagComponent;

    case DYNAMIC_FORM_CONTROL_TYPE_RELATION_GROUP:
      return DsDynamicRelationGroupComponent;

    case DYNAMIC_FORM_CONTROL_TYPE_DSDATEPICKER:
      return DsDatePickerComponent;

    case DYNAMIC_FORM_CONTROL_TYPE_LOOKUP:
      return DsDynamicLookupComponent;

    case DYNAMIC_FORM_CONTROL_TYPE_LOOKUP_NAME:
      return DsDynamicLookupComponent;

    case DYNAMIC_FORM_CONTROL_TYPE_DISABLED:
      return DsDynamicDisabledComponent;

    case DYNAMIC_FORM_CONTROL_TYPE_CUSTOM_SWITCH:
      return CustomSwitchComponent;

    default:
      return null;
  }
}
