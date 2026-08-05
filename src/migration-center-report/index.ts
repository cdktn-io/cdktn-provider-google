/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_report
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface MigrationCenterReportConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_report#deletion_policy MigrationCenterReport#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Free-text description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_report#description MigrationCenterReport#description}
  */
  readonly description?: string;
  /**
  * User-friendly display name. Maximum length is 63 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_report#display_name MigrationCenterReport#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_report#id MigrationCenterReport#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_report#location MigrationCenterReport#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_report#project MigrationCenterReport#project}
  */
  readonly project?: string;
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_report#report_config MigrationCenterReport#report_config}
  */
  readonly reportConfig: string;
  /**
  * User specified id for the report. It will become the last component
  * of the report name. The id must be unique within the project, must
  * conform with RFC-1034, is restricted to lower-cased letters, and has a
  * maximum length of 63 characters. The id must match the regular expression:
  * [a-z]([a-z0-9-]{0,61}[a-z0-9])?.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_report#report_id MigrationCenterReport#report_id}
  */
  readonly reportId: string;
  /**
  * Report type.
  * Possible values:
  * TOTAL_COST_OF_OWNERSHIP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_report#type MigrationCenterReport#type}
  */
  readonly type?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_report#timeouts MigrationCenterReport#timeouts}
  */
  readonly timeouts?: MigrationCenterReportTimeouts;
}
export interface MigrationCenterReportSummaryAllAssetsStatsCoreCountHistogramBuckets {
}

export function migrationCenterReportSummaryAllAssetsStatsCoreCountHistogramBucketsToTerraform(struct?: MigrationCenterReportSummaryAllAssetsStatsCoreCountHistogramBuckets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function migrationCenterReportSummaryAllAssetsStatsCoreCountHistogramBucketsToHclTerraform(struct?: MigrationCenterReportSummaryAllAssetsStatsCoreCountHistogramBuckets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class MigrationCenterReportSummaryAllAssetsStatsCoreCountHistogramBucketsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MigrationCenterReportSummaryAllAssetsStatsCoreCountHistogramBuckets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrationCenterReportSummaryAllAssetsStatsCoreCountHistogramBuckets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getStringAttribute('count');
  }

  // lower_bound - computed: true, optional: false, required: false
  public get lowerBound() {
    return this.getStringAttribute('lower_bound');
  }

  // upper_bound - computed: true, optional: false, required: false
  public get upperBound() {
    return this.getStringAttribute('upper_bound');
  }
}

