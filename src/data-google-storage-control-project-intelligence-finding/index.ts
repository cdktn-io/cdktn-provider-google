/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/storage_control_project_intelligence_finding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataGoogleStorageControlProjectIntelligenceFindingConfig extends cdktn.TerraformMetaArguments {
  /**
  * The ID of the intelligence finding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/storage_control_project_intelligence_finding#finding_id DataGoogleStorageControlProjectIntelligenceFinding#finding_id}
  */
  readonly findingId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/storage_control_project_intelligence_finding#id DataGoogleStorageControlProjectIntelligenceFinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location of the intelligence finding. Currently default value is global and users cannot use for input for now.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/storage_control_project_intelligence_finding#location DataGoogleStorageControlProjectIntelligenceFinding#location}
  */
  readonly location?: string;
  /**
  * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/storage_control_project_intelligence_finding#project DataGoogleStorageControlProjectIntelligenceFinding#project}
  */
  readonly project?: string;
}
export interface DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes {
}

export function dataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // percentage_increase - computed: true, optional: false, required: false
  public get percentageIncrease() {
    return this.getNumberAttribute('percentage_increase');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // throttled_requests - computed: true, optional: false, required: false
  public get throttledRequests() {
    return this.getStringAttribute('throttled_requests');
  }

  // total_egress_bytes - computed: true, optional: false, required: false
  public get totalEgressBytes() {
    return this.getStringAttribute('total_egress_bytes');
  }

  // total_operations_count - computed: true, optional: false, required: false
  public get totalOperationsCount() {
    return this.getStringAttribute('total_operations_count');
  }
}

export class DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution {
}

export function dataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // top_prefixes - computed: true, optional: false, required: false
  private _topPrefixes = new DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList(this, "top_prefixes", false);
  public get topPrefixes() {
    return this._topPrefixes;
  }
}

export class DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsError {
}

export function dataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsError): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsError): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsError | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getNumberAttribute('code');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBuckets {
}

export function dataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBuckets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBuckets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBuckets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBuckets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // contribution - computed: true, optional: false, required: false
  private _contribution = new DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList(this, "contribution", false);
  public get contribution() {
    return this._contribution;
  }

  // error - computed: true, optional: false, required: false
  private _error = new DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList(this, "error", false);
  public get error() {
    return this._error;
  }

  // percentage_increase - computed: true, optional: false, required: false
  public get percentageIncrease() {
    return this.getNumberAttribute('percentage_increase');
  }

  // throttled_requests - computed: true, optional: false, required: false
  public get throttledRequests() {
    return this.getStringAttribute('throttled_requests');
  }

  // total_egress_bytes - computed: true, optional: false, required: false
  public get totalEgressBytes() {
    return this.getStringAttribute('total_egress_bytes');
  }

  // total_operations_count - computed: true, optional: false, required: false
  public get totalOperationsCount() {
    return this.getStringAttribute('total_operations_count');
  }

  // total_storage_growth_bytes - computed: true, optional: false, required: false
  public get totalStorageGrowthBytes() {
    return this.getStringAttribute('total_storage_growth_bytes');
  }
}

export class DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpike {
}

export function dataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpike): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpike): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpike | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpike | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // percentage_increase - computed: true, optional: false, required: false
  public get percentageIncrease() {
    return this.getNumberAttribute('percentage_increase');
  }

  // top_buckets - computed: true, optional: false, required: false
  private _topBuckets = new DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeTopBucketsList(this, "top_buckets", false);
  public get topBuckets() {
    return this._topBuckets;
  }

  // total_operations_count - computed: true, optional: false, required: false
  public get totalOperationsCount() {
    return this.getStringAttribute('total_operations_count');
  }
}

export class DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixes {
}

