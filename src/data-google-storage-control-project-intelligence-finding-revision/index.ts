/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/storage_control_project_intelligence_finding_revision
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig extends cdktn.TerraformMetaArguments {
  /**
  * The ID of the intelligence finding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/storage_control_project_intelligence_finding_revision#finding_id DataGoogleStorageControlProjectIntelligenceFindingRevision#finding_id}
  */
  readonly findingId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/storage_control_project_intelligence_finding_revision#id DataGoogleStorageControlProjectIntelligenceFindingRevision#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location of the intelligence finding. Currently default value is global and users cannot use for input for now.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/storage_control_project_intelligence_finding_revision#location DataGoogleStorageControlProjectIntelligenceFindingRevision#location}
  */
  readonly location?: string;
  /**
  * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/storage_control_project_intelligence_finding_revision#project DataGoogleStorageControlProjectIntelligenceFindingRevision#project}
  */
  readonly project?: string;
  /**
  * The ID of the finding revision.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/storage_control_project_intelligence_finding_revision#revision_id DataGoogleStorageControlProjectIntelligenceFindingRevision#revision_id}
  */
  readonly revisionId: string;
}
export interface DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes {
}

export function dataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes | undefined) {
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

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution {
}

export function dataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // top_prefixes - computed: true, optional: false, required: false
  private _topPrefixes = new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList(this, "top_prefixes", false);
  public get topPrefixes() {
    return this._topPrefixes;
  }
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsError {
}

export function dataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsError): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsError): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsError | undefined) {
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

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBuckets {
}

export function dataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBuckets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBuckets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBuckets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBuckets | undefined) {
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
  private _contribution = new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList(this, "contribution", false);
  public get contribution() {
    return this._contribution;
  }

  // error - computed: true, optional: false, required: false
  private _error = new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList(this, "error", false);
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

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpike {
}

export function dataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpike): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpike): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpike | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpike | undefined) {
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
  private _topBuckets = new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeTopBucketsList(this, "top_buckets", false);
  public get topBuckets() {
    return this._topBuckets;
  }

  // total_operations_count - computed: true, optional: false, required: false
  public get totalOperationsCount() {
    return this.getStringAttribute('total_operations_count');
  }
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixes {
}

export function dataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixes | undefined) {
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

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContribution {
}

export function dataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContribution): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContribution): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContribution | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContribution | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // top_prefixes - computed: true, optional: false, required: false
  private _topPrefixes = new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList(this, "top_prefixes", false);
  public get topPrefixes() {
    return this._topPrefixes;
  }
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsError {
}

export function dataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsError): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsError): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsError | undefined) {
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

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBuckets {
}

export function dataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBuckets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBuckets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBuckets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBuckets | undefined) {
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
  private _contribution = new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsContributionList(this, "contribution", false);
  public get contribution() {
    return this._contribution;
  }

  // error - computed: true, optional: false, required: false
  private _error = new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsErrorList(this, "error", false);
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

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpike {
}

export function dataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpike): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpike): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpike | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpike | undefined) {
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
  private _topBuckets = new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeTopBucketsList(this, "top_buckets", false);
  public get topBuckets() {
    return this._topBuckets;
  }

  // total_egress_bytes - computed: true, optional: false, required: false
  public get totalEgressBytes() {
    return this.getStringAttribute('total_egress_bytes');
  }
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriod {
}

export function dataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriod): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriod): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriod | undefined) {
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

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixes {
}

export function dataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixes | undefined) {
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

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContribution {
}

export function dataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContribution): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContribution): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContribution | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContribution | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // top_prefixes - computed: true, optional: false, required: false
  private _topPrefixes = new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList(this, "top_prefixes", false);
  public get topPrefixes() {
    return this._topPrefixes;
  }
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsError {
}

export function dataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsError): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsError): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsError | undefined) {
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

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBuckets {
}

export function dataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBuckets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBuckets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBuckets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBuckets | undefined) {
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
  private _contribution = new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsContributionList(this, "contribution", false);
  public get contribution() {
    return this._contribution;
  }

  // error - computed: true, optional: false, required: false
  private _error = new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsErrorList(this, "error", false);
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

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrend {
}

export function dataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrend): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrend): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrend | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrend | undefined) {
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
  private _topBuckets = new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendTopBucketsList(this, "top_buckets", false);
  public get topBuckets() {
    return this._topBuckets;
  }

  // total_storage_growth_bytes - computed: true, optional: false, required: false
  public get totalStorageGrowthBytes() {
    return this.getStringAttribute('total_storage_growth_bytes');
  }
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixes {
}

export function dataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixes): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixes | undefined) {
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

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContribution {
}

export function dataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContribution): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContribution): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContribution | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContribution | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // top_prefixes - computed: true, optional: false, required: false
  private _topPrefixes = new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionTopPrefixesList(this, "top_prefixes", false);
  public get topPrefixes() {
    return this._topPrefixes;
  }
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsError {
}

