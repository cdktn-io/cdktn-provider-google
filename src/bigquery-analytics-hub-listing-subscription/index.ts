/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/bigquery_analytics_hub_listing_subscription
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface BigqueryAnalyticsHubListingSubscriptionConfig extends cdktn.TerraformMetaArguments {
  /**
  * The ID of the data exchange. Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/bigquery_analytics_hub_listing_subscription#data_exchange_id BigqueryAnalyticsHubListingSubscription#data_exchange_id}
  */
  readonly dataExchangeId: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/bigquery_analytics_hub_listing_subscription#deletion_policy BigqueryAnalyticsHubListingSubscription#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/bigquery_analytics_hub_listing_subscription#id BigqueryAnalyticsHubListingSubscription#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the listing. Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/bigquery_analytics_hub_listing_subscription#listing_id BigqueryAnalyticsHubListingSubscription#listing_id}
  */
  readonly listingId: string;
  /**
  * The name of the location of the data exchange. Distinct from the location of the destination data set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/bigquery_analytics_hub_listing_subscription#location BigqueryAnalyticsHubListingSubscription#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/bigquery_analytics_hub_listing_subscription#project BigqueryAnalyticsHubListingSubscription#project}
  */
  readonly project?: string;
  /**
  * destination_dataset block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/bigquery_analytics_hub_listing_subscription#destination_dataset BigqueryAnalyticsHubListingSubscription#destination_dataset}
  */
  readonly destinationDataset?: BigqueryAnalyticsHubListingSubscriptionDestinationDataset;
  /**
  * destination_pubsub_subscription block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/bigquery_analytics_hub_listing_subscription#destination_pubsub_subscription BigqueryAnalyticsHubListingSubscription#destination_pubsub_subscription}
  */
  readonly destinationPubsubSubscription?: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/bigquery_analytics_hub_listing_subscription#timeouts BigqueryAnalyticsHubListingSubscription#timeouts}
  */
  readonly timeouts?: BigqueryAnalyticsHubListingSubscriptionTimeouts;
}
export interface BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplace {
}

export function bigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceToTerraform(struct?: BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplace): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceToHclTerraform(struct?: BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplace): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplace | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplace | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // order - computed: true, optional: false, required: false
  public get order() {
    return this.getStringAttribute('order');
  }
}