export function dataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // percentage_increase - computed: true, optional: false, required: false
  public get percentageIncrease() {
    return this.getNumberAttribute('percentage_increase');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // throttled_requests - computed: true, optional: false, required: false
  public get throttledRequests() {
    return this.getStringAttribute('throttled_requests');
  }

  // total_egress_bytes - computed: true, optional: false, required: false
  public get totalEgressBytes() {
    return this.getStringAttribute('total_egress_bytes');
  }

  // total_operations_count - computed: true, optional: false, required: false
  public get totalOperationsCount() {
    return this.getStringAttribute('total_operations_count');
  }
}

export class DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContribution {
}

export function dataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContribution): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContribution): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContribution | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContribution | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // top_prefixes - computed: true, optional: false, required: false
  private _topPrefixes = new DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList(this, "top_prefixes", false);
  public get topPrefixes() {
    return this._topPrefixes;
  }
}

export class DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsError {
}

export function dataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsError): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsError): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsError | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getNumberAttribute('code');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBuckets {
}

export function dataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBuckets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBuckets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBuckets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBuckets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // contribution - computed: true, optional: false, required: false
  private _contribution = new DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsContributionList(this, "contribution", false);
  public get contribution() {
    return this._contribution;
  }

  // error - computed: true, optional: false, required: false
  private _error = new DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsErrorList(this, "error", false);
  public get error() {
    return this._error;
  }

  // percentage_increase - computed: true, optional: false, required: false
  public get percentageIncrease() {
    return this.getNumberAttribute('percentage_increase');
  }

  // throttled_requests - computed: true, optional: false, required: false
  public get throttledRequests() {
    return this.getStringAttribute('throttled_requests');
  }

  // total_egress_bytes - computed: true, optional: false, required: false
  public get totalEgressBytes() {
    return this.getStringAttribute('total_egress_bytes');
  }

  // total_operations_count - computed: true, optional: false, required: false
  public get totalOperationsCount() {
    return this.getStringAttribute('total_operations_count');
  }

  // total_storage_growth_bytes - computed: true, optional: false, required: false
  public get totalStorageGrowthBytes() {
    return this.getStringAttribute('total_storage_growth_bytes');
  }
}

export class DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpike {
}

export function dataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpike): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpike): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpike | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpike | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // percentage_increase - computed: true, optional: false, required: false
  public get percentageIncrease() {
    return this.getNumberAttribute('percentage_increase');
  }

  // top_buckets - computed: true, optional: false, required: false
  private _topBuckets = new DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeTopBucketsList(this, "top_buckets", false);
  public get topBuckets() {
    return this._topBuckets;
  }

  // total_egress_bytes - computed: true, optional: false, required: false
  public get totalEgressBytes() {
    return this.getStringAttribute('total_egress_bytes');
  }
}

export class DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectIntelligenceFindingObservationPeriod {
}

export function dataGoogleStorageControlProjectIntelligenceFindingObservationPeriodToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingObservationPeriod): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceFindingObservationPeriodToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingObservationPeriod): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceFindingObservationPeriod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceFindingObservationPeriod | undefined) {
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

export class DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixes {
}

export function dataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // percentage_increase - computed: true, optional: false, required: false
  public get percentageIncrease() {
    return this.getNumberAttribute('percentage_increase');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // throttled_requests - computed: true, optional: false, required: false
  public get throttledRequests() {
    return this.getStringAttribute('throttled_requests');
  }

  // total_egress_bytes - computed: true, optional: false, required: false
  public get totalEgressBytes() {
    return this.getStringAttribute('total_egress_bytes');
  }

  // total_operations_count - computed: true, optional: false, required: false
  public get totalOperationsCount() {
    return this.getStringAttribute('total_operations_count');
  }
}

export class DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContribution {
}

export function dataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContribution): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContribution): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContribution | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContribution | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // top_prefixes - computed: true, optional: false, required: false
  private _topPrefixes = new DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList(this, "top_prefixes", false);
  public get topPrefixes() {
    return this._topPrefixes;
  }
}

export class DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsError {
}

export function dataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsError): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsError): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsError | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getNumberAttribute('code');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBuckets {
}