export class MigrationCenterReportSummaryAllAssetsStatsCoreCountHistogramBucketsList extends cdktn.ComplexList {

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
  public get(index: number): MigrationCenterReportSummaryAllAssetsStatsCoreCountHistogramBucketsOutputReference {
    return new MigrationCenterReportSummaryAllAssetsStatsCoreCountHistogramBucketsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MigrationCenterReportSummaryAllAssetsStatsCoreCountHistogram {
}

export function migrationCenterReportSummaryAllAssetsStatsCoreCountHistogramToTerraform(struct?: MigrationCenterReportSummaryAllAssetsStatsCoreCountHistogram): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function migrationCenterReportSummaryAllAssetsStatsCoreCountHistogramToHclTerraform(struct?: MigrationCenterReportSummaryAllAssetsStatsCoreCountHistogram): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class MigrationCenterReportSummaryAllAssetsStatsCoreCountHistogramOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MigrationCenterReportSummaryAllAssetsStatsCoreCountHistogram | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrationCenterReportSummaryAllAssetsStatsCoreCountHistogram | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // buckets - computed: true, optional: false, required: false
  private _buckets = new MigrationCenterReportSummaryAllAssetsStatsCoreCountHistogramBucketsList(this, "buckets", false);
  public get buckets() {
    return this._buckets;
  }
}

export class MigrationCenterReportSummaryAllAssetsStatsCoreCountHistogramList extends cdktn.ComplexList {

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
  public get(index: number): MigrationCenterReportSummaryAllAssetsStatsCoreCountHistogramOutputReference {
    return new MigrationCenterReportSummaryAllAssetsStatsCoreCountHistogramOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MigrationCenterReportSummaryAllAssetsStatsMemoryBytesHistogramBuckets {
}

export function migrationCenterReportSummaryAllAssetsStatsMemoryBytesHistogramBucketsToTerraform(struct?: MigrationCenterReportSummaryAllAssetsStatsMemoryBytesHistogramBuckets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function migrationCenterReportSummaryAllAssetsStatsMemoryBytesHistogramBucketsToHclTerraform(struct?: MigrationCenterReportSummaryAllAssetsStatsMemoryBytesHistogramBuckets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class MigrationCenterReportSummaryAllAssetsStatsMemoryBytesHistogramBucketsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MigrationCenterReportSummaryAllAssetsStatsMemoryBytesHistogramBuckets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrationCenterReportSummaryAllAssetsStatsMemoryBytesHistogramBuckets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getStringAttribute('count');
  }

  // lower_bound - computed: true, optional: false, required: false
  public get lowerBound() {
    return this.getStringAttribute('lower_bound');
  }

  // upper_bound - computed: true, optional: false, required: false
  public get upperBound() {
    return this.getStringAttribute('upper_bound');
  }
}

export class MigrationCenterReportSummaryAllAssetsStatsMemoryBytesHistogramBucketsList extends cdktn.ComplexList {

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
  public get(index: number): MigrationCenterReportSummaryAllAssetsStatsMemoryBytesHistogramBucketsOutputReference {
    return new MigrationCenterReportSummaryAllAssetsStatsMemoryBytesHistogramBucketsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MigrationCenterReportSummaryAllAssetsStatsMemoryBytesHistogram {
}

export function migrationCenterReportSummaryAllAssetsStatsMemoryBytesHistogramToTerraform(struct?: MigrationCenterReportSummaryAllAssetsStatsMemoryBytesHistogram): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function migrationCenterReportSummaryAllAssetsStatsMemoryBytesHistogramToHclTerraform(struct?: MigrationCenterReportSummaryAllAssetsStatsMemoryBytesHistogram): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class MigrationCenterReportSummaryAllAssetsStatsMemoryBytesHistogramOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MigrationCenterReportSummaryAllAssetsStatsMemoryBytesHistogram | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrationCenterReportSummaryAllAssetsStatsMemoryBytesHistogram | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // buckets - computed: true, optional: false, required: false
  private _buckets = new MigrationCenterReportSummaryAllAssetsStatsMemoryBytesHistogramBucketsList(this, "buckets", false);
  public get buckets() {
    return this._buckets;
  }
}

export class MigrationCenterReportSummaryAllAssetsStatsMemoryBytesHistogramList extends cdktn.ComplexList {

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
  public get(index: number): MigrationCenterReportSummaryAllAssetsStatsMemoryBytesHistogramOutputReference {
    return new MigrationCenterReportSummaryAllAssetsStatsMemoryBytesHistogramOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MigrationCenterReportSummaryAllAssetsStatsMemoryUtilizationChart {
}

export function migrationCenterReportSummaryAllAssetsStatsMemoryUtilizationChartToTerraform(struct?: MigrationCenterReportSummaryAllAssetsStatsMemoryUtilizationChart): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function migrationCenterReportSummaryAllAssetsStatsMemoryUtilizationChartToHclTerraform(struct?: MigrationCenterReportSummaryAllAssetsStatsMemoryUtilizationChart): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class MigrationCenterReportSummaryAllAssetsStatsMemoryUtilizationChartOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MigrationCenterReportSummaryAllAssetsStatsMemoryUtilizationChart | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrationCenterReportSummaryAllAssetsStatsMemoryUtilizationChart | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // free - computed: true, optional: false, required: false
  public get free() {
    return this.getStringAttribute('free');
  }

  // used - computed: true, optional: false, required: false
  public get used() {
    return this.getStringAttribute('used');
  }
}

export class MigrationCenterReportSummaryAllAssetsStatsMemoryUtilizationChartList extends cdktn.ComplexList {

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
  public get(index: number): MigrationCenterReportSummaryAllAssetsStatsMemoryUtilizationChartOutputReference {
    return new MigrationCenterReportSummaryAllAssetsStatsMemoryUtilizationChartOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MigrationCenterReportSummaryAllAssetsStatsOperatingSystemDataPoints {
}

export function migrationCenterReportSummaryAllAssetsStatsOperatingSystemDataPointsToTerraform(struct?: MigrationCenterReportSummaryAllAssetsStatsOperatingSystemDataPoints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function migrationCenterReportSummaryAllAssetsStatsOperatingSystemDataPointsToHclTerraform(struct?: MigrationCenterReportSummaryAllAssetsStatsOperatingSystemDataPoints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class MigrationCenterReportSummaryAllAssetsStatsOperatingSystemDataPointsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MigrationCenterReportSummaryAllAssetsStatsOperatingSystemDataPoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrationCenterReportSummaryAllAssetsStatsOperatingSystemDataPoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class MigrationCenterReportSummaryAllAssetsStatsOperatingSystemDataPointsList extends cdktn.ComplexList {

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
  public get(index: number): MigrationCenterReportSummaryAllAssetsStatsOperatingSystemDataPointsOutputReference {
    return new MigrationCenterReportSummaryAllAssetsStatsOperatingSystemDataPointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MigrationCenterReportSummaryAllAssetsStatsOperatingSystem {
}

export function migrationCenterReportSummaryAllAssetsStatsOperatingSystemToTerraform(struct?: MigrationCenterReportSummaryAllAssetsStatsOperatingSystem): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function migrationCenterReportSummaryAllAssetsStatsOperatingSystemToHclTerraform(struct?: MigrationCenterReportSummaryAllAssetsStatsOperatingSystem): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class MigrationCenterReportSummaryAllAssetsStatsOperatingSystemOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MigrationCenterReportSummaryAllAssetsStatsOperatingSystem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrationCenterReportSummaryAllAssetsStatsOperatingSystem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_points - computed: true, optional: false, required: false
  private _dataPoints = new MigrationCenterReportSummaryAllAssetsStatsOperatingSystemDataPointsList(this, "data_points", false);
  public get dataPoints() {
    return this._dataPoints;
  }
}

export class MigrationCenterReportSummaryAllAssetsStatsOperatingSystemList extends cdktn.ComplexList {

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
  public get(index: number): MigrationCenterReportSummaryAllAssetsStatsOperatingSystemOutputReference {
    return new MigrationCenterReportSummaryAllAssetsStatsOperatingSystemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MigrationCenterReportSummaryAllAssetsStatsSoftwareInstancesDataPoints {
}

export function migrationCenterReportSummaryAllAssetsStatsSoftwareInstancesDataPointsToTerraform(struct?: MigrationCenterReportSummaryAllAssetsStatsSoftwareInstancesDataPoints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function migrationCenterReportSummaryAllAssetsStatsSoftwareInstancesDataPointsToHclTerraform(struct?: MigrationCenterReportSummaryAllAssetsStatsSoftwareInstancesDataPoints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class MigrationCenterReportSummaryAllAssetsStatsSoftwareInstancesDataPointsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MigrationCenterReportSummaryAllAssetsStatsSoftwareInstancesDataPoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrationCenterReportSummaryAllAssetsStatsSoftwareInstancesDataPoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class MigrationCenterReportSummaryAllAssetsStatsSoftwareInstancesDataPointsList extends cdktn.ComplexList {

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
  public get(index: number): MigrationCenterReportSummaryAllAssetsStatsSoftwareInstancesDataPointsOutputReference {
    return new MigrationCenterReportSummaryAllAssetsStatsSoftwareInstancesDataPointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MigrationCenterReportSummaryAllAssetsStatsSoftwareInstances {
}

export function migrationCenterReportSummaryAllAssetsStatsSoftwareInstancesToTerraform(struct?: MigrationCenterReportSummaryAllAssetsStatsSoftwareInstances): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function migrationCenterReportSummaryAllAssetsStatsSoftwareInstancesToHclTerraform(struct?: MigrationCenterReportSummaryAllAssetsStatsSoftwareInstances): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class MigrationCenterReportSummaryAllAssetsStatsSoftwareInstancesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MigrationCenterReportSummaryAllAssetsStatsSoftwareInstances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrationCenterReportSummaryAllAssetsStatsSoftwareInstances | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_points - computed: true, optional: false, required: false
  private _dataPoints = new MigrationCenterReportSummaryAllAssetsStatsSoftwareInstancesDataPointsList(this, "data_points", false);
  public get dataPoints() {
    return this._dataPoints;
  }
}

export class MigrationCenterReportSummaryAllAssetsStatsSoftwareInstancesList extends cdktn.ComplexList {

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
  public get(index: number): MigrationCenterReportSummaryAllAssetsStatsSoftwareInstancesOutputReference {
    return new MigrationCenterReportSummaryAllAssetsStatsSoftwareInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MigrationCenterReportSummaryAllAssetsStatsStorageBytesHistogramBuckets {
}

export function migrationCenterReportSummaryAllAssetsStatsStorageBytesHistogramBucketsToTerraform(struct?: MigrationCenterReportSummaryAllAssetsStatsStorageBytesHistogramBuckets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function migrationCenterReportSummaryAllAssetsStatsStorageBytesHistogramBucketsToHclTerraform(struct?: MigrationCenterReportSummaryAllAssetsStatsStorageBytesHistogramBuckets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class MigrationCenterReportSummaryAllAssetsStatsStorageBytesHistogramBucketsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MigrationCenterReportSummaryAllAssetsStatsStorageBytesHistogramBuckets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrationCenterReportSummaryAllAssetsStatsStorageBytesHistogramBuckets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getStringAttribute('count');
  }

  // lower_bound - computed: true, optional: false, required: false
  public get lowerBound() {
    return this.getStringAttribute('lower_bound');
  }

  // upper_bound - computed: true, optional: false, required: false
  public get upperBound() {
    return this.getStringAttribute('upper_bound');
  }
}

export class MigrationCenterReportSummaryAllAssetsStatsStorageBytesHistogramBucketsList extends cdktn.ComplexList {

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
  public get(index: number): MigrationCenterReportSummaryAllAssetsStatsStorageBytesHistogramBucketsOutputReference {
    return new MigrationCenterReportSummaryAllAssetsStatsStorageBytesHistogramBucketsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MigrationCenterReportSummaryAllAssetsStatsStorageBytesHistogram {
}

export function migrationCenterReportSummaryAllAssetsStatsStorageBytesHistogramToTerraform(struct?: MigrationCenterReportSummaryAllAssetsStatsStorageBytesHistogram): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function migrationCenterReportSummaryAllAssetsStatsStorageBytesHistogramToHclTerraform(struct?: MigrationCenterReportSummaryAllAssetsStatsStorageBytesHistogram): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class MigrationCenterReportSummaryAllAssetsStatsStorageBytesHistogramOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MigrationCenterReportSummaryAllAssetsStatsStorageBytesHistogram | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrationCenterReportSummaryAllAssetsStatsStorageBytesHistogram | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // buckets - computed: true, optional: false, required: false
  private _buckets = new MigrationCenterReportSummaryAllAssetsStatsStorageBytesHistogramBucketsList(this, "buckets", false);
  public get buckets() {
    return this._buckets;
  }
}

export class MigrationCenterReportSummaryAllAssetsStatsStorageBytesHistogramList extends cdktn.ComplexList {

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
  public get(index: number): MigrationCenterReportSummaryAllAssetsStatsStorageBytesHistogramOutputReference {
    return new MigrationCenterReportSummaryAllAssetsStatsStorageBytesHistogramOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MigrationCenterReportSummaryAllAssetsStatsStorageUtilizationChart {
}

export function migrationCenterReportSummaryAllAssetsStatsStorageUtilizationChartToTerraform(struct?: MigrationCenterReportSummaryAllAssetsStatsStorageUtilizationChart): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function migrationCenterReportSummaryAllAssetsStatsStorageUtilizationChartToHclTerraform(struct?: MigrationCenterReportSummaryAllAssetsStatsStorageUtilizationChart): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class MigrationCenterReportSummaryAllAssetsStatsStorageUtilizationChartOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MigrationCenterReportSummaryAllAssetsStatsStorageUtilizationChart | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrationCenterReportSummaryAllAssetsStatsStorageUtilizationChart | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // free - computed: true, optional: false, required: false
  public get free() {
    return this.getStringAttribute('free');
  }

  // used - computed: true, optional: false, required: false
  public get used() {
    return this.getStringAttribute('used');
  }
}

export class MigrationCenterReportSummaryAllAssetsStatsStorageUtilizationChartList extends cdktn.ComplexList {

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
  public get(index: number): MigrationCenterReportSummaryAllAssetsStatsStorageUtilizationChartOutputReference {
    return new MigrationCenterReportSummaryAllAssetsStatsStorageUtilizationChartOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MigrationCenterReportSummaryAllAssetsStats {
}

export function migrationCenterReportSummaryAllAssetsStatsToTerraform(struct?: MigrationCenterReportSummaryAllAssetsStats): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function migrationCenterReportSummaryAllAssetsStatsToHclTerraform(struct?: MigrationCenterReportSummaryAllAssetsStats): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class MigrationCenterReportSummaryAllAssetsStatsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MigrationCenterReportSummaryAllAssetsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrationCenterReportSummaryAllAssetsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // core_count_histogram - computed: true, optional: false, required: false
  private _coreCountHistogram = new MigrationCenterReportSummaryAllAssetsStatsCoreCountHistogramList(this, "core_count_histogram", false);
  public get coreCountHistogram() {
    return this._coreCountHistogram;
  }

  // memory_bytes_histogram - computed: true, optional: false, required: false
  private _memoryBytesHistogram = new MigrationCenterReportSummaryAllAssetsStatsMemoryBytesHistogramList(this, "memory_bytes_histogram", false);
  public get memoryBytesHistogram() {
    return this._memoryBytesHistogram;
  }

  // memory_utilization_chart - computed: true, optional: false, required: false
  private _memoryUtilizationChart = new MigrationCenterReportSummaryAllAssetsStatsMemoryUtilizationChartList(this, "memory_utilization_chart", false);
  public get memoryUtilizationChart() {
    return this._memoryUtilizationChart;
  }

  // operating_system - computed: true, optional: false, required: false
  private _operatingSystem = new MigrationCenterReportSummaryAllAssetsStatsOperatingSystemList(this, "operating_system", false);
  public get operatingSystem() {
    return this._operatingSystem;
  }

  // software_instances - computed: true, optional: false, required: false
  private _softwareInstances = new MigrationCenterReportSummaryAllAssetsStatsSoftwareInstancesList(this, "software_instances", false);
  public get softwareInstances() {
    return this._softwareInstances;
  }

  // storage_bytes_histogram - computed: true, optional: false, required: false
  private _storageBytesHistogram = new MigrationCenterReportSummaryAllAssetsStatsStorageBytesHistogramList(this, "storage_bytes_histogram", false);
  public get storageBytesHistogram() {
    return this._storageBytesHistogram;
  }

  // storage_utilization_chart - computed: true, optional: false, required: false
  private _storageUtilizationChart = new MigrationCenterReportSummaryAllAssetsStatsStorageUtilizationChartList(this, "storage_utilization_chart", false);
  public get storageUtilizationChart() {
    return this._storageUtilizationChart;
  }

  // total_assets - computed: true, optional: false, required: false
  public get totalAssets() {
    return this.getStringAttribute('total_assets');
  }

  // total_cores - computed: true, optional: false, required: false
  public get totalCores() {
    return this.getStringAttribute('total_cores');
  }

  // total_memory_bytes - computed: true, optional: false, required: false
  public get totalMemoryBytes() {
    return this.getStringAttribute('total_memory_bytes');
  }

  // total_storage_bytes - computed: true, optional: false, required: false
  public get totalStorageBytes() {
    return this.getStringAttribute('total_storage_bytes');
  }
}

export class MigrationCenterReportSummaryAllAssetsStatsList extends cdktn.ComplexList {

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
  public get(index: number): MigrationCenterReportSummaryAllAssetsStatsOutputReference {
    return new MigrationCenterReportSummaryAllAssetsStatsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsCoreCountHistogramBuckets {
}

export function migrationCenterReportSummaryGroupFindingsAssetAggregateStatsCoreCountHistogramBucketsToTerraform(struct?: MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsCoreCountHistogramBuckets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function migrationCenterReportSummaryGroupFindingsAssetAggregateStatsCoreCountHistogramBucketsToHclTerraform(struct?: MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsCoreCountHistogramBuckets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsCoreCountHistogramBucketsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsCoreCountHistogramBuckets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsCoreCountHistogramBuckets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getStringAttribute('count');
  }

  // lower_bound - computed: true, optional: false, required: false
  public get lowerBound() {
    return this.getStringAttribute('lower_bound');
  }

  // upper_bound - computed: true, optional: false, required: false
  public get upperBound() {
    return this.getStringAttribute('upper_bound');
  }
}

export class MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsCoreCountHistogramBucketsList extends cdktn.ComplexList {

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
  public get(index: number): MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsCoreCountHistogramBucketsOutputReference {
    return new MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsCoreCountHistogramBucketsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsCoreCountHistogram {
}

export function migrationCenterReportSummaryGroupFindingsAssetAggregateStatsCoreCountHistogramToTerraform(struct?: MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsCoreCountHistogram): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function migrationCenterReportSummaryGroupFindingsAssetAggregateStatsCoreCountHistogramToHclTerraform(struct?: MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsCoreCountHistogram): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsCoreCountHistogramOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsCoreCountHistogram | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsCoreCountHistogram | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // buckets - computed: true, optional: false, required: false
  private _buckets = new MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsCoreCountHistogramBucketsList(this, "buckets", false);
  public get buckets() {
    return this._buckets;
  }
}

export class MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsCoreCountHistogramList extends cdktn.ComplexList {

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
  public get(index: number): MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsCoreCountHistogramOutputReference {
    return new MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsCoreCountHistogramOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryBytesHistogramBuckets {
}

export function migrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryBytesHistogramBucketsToTerraform(struct?: MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryBytesHistogramBuckets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function migrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryBytesHistogramBucketsToHclTerraform(struct?: MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryBytesHistogramBuckets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryBytesHistogramBucketsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryBytesHistogramBuckets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryBytesHistogramBuckets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getStringAttribute('count');
  }

  // lower_bound - computed: true, optional: false, required: false
  public get lowerBound() {
    return this.getStringAttribute('lower_bound');
  }

  // upper_bound - computed: true, optional: false, required: false
  public get upperBound() {
    return this.getStringAttribute('upper_bound');
  }
}

export class MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryBytesHistogramBucketsList extends cdktn.ComplexList {

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
  public get(index: number): MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryBytesHistogramBucketsOutputReference {
    return new MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryBytesHistogramBucketsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryBytesHistogram {
}

export function migrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryBytesHistogramToTerraform(struct?: MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryBytesHistogram): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function migrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryBytesHistogramToHclTerraform(struct?: MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryBytesHistogram): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryBytesHistogramOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryBytesHistogram | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryBytesHistogram | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // buckets - computed: true, optional: false, required: false
  private _buckets = new MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryBytesHistogramBucketsList(this, "buckets", false);
  public get buckets() {
    return this._buckets;
  }
}

export class MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryBytesHistogramList extends cdktn.ComplexList {

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
  public get(index: number): MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryBytesHistogramOutputReference {
    return new MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryBytesHistogramOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryUtilizationChart {
}

export function migrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryUtilizationChartToTerraform(struct?: MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryUtilizationChart): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function migrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryUtilizationChartToHclTerraform(struct?: MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryUtilizationChart): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryUtilizationChartOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryUtilizationChart | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryUtilizationChart | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // free - computed: true, optional: false, required: false
  public get free() {
    return this.getStringAttribute('free');
  }

  // used - computed: true, optional: false, required: false
  public get used() {
    return this.getStringAttribute('used');
  }
}

export class MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryUtilizationChartList extends cdktn.ComplexList {

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
  public get(index: number): MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryUtilizationChartOutputReference {
    return new MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryUtilizationChartOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsOperatingSystemDataPoints {
}

export function migrationCenterReportSummaryGroupFindingsAssetAggregateStatsOperatingSystemDataPointsToTerraform(struct?: MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsOperatingSystemDataPoints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function migrationCenterReportSummaryGroupFindingsAssetAggregateStatsOperatingSystemDataPointsToHclTerraform(struct?: MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsOperatingSystemDataPoints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsOperatingSystemDataPointsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsOperatingSystemDataPoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsOperatingSystemDataPoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsOperatingSystemDataPointsList extends cdktn.ComplexList {

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
  public get(index: number): MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsOperatingSystemDataPointsOutputReference {
    return new MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsOperatingSystemDataPointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsOperatingSystem {
}

export function migrationCenterReportSummaryGroupFindingsAssetAggregateStatsOperatingSystemToTerraform(struct?: MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsOperatingSystem): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function migrationCenterReportSummaryGroupFindingsAssetAggregateStatsOperatingSystemToHclTerraform(struct?: MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsOperatingSystem): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsOperatingSystemOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsOperatingSystem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsOperatingSystem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_points - computed: true, optional: false, required: false
  private _dataPoints = new MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsOperatingSystemDataPointsList(this, "data_points", false);
  public get dataPoints() {
    return this._dataPoints;
  }
}

export class MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsOperatingSystemList extends cdktn.ComplexList {

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
  public get(index: number): MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsOperatingSystemOutputReference {
    return new MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsOperatingSystemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsSoftwareInstancesDataPoints {
}

export function migrationCenterReportSummaryGroupFindingsAssetAggregateStatsSoftwareInstancesDataPointsToTerraform(struct?: MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsSoftwareInstancesDataPoints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function migrationCenterReportSummaryGroupFindingsAssetAggregateStatsSoftwareInstancesDataPointsToHclTerraform(struct?: MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsSoftwareInstancesDataPoints): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsSoftwareInstancesDataPointsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsSoftwareInstancesDataPoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsSoftwareInstancesDataPoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getNumberAttribute('value');
  }
}

export class MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsSoftwareInstancesDataPointsList extends cdktn.ComplexList {

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
  public get(index: number): MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsSoftwareInstancesDataPointsOutputReference {
    return new MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsSoftwareInstancesDataPointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsSoftwareInstances {
}

export function migrationCenterReportSummaryGroupFindingsAssetAggregateStatsSoftwareInstancesToTerraform(struct?: MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsSoftwareInstances): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function migrationCenterReportSummaryGroupFindingsAssetAggregateStatsSoftwareInstancesToHclTerraform(struct?: MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsSoftwareInstances): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsSoftwareInstancesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsSoftwareInstances | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsSoftwareInstances | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_points - computed: true, optional: false, required: false
  private _dataPoints = new MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsSoftwareInstancesDataPointsList(this, "data_points", false);
  public get dataPoints() {
    return this._dataPoints;
  }
}

export class MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsSoftwareInstancesList extends cdktn.ComplexList {

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
  public get(index: number): MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsSoftwareInstancesOutputReference {
    return new MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsSoftwareInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageBytesHistogramBuckets {
}

export function migrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageBytesHistogramBucketsToTerraform(struct?: MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageBytesHistogramBuckets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function migrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageBytesHistogramBucketsToHclTerraform(struct?: MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageBytesHistogramBuckets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageBytesHistogramBucketsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageBytesHistogramBuckets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageBytesHistogramBuckets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getStringAttribute('count');
  }

  // lower_bound - computed: true, optional: false, required: false
  public get lowerBound() {
    return this.getStringAttribute('lower_bound');
  }

  // upper_bound - computed: true, optional: false, required: false
  public get upperBound() {
    return this.getStringAttribute('upper_bound');
  }
}

export class MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageBytesHistogramBucketsList extends cdktn.ComplexList {

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
  public get(index: number): MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageBytesHistogramBucketsOutputReference {
    return new MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageBytesHistogramBucketsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageBytesHistogram {
}

export function migrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageBytesHistogramToTerraform(struct?: MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageBytesHistogram): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function migrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageBytesHistogramToHclTerraform(struct?: MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageBytesHistogram): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageBytesHistogramOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageBytesHistogram | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageBytesHistogram | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // buckets - computed: true, optional: false, required: false
  private _buckets = new MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageBytesHistogramBucketsList(this, "buckets", false);
  public get buckets() {
    return this._buckets;
  }
}

export class MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageBytesHistogramList extends cdktn.ComplexList {

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
  public get(index: number): MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageBytesHistogramOutputReference {
    return new MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageBytesHistogramOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageUtilizationChart {
}

export function migrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageUtilizationChartToTerraform(struct?: MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageUtilizationChart): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function migrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageUtilizationChartToHclTerraform(struct?: MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageUtilizationChart): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageUtilizationChartOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageUtilizationChart | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageUtilizationChart | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // free - computed: true, optional: false, required: false
  public get free() {
    return this.getStringAttribute('free');
  }

  // used - computed: true, optional: false, required: false
  public get used() {
    return this.getStringAttribute('used');
  }
}

export class MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageUtilizationChartList extends cdktn.ComplexList {

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
  public get(index: number): MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageUtilizationChartOutputReference {
    return new MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageUtilizationChartOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MigrationCenterReportSummaryGroupFindingsAssetAggregateStats {
}

export function migrationCenterReportSummaryGroupFindingsAssetAggregateStatsToTerraform(struct?: MigrationCenterReportSummaryGroupFindingsAssetAggregateStats): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function migrationCenterReportSummaryGroupFindingsAssetAggregateStatsToHclTerraform(struct?: MigrationCenterReportSummaryGroupFindingsAssetAggregateStats): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MigrationCenterReportSummaryGroupFindingsAssetAggregateStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrationCenterReportSummaryGroupFindingsAssetAggregateStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // core_count_histogram - computed: true, optional: false, required: false
  private _coreCountHistogram = new MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsCoreCountHistogramList(this, "core_count_histogram", false);
  public get coreCountHistogram() {
    return this._coreCountHistogram;
  }

  // memory_bytes_histogram - computed: true, optional: false, required: false
  private _memoryBytesHistogram = new MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryBytesHistogramList(this, "memory_bytes_histogram", false);
  public get memoryBytesHistogram() {
    return this._memoryBytesHistogram;
  }

  // memory_utilization_chart - computed: true, optional: false, required: false
  private _memoryUtilizationChart = new MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsMemoryUtilizationChartList(this, "memory_utilization_chart", false);
  public get memoryUtilizationChart() {
    return this._memoryUtilizationChart;
  }

  // operating_system - computed: true, optional: false, required: false
  private _operatingSystem = new MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsOperatingSystemList(this, "operating_system", false);
  public get operatingSystem() {
    return this._operatingSystem;
  }

  // software_instances - computed: true, optional: false, required: false
  private _softwareInstances = new MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsSoftwareInstancesList(this, "software_instances", false);
  public get softwareInstances() {
    return this._softwareInstances;
  }

  // storage_bytes_histogram - computed: true, optional: false, required: false
  private _storageBytesHistogram = new MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageBytesHistogramList(this, "storage_bytes_histogram", false);
  public get storageBytesHistogram() {
    return this._storageBytesHistogram;
  }

  // storage_utilization_chart - computed: true, optional: false, required: false
  private _storageUtilizationChart = new MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsStorageUtilizationChartList(this, "storage_utilization_chart", false);
  public get storageUtilizationChart() {
    return this._storageUtilizationChart;
  }

  // total_assets - computed: true, optional: false, required: false
  public get totalAssets() {
    return this.getStringAttribute('total_assets');
  }

  // total_cores - computed: true, optional: false, required: false
  public get totalCores() {
    return this.getStringAttribute('total_cores');
  }

  // total_memory_bytes - computed: true, optional: false, required: false
  public get totalMemoryBytes() {
    return this.getStringAttribute('total_memory_bytes');
  }

  // total_storage_bytes - computed: true, optional: false, required: false
  public get totalStorageBytes() {
    return this.getStringAttribute('total_storage_bytes');
  }
}

export class MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsList extends cdktn.ComplexList {

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
  public get(index: number): MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsOutputReference {
    return new MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFindingMachineSeriesAllocationsMachineSeries {
}

export function migrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFindingMachineSeriesAllocationsMachineSeriesToTerraform(struct?: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFindingMachineSeriesAllocationsMachineSeries): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function migrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFindingMachineSeriesAllocationsMachineSeriesToHclTerraform(struct?: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFindingMachineSeriesAllocationsMachineSeries): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFindingMachineSeriesAllocationsMachineSeriesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFindingMachineSeriesAllocationsMachineSeries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFindingMachineSeriesAllocationsMachineSeries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getStringAttribute('code');
  }
}

export class MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFindingMachineSeriesAllocationsMachineSeriesList extends cdktn.ComplexList {

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
  public get(index: number): MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFindingMachineSeriesAllocationsMachineSeriesOutputReference {
    return new MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFindingMachineSeriesAllocationsMachineSeriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFindingMachineSeriesAllocations {
}

export function migrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFindingMachineSeriesAllocationsToTerraform(struct?: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFindingMachineSeriesAllocations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function migrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFindingMachineSeriesAllocationsToHclTerraform(struct?: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFindingMachineSeriesAllocations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFindingMachineSeriesAllocationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFindingMachineSeriesAllocations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFindingMachineSeriesAllocations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allocated_asset_count - computed: true, optional: false, required: false
  public get allocatedAssetCount() {
    return this.getStringAttribute('allocated_asset_count');
  }

  // machine_series - computed: true, optional: false, required: false
  private _machineSeries = new MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFindingMachineSeriesAllocationsMachineSeriesList(this, "machine_series", false);
  public get machineSeries() {
    return this._machineSeries;
  }
}

export class MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFindingMachineSeriesAllocationsList extends cdktn.ComplexList {

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
  public get(index: number): MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFindingMachineSeriesAllocationsOutputReference {
    return new MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFindingMachineSeriesAllocationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFinding {
}

export function migrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFindingToTerraform(struct?: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFinding): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function migrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFindingToHclTerraform(struct?: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFinding): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFindingOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFinding | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFinding | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allocated_asset_count - computed: true, optional: false, required: false
  public get allocatedAssetCount() {
    return this.getStringAttribute('allocated_asset_count');
  }

  // allocated_disk_types - computed: true, optional: false, required: false
  public get allocatedDiskTypes() {
    return this.getListAttribute('allocated_disk_types');
  }

  // allocated_regions - computed: true, optional: false, required: false
  public get allocatedRegions() {
    return this.getListAttribute('allocated_regions');
  }

  // machine_series_allocations - computed: true, optional: false, required: false
  private _machineSeriesAllocations = new MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFindingMachineSeriesAllocationsList(this, "machine_series_allocations", false);
  public get machineSeriesAllocations() {
    return this._machineSeriesAllocations;
  }
}

export class MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFindingList extends cdktn.ComplexList {

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
  public get(index: number): MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFindingOutputReference {
    return new MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFindingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries {
}

export function migrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesToTerraform(struct?: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function migrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesToHclTerraform(struct?: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getStringAttribute('code');
  }
}

export class MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList extends cdktn.ComplexList {

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
  public get(index: number): MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference {
    return new MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferencesMachinePreferences {
}

export function migrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferencesMachinePreferencesToTerraform(struct?: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferencesMachinePreferences): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function migrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferencesMachinePreferencesToHclTerraform(struct?: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferencesMachinePreferences): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferencesMachinePreferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferencesMachinePreferences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_machine_series - computed: true, optional: false, required: false
  private _allowedMachineSeries = new MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferencesMachinePreferencesAllowedMachineSeriesList(this, "allowed_machine_series", false);
  public get allowedMachineSeries() {
    return this._allowedMachineSeries;
  }
}

export class MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferencesMachinePreferencesList extends cdktn.ComplexList {

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
  public get(index: number): MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference {
    return new MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferencesMachinePreferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferences {
}

export function migrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferencesToTerraform(struct?: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferences): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function migrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferencesToHclTerraform(struct?: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferences): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferencesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // license_type - computed: true, optional: false, required: false
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }

  // machine_preferences - computed: true, optional: false, required: false
  private _machinePreferences = new MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferencesMachinePreferencesList(this, "machine_preferences", false);
  public get machinePreferences() {
    return this._machinePreferences;
  }

  // persistent_disk_type - computed: true, optional: false, required: false
  public get persistentDiskType() {
    return this.getStringAttribute('persistent_disk_type');
  }
}

export class MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferencesList extends cdktn.ComplexList {

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
  public get(index: number): MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferencesOutputReference {
    return new MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesRegionPreferences {
}

export function migrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesRegionPreferencesToTerraform(struct?: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesRegionPreferences): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function migrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesRegionPreferencesToHclTerraform(struct?: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesRegionPreferences): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesRegionPreferencesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesRegionPreferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesRegionPreferences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // preferred_regions - computed: true, optional: false, required: false
  public get preferredRegions() {
    return this.getListAttribute('preferred_regions');
  }
}

export class MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesRegionPreferencesList extends cdktn.ComplexList {

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
  public get(index: number): MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesRegionPreferencesOutputReference {
    return new MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesRegionPreferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesSoleTenancyPreferencesNodeTypes {
}

export function migrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesSoleTenancyPreferencesNodeTypesToTerraform(struct?: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesSoleTenancyPreferencesNodeTypes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function migrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesSoleTenancyPreferencesNodeTypesToHclTerraform(struct?: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesSoleTenancyPreferencesNodeTypes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesSoleTenancyPreferencesNodeTypes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesSoleTenancyPreferencesNodeTypes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // node_name - computed: true, optional: false, required: false
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }
}

export class MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesSoleTenancyPreferencesNodeTypesList extends cdktn.ComplexList {

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
  public get(index: number): MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference {
    return new MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesSoleTenancyPreferencesNodeTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesSoleTenancyPreferences {
}

export function migrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesSoleTenancyPreferencesToTerraform(struct?: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesSoleTenancyPreferences): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function migrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesSoleTenancyPreferencesToHclTerraform(struct?: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesSoleTenancyPreferences): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesSoleTenancyPreferencesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesSoleTenancyPreferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesSoleTenancyPreferences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // commitment_plan - computed: true, optional: false, required: false
  public get commitmentPlan() {
    return this.getStringAttribute('commitment_plan');
  }

  // cpu_overcommit_ratio - computed: true, optional: false, required: false
  public get cpuOvercommitRatio() {
    return this.getNumberAttribute('cpu_overcommit_ratio');
  }

  // host_maintenance_policy - computed: true, optional: false, required: false
  public get hostMaintenancePolicy() {
    return this.getStringAttribute('host_maintenance_policy');
  }

  // node_types - computed: true, optional: false, required: false
  private _nodeTypes = new MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesSoleTenancyPreferencesNodeTypesList(this, "node_types", false);
  public get nodeTypes() {
    return this._nodeTypes;
  }
}

export class MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesSoleTenancyPreferencesList extends cdktn.ComplexList {

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
  public get(index: number): MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesSoleTenancyPreferencesOutputReference {
    return new MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesSoleTenancyPreferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesVmwareEnginePreferences {
}

export function migrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesVmwareEnginePreferencesToTerraform(struct?: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesVmwareEnginePreferences): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function migrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesVmwareEnginePreferencesToHclTerraform(struct?: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesVmwareEnginePreferences): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesVmwareEnginePreferencesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesVmwareEnginePreferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesVmwareEnginePreferences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // commitment_plan - computed: true, optional: false, required: false
  public get commitmentPlan() {
    return this.getStringAttribute('commitment_plan');
  }

  // cpu_overcommit_ratio - computed: true, optional: false, required: false
  public get cpuOvercommitRatio() {
    return this.getNumberAttribute('cpu_overcommit_ratio');
  }

  // memory_overcommit_ratio - computed: true, optional: false, required: false
  public get memoryOvercommitRatio() {
    return this.getNumberAttribute('memory_overcommit_ratio');
  }

  // storage_deduplication_compression_ratio - computed: true, optional: false, required: false
  public get storageDeduplicationCompressionRatio() {
    return this.getNumberAttribute('storage_deduplication_compression_ratio');
  }
}

export class MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesVmwareEnginePreferencesList extends cdktn.ComplexList {

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
  public get(index: number): MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesVmwareEnginePreferencesOutputReference {
    return new MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesVmwareEnginePreferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferences {
}

export function migrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesToTerraform(struct?: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferences): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function migrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesToHclTerraform(struct?: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferences): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // commitment_plan - computed: true, optional: false, required: false
  public get commitmentPlan() {
    return this.getStringAttribute('commitment_plan');
  }

  // compute_engine_preferences - computed: true, optional: false, required: false
  private _computeEnginePreferences = new MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesComputeEnginePreferencesList(this, "compute_engine_preferences", false);
  public get computeEnginePreferences() {
    return this._computeEnginePreferences;
  }

  // region_preferences - computed: true, optional: false, required: false
  private _regionPreferences = new MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesRegionPreferencesList(this, "region_preferences", false);
  public get regionPreferences() {
    return this._regionPreferences;
  }

  // sizing_optimization_strategy - computed: true, optional: false, required: false
  public get sizingOptimizationStrategy() {
    return this.getStringAttribute('sizing_optimization_strategy');
  }

  // sole_tenancy_preferences - computed: true, optional: false, required: false
  private _soleTenancyPreferences = new MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesSoleTenancyPreferencesList(this, "sole_tenancy_preferences", false);
  public get soleTenancyPreferences() {
    return this._soleTenancyPreferences;
  }

  // target_product - computed: true, optional: false, required: false
  public get targetProduct() {
    return this.getStringAttribute('target_product');
  }

  // vmware_engine_preferences - computed: true, optional: false, required: false
  private _vmwareEnginePreferences = new MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesVmwareEnginePreferencesList(this, "vmware_engine_preferences", false);
  public get vmwareEnginePreferences() {
    return this._vmwareEnginePreferences;
  }
}

export class MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesList extends cdktn.ComplexList {

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
  public get(index: number): MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesOutputReference {
    return new MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostCompute {
}

export function migrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostComputeToTerraform(struct?: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostCompute): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function migrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostComputeToHclTerraform(struct?: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostCompute): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostComputeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostCompute | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostCompute | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // currency_code - computed: true, optional: false, required: false
  public get currencyCode() {
    return this.getStringAttribute('currency_code');
  }

  // nanos - computed: true, optional: false, required: false
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }

  // units - computed: true, optional: false, required: false
  public get units() {
    return this.getStringAttribute('units');
  }
}

export class MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostComputeList extends cdktn.ComplexList {

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
  public get(index: number): MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostComputeOutputReference {
    return new MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostComputeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostNetworkEgress {
}

export function migrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostNetworkEgressToTerraform(struct?: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostNetworkEgress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function migrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostNetworkEgressToHclTerraform(struct?: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostNetworkEgress): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostNetworkEgressOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostNetworkEgress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostNetworkEgress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // currency_code - computed: true, optional: false, required: false
  public get currencyCode() {
    return this.getStringAttribute('currency_code');
  }

  // nanos - computed: true, optional: false, required: false
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }

  // units - computed: true, optional: false, required: false
  public get units() {
    return this.getStringAttribute('units');
  }
}

export class MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostNetworkEgressList extends cdktn.ComplexList {

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
  public get(index: number): MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostNetworkEgressOutputReference {
    return new MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostNetworkEgressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostOsLicense {
}

export function migrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostOsLicenseToTerraform(struct?: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostOsLicense): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function migrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostOsLicenseToHclTerraform(struct?: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostOsLicense): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostOsLicenseOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostOsLicense | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostOsLicense | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // currency_code - computed: true, optional: false, required: false
  public get currencyCode() {
    return this.getStringAttribute('currency_code');
  }

  // nanos - computed: true, optional: false, required: false
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }

  // units - computed: true, optional: false, required: false
  public get units() {
    return this.getStringAttribute('units');
  }
}

export class MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostOsLicenseList extends cdktn.ComplexList {

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
  public get(index: number): MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostOsLicenseOutputReference {
    return new MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostOsLicenseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostOther {
}

export function migrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostOtherToTerraform(struct?: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostOther): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function migrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostOtherToHclTerraform(struct?: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostOther): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostOtherOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostOther | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostOther | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // currency_code - computed: true, optional: false, required: false
  public get currencyCode() {
    return this.getStringAttribute('currency_code');
  }

  // nanos - computed: true, optional: false, required: false
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }

  // units - computed: true, optional: false, required: false
  public get units() {
    return this.getStringAttribute('units');
  }
}

export class MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostOtherList extends cdktn.ComplexList {

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
  public get(index: number): MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostOtherOutputReference {
    return new MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostOtherOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostStorage {
}

export function migrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostStorageToTerraform(struct?: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostStorage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function migrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostStorageToHclTerraform(struct?: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostStorage): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostStorageOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // currency_code - computed: true, optional: false, required: false
  public get currencyCode() {
    return this.getStringAttribute('currency_code');
  }

  // nanos - computed: true, optional: false, required: false
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }

  // units - computed: true, optional: false, required: false
  public get units() {
    return this.getStringAttribute('units');
  }
}

export class MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostStorageList extends cdktn.ComplexList {

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
  public get(index: number): MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostStorageOutputReference {
    return new MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostTotal {
}

export function migrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostTotalToTerraform(struct?: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostTotal): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function migrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostTotalToHclTerraform(struct?: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostTotal): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostTotalOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostTotal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostTotal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // currency_code - computed: true, optional: false, required: false
  public get currencyCode() {
    return this.getStringAttribute('currency_code');
  }

  // nanos - computed: true, optional: false, required: false
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }

  // units - computed: true, optional: false, required: false
  public get units() {
    return this.getStringAttribute('units');
  }
}

export class MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostTotalList extends cdktn.ComplexList {

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
  public get(index: number): MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostTotalOutputReference {
    return new MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostTotalOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFindingNodeAllocationsNode {
}

export function migrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFindingNodeAllocationsNodeToTerraform(struct?: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFindingNodeAllocationsNode): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function migrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFindingNodeAllocationsNodeToHclTerraform(struct?: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFindingNodeAllocationsNode): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFindingNodeAllocationsNodeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFindingNodeAllocationsNode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFindingNodeAllocationsNode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // node_name - computed: true, optional: false, required: false
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }
}

export class MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFindingNodeAllocationsNodeList extends cdktn.ComplexList {

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
  public get(index: number): MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFindingNodeAllocationsNodeOutputReference {
    return new MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFindingNodeAllocationsNodeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFindingNodeAllocations {
}

export function migrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFindingNodeAllocationsToTerraform(struct?: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFindingNodeAllocations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function migrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFindingNodeAllocationsToHclTerraform(struct?: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFindingNodeAllocations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFindingNodeAllocationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFindingNodeAllocations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFindingNodeAllocations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allocated_asset_count - computed: true, optional: false, required: false
  public get allocatedAssetCount() {
    return this.getStringAttribute('allocated_asset_count');
  }

  // node - computed: true, optional: false, required: false
  private _node = new MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFindingNodeAllocationsNodeList(this, "node", false);
  public get nodeAttribute() {
    return this._node;
  }

  // node_count - computed: true, optional: false, required: false
  public get nodeCount() {
    return this.getStringAttribute('node_count');
  }
}

export class MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFindingNodeAllocationsList extends cdktn.ComplexList {

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
  public get(index: number): MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFindingNodeAllocationsOutputReference {
    return new MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFindingNodeAllocationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFinding {
}

export function migrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFindingToTerraform(struct?: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFinding): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function migrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFindingToHclTerraform(struct?: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFinding): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFindingOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFinding | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFinding | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allocated_asset_count - computed: true, optional: false, required: false
  public get allocatedAssetCount() {
    return this.getStringAttribute('allocated_asset_count');
  }

  // allocated_regions - computed: true, optional: false, required: false
  public get allocatedRegions() {
    return this.getListAttribute('allocated_regions');
  }

  // node_allocations - computed: true, optional: false, required: false
  private _nodeAllocations = new MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFindingNodeAllocationsList(this, "node_allocations", false);
  public get nodeAllocations() {
    return this._nodeAllocations;
  }
}

export class MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFindingList extends cdktn.ComplexList {

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
  public get(index: number): MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFindingOutputReference {
    return new MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFindingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFindingNodeAllocationsVmwareNode {
}

export function migrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFindingNodeAllocationsVmwareNodeToTerraform(struct?: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFindingNodeAllocationsVmwareNode): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function migrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFindingNodeAllocationsVmwareNodeToHclTerraform(struct?: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFindingNodeAllocationsVmwareNode): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFindingNodeAllocationsVmwareNodeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFindingNodeAllocationsVmwareNode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFindingNodeAllocationsVmwareNode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getStringAttribute('code');
  }
}

export class MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFindingNodeAllocationsVmwareNodeList extends cdktn.ComplexList {

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
  public get(index: number): MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFindingNodeAllocationsVmwareNodeOutputReference {
    return new MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFindingNodeAllocationsVmwareNodeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFindingNodeAllocations {
}

export function migrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFindingNodeAllocationsToTerraform(struct?: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFindingNodeAllocations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function migrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFindingNodeAllocationsToHclTerraform(struct?: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFindingNodeAllocations): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFindingNodeAllocationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFindingNodeAllocations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFindingNodeAllocations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allocated_asset_count - computed: true, optional: false, required: false
  public get allocatedAssetCount() {
    return this.getStringAttribute('allocated_asset_count');
  }

  // node_count - computed: true, optional: false, required: false
  public get nodeCount() {
    return this.getStringAttribute('node_count');
  }

  // vmware_node - computed: true, optional: false, required: false
  private _vmwareNode = new MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFindingNodeAllocationsVmwareNodeList(this, "vmware_node", false);
  public get vmwareNode() {
    return this._vmwareNode;
  }
}

export class MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFindingNodeAllocationsList extends cdktn.ComplexList {

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
  public get(index: number): MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFindingNodeAllocationsOutputReference {
    return new MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFindingNodeAllocationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFinding {
}

export function migrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFindingToTerraform(struct?: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFinding): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function migrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFindingToHclTerraform(struct?: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFinding): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFindingOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFinding | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFinding | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allocated_asset_count - computed: true, optional: false, required: false
  public get allocatedAssetCount() {
    return this.getStringAttribute('allocated_asset_count');
  }

  // allocated_regions - computed: true, optional: false, required: false
  public get allocatedRegions() {
    return this.getListAttribute('allocated_regions');
  }

  // node_allocations - computed: true, optional: false, required: false
  private _nodeAllocations = new MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFindingNodeAllocationsList(this, "node_allocations", false);
  public get nodeAllocations() {
    return this._nodeAllocations;
  }
}

export class MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFindingList extends cdktn.ComplexList {

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
  public get(index: number): MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFindingOutputReference {
    return new MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFindingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MigrationCenterReportSummaryGroupFindingsPreferenceSetFindings {
}

export function migrationCenterReportSummaryGroupFindingsPreferenceSetFindingsToTerraform(struct?: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function migrationCenterReportSummaryGroupFindingsPreferenceSetFindingsToHclTerraform(struct?: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MigrationCenterReportSummaryGroupFindingsPreferenceSetFindings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrationCenterReportSummaryGroupFindingsPreferenceSetFindings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compute_engine_finding - computed: true, optional: false, required: false
  private _computeEngineFinding = new MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsComputeEngineFindingList(this, "compute_engine_finding", false);
  public get computeEngineFinding() {
    return this._computeEngineFinding;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // machine_preferences - computed: true, optional: false, required: false
  private _machinePreferences = new MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMachinePreferencesList(this, "machine_preferences", false);
  public get machinePreferences() {
    return this._machinePreferences;
  }

  // monthly_cost_compute - computed: true, optional: false, required: false
  private _monthlyCostCompute = new MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostComputeList(this, "monthly_cost_compute", false);
  public get monthlyCostCompute() {
    return this._monthlyCostCompute;
  }

  // monthly_cost_network_egress - computed: true, optional: false, required: false
  private _monthlyCostNetworkEgress = new MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostNetworkEgressList(this, "monthly_cost_network_egress", false);
  public get monthlyCostNetworkEgress() {
    return this._monthlyCostNetworkEgress;
  }

  // monthly_cost_os_license - computed: true, optional: false, required: false
  private _monthlyCostOsLicense = new MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostOsLicenseList(this, "monthly_cost_os_license", false);
  public get monthlyCostOsLicense() {
    return this._monthlyCostOsLicense;
  }

  // monthly_cost_other - computed: true, optional: false, required: false
  private _monthlyCostOther = new MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostOtherList(this, "monthly_cost_other", false);
  public get monthlyCostOther() {
    return this._monthlyCostOther;
  }

  // monthly_cost_storage - computed: true, optional: false, required: false
  private _monthlyCostStorage = new MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostStorageList(this, "monthly_cost_storage", false);
  public get monthlyCostStorage() {
    return this._monthlyCostStorage;
  }

  // monthly_cost_total - computed: true, optional: false, required: false
  private _monthlyCostTotal = new MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsMonthlyCostTotalList(this, "monthly_cost_total", false);
  public get monthlyCostTotal() {
    return this._monthlyCostTotal;
  }

  // sole_tenant_finding - computed: true, optional: false, required: false
  private _soleTenantFinding = new MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsSoleTenantFindingList(this, "sole_tenant_finding", false);
  public get soleTenantFinding() {
    return this._soleTenantFinding;
  }

  // vmware_engine_finding - computed: true, optional: false, required: false
  private _vmwareEngineFinding = new MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsVmwareEngineFindingList(this, "vmware_engine_finding", false);
  public get vmwareEngineFinding() {
    return this._vmwareEngineFinding;
  }
}

export class MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsList extends cdktn.ComplexList {

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
  public get(index: number): MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsOutputReference {
    return new MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MigrationCenterReportSummaryGroupFindings {
}

export function migrationCenterReportSummaryGroupFindingsToTerraform(struct?: MigrationCenterReportSummaryGroupFindings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function migrationCenterReportSummaryGroupFindingsToHclTerraform(struct?: MigrationCenterReportSummaryGroupFindings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class MigrationCenterReportSummaryGroupFindingsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MigrationCenterReportSummaryGroupFindings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrationCenterReportSummaryGroupFindings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // asset_aggregate_stats - computed: true, optional: false, required: false
  private _assetAggregateStats = new MigrationCenterReportSummaryGroupFindingsAssetAggregateStatsList(this, "asset_aggregate_stats", false);
  public get assetAggregateStats() {
    return this._assetAggregateStats;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // overlapping_asset_count - computed: true, optional: false, required: false
  public get overlappingAssetCount() {
    return this.getStringAttribute('overlapping_asset_count');
  }

  // preference_set_findings - computed: true, optional: false, required: false
  private _preferenceSetFindings = new MigrationCenterReportSummaryGroupFindingsPreferenceSetFindingsList(this, "preference_set_findings", false);
  public get preferenceSetFindings() {
    return this._preferenceSetFindings;
  }
}

export class MigrationCenterReportSummaryGroupFindingsList extends cdktn.ComplexList {

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
  public get(index: number): MigrationCenterReportSummaryGroupFindingsOutputReference {
    return new MigrationCenterReportSummaryGroupFindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MigrationCenterReportSummary {
}

export function migrationCenterReportSummaryToTerraform(struct?: MigrationCenterReportSummary): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function migrationCenterReportSummaryToHclTerraform(struct?: MigrationCenterReportSummary): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class MigrationCenterReportSummaryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): MigrationCenterReportSummary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrationCenterReportSummary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // all_assets_stats - computed: true, optional: false, required: false
  private _allAssetsStats = new MigrationCenterReportSummaryAllAssetsStatsList(this, "all_assets_stats", false);
  public get allAssetsStats() {
    return this._allAssetsStats;
  }

  // group_findings - computed: true, optional: false, required: false
  private _groupFindings = new MigrationCenterReportSummaryGroupFindingsList(this, "group_findings", false);
  public get groupFindings() {
    return this._groupFindings;
  }
}

export class MigrationCenterReportSummaryList extends cdktn.ComplexList {

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
  public get(index: number): MigrationCenterReportSummaryOutputReference {
    return new MigrationCenterReportSummaryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MigrationCenterReportTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_report#create MigrationCenterReport#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_report#delete MigrationCenterReport#delete}
  */
  readonly delete?: string;
}

export function migrationCenterReportTimeoutsToTerraform(struct?: MigrationCenterReportTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
  }
}


export function migrationCenterReportTimeoutsToHclTerraform(struct?: MigrationCenterReportTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    create: {
      value: cdktn.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktn.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MigrationCenterReportTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MigrationCenterReportTimeouts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MigrationCenterReportTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_report google_migration_center_report}
*/
export class MigrationCenterReport extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_migration_center_report";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a MigrationCenterReport resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MigrationCenterReport to import
  * @param importFromId The id of the existing MigrationCenterReport that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_report#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MigrationCenterReport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_migration_center_report", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_report google_migration_center_report} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MigrationCenterReportConfig
  */
  public constructor(scope: Construct, id: string, config: MigrationCenterReportConfig) {
    super(scope, id, {
      terraformResourceType: 'google_migration_center_report',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.43.0',
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
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._location = config.location;
    this._project = config.project;
    this._reportConfig = config.reportConfig;
    this._reportId = config.reportId;
    this._type = config.type;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // deletion_policy - computed: true, optional: true, required: false
  private _deletionPolicy?: string; 
  public get deletionPolicy() {
    return this.getStringAttribute('deletion_policy');
  }
  public set deletionPolicy(value: string) {
    this._deletionPolicy = value;
  }
  public resetDeletionPolicy() {
    this._deletionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionPolicyInput() {
    return this._deletionPolicy;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

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

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // report_config - computed: false, optional: false, required: true
  private _reportConfig?: string; 
  public get reportConfig() {
    return this.getStringAttribute('report_config');
  }
  public set reportConfig(value: string) {
    this._reportConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reportConfigInput() {
    return this._reportConfig;
  }

  // report_id - computed: false, optional: false, required: true
  private _reportId?: string; 
  public get reportId() {
    return this.getStringAttribute('report_id');
  }
  public set reportId(value: string) {
    this._reportId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reportIdInput() {
    return this._reportId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // summary - computed: true, optional: false, required: false
  private _summary = new MigrationCenterReportSummaryList(this, "summary", false);
  public get summary() {
    return this._summary;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MigrationCenterReportTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MigrationCenterReportTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      description: cdktn.stringToTerraform(this._description),
      display_name: cdktn.stringToTerraform(this._displayName),
      id: cdktn.stringToTerraform(this._id),
      location: cdktn.stringToTerraform(this._location),
      project: cdktn.stringToTerraform(this._project),
      report_config: cdktn.stringToTerraform(this._reportConfig),
      report_id: cdktn.stringToTerraform(this._reportId),
      type: cdktn.stringToTerraform(this._type),
      timeouts: migrationCenterReportTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deletion_policy: {
        value: cdktn.stringToHclTerraform(this._deletionPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktn.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktn.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktn.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      report_config: {
        value: cdktn.stringToHclTerraform(this._reportConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      report_id: {
        value: cdktn.stringToHclTerraform(this._reportId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: migrationCenterReportTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MigrationCenterReportTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