export class BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList extends cdktn.ComplexList {

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
  public get(index: number): BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference {
    return new BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BigqueryAnalyticsHubListingSubscriptionCommercialInfo {
}

export function bigqueryAnalyticsHubListingSubscriptionCommercialInfoToTerraform(struct?: BigqueryAnalyticsHubListingSubscriptionCommercialInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bigqueryAnalyticsHubListingSubscriptionCommercialInfoToHclTerraform(struct?: BigqueryAnalyticsHubListingSubscriptionCommercialInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BigqueryAnalyticsHubListingSubscriptionCommercialInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryAnalyticsHubListingSubscriptionCommercialInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloud_marketplace - computed: true, optional: false, required: false
  private _cloudMarketplace = new BigqueryAnalyticsHubListingSubscriptionCommercialInfoCloudMarketplaceList(this, "cloud_marketplace", false);
  public get cloudMarketplace() {
    return this._cloudMarketplace;
  }
}

export class BigqueryAnalyticsHubListingSubscriptionCommercialInfoList extends cdktn.ComplexList {

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
  public get(index: number): BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference {
    return new BigqueryAnalyticsHubListingSubscriptionCommercialInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMap {
}

export function bigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapToTerraform(struct?: BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMap): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapToHclTerraform(struct?: BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMap): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // linked_dataset - computed: true, optional: false, required: false
  public get linkedDataset() {
    return this.getStringAttribute('linked_dataset');
  }

  // linked_pubsub_subscription - computed: true, optional: false, required: false
  public get linkedPubsubSubscription() {
    return this.getStringAttribute('linked_pubsub_subscription');
  }

  // listing - computed: true, optional: false, required: false
  public get listing() {
    return this.getStringAttribute('listing');
  }

  // resource_name - computed: true, optional: false, required: false
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
}

export class BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList extends cdktn.ComplexList {

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
  public get(index: number): BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference {
    return new BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BigqueryAnalyticsHubListingSubscriptionLinkedResources {
}

export function bigqueryAnalyticsHubListingSubscriptionLinkedResourcesToTerraform(struct?: BigqueryAnalyticsHubListingSubscriptionLinkedResources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bigqueryAnalyticsHubListingSubscriptionLinkedResourcesToHclTerraform(struct?: BigqueryAnalyticsHubListingSubscriptionLinkedResources): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BigqueryAnalyticsHubListingSubscriptionLinkedResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryAnalyticsHubListingSubscriptionLinkedResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // linked_dataset - computed: true, optional: false, required: false
  public get linkedDataset() {
    return this.getStringAttribute('linked_dataset');
  }

  // linked_pubsub_subscription - computed: true, optional: false, required: false
  public get linkedPubsubSubscription() {
    return this.getStringAttribute('linked_pubsub_subscription');
  }

  // listing - computed: true, optional: false, required: false
  public get listing() {
    return this.getStringAttribute('listing');
  }
}

export class BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList extends cdktn.ComplexList {

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
  public get(index: number): BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference {
    return new BigqueryAnalyticsHubListingSubscriptionLinkedResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference {
  /**
  * A unique ID for this dataset, without the project name. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 1,024 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/bigquery_analytics_hub_listing_subscription#dataset_id BigqueryAnalyticsHubListingSubscription#dataset_id}
  */
  readonly datasetId: string;
  /**
  * The ID of the project containing this dataset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/bigquery_analytics_hub_listing_subscription#project_id BigqueryAnalyticsHubListingSubscription#project_id}
  */
  readonly projectId: string;
}

export function bigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceToTerraform(struct?: BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference | BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dataset_id: cdktn.stringToTerraform(struct!.datasetId),
    project_id: cdktn.stringToTerraform(struct!.projectId),
  }
}


export function bigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceToHclTerraform(struct?: BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference | BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dataset_id: {
      value: cdktn.stringToHclTerraform(struct!.datasetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktn.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetId = this._datasetId;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datasetId = undefined;
      this._projectId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datasetId = value.datasetId;
      this._projectId = value.projectId;
    }
  }

  // dataset_id - computed: false, optional: false, required: true
  private _datasetId?: string; 
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }
  public set datasetId(value: string) {
    this._datasetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdInput() {
    return this._datasetId;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }
}
export interface BigqueryAnalyticsHubListingSubscriptionDestinationDataset {
  /**
  * A user-friendly description of the dataset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/bigquery_analytics_hub_listing_subscription#description BigqueryAnalyticsHubListingSubscription#description}
  */
  readonly description?: string;
  /**
  * A descriptive name for the dataset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/bigquery_analytics_hub_listing_subscription#friendly_name BigqueryAnalyticsHubListingSubscription#friendly_name}
  */
  readonly friendlyName?: string;
  /**
  * The labels associated with this dataset. You can use these to
  * organize and group your datasets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/bigquery_analytics_hub_listing_subscription#labels BigqueryAnalyticsHubListingSubscription#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The geographic location where the dataset should reside.
  * See https://cloud.google.com/bigquery/docs/locations for supported locations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/bigquery_analytics_hub_listing_subscription#location BigqueryAnalyticsHubListingSubscription#location}
  */
  readonly location: string;
  /**
  * List of regions where the subscriber wants dataset replicas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/bigquery_analytics_hub_listing_subscription#replica_locations BigqueryAnalyticsHubListingSubscription#replica_locations}
  */
  readonly replicaLocations?: string[];
  /**
  * dataset_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/bigquery_analytics_hub_listing_subscription#dataset_reference BigqueryAnalyticsHubListingSubscription#dataset_reference}
  */
  readonly datasetReference: BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference;
}

export function bigqueryAnalyticsHubListingSubscriptionDestinationDatasetToTerraform(struct?: BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference | BigqueryAnalyticsHubListingSubscriptionDestinationDataset): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    friendly_name: cdktn.stringToTerraform(struct!.friendlyName),
    labels: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.labels),
    location: cdktn.stringToTerraform(struct!.location),
    replica_locations: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.replicaLocations),
    dataset_reference: bigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceToTerraform(struct!.datasetReference),
  }
}


export function bigqueryAnalyticsHubListingSubscriptionDestinationDatasetToHclTerraform(struct?: BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference | BigqueryAnalyticsHubListingSubscriptionDestinationDataset): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    friendly_name: {
      value: cdktn.stringToHclTerraform(struct!.friendlyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    location: {
      value: cdktn.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replica_locations: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.replicaLocations),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    dataset_reference: {
      value: bigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceToHclTerraform(struct!.datasetReference),
      isBlock: true,
      type: "list",
      storageClassType: "BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryAnalyticsHubListingSubscriptionDestinationDataset | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._friendlyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.friendlyName = this._friendlyName;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._replicaLocations !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaLocations = this._replicaLocations;
    }
    if (this._datasetReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetReference = this._datasetReference?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryAnalyticsHubListingSubscriptionDestinationDataset | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._friendlyName = undefined;
      this._labels = undefined;
      this._location = undefined;
      this._replicaLocations = undefined;
      this._datasetReference.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._friendlyName = value.friendlyName;
      this._labels = value.labels;
      this._location = value.location;
      this._replicaLocations = value.replicaLocations;
      this._datasetReference.internalValue = value.datasetReference;
    }
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

  // friendly_name - computed: false, optional: true, required: false
  private _friendlyName?: string; 
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }
  public set friendlyName(value: string) {
    this._friendlyName = value;
  }
  public resetFriendlyName() {
    this._friendlyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get friendlyNameInput() {
    return this._friendlyName;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // replica_locations - computed: false, optional: true, required: false
  private _replicaLocations?: string[]; 
  public get replicaLocations() {
    return cdktn.Fn.tolist(this.getListAttribute('replica_locations'));
  }
  public set replicaLocations(value: string[]) {
    this._replicaLocations = value;
  }
  public resetReplicaLocations() {
    this._replicaLocations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaLocationsInput() {
    return this._replicaLocations;
  }

  // dataset_reference - computed: false, optional: false, required: true
  private _datasetReference = new BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReferenceOutputReference(this, "dataset_reference");
  public get datasetReference() {
    return this._datasetReference;
  }
  public putDatasetReference(value: BigqueryAnalyticsHubListingSubscriptionDestinationDatasetDatasetReference) {
    this._datasetReference.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetReferenceInput() {
    return this._datasetReference.internalValue;
  }
}
export interface BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig {
  /**
  * When true and 'useTopicSchema' is true, any fields that are a part of the topic schema that are
  * not part of the BigQuery table schema are dropped when writing to BigQuery. Otherwise, the schemas
  * must be kept in sync and any messages with extra fields are not written and remain in the
  * subscription's backlog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/bigquery_analytics_hub_listing_subscription#drop_unknown_fields BigqueryAnalyticsHubListingSubscription#drop_unknown_fields}
  */
  readonly dropUnknownFields?: boolean | cdktn.IResolvable;
  /**
  * The service account to use to write to BigQuery. The subscription creator or updater that
  * specifies this field must have 'iam.serviceAccounts.actAs' permission on the service account.
  * If not specified, the Pub/Sub service agent,
  * service-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com, is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/bigquery_analytics_hub_listing_subscription#service_account_email BigqueryAnalyticsHubListingSubscription#service_account_email}
  */
  readonly serviceAccountEmail?: string;
  /**
  * The name of the table to which to write data, of the form
  * {projectId}.{datasetId}.{tableId}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/bigquery_analytics_hub_listing_subscription#table BigqueryAnalyticsHubListingSubscription#table}
  */
  readonly table?: string;
  /**
  * When true, use the BigQuery table's schema as the columns to write to in BigQuery.
  * 'useTableSchema' and 'useTopicSchema' cannot be enabled at the same time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/bigquery_analytics_hub_listing_subscription#use_table_schema BigqueryAnalyticsHubListingSubscription#use_table_schema}
  */
  readonly useTableSchema?: boolean | cdktn.IResolvable;
  /**
  * When true, use the topic's schema as the columns to write to in BigQuery,
  * if it exists. 'useTopicSchema' and 'useTableSchema' cannot be enabled at the same time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/bigquery_analytics_hub_listing_subscription#use_topic_schema BigqueryAnalyticsHubListingSubscription#use_topic_schema}
  */
  readonly useTopicSchema?: boolean | cdktn.IResolvable;
  /**
  * When true, write the subscription name, message_id, publish_time, attributes, and ordering_key
  * to additional columns in the table. The subscription name, message_id, and publish_time fields
  * are put in their own columns while all other message properties (other than data) are written
  * to a JSON object in the attributes column.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/bigquery_analytics_hub_listing_subscription#write_metadata BigqueryAnalyticsHubListingSubscription#write_metadata}
  */
  readonly writeMetadata?: boolean | cdktn.IResolvable;
}

export function bigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigToTerraform(struct?: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference | BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    drop_unknown_fields: cdktn.booleanToTerraform(struct!.dropUnknownFields),
    service_account_email: cdktn.stringToTerraform(struct!.serviceAccountEmail),
    table: cdktn.stringToTerraform(struct!.table),
    use_table_schema: cdktn.booleanToTerraform(struct!.useTableSchema),
    use_topic_schema: cdktn.booleanToTerraform(struct!.useTopicSchema),
    write_metadata: cdktn.booleanToTerraform(struct!.writeMetadata),
  }
}


export function bigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigToHclTerraform(struct?: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference | BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    drop_unknown_fields: {
      value: cdktn.booleanToHclTerraform(struct!.dropUnknownFields),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_account_email: {
      value: cdktn.stringToHclTerraform(struct!.serviceAccountEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table: {
      value: cdktn.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_table_schema: {
      value: cdktn.booleanToHclTerraform(struct!.useTableSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_topic_schema: {
      value: cdktn.booleanToHclTerraform(struct!.useTopicSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    write_metadata: {
      value: cdktn.booleanToHclTerraform(struct!.writeMetadata),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dropUnknownFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropUnknownFields = this._dropUnknownFields;
    }
    if (this._serviceAccountEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountEmail = this._serviceAccountEmail;
    }
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    if (this._useTableSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.useTableSchema = this._useTableSchema;
    }
    if (this._useTopicSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.useTopicSchema = this._useTopicSchema;
    }
    if (this._writeMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeMetadata = this._writeMetadata;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dropUnknownFields = undefined;
      this._serviceAccountEmail = undefined;
      this._table = undefined;
      this._useTableSchema = undefined;
      this._useTopicSchema = undefined;
      this._writeMetadata = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dropUnknownFields = value.dropUnknownFields;
      this._serviceAccountEmail = value.serviceAccountEmail;
      this._table = value.table;
      this._useTableSchema = value.useTableSchema;
      this._useTopicSchema = value.useTopicSchema;
      this._writeMetadata = value.writeMetadata;
    }
  }

  // drop_unknown_fields - computed: false, optional: true, required: false
  private _dropUnknownFields?: boolean | cdktn.IResolvable; 
  public get dropUnknownFields() {
    return this.getBooleanAttribute('drop_unknown_fields');
  }
  public set dropUnknownFields(value: boolean | cdktn.IResolvable) {
    this._dropUnknownFields = value;
  }
  public resetDropUnknownFields() {
    this._dropUnknownFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropUnknownFieldsInput() {
    return this._dropUnknownFields;
  }

  // service_account_email - computed: false, optional: true, required: false
  private _serviceAccountEmail?: string; 
  public get serviceAccountEmail() {
    return this.getStringAttribute('service_account_email');
  }
  public set serviceAccountEmail(value: string) {
    this._serviceAccountEmail = value;
  }
  public resetServiceAccountEmail() {
    this._serviceAccountEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountEmailInput() {
    return this._serviceAccountEmail;
  }

  // table - computed: false, optional: true, required: false
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  public resetTable() {
    this._table = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }

  // use_table_schema - computed: false, optional: true, required: false
  private _useTableSchema?: boolean | cdktn.IResolvable; 
  public get useTableSchema() {
    return this.getBooleanAttribute('use_table_schema');
  }
  public set useTableSchema(value: boolean | cdktn.IResolvable) {
    this._useTableSchema = value;
  }
  public resetUseTableSchema() {
    this._useTableSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTableSchemaInput() {
    return this._useTableSchema;
  }

  // use_topic_schema - computed: false, optional: true, required: false
  private _useTopicSchema?: boolean | cdktn.IResolvable; 
  public get useTopicSchema() {
    return this.getBooleanAttribute('use_topic_schema');
  }
  public set useTopicSchema(value: boolean | cdktn.IResolvable) {
    this._useTopicSchema = value;
  }
  public resetUseTopicSchema() {
    this._useTopicSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTopicSchemaInput() {
    return this._useTopicSchema;
  }

  // write_metadata - computed: false, optional: true, required: false
  private _writeMetadata?: boolean | cdktn.IResolvable; 
  public get writeMetadata() {
    return this.getBooleanAttribute('write_metadata');
  }
  public set writeMetadata(value: boolean | cdktn.IResolvable) {
    this._writeMetadata = value;
  }
  public resetWriteMetadata() {
    this._writeMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeMetadataInput() {
    return this._writeMetadata;
  }
}
export interface BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig {
  /**
  * When true, the output Cloud Storage file will be serialized using
  * the topic schema, if it exists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/bigquery_analytics_hub_listing_subscription#use_topic_schema BigqueryAnalyticsHubListingSubscription#use_topic_schema}
  */
  readonly useTopicSchema?: boolean | cdktn.IResolvable;
  /**
  * When true, write the subscription name, message_id, publish_time, attributes, and ordering_key
  * as additional fields in the output. The subscription name, message_id, and publish_time fields
  * are put in their own fields while all other message properties other than data (for example,
  * an ordering_key, if present) are added as entries in the attributes map.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/bigquery_analytics_hub_listing_subscription#write_metadata BigqueryAnalyticsHubListingSubscription#write_metadata}
  */
  readonly writeMetadata?: boolean | cdktn.IResolvable;
}

export function bigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigToTerraform(struct?: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference | BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    use_topic_schema: cdktn.booleanToTerraform(struct!.useTopicSchema),
    write_metadata: cdktn.booleanToTerraform(struct!.writeMetadata),
  }
}


export function bigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigToHclTerraform(struct?: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference | BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    use_topic_schema: {
      value: cdktn.booleanToHclTerraform(struct!.useTopicSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    write_metadata: {
      value: cdktn.booleanToHclTerraform(struct!.writeMetadata),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._useTopicSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.useTopicSchema = this._useTopicSchema;
    }
    if (this._writeMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeMetadata = this._writeMetadata;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._useTopicSchema = undefined;
      this._writeMetadata = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._useTopicSchema = value.useTopicSchema;
      this._writeMetadata = value.writeMetadata;
    }
  }

  // use_topic_schema - computed: false, optional: true, required: false
  private _useTopicSchema?: boolean | cdktn.IResolvable; 
  public get useTopicSchema() {
    return this.getBooleanAttribute('use_topic_schema');
  }
  public set useTopicSchema(value: boolean | cdktn.IResolvable) {
    this._useTopicSchema = value;
  }
  public resetUseTopicSchema() {
    this._useTopicSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTopicSchemaInput() {
    return this._useTopicSchema;
  }

  // write_metadata - computed: false, optional: true, required: false
  private _writeMetadata?: boolean | cdktn.IResolvable; 
  public get writeMetadata() {
    return this.getBooleanAttribute('write_metadata');
  }
  public set writeMetadata(value: boolean | cdktn.IResolvable) {
    this._writeMetadata = value;
  }
  public resetWriteMetadata() {
    this._writeMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeMetadataInput() {
    return this._writeMetadata;
  }
}
export interface BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig {
  /**
  * User-provided name for the Cloud Storage bucket. The bucket must be created by the user.
  * The bucket name must be without any prefix like "gs://". See the
  * [bucket naming requirements](https://cloud.google.com/storage/docs/buckets#naming).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/bigquery_analytics_hub_listing_subscription#bucket BigqueryAnalyticsHubListingSubscription#bucket}
  */
  readonly bucket?: string;
  /**
  * User-provided format string specifying how to represent datetimes in Cloud Storage filenames.
  * See the [datetime format guidance](https://cloud.google.com/pubsub/docs/create-cloudstorage-subscription#file_names).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/bigquery_analytics_hub_listing_subscription#filename_datetime_format BigqueryAnalyticsHubListingSubscription#filename_datetime_format}
  */
  readonly filenameDatetimeFormat?: string;
  /**
  * User-provided prefix for Cloud Storage filename. See the
  * [object naming requirements](https://cloud.google.com/storage/docs/objects#naming).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/bigquery_analytics_hub_listing_subscription#filename_prefix BigqueryAnalyticsHubListingSubscription#filename_prefix}
  */
  readonly filenamePrefix?: string;
  /**
  * User-provided suffix for Cloud Storage filename. See the
  * [object naming requirements](https://cloud.google.com/storage/docs/objects#naming).
  * Must not end in "/".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/bigquery_analytics_hub_listing_subscription#filename_suffix BigqueryAnalyticsHubListingSubscription#filename_suffix}
  */
  readonly filenameSuffix?: string;
  /**
  * The maximum bytes that can be written to a Cloud Storage file before a new file is created.
  * Min 1 KB, max 10 GiB. The maxBytes limit may be exceeded in cases where messages are larger
  * than the limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/bigquery_analytics_hub_listing_subscription#max_bytes BigqueryAnalyticsHubListingSubscription#max_bytes}
  */
  readonly maxBytes?: string;
  /**
  * The maximum duration that can elapse before a new Cloud Storage file is created.
  * Min 1 minute, max 10 minutes, default 5 minutes. May not exceed the subscription's
  * acknowledgement deadline.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/bigquery_analytics_hub_listing_subscription#max_duration BigqueryAnalyticsHubListingSubscription#max_duration}
  */
  readonly maxDuration?: string;
  /**
  * The maximum number of messages that can be written to a Cloud Storage file before a new file
  * is created. Min 1000 messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/bigquery_analytics_hub_listing_subscription#max_messages BigqueryAnalyticsHubListingSubscription#max_messages}
  */
  readonly maxMessages?: string;
  /**
  * The service account to use to write to Cloud Storage. The subscription creator or updater that
  * specifies this field must have 'iam.serviceAccounts.actAs' permission on the service account.
  * If not specified, the Pub/Sub service agent,
  * service-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com, is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/bigquery_analytics_hub_listing_subscription#service_account_email BigqueryAnalyticsHubListingSubscription#service_account_email}
  */
  readonly serviceAccountEmail?: string;
  /**
  * avro_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/bigquery_analytics_hub_listing_subscription#avro_config BigqueryAnalyticsHubListingSubscription#avro_config}
  */
  readonly avroConfig?: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig;
}

export function bigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigToTerraform(struct?: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference | BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    bucket: cdktn.stringToTerraform(struct!.bucket),
    filename_datetime_format: cdktn.stringToTerraform(struct!.filenameDatetimeFormat),
    filename_prefix: cdktn.stringToTerraform(struct!.filenamePrefix),
    filename_suffix: cdktn.stringToTerraform(struct!.filenameSuffix),
    max_bytes: cdktn.stringToTerraform(struct!.maxBytes),
    max_duration: cdktn.stringToTerraform(struct!.maxDuration),
    max_messages: cdktn.stringToTerraform(struct!.maxMessages),
    service_account_email: cdktn.stringToTerraform(struct!.serviceAccountEmail),
    avro_config: bigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigToTerraform(struct!.avroConfig),
  }
}


export function bigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigToHclTerraform(struct?: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference | BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    bucket: {
      value: cdktn.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filename_datetime_format: {
      value: cdktn.stringToHclTerraform(struct!.filenameDatetimeFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filename_prefix: {
      value: cdktn.stringToHclTerraform(struct!.filenamePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filename_suffix: {
      value: cdktn.stringToHclTerraform(struct!.filenameSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_bytes: {
      value: cdktn.stringToHclTerraform(struct!.maxBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_duration: {
      value: cdktn.stringToHclTerraform(struct!.maxDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_messages: {
      value: cdktn.stringToHclTerraform(struct!.maxMessages),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_email: {
      value: cdktn.stringToHclTerraform(struct!.serviceAccountEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    avro_config: {
      value: bigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigToHclTerraform(struct!.avroConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._filenameDatetimeFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.filenameDatetimeFormat = this._filenameDatetimeFormat;
    }
    if (this._filenamePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.filenamePrefix = this._filenamePrefix;
    }
    if (this._filenameSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.filenameSuffix = this._filenameSuffix;
    }
    if (this._maxBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBytes = this._maxBytes;
    }
    if (this._maxDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDuration = this._maxDuration;
    }
    if (this._maxMessages !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxMessages = this._maxMessages;
    }
    if (this._serviceAccountEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountEmail = this._serviceAccountEmail;
    }
    if (this._avroConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.avroConfig = this._avroConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._filenameDatetimeFormat = undefined;
      this._filenamePrefix = undefined;
      this._filenameSuffix = undefined;
      this._maxBytes = undefined;
      this._maxDuration = undefined;
      this._maxMessages = undefined;
      this._serviceAccountEmail = undefined;
      this._avroConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._filenameDatetimeFormat = value.filenameDatetimeFormat;
      this._filenamePrefix = value.filenamePrefix;
      this._filenameSuffix = value.filenameSuffix;
      this._maxBytes = value.maxBytes;
      this._maxDuration = value.maxDuration;
      this._maxMessages = value.maxMessages;
      this._serviceAccountEmail = value.serviceAccountEmail;
      this._avroConfig.internalValue = value.avroConfig;
    }
  }

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // filename_datetime_format - computed: false, optional: true, required: false
  private _filenameDatetimeFormat?: string; 
  public get filenameDatetimeFormat() {
    return this.getStringAttribute('filename_datetime_format');
  }
  public set filenameDatetimeFormat(value: string) {
    this._filenameDatetimeFormat = value;
  }
  public resetFilenameDatetimeFormat() {
    this._filenameDatetimeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameDatetimeFormatInput() {
    return this._filenameDatetimeFormat;
  }

  // filename_prefix - computed: false, optional: true, required: false
  private _filenamePrefix?: string; 
  public get filenamePrefix() {
    return this.getStringAttribute('filename_prefix');
  }
  public set filenamePrefix(value: string) {
    this._filenamePrefix = value;
  }
  public resetFilenamePrefix() {
    this._filenamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filenamePrefixInput() {
    return this._filenamePrefix;
  }

  // filename_suffix - computed: false, optional: true, required: false
  private _filenameSuffix?: string; 
  public get filenameSuffix() {
    return this.getStringAttribute('filename_suffix');
  }
  public set filenameSuffix(value: string) {
    this._filenameSuffix = value;
  }
  public resetFilenameSuffix() {
    this._filenameSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameSuffixInput() {
    return this._filenameSuffix;
  }

  // max_bytes - computed: false, optional: true, required: false
  private _maxBytes?: string; 
  public get maxBytes() {
    return this.getStringAttribute('max_bytes');
  }
  public set maxBytes(value: string) {
    this._maxBytes = value;
  }
  public resetMaxBytes() {
    this._maxBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBytesInput() {
    return this._maxBytes;
  }

  // max_duration - computed: false, optional: true, required: false
  private _maxDuration?: string; 
  public get maxDuration() {
    return this.getStringAttribute('max_duration');
  }
  public set maxDuration(value: string) {
    this._maxDuration = value;
  }
  public resetMaxDuration() {
    this._maxDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDurationInput() {
    return this._maxDuration;
  }

  // max_messages - computed: false, optional: true, required: false
  private _maxMessages?: string; 
  public get maxMessages() {
    return this.getStringAttribute('max_messages');
  }
  public set maxMessages(value: string) {
    this._maxMessages = value;
  }
  public resetMaxMessages() {
    this._maxMessages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMessagesInput() {
    return this._maxMessages;
  }

  // service_account_email - computed: false, optional: true, required: false
  private _serviceAccountEmail?: string; 
  public get serviceAccountEmail() {
    return this.getStringAttribute('service_account_email');
  }
  public set serviceAccountEmail(value: string) {
    this._serviceAccountEmail = value;
  }
  public resetServiceAccountEmail() {
    this._serviceAccountEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountEmailInput() {
    return this._serviceAccountEmail;
  }

  // avro_config - computed: false, optional: true, required: false
  private _avroConfig = new BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfigOutputReference(this, "avro_config");
  public get avroConfig() {
    return this._avroConfig;
  }
  public putAvroConfig(value: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigAvroConfig) {
    this._avroConfig.internalValue = value;
  }
  public resetAvroConfig() {
    this._avroConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avroConfigInput() {
    return this._avroConfig.internalValue;
  }
}
export interface BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy {
  /**
  * The name of the topic to which dead letter messages should be published. Format is
  * 'projects/{project}/topics/{topic}'. The Pub/Sub service account associated with the enclosing
  * subscription's parent project (i.e., service-{project_number}@gcp-sa-pubsub.iam.gserviceaccount.com)
  * must have permission to Publish() to this topic. The operation will fail if the topic does not exist.
  * Users should ensure that there is a subscription attached to this topic since messages published to
  * a topic with no subscriptions are lost.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/bigquery_analytics_hub_listing_subscription#dead_letter_topic BigqueryAnalyticsHubListingSubscription#dead_letter_topic}
  */
  readonly deadLetterTopic?: string;
  /**
  * The maximum number of delivery attempts for any message. The value must be between 5 and 100.
  * The number of delivery attempts is defined as 1 + (the sum of number of NACKs and number of times
  * the acknowledgement deadline has been exceeded for the message). A NACK is any call to
  * ModifyAckDeadline with a 0 deadline. Note that client libraries may automatically extend
  * ack_deadlines. This field will be honored on a best effort basis. If this parameter is 0, a
  * default value of 5 is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/bigquery_analytics_hub_listing_subscription#max_delivery_attempts BigqueryAnalyticsHubListingSubscription#max_delivery_attempts}
  */
  readonly maxDeliveryAttempts?: number;
}

export function bigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyToTerraform(struct?: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference | BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dead_letter_topic: cdktn.stringToTerraform(struct!.deadLetterTopic),
    max_delivery_attempts: cdktn.numberToTerraform(struct!.maxDeliveryAttempts),
  }
}


export function bigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyToHclTerraform(struct?: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference | BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dead_letter_topic: {
      value: cdktn.stringToHclTerraform(struct!.deadLetterTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_delivery_attempts: {
      value: cdktn.numberToHclTerraform(struct!.maxDeliveryAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deadLetterTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadLetterTopic = this._deadLetterTopic;
    }
    if (this._maxDeliveryAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDeliveryAttempts = this._maxDeliveryAttempts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deadLetterTopic = undefined;
      this._maxDeliveryAttempts = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deadLetterTopic = value.deadLetterTopic;
      this._maxDeliveryAttempts = value.maxDeliveryAttempts;
    }
  }

  // dead_letter_topic - computed: false, optional: true, required: false
  private _deadLetterTopic?: string; 
  public get deadLetterTopic() {
    return this.getStringAttribute('dead_letter_topic');
  }
  public set deadLetterTopic(value: string) {
    this._deadLetterTopic = value;
  }
  public resetDeadLetterTopic() {
    this._deadLetterTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadLetterTopicInput() {
    return this._deadLetterTopic;
  }

  // max_delivery_attempts - computed: false, optional: true, required: false
  private _maxDeliveryAttempts?: number; 
  public get maxDeliveryAttempts() {
    return this.getNumberAttribute('max_delivery_attempts');
  }
  public set maxDeliveryAttempts(value: number) {
    this._maxDeliveryAttempts = value;
  }
  public resetMaxDeliveryAttempts() {
    this._maxDeliveryAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDeliveryAttemptsInput() {
    return this._maxDeliveryAttempts;
  }
}
export interface BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy {
  /**
  * Specifies the "time-to-live" duration for an associated resource. The resource expires if it
  * is not active for a period of 'ttl'. The definition of "activity" depends on the type of the
  * associated resource. The minimum and maximum allowed values for 'ttl' depend on the type of
  * the associated resource, as well. If 'ttl' is not set, the associated resource never expires.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/bigquery_analytics_hub_listing_subscription#ttl BigqueryAnalyticsHubListingSubscription#ttl}
  */
  readonly ttl?: string;
}

export function bigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyToTerraform(struct?: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference | BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ttl: cdktn.stringToTerraform(struct!.ttl),
  }
}


export function bigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyToHclTerraform(struct?: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference | BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ttl: {
      value: cdktn.stringToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ttl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ttl = value.ttl;
    }
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: string; 
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
  public set ttl(value: string) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }
}
export interface BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper {
  /**
  * When true, writes the Pub/Sub message metadata to 'x-goog-pubsub-<KEY>:<VAL>' headers of the
  * HTTP request. Writes the Pub/Sub message attributes to '<KEY>:<VAL>' headers of the HTTP request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/bigquery_analytics_hub_listing_subscription#write_metadata BigqueryAnalyticsHubListingSubscription#write_metadata}
  */
  readonly writeMetadata?: boolean | cdktn.IResolvable;
}

export function bigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperToTerraform(struct?: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference | BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    write_metadata: cdktn.booleanToTerraform(struct!.writeMetadata),
  }
}


export function bigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperToHclTerraform(struct?: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference | BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    write_metadata: {
      value: cdktn.booleanToHclTerraform(struct!.writeMetadata),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._writeMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeMetadata = this._writeMetadata;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._writeMetadata = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._writeMetadata = value.writeMetadata;
    }
  }

  // write_metadata - computed: false, optional: true, required: false
  private _writeMetadata?: boolean | cdktn.IResolvable; 
  public get writeMetadata() {
    return this.getBooleanAttribute('write_metadata');
  }
  public set writeMetadata(value: boolean | cdktn.IResolvable) {
    this._writeMetadata = value;
  }
  public resetWriteMetadata() {
    this._writeMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeMetadataInput() {
    return this._writeMetadata;
  }
}
export interface BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken {
  /**
  * Audience to be used when generating OIDC token. The audience claim identifies the recipients
  * that the JWT is intended for. The audience value is a single case-sensitive string. Having
  * multiple values (array) for the audience field is not supported. More info about the OIDC JWT
  * token audience here: https://tools.ietf.org/html/rfc7519#section-4.1.3 Note: if not specified,
  * the Push endpoint URL will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/bigquery_analytics_hub_listing_subscription#audience BigqueryAnalyticsHubListingSubscription#audience}
  */
  readonly audience?: string;
  /**
  * Service account email used for generating the OIDC token. For more information
  * on setting up authentication, see Push subscriptions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/bigquery_analytics_hub_listing_subscription#service_account_email BigqueryAnalyticsHubListingSubscription#service_account_email}
  */
  readonly serviceAccountEmail?: string;
}

export function bigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenToTerraform(struct?: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference | BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    audience: cdktn.stringToTerraform(struct!.audience),
    service_account_email: cdktn.stringToTerraform(struct!.serviceAccountEmail),
  }
}


export function bigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenToHclTerraform(struct?: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference | BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    audience: {
      value: cdktn.stringToHclTerraform(struct!.audience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_email: {
      value: cdktn.stringToHclTerraform(struct!.serviceAccountEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._serviceAccountEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountEmail = this._serviceAccountEmail;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audience = undefined;
      this._serviceAccountEmail = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audience = value.audience;
      this._serviceAccountEmail = value.serviceAccountEmail;
    }
  }

  // audience - computed: false, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // service_account_email - computed: false, optional: true, required: false
  private _serviceAccountEmail?: string; 
  public get serviceAccountEmail() {
    return this.getStringAttribute('service_account_email');
  }
  public set serviceAccountEmail(value: string) {
    this._serviceAccountEmail = value;
  }
  public resetServiceAccountEmail() {
    this._serviceAccountEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountEmailInput() {
    return this._serviceAccountEmail;
  }
}
export interface BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig {
  /**
  * Endpoint configuration attributes that can be used to control different aspects of the message delivery.
  * The only currently supported attribute is 'x-goog-version', which you can use to change the format of the
  * pushed message. This attribute indicates the version of the data expected by the endpoint. This controls
  * the shape of the pushed message (i.e., its fields and metadata). If not present during the
  * 'CreateSubscription' call, it will default to the version of the Pub/Sub API used to make such call.
  * If not present in a 'ModifyPushConfig' call, its value will not be changed. 'GetSubscription' calls
  * will always return a valid version, even if the subscription was created without this attribute.
  * The only supported values for the 'x-goog-version' attribute are: 'v1beta1': uses the push format
  * defined in the v1beta1 Pub/Sub API. 'v1' or 'v1beta2': uses the push format defined in the v1 Pub/Sub API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/bigquery_analytics_hub_listing_subscription#attributes BigqueryAnalyticsHubListingSubscription#attributes}
  */
  readonly attributes?: { [key: string]: string };
  /**
  * A URL locating the endpoint to which messages should be pushed.
  * For example, a Webhook endpoint might use 'https://example.com/push'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/bigquery_analytics_hub_listing_subscription#push_endpoint BigqueryAnalyticsHubListingSubscription#push_endpoint}
  */
  readonly pushEndpoint?: string;
  /**
  * no_wrapper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/bigquery_analytics_hub_listing_subscription#no_wrapper BigqueryAnalyticsHubListingSubscription#no_wrapper}
  */
  readonly noWrapper?: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper;
  /**
  * oidc_token block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/bigquery_analytics_hub_listing_subscription#oidc_token BigqueryAnalyticsHubListingSubscription#oidc_token}
  */
  readonly oidcToken?: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken;
}

export function bigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigToTerraform(struct?: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference | BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    attributes: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.attributes),
    push_endpoint: cdktn.stringToTerraform(struct!.pushEndpoint),
    no_wrapper: bigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperToTerraform(struct!.noWrapper),
    oidc_token: bigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenToTerraform(struct!.oidcToken),
  }
}


export function bigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigToHclTerraform(struct?: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference | BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    attributes: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.attributes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    push_endpoint: {
      value: cdktn.stringToHclTerraform(struct!.pushEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_wrapper: {
      value: bigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperToHclTerraform(struct!.noWrapper),
      isBlock: true,
      type: "list",
      storageClassType: "BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperList",
    },
    oidc_token: {
      value: bigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenToHclTerraform(struct!.oidcToken),
      isBlock: true,
      type: "list",
      storageClassType: "BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes;
    }
    if (this._pushEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.pushEndpoint = this._pushEndpoint;
    }
    if (this._noWrapper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noWrapper = this._noWrapper?.internalValue;
    }
    if (this._oidcToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oidcToken = this._oidcToken?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attributes = undefined;
      this._pushEndpoint = undefined;
      this._noWrapper.internalValue = undefined;
      this._oidcToken.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attributes = value.attributes;
      this._pushEndpoint = value.pushEndpoint;
      this._noWrapper.internalValue = value.noWrapper;
      this._oidcToken.internalValue = value.oidcToken;
    }
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes?: { [key: string]: string }; 
  public get attributes() {
    return this.getStringMapAttribute('attributes');
  }
  public set attributes(value: { [key: string]: string }) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // push_endpoint - computed: false, optional: true, required: false
  private _pushEndpoint?: string; 
  public get pushEndpoint() {
    return this.getStringAttribute('push_endpoint');
  }
  public set pushEndpoint(value: string) {
    this._pushEndpoint = value;
  }
  public resetPushEndpoint() {
    this._pushEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushEndpointInput() {
    return this._pushEndpoint;
  }

  // no_wrapper - computed: false, optional: true, required: false
  private _noWrapper = new BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapperOutputReference(this, "no_wrapper");
  public get noWrapper() {
    return this._noWrapper;
  }
  public putNoWrapper(value: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigNoWrapper) {
    this._noWrapper.internalValue = value;
  }
  public resetNoWrapper() {
    this._noWrapper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noWrapperInput() {
    return this._noWrapper.internalValue;
  }

  // oidc_token - computed: false, optional: true, required: false
  private _oidcToken = new BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcTokenOutputReference(this, "oidc_token");
  public get oidcToken() {
    return this._oidcToken;
  }
  public putOidcToken(value: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOidcToken) {
    this._oidcToken.internalValue = value;
  }
  public resetOidcToken() {
    this._oidcToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcTokenInput() {
    return this._oidcToken.internalValue;
  }
}
export interface BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy {
  /**
  * The maximum delay between consecutive deliveries of a given message.
  * Value should be between 0 and 600 seconds. Defaults to 600 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/bigquery_analytics_hub_listing_subscription#maximum_backoff BigqueryAnalyticsHubListingSubscription#maximum_backoff}
  */
  readonly maximumBackoff?: string;
  /**
  * The minimum delay between consecutive deliveries of a given message.
  * Value should be between 0 and 600 seconds. Defaults to 10 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/bigquery_analytics_hub_listing_subscription#minimum_backoff BigqueryAnalyticsHubListingSubscription#minimum_backoff}
  */
  readonly minimumBackoff?: string;
}

export function bigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyToTerraform(struct?: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference | BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    maximum_backoff: cdktn.stringToTerraform(struct!.maximumBackoff),
    minimum_backoff: cdktn.stringToTerraform(struct!.minimumBackoff),
  }
}


export function bigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyToHclTerraform(struct?: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference | BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    maximum_backoff: {
      value: cdktn.stringToHclTerraform(struct!.maximumBackoff),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    minimum_backoff: {
      value: cdktn.stringToHclTerraform(struct!.minimumBackoff),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximumBackoff !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumBackoff = this._maximumBackoff;
    }
    if (this._minimumBackoff !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumBackoff = this._minimumBackoff;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maximumBackoff = undefined;
      this._minimumBackoff = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maximumBackoff = value.maximumBackoff;
      this._minimumBackoff = value.minimumBackoff;
    }
  }

  // maximum_backoff - computed: false, optional: true, required: false
  private _maximumBackoff?: string; 
  public get maximumBackoff() {
    return this.getStringAttribute('maximum_backoff');
  }
  public set maximumBackoff(value: string) {
    this._maximumBackoff = value;
  }
  public resetMaximumBackoff() {
    this._maximumBackoff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumBackoffInput() {
    return this._maximumBackoff;
  }

  // minimum_backoff - computed: false, optional: true, required: false
  private _minimumBackoff?: string; 
  public get minimumBackoff() {
    return this.getStringAttribute('minimum_backoff');
  }
  public set minimumBackoff(value: string) {
    this._minimumBackoff = value;
  }
  public resetMinimumBackoff() {
    this._minimumBackoff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumBackoffInput() {
    return this._minimumBackoff;
  }
}
export interface BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription {
  /**
  * The approximate amount of time (on a best-effort basis) Pub/Sub waits for the subscriber to
  * acknowledge receipt before resending the message. In the interval after the message is delivered
  * and before it is acknowledged, it is considered to be outstanding. During that time period, the
  * message will not be redelivered (on a best-effort basis). For pull subscriptions, this value is
  * used as the initial value for the ack deadline. To override this value for a given message, call
  * 'ModifyAckDeadline' with the corresponding 'ack_id' if using non-streaming pull or send the
  * 'ack_id' in a 'StreamingModifyAckDeadlineRequest' if using streaming pull. The minimum custom
  * deadline you can specify is 10 seconds. The maximum custom deadline you can specify is 600
  * seconds (10 minutes). If this parameter is 0, a default value of 10 seconds is used. For push
  * delivery, this value is also used to set the request timeout for the call to the push endpoint.
  * If the subscriber never acknowledges the message, the Pub/Sub system will eventually redeliver
  * the message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/bigquery_analytics_hub_listing_subscription#ack_deadline_seconds BigqueryAnalyticsHubListingSubscription#ack_deadline_seconds}
  */
  readonly ackDeadlineSeconds?: number;
  /**
  * Indicates whether the subscription is detached from its topic. Detached subscriptions don't
  * receive messages from their topic and don't retain any backlog. 'Pull' and 'StreamingPull'
  * requests will return FAILED_PRECONDITION. If the subscription is a push subscription, pushes
  * to the endpoint will not be made.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/bigquery_analytics_hub_listing_subscription#detached BigqueryAnalyticsHubListingSubscription#detached}
  */
  readonly detached?: boolean | cdktn.IResolvable;
  /**
  * If true, Pub/Sub provides the following guarantees for the delivery of a message with a given
  * value of 'message_id' on this subscription: The message sent to a subscriber is guaranteed not
  * to be resent before the message's acknowledgement deadline expires. An acknowledged message will
  * not be resent to a subscriber. Note that subscribers may still receive multiple copies of a
  * message when 'enableExactlyOnceDelivery' is true if the message was published multiple times by
  * a publisher client. These copies are considered distinct by Pub/Sub and have distinct 'message_id'
  * values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/bigquery_analytics_hub_listing_subscription#enable_exactly_once_delivery BigqueryAnalyticsHubListingSubscription#enable_exactly_once_delivery}
  */
  readonly enableExactlyOnceDelivery?: boolean | cdktn.IResolvable;
  /**
  * If true, messages published with the same 'ordering_key' in 'PubsubMessage'
  * will be delivered to the subscribers in the order in which they are received
  * by the Pub/Sub system. Otherwise, they may be delivered in any order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/bigquery_analytics_hub_listing_subscription#enable_message_ordering BigqueryAnalyticsHubListingSubscription#enable_message_ordering}
  */
  readonly enableMessageOrdering?: boolean | cdktn.IResolvable;
  /**
  * An expression written in the Pub/Sub filter language. If non-empty, then only 'PubsubMessage's
  * whose 'attributes' field matches the filter are delivered on this subscription. If empty, then
  * no messages are filtered out.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/bigquery_analytics_hub_listing_subscription#filter BigqueryAnalyticsHubListingSubscription#filter}
  */
  readonly filter?: string;
  /**
  * See [Creating and managing labels](https://cloud.google.com/pubsub/docs/labels).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/bigquery_analytics_hub_listing_subscription#labels BigqueryAnalyticsHubListingSubscription#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * How long to retain unacknowledged messages in the subscription's backlog, from the moment a
  * message is published. If 'retainAckedMessages' is true, then this also configures the retention
  * of acknowledged messages, and thus configures how far back in time a Seek can be done. Defaults
  * to 7 days. Cannot be more than 31 days or less than 10 minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/bigquery_analytics_hub_listing_subscription#message_retention_duration BigqueryAnalyticsHubListingSubscription#message_retention_duration}
  */
  readonly messageRetentionDuration?: string;
  /**
  * Name of the subscription. Format is 'projects/{project}/subscriptions/{sub}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/bigquery_analytics_hub_listing_subscription#name BigqueryAnalyticsHubListingSubscription#name}
  */
  readonly name: string;
  /**
  * Indicates whether to retain acknowledged messages. If true, then messages are not expunged from
  * the subscription's backlog, even if they are acknowledged, until they fall out of the
  * 'messageRetentionDuration' window. This must be true if you would like to Seek to a timestamp
  * in the past to replay previously-acknowledged messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/bigquery_analytics_hub_listing_subscription#retain_acked_messages BigqueryAnalyticsHubListingSubscription#retain_acked_messages}
  */
  readonly retainAckedMessages?: boolean | cdktn.IResolvable;
  /**
  * bigquery_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/bigquery_analytics_hub_listing_subscription#bigquery_config BigqueryAnalyticsHubListingSubscription#bigquery_config}
  */
  readonly bigqueryConfig?: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig;
  /**
  * cloud_storage_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/bigquery_analytics_hub_listing_subscription#cloud_storage_config BigqueryAnalyticsHubListingSubscription#cloud_storage_config}
  */
  readonly cloudStorageConfig?: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig;
  /**
  * dead_letter_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/bigquery_analytics_hub_listing_subscription#dead_letter_policy BigqueryAnalyticsHubListingSubscription#dead_letter_policy}
  */
  readonly deadLetterPolicy?: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy;
  /**
  * expiration_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/bigquery_analytics_hub_listing_subscription#expiration_policy BigqueryAnalyticsHubListingSubscription#expiration_policy}
  */
  readonly expirationPolicy?: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy;
  /**
  * push_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/bigquery_analytics_hub_listing_subscription#push_config BigqueryAnalyticsHubListingSubscription#push_config}
  */
  readonly pushConfig?: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig;
  /**
  * retry_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/bigquery_analytics_hub_listing_subscription#retry_policy BigqueryAnalyticsHubListingSubscription#retry_policy}
  */
  readonly retryPolicy?: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy;
}

export function bigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionToTerraform(struct?: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference | BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    ack_deadline_seconds: cdktn.numberToTerraform(struct!.ackDeadlineSeconds),
    detached: cdktn.booleanToTerraform(struct!.detached),
    enable_exactly_once_delivery: cdktn.booleanToTerraform(struct!.enableExactlyOnceDelivery),
    enable_message_ordering: cdktn.booleanToTerraform(struct!.enableMessageOrdering),
    filter: cdktn.stringToTerraform(struct!.filter),
    labels: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.labels),
    message_retention_duration: cdktn.stringToTerraform(struct!.messageRetentionDuration),
    name: cdktn.stringToTerraform(struct!.name),
    retain_acked_messages: cdktn.booleanToTerraform(struct!.retainAckedMessages),
    bigquery_config: bigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigToTerraform(struct!.bigqueryConfig),
    cloud_storage_config: bigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigToTerraform(struct!.cloudStorageConfig),
    dead_letter_policy: bigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyToTerraform(struct!.deadLetterPolicy),
    expiration_policy: bigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyToTerraform(struct!.expirationPolicy),
    push_config: bigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigToTerraform(struct!.pushConfig),
    retry_policy: bigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyToTerraform(struct!.retryPolicy),
  }
}


export function bigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionToHclTerraform(struct?: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference | BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    ack_deadline_seconds: {
      value: cdktn.numberToHclTerraform(struct!.ackDeadlineSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    detached: {
      value: cdktn.booleanToHclTerraform(struct!.detached),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_exactly_once_delivery: {
      value: cdktn.booleanToHclTerraform(struct!.enableExactlyOnceDelivery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_message_ordering: {
      value: cdktn.booleanToHclTerraform(struct!.enableMessageOrdering),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    filter: {
      value: cdktn.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    message_retention_duration: {
      value: cdktn.stringToHclTerraform(struct!.messageRetentionDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retain_acked_messages: {
      value: cdktn.booleanToHclTerraform(struct!.retainAckedMessages),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bigquery_config: {
      value: bigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigToHclTerraform(struct!.bigqueryConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigList",
    },
    cloud_storage_config: {
      value: bigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigToHclTerraform(struct!.cloudStorageConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigList",
    },
    dead_letter_policy: {
      value: bigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyToHclTerraform(struct!.deadLetterPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyList",
    },
    expiration_policy: {
      value: bigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyToHclTerraform(struct!.expirationPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyList",
    },
    push_config: {
      value: bigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigToHclTerraform(struct!.pushConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigList",
    },
    retry_policy: {
      value: bigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyToHclTerraform(struct!.retryPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ackDeadlineSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.ackDeadlineSeconds = this._ackDeadlineSeconds;
    }
    if (this._detached !== undefined) {
      hasAnyValues = true;
      internalValueResult.detached = this._detached;
    }
    if (this._enableExactlyOnceDelivery !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableExactlyOnceDelivery = this._enableExactlyOnceDelivery;
    }
    if (this._enableMessageOrdering !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableMessageOrdering = this._enableMessageOrdering;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._messageRetentionDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageRetentionDuration = this._messageRetentionDuration;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._retainAckedMessages !== undefined) {
      hasAnyValues = true;
      internalValueResult.retainAckedMessages = this._retainAckedMessages;
    }
    if (this._bigqueryConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigqueryConfig = this._bigqueryConfig?.internalValue;
    }
    if (this._cloudStorageConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudStorageConfig = this._cloudStorageConfig?.internalValue;
    }
    if (this._deadLetterPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadLetterPolicy = this._deadLetterPolicy?.internalValue;
    }
    if (this._expirationPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationPolicy = this._expirationPolicy?.internalValue;
    }
    if (this._pushConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pushConfig = this._pushConfig?.internalValue;
    }
    if (this._retryPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryPolicy = this._retryPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ackDeadlineSeconds = undefined;
      this._detached = undefined;
      this._enableExactlyOnceDelivery = undefined;
      this._enableMessageOrdering = undefined;
      this._filter = undefined;
      this._labels = undefined;
      this._messageRetentionDuration = undefined;
      this._name = undefined;
      this._retainAckedMessages = undefined;
      this._bigqueryConfig.internalValue = undefined;
      this._cloudStorageConfig.internalValue = undefined;
      this._deadLetterPolicy.internalValue = undefined;
      this._expirationPolicy.internalValue = undefined;
      this._pushConfig.internalValue = undefined;
      this._retryPolicy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ackDeadlineSeconds = value.ackDeadlineSeconds;
      this._detached = value.detached;
      this._enableExactlyOnceDelivery = value.enableExactlyOnceDelivery;
      this._enableMessageOrdering = value.enableMessageOrdering;
      this._filter = value.filter;
      this._labels = value.labels;
      this._messageRetentionDuration = value.messageRetentionDuration;
      this._name = value.name;
      this._retainAckedMessages = value.retainAckedMessages;
      this._bigqueryConfig.internalValue = value.bigqueryConfig;
      this._cloudStorageConfig.internalValue = value.cloudStorageConfig;
      this._deadLetterPolicy.internalValue = value.deadLetterPolicy;
      this._expirationPolicy.internalValue = value.expirationPolicy;
      this._pushConfig.internalValue = value.pushConfig;
      this._retryPolicy.internalValue = value.retryPolicy;
    }
  }

  // ack_deadline_seconds - computed: false, optional: true, required: false
  private _ackDeadlineSeconds?: number; 
  public get ackDeadlineSeconds() {
    return this.getNumberAttribute('ack_deadline_seconds');
  }
  public set ackDeadlineSeconds(value: number) {
    this._ackDeadlineSeconds = value;
  }
  public resetAckDeadlineSeconds() {
    this._ackDeadlineSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackDeadlineSecondsInput() {
    return this._ackDeadlineSeconds;
  }

  // detached - computed: false, optional: true, required: false
  private _detached?: boolean | cdktn.IResolvable; 
  public get detached() {
    return this.getBooleanAttribute('detached');
  }
  public set detached(value: boolean | cdktn.IResolvable) {
    this._detached = value;
  }
  public resetDetached() {
    this._detached = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detachedInput() {
    return this._detached;
  }

  // enable_exactly_once_delivery - computed: false, optional: true, required: false
  private _enableExactlyOnceDelivery?: boolean | cdktn.IResolvable; 
  public get enableExactlyOnceDelivery() {
    return this.getBooleanAttribute('enable_exactly_once_delivery');
  }
  public set enableExactlyOnceDelivery(value: boolean | cdktn.IResolvable) {
    this._enableExactlyOnceDelivery = value;
  }
  public resetEnableExactlyOnceDelivery() {
    this._enableExactlyOnceDelivery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableExactlyOnceDeliveryInput() {
    return this._enableExactlyOnceDelivery;
  }

  // enable_message_ordering - computed: false, optional: true, required: false
  private _enableMessageOrdering?: boolean | cdktn.IResolvable; 
  public get enableMessageOrdering() {
    return this.getBooleanAttribute('enable_message_ordering');
  }
  public set enableMessageOrdering(value: boolean | cdktn.IResolvable) {
    this._enableMessageOrdering = value;
  }
  public resetEnableMessageOrdering() {
    this._enableMessageOrdering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMessageOrderingInput() {
    return this._enableMessageOrdering;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // message_retention_duration - computed: false, optional: true, required: false
  private _messageRetentionDuration?: string; 
  public get messageRetentionDuration() {
    return this.getStringAttribute('message_retention_duration');
  }
  public set messageRetentionDuration(value: string) {
    this._messageRetentionDuration = value;
  }
  public resetMessageRetentionDuration() {
    this._messageRetentionDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageRetentionDurationInput() {
    return this._messageRetentionDuration;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // retain_acked_messages - computed: false, optional: true, required: false
  private _retainAckedMessages?: boolean | cdktn.IResolvable; 
  public get retainAckedMessages() {
    return this.getBooleanAttribute('retain_acked_messages');
  }
  public set retainAckedMessages(value: boolean | cdktn.IResolvable) {
    this._retainAckedMessages = value;
  }
  public resetRetainAckedMessages() {
    this._retainAckedMessages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainAckedMessagesInput() {
    return this._retainAckedMessages;
  }

  // bigquery_config - computed: false, optional: true, required: false
  private _bigqueryConfig = new BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfigOutputReference(this, "bigquery_config");
  public get bigqueryConfig() {
    return this._bigqueryConfig;
  }
  public putBigqueryConfig(value: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionBigqueryConfig) {
    this._bigqueryConfig.internalValue = value;
  }
  public resetBigqueryConfig() {
    this._bigqueryConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryConfigInput() {
    return this._bigqueryConfig.internalValue;
  }

  // cloud_storage_config - computed: false, optional: true, required: false
  private _cloudStorageConfig = new BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfigOutputReference(this, "cloud_storage_config");
  public get cloudStorageConfig() {
    return this._cloudStorageConfig;
  }
  public putCloudStorageConfig(value: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionCloudStorageConfig) {
    this._cloudStorageConfig.internalValue = value;
  }
  public resetCloudStorageConfig() {
    this._cloudStorageConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudStorageConfigInput() {
    return this._cloudStorageConfig.internalValue;
  }

  // dead_letter_policy - computed: false, optional: true, required: false
  private _deadLetterPolicy = new BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicyOutputReference(this, "dead_letter_policy");
  public get deadLetterPolicy() {
    return this._deadLetterPolicy;
  }
  public putDeadLetterPolicy(value: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionDeadLetterPolicy) {
    this._deadLetterPolicy.internalValue = value;
  }
  public resetDeadLetterPolicy() {
    this._deadLetterPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadLetterPolicyInput() {
    return this._deadLetterPolicy.internalValue;
  }

  // expiration_policy - computed: false, optional: true, required: false
  private _expirationPolicy = new BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicyOutputReference(this, "expiration_policy");
  public get expirationPolicy() {
    return this._expirationPolicy;
  }
  public putExpirationPolicy(value: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionExpirationPolicy) {
    this._expirationPolicy.internalValue = value;
  }
  public resetExpirationPolicy() {
    this._expirationPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationPolicyInput() {
    return this._expirationPolicy.internalValue;
  }

  // push_config - computed: false, optional: true, required: false
  private _pushConfig = new BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfigOutputReference(this, "push_config");
  public get pushConfig() {
    return this._pushConfig;
  }
  public putPushConfig(value: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionPushConfig) {
    this._pushConfig.internalValue = value;
  }
  public resetPushConfig() {
    this._pushConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushConfigInput() {
    return this._pushConfig.internalValue;
  }

  // retry_policy - computed: false, optional: true, required: false
  private _retryPolicy = new BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicyOutputReference(this, "retry_policy");
  public get retryPolicy() {
    return this._retryPolicy;
  }
  public putRetryPolicy(value: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionRetryPolicy) {
    this._retryPolicy.internalValue = value;
  }
  public resetRetryPolicy() {
    this._retryPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryPolicyInput() {
    return this._retryPolicy.internalValue;
  }
}
export interface BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription {
  /**
  * pubsub_subscription block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/bigquery_analytics_hub_listing_subscription#pubsub_subscription BigqueryAnalyticsHubListingSubscription#pubsub_subscription}
  */
  readonly pubsubSubscription: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription;
}

export function bigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionToTerraform(struct?: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference | BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    pubsub_subscription: bigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionToTerraform(struct!.pubsubSubscription),
  }
}


export function bigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionToHclTerraform(struct?: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference | BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    pubsub_subscription: {
      value: bigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionToHclTerraform(struct!.pubsubSubscription),
      isBlock: true,
      type: "list",
      storageClassType: "BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pubsubSubscription?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pubsubSubscription = this._pubsubSubscription?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pubsubSubscription.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pubsubSubscription.internalValue = value.pubsubSubscription;
    }
  }

  // pubsub_subscription - computed: false, optional: false, required: true
  private _pubsubSubscription = new BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscriptionOutputReference(this, "pubsub_subscription");
  public get pubsubSubscription() {
    return this._pubsubSubscription;
  }
  public putPubsubSubscription(value: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionPubsubSubscription) {
    this._pubsubSubscription.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pubsubSubscriptionInput() {
    return this._pubsubSubscription.internalValue;
  }
}
export interface BigqueryAnalyticsHubListingSubscriptionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/bigquery_analytics_hub_listing_subscription#create BigqueryAnalyticsHubListingSubscription#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/bigquery_analytics_hub_listing_subscription#delete BigqueryAnalyticsHubListingSubscription#delete}
  */
  readonly delete?: string;
}

export function bigqueryAnalyticsHubListingSubscriptionTimeoutsToTerraform(struct?: BigqueryAnalyticsHubListingSubscriptionTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
  }
}


export function bigqueryAnalyticsHubListingSubscriptionTimeoutsToHclTerraform(struct?: BigqueryAnalyticsHubListingSubscriptionTimeouts | cdktn.IResolvable): any {
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

export class BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BigqueryAnalyticsHubListingSubscriptionTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BigqueryAnalyticsHubListingSubscriptionTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/bigquery_analytics_hub_listing_subscription google_bigquery_analytics_hub_listing_subscription}
*/
export class BigqueryAnalyticsHubListingSubscription extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_bigquery_analytics_hub_listing_subscription";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a BigqueryAnalyticsHubListingSubscription resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BigqueryAnalyticsHubListingSubscription to import
  * @param importFromId The id of the existing BigqueryAnalyticsHubListingSubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/bigquery_analytics_hub_listing_subscription#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BigqueryAnalyticsHubListingSubscription to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_bigquery_analytics_hub_listing_subscription", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/bigquery_analytics_hub_listing_subscription google_bigquery_analytics_hub_listing_subscription} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BigqueryAnalyticsHubListingSubscriptionConfig
  */
  public constructor(scope: Construct, id: string, config: BigqueryAnalyticsHubListingSubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'google_bigquery_analytics_hub_listing_subscription',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '8.5.0',
        providerVersionConstraint: '~> 8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dataExchangeId = config.dataExchangeId;
    this._deletionPolicy = config.deletionPolicy;
    this._id = config.id;
    this._listingId = config.listingId;
    this._location = config.location;
    this._project = config.project;
    this._destinationDataset.internalValue = config.destinationDataset;
    this._destinationPubsubSubscription.internalValue = config.destinationPubsubSubscription;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // commercial_info - computed: true, optional: false, required: false
  private _commercialInfo = new BigqueryAnalyticsHubListingSubscriptionCommercialInfoList(this, "commercial_info", false);
  public get commercialInfo() {
    return this._commercialInfo;
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // data_exchange_id - computed: false, optional: false, required: true
  private _dataExchangeId?: string; 
  public get dataExchangeId() {
    return this.getStringAttribute('data_exchange_id');
  }
  public set dataExchangeId(value: string) {
    this._dataExchangeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataExchangeIdInput() {
    return this._dataExchangeId;
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

  // last_modify_time - computed: true, optional: false, required: false
  public get lastModifyTime() {
    return this.getStringAttribute('last_modify_time');
  }

  // linked_dataset_map - computed: true, optional: false, required: false
  private _linkedDatasetMap = new BigqueryAnalyticsHubListingSubscriptionLinkedDatasetMapList(this, "linked_dataset_map", true);
  public get linkedDatasetMap() {
    return this._linkedDatasetMap;
  }

  // linked_resources - computed: true, optional: false, required: false
  private _linkedResources = new BigqueryAnalyticsHubListingSubscriptionLinkedResourcesList(this, "linked_resources", false);
  public get linkedResources() {
    return this._linkedResources;
  }

  // listing_id - computed: false, optional: false, required: true
  private _listingId?: string; 
  public get listingId() {
    return this.getStringAttribute('listing_id');
  }
  public set listingId(value: string) {
    this._listingId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listingIdInput() {
    return this._listingId;
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

  // log_linked_dataset_query_user_email - computed: true, optional: false, required: false
  public get logLinkedDatasetQueryUserEmail() {
    return this.getBooleanAttribute('log_linked_dataset_query_user_email');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // organization_display_name - computed: true, optional: false, required: false
  public get organizationDisplayName() {
    return this.getStringAttribute('organization_display_name');
  }

  // organization_id - computed: true, optional: false, required: false
  public get organizationId() {
    return this.getStringAttribute('organization_id');
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

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subscriber_contact - computed: true, optional: false, required: false
  public get subscriberContact() {
    return this.getStringAttribute('subscriber_contact');
  }

  // subscription_id - computed: true, optional: false, required: false
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }

  // destination_dataset - computed: false, optional: true, required: false
  private _destinationDataset = new BigqueryAnalyticsHubListingSubscriptionDestinationDatasetOutputReference(this, "destination_dataset");
  public get destinationDataset() {
    return this._destinationDataset;
  }
  public putDestinationDataset(value: BigqueryAnalyticsHubListingSubscriptionDestinationDataset) {
    this._destinationDataset.internalValue = value;
  }
  public resetDestinationDataset() {
    this._destinationDataset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationDatasetInput() {
    return this._destinationDataset.internalValue;
  }

  // destination_pubsub_subscription - computed: false, optional: true, required: false
  private _destinationPubsubSubscription = new BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionOutputReference(this, "destination_pubsub_subscription");
  public get destinationPubsubSubscription() {
    return this._destinationPubsubSubscription;
  }
  public putDestinationPubsubSubscription(value: BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscription) {
    this._destinationPubsubSubscription.internalValue = value;
  }
  public resetDestinationPubsubSubscription() {
    this._destinationPubsubSubscription.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPubsubSubscriptionInput() {
    return this._destinationPubsubSubscription.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BigqueryAnalyticsHubListingSubscriptionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BigqueryAnalyticsHubListingSubscriptionTimeouts) {
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
      data_exchange_id: cdktn.stringToTerraform(this._dataExchangeId),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      id: cdktn.stringToTerraform(this._id),
      listing_id: cdktn.stringToTerraform(this._listingId),
      location: cdktn.stringToTerraform(this._location),
      project: cdktn.stringToTerraform(this._project),
      destination_dataset: bigqueryAnalyticsHubListingSubscriptionDestinationDatasetToTerraform(this._destinationDataset.internalValue),
      destination_pubsub_subscription: bigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionToTerraform(this._destinationPubsubSubscription.internalValue),
      timeouts: bigqueryAnalyticsHubListingSubscriptionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_exchange_id: {
        value: cdktn.stringToHclTerraform(this._dataExchangeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_policy: {
        value: cdktn.stringToHclTerraform(this._deletionPolicy),
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
      listing_id: {
        value: cdktn.stringToHclTerraform(this._listingId),
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
      destination_dataset: {
        value: bigqueryAnalyticsHubListingSubscriptionDestinationDatasetToHclTerraform(this._destinationDataset.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BigqueryAnalyticsHubListingSubscriptionDestinationDatasetList",
      },
      destination_pubsub_subscription: {
        value: bigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionToHclTerraform(this._destinationPubsubSubscription.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BigqueryAnalyticsHubListingSubscriptionDestinationPubsubSubscriptionList",
      },
      timeouts: {
        value: bigqueryAnalyticsHubListingSubscriptionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BigqueryAnalyticsHubListingSubscriptionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