export function dataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBuckets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBuckets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBuckets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBuckets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // contribution - computed: true, optional: false, required: false
  private _contribution = new DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsContributionList(this, "contribution", false);
  public get contribution() {
    return this._contribution;
  }

  // error - computed: true, optional: false, required: false
  private _error = new DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsErrorList(this, "error", false);
  public get error() {
    return this._error;
  }

  // percentage_increase - computed: true, optional: false, required: false
  public get percentageIncrease() {
    return this.getNumberAttribute('percentage_increase');
  }

  // throttled_requests - computed: true, optional: false, required: false
  public get throttledRequests() {
    return this.getStringAttribute('throttled_requests');
  }

  // total_egress_bytes - computed: true, optional: false, required: false
  public get totalEgressBytes() {
    return this.getStringAttribute('total_egress_bytes');
  }

  // total_operations_count - computed: true, optional: false, required: false
  public get totalOperationsCount() {
    return this.getStringAttribute('total_operations_count');
  }

  // total_storage_growth_bytes - computed: true, optional: false, required: false
  public get totalStorageGrowthBytes() {
    return this.getStringAttribute('total_storage_growth_bytes');
  }
}

export class DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrend {
}

export function dataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrend): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrend): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrend | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrend | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // percentage_increase - computed: true, optional: false, required: false
  public get percentageIncrease() {
    return this.getNumberAttribute('percentage_increase');
  }

  // top_buckets - computed: true, optional: false, required: false
  private _topBuckets = new DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendTopBucketsList(this, "top_buckets", false);
  public get topBuckets() {
    return this._topBuckets;
  }

  // total_storage_growth_bytes - computed: true, optional: false, required: false
  public get totalStorageGrowthBytes() {
    return this.getStringAttribute('total_storage_growth_bytes');
  }
}

export class DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixes {
}

export function dataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // percentage_increase - computed: true, optional: false, required: false
  public get percentageIncrease() {
    return this.getNumberAttribute('percentage_increase');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // throttled_requests - computed: true, optional: false, required: false
  public get throttledRequests() {
    return this.getStringAttribute('throttled_requests');
  }

  // total_egress_bytes - computed: true, optional: false, required: false
  public get totalEgressBytes() {
    return this.getStringAttribute('total_egress_bytes');
  }

  // total_operations_count - computed: true, optional: false, required: false
  public get totalOperationsCount() {
    return this.getStringAttribute('total_operations_count');
  }
}

export class DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContribution {
}

export function dataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContribution): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContribution): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContribution | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContribution | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // top_prefixes - computed: true, optional: false, required: false
  private _topPrefixes = new DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionTopPrefixesList(this, "top_prefixes", false);
  public get topPrefixes() {
    return this._topPrefixes;
  }
}

export class DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsError {
}

export function dataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsError): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsError): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsError | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getNumberAttribute('code');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBuckets {
}

export function dataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBuckets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBuckets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBuckets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBuckets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // contribution - computed: true, optional: false, required: false
  private _contribution = new DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsContributionList(this, "contribution", false);
  public get contribution() {
    return this._contribution;
  }

  // error - computed: true, optional: false, required: false
  private _error = new DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsErrorList(this, "error", false);
  public get error() {
    return this._error;
  }

  // percentage_increase - computed: true, optional: false, required: false
  public get percentageIncrease() {
    return this.getNumberAttribute('percentage_increase');
  }

  // throttled_requests - computed: true, optional: false, required: false
  public get throttledRequests() {
    return this.getStringAttribute('throttled_requests');
  }

  // total_egress_bytes - computed: true, optional: false, required: false
  public get totalEgressBytes() {
    return this.getStringAttribute('total_egress_bytes');
  }

  // total_operations_count - computed: true, optional: false, required: false
  public get totalOperationsCount() {
    return this.getStringAttribute('total_operations_count');
  }

  // total_storage_growth_bytes - computed: true, optional: false, required: false
  public get totalStorageGrowthBytes() {
    return this.getStringAttribute('total_storage_growth_bytes');
  }
}

export class DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpike {
}