export function dataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsError): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsError): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsError | undefined) {
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

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBuckets {
}

export function dataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBuckets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBuckets): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBuckets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBuckets | undefined) {
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
  private _contribution = new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsContributionList(this, "contribution", false);
  public get contribution() {
    return this._contribution;
  }

  // error - computed: true, optional: false, required: false
  private _error = new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsErrorList(this, "error", false);
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

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpike {
}

export function dataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpike): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpike): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpike | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpike | undefined) {
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
  private _topBuckets = new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeTopBucketsList(this, "top_buckets", false);
  public get topBuckets() {
    return this._topBuckets;
  }
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshot {
}

export function dataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotToTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshot): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotToHclTerraform(struct?: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshot): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshot | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshot | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // associated_resources - computed: true, optional: false, required: false
  public get associatedResources() {
    return this.getListAttribute('associated_resources');
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // coldline_and_archival_storage_operations_spike - computed: true, optional: false, required: false
  private _coldlineAndArchivalStorageOperationsSpike = new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotColdlineAndArchivalStorageOperationsSpikeList(this, "coldline_and_archival_storage_operations_spike", false);
  public get coldlineAndArchivalStorageOperationsSpike() {
    return this._coldlineAndArchivalStorageOperationsSpike;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // cross_region_egress_spike - computed: true, optional: false, required: false
  private _crossRegionEgressSpike = new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotCrossRegionEgressSpikeList(this, "cross_region_egress_spike", false);
  public get crossRegionEgressSpike() {
    return this._crossRegionEgressSpike;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // observation_period - computed: true, optional: false, required: false
  private _observationPeriod = new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotObservationPeriodList(this, "observation_period", false);
  public get observationPeriod() {
    return this._observationPeriod;
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
  }

  // storage_growth_above_trend - computed: true, optional: false, required: false
  private _storageGrowthAboveTrend = new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotStorageGrowthAboveTrendList(this, "storage_growth_above_trend", false);
  public get storageGrowthAboveTrend() {
    return this._storageGrowthAboveTrend;
  }

  // target_resource - computed: true, optional: false, required: false
  public get targetResource() {
    return this.getStringAttribute('target_resource');
  }

  // throttled_requests_spike - computed: true, optional: false, required: false
  private _throttledRequestsSpike = new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotThrottledRequestsSpikeList(this, "throttled_requests_spike", false);
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
}

export class DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference {
    return new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/storage_control_project_intelligence_finding_revision google_storage_control_project_intelligence_finding_revision}
*/
export class DataGoogleStorageControlProjectIntelligenceFindingRevision extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_storage_control_project_intelligence_finding_revision";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataGoogleStorageControlProjectIntelligenceFindingRevision resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGoogleStorageControlProjectIntelligenceFindingRevision to import
  * @param importFromId The id of the existing DataGoogleStorageControlProjectIntelligenceFindingRevision that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/storage_control_project_intelligence_finding_revision#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGoogleStorageControlProjectIntelligenceFindingRevision to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_storage_control_project_intelligence_finding_revision", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/data-sources/storage_control_project_intelligence_finding_revision google_storage_control_project_intelligence_finding_revision} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleStorageControlProjectIntelligenceFindingRevisionConfig) {
    super(scope, id, {
      terraformResourceType: 'google_storage_control_project_intelligence_finding_revision',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.45.0',
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
    this._revisionId = config.revisionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // revision_id - computed: false, optional: false, required: true
  private _revisionId?: string; 
  public get revisionId() {
    return this.getStringAttribute('revision_id');
  }
  public set revisionId(value: string) {
    this._revisionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionIdInput() {
    return this._revisionId;
  }

  // snapshot - computed: true, optional: false, required: false
  private _snapshot = new DataGoogleStorageControlProjectIntelligenceFindingRevisionSnapshotList(this, "snapshot", false);
  public get snapshot() {
    return this._snapshot;
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
      revision_id: cdktn.stringToTerraform(this._revisionId),
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
      revision_id: {
        value: cdktn.stringToHclTerraform(this._revisionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
