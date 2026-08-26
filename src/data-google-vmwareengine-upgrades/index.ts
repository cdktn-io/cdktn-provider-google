/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/data-sources/vmwareengine_upgrades
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataGoogleVmwareengineUpgradesConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/data-sources/vmwareengine_upgrades#id DataGoogleVmwareengineUpgrades#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The resource name of the specific Upgrade to retrieve. If provided, the 'upgrades' list will contain only this upgrade.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/data-sources/vmwareengine_upgrades#name DataGoogleVmwareengineUpgrades#name}
  */
  readonly name?: string;
  /**
  * The resource name of the private cloud for which upgrades will be listed.
  * Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names.
  * For example: projects/my-project/locations/us-west1-a/privateClouds/my-cloud
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/data-sources/vmwareengine_upgrades#parent DataGoogleVmwareengineUpgrades#parent}
  */
  readonly parent: string;
}
export interface DataGoogleVmwareengineUpgradesUpgradesComponentUpgrades {
}

export function dataGoogleVmwareengineUpgradesUpgradesComponentUpgradesToTerraform(struct?: DataGoogleVmwareengineUpgradesUpgradesComponentUpgrades): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleVmwareengineUpgradesUpgradesComponentUpgradesToHclTerraform(struct?: DataGoogleVmwareengineUpgradesUpgradesComponentUpgrades): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleVmwareengineUpgradesUpgradesComponentUpgrades | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleVmwareengineUpgradesUpgradesComponentUpgrades | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // component_type - computed: true, optional: false, required: false
  public get componentType() {
    return this.getStringAttribute('component_type');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference {
    return new DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTime {
}

export function dataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeToTerraform(struct?: DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeToHclTerraform(struct?: DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hours - computed: true, optional: false, required: false
  public get hours() {
    return this.getNumberAttribute('hours');
  }

  // minutes - computed: true, optional: false, required: false
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
}

export class DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference {
    return new DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTime {
}

export function dataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeToTerraform(struct?: DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeToHclTerraform(struct?: DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hours - computed: true, optional: false, required: false
  public get hours() {
    return this.getNumberAttribute('hours');
  }

  // minutes - computed: true, optional: false, required: false
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
}

export class DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference {
    return new DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervals {
}

export function dataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsToTerraform(struct?: DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervals): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsToHclTerraform(struct?: DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervals): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervals | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervals | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_day - computed: true, optional: false, required: false
  public get endDay() {
    return this.getStringAttribute('end_day');
  }

  // end_time - computed: true, optional: false, required: false
  private _endTime = new DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList(this, "end_time", false);
  public get endTime() {
    return this._endTime;
  }

  // start_day - computed: true, optional: false, required: false
  public get startDay() {
    return this.getStringAttribute('start_day');
  }

  // start_time - computed: true, optional: false, required: false
  private _startTime = new DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList(this, "start_time", false);
  public get startTime() {
    return this._startTime;
  }
}

export class DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference {
    return new DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRange {
}

export function dataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeToTerraform(struct?: DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeToHclTerraform(struct?: DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRange): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
}

export class DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference {
    return new DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleVmwareengineUpgradesUpgradesScheduleConstraints {
}

export function dataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsToTerraform(struct?: DataGoogleVmwareengineUpgradesUpgradesScheduleConstraints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsToHclTerraform(struct?: DataGoogleVmwareengineUpgradesUpgradesScheduleConstraints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleVmwareengineUpgradesUpgradesScheduleConstraints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleVmwareengineUpgradesUpgradesScheduleConstraints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disallowed_intervals - computed: true, optional: false, required: false
  private _disallowedIntervals = new DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList(this, "disallowed_intervals", false);
  public get disallowedIntervals() {
    return this._disallowedIntervals;
  }

  // min_hours_day - computed: true, optional: false, required: false
  public get minHoursDay() {
    return this.getNumberAttribute('min_hours_day');
  }

  // min_hours_week - computed: true, optional: false, required: false
  public get minHoursWeek() {
    return this.getNumberAttribute('min_hours_week');
  }

  // reschedule_date_range - computed: true, optional: false, required: false
  private _rescheduleDateRange = new DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList(this, "reschedule_date_range", false);
  public get rescheduleDateRange() {
    return this._rescheduleDateRange;
  }
}

export class DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference {
    return new DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindow {
}

export function dataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowToTerraform(struct?: DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowToHclTerraform(struct?: DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindow): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
}

export class DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference {
    return new DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTime {
}

export function dataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeToTerraform(struct?: DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeToHclTerraform(struct?: DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTime): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hours - computed: true, optional: false, required: false
  public get hours() {
    return this.getNumberAttribute('hours');
  }

  // minutes - computed: true, optional: false, required: false
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
}

export class DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference {
    return new DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindows {
}

export function dataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsToTerraform(struct?: DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindows): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsToHclTerraform(struct?: DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindows): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindows | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindows | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // day_of_week - computed: true, optional: false, required: false
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getStringAttribute('duration');
  }

  // start_time - computed: true, optional: false, required: false
  private _startTime = new DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList(this, "start_time", false);
  public get startTime() {
    return this._startTime;
  }
}

export class DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference {
    return new DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleVmwareengineUpgradesUpgradesSchedule {
}

export function dataGoogleVmwareengineUpgradesUpgradesScheduleToTerraform(struct?: DataGoogleVmwareengineUpgradesUpgradesSchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleVmwareengineUpgradesUpgradesScheduleToHclTerraform(struct?: DataGoogleVmwareengineUpgradesUpgradesSchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleVmwareengineUpgradesUpgradesSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleVmwareengineUpgradesUpgradesSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // constraints - computed: true, optional: false, required: false
  private _constraints = new DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList(this, "constraints", false);
  public get constraints() {
    return this._constraints;
  }

  // edit_window - computed: true, optional: false, required: false
  private _editWindow = new DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList(this, "edit_window", false);
  public get editWindow() {
    return this._editWindow;
  }

  // last_editor - computed: true, optional: false, required: false
  public get lastEditor() {
    return this.getStringAttribute('last_editor');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // weekly_windows - computed: true, optional: false, required: false
  private _weeklyWindows = new DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList(this, "weekly_windows", false);
  public get weeklyWindows() {
    return this._weeklyWindows;
  }
}

export class DataGoogleVmwareengineUpgradesUpgradesScheduleList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference {
    return new DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleVmwareengineUpgradesUpgrades {
}

export function dataGoogleVmwareengineUpgradesUpgradesToTerraform(struct?: DataGoogleVmwareengineUpgradesUpgrades): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleVmwareengineUpgradesUpgradesToHclTerraform(struct?: DataGoogleVmwareengineUpgradesUpgrades): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleVmwareengineUpgradesUpgradesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleVmwareengineUpgradesUpgrades | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleVmwareengineUpgradesUpgrades | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // component_upgrades - computed: true, optional: false, required: false
  private _componentUpgrades = new DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList(this, "component_upgrades", false);
  public get componentUpgrades() {
    return this._componentUpgrades;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // estimated_duration - computed: true, optional: false, required: false
  public get estimatedDuration() {
    return this.getStringAttribute('estimated_duration');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // schedule - computed: true, optional: false, required: false
  private _schedule = new DataGoogleVmwareengineUpgradesUpgradesScheduleList(this, "schedule", false);
  public get schedule() {
    return this._schedule;
  }

  // start_version - computed: true, optional: false, required: false
  public get startVersion() {
    return this.getStringAttribute('start_version');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // target_version - computed: true, optional: false, required: false
  public get targetVersion() {
    return this.getStringAttribute('target_version');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataGoogleVmwareengineUpgradesUpgradesList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleVmwareengineUpgradesUpgradesOutputReference {
    return new DataGoogleVmwareengineUpgradesUpgradesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/data-sources/vmwareengine_upgrades google_vmwareengine_upgrades}
*/
export class DataGoogleVmwareengineUpgrades extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_vmwareengine_upgrades";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataGoogleVmwareengineUpgrades resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGoogleVmwareengineUpgrades to import
  * @param importFromId The id of the existing DataGoogleVmwareengineUpgrades that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/data-sources/vmwareengine_upgrades#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGoogleVmwareengineUpgrades to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_vmwareengine_upgrades", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/data-sources/vmwareengine_upgrades google_vmwareengine_upgrades} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleVmwareengineUpgradesConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleVmwareengineUpgradesConfig) {
    super(scope, id, {
      terraformResourceType: 'google_vmwareengine_upgrades',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.46.0',
        providerVersionConstraint: '~> 7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._parent = config.parent;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // parent - computed: false, optional: false, required: true
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // upgrades - computed: true, optional: false, required: false
  private _upgrades = new DataGoogleVmwareengineUpgradesUpgradesList(this, "upgrades", false);
  public get upgrades() {
    return this._upgrades;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      parent: cdktn.stringToTerraform(this._parent),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent: {
        value: cdktn.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