export function dataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpike): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpike): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpike | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpike | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // percentage_increase - computed: true, optional: false, required: false
  public get percentageIncrease() {
    return this.getNumberAttribute('percentage_increase');
  }

  // throttled_requests - computed: true, optional: false, required: false
  public get throttledRequests() {
    return this.getStringAttribute('throttled_requests');
  }

  // top_buckets - computed: true, optional: false, required: false
  private _topBuckets = new DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeTopBucketsList(this, "top_buckets", false);
  public get topBuckets() {
    return this._topBuckets;
  }
}

export class DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/storage_control_project_intelligence_finding google_storage_control_project_intelligence_finding}
*/
export class DataGoogleStorageControlProjectIntelligenceFinding extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_storage_control_project_intelligence_finding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataGoogleStorageControlProjectIntelligenceFinding resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGoogleStorageControlProjectIntelligenceFinding to import
  * @param importFromId The id of the existing DataGoogleStorageControlProjectIntelligenceFinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/storage_control_project_intelligence_finding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGoogleStorageControlProjectIntelligenceFinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_storage_control_project_intelligence_finding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/storage_control_project_intelligence_finding google_storage_control_project_intelligence_finding} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleStorageControlProjectIntelligenceFindingConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleStorageControlProjectIntelligenceFindingConfig) {
    super(scope, id, {
      terraformResourceType: 'google_storage_control_project_intelligence_finding',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.46.1',
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
    this._findingId = config.findingId;
    this._id = config.id;
    this._location = config.location;
    this._project = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // associated_resources - computed: true, optional: false, required: false
  public get associatedResources() {
    return this.getListAttribute('associated_resources');
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // coldline_and_archival_storage_operations_spike - computed: true, optional: false, required: false
  private _coldlineAndArchivalStorageOperationsSpike = new DataGoogleStorageControlProjectIntelligenceFindingColdlineAndArchivalStorageOperationsSpikeList(this, "coldline_and_archival_storage_operations_spike", false);
  public get coldlineAndArchivalStorageOperationsSpike() {
    return this._coldlineAndArchivalStorageOperationsSpike;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // cross_region_egress_spike - computed: true, optional: false, required: false
  private _crossRegionEgressSpike = new DataGoogleStorageControlProjectIntelligenceFindingCrossRegionEgressSpikeList(this, "cross_region_egress_spike", false);
  public get crossRegionEgressSpike() {
    return this._crossRegionEgressSpike;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // finding_id - computed: false, optional: false, required: true
  private _findingId?: string; 
  public get findingId() {
    return this.getStringAttribute('finding_id');
  }
  public set findingId(value: string) {
    this._findingId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get findingIdInput() {
    return this._findingId;
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

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // observation_period - computed: true, optional: false, required: false
  private _observationPeriod = new DataGoogleStorageControlProjectIntelligenceFindingObservationPeriodList(this, "observation_period", false);
  public get observationPeriod() {
    return this._observationPeriod;
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

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
  }

  // storage_growth_above_trend - computed: true, optional: false, required: false
  private _storageGrowthAboveTrend = new DataGoogleStorageControlProjectIntelligenceFindingStorageGrowthAboveTrendList(this, "storage_growth_above_trend", false);
  public get storageGrowthAboveTrend() {
    return this._storageGrowthAboveTrend;
  }

  // target_resource - computed: true, optional: false, required: false
  public get targetResource() {
    return this.getStringAttribute('target_resource');
  }

  // throttled_requests_spike - computed: true, optional: false, required: false
  private _throttledRequestsSpike = new DataGoogleStorageControlProjectIntelligenceFindingThrottledRequestsSpikeList(this, "throttled_requests_spike", false);
  public get throttledRequestsSpike() {
    return this._throttledRequestsSpike;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      finding_id: cdktn.stringToTerraform(this._findingId),
      id: cdktn.stringToTerraform(this._id),
      location: cdktn.stringToTerraform(this._location),
      project: cdktn.stringToTerraform(this._project),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      finding_id: {
        value: cdktn.stringToHclTerraform(this._findingId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
