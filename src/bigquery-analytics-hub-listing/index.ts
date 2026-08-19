/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_listing
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface BigqueryAnalyticsHubListingConfig extends cdktn.TerraformMetaArguments {
  /**
  * If true, the listing is only available to get the resource metadata. Listing is non subscribable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_listing#allow_only_metadata_sharing BigqueryAnalyticsHubListing#allow_only_metadata_sharing}
  */
  readonly allowOnlyMetadataSharing?: boolean | cdktn.IResolvable;
  /**
  * Categories of the listing. Up to two categories are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_listing#categories BigqueryAnalyticsHubListing#categories}
  */
  readonly categories?: string[];
  /**
  * The ID of the data exchange. Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_listing#data_exchange_id BigqueryAnalyticsHubListing#data_exchange_id}
  */
  readonly dataExchangeId: string;
  /**
  * If the listing is commercial then this field must be set to true, otherwise a failure is thrown. This acts as a safety guard to avoid deleting commercial listings accidentally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_listing#delete_commercial BigqueryAnalyticsHubListing#delete_commercial}
  */
  readonly deleteCommercial?: boolean | cdktn.IResolvable;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_listing#deletion_policy BigqueryAnalyticsHubListing#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Short description of the listing. The description must not contain Unicode non-characters and C0 and C1 control codes except tabs (HT), new lines (LF), carriage returns (CR), and page breaks (FF).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_listing#description BigqueryAnalyticsHubListing#description}
  */
  readonly description?: string;
  /**
  * Specifies the type of discovery on the discovery page. Cannot be set for a restricted listing. Note that this does not control the visibility of the exchange/listing which is defined by IAM permission. Possible values: ["DISCOVERY_TYPE_PRIVATE", "DISCOVERY_TYPE_PUBLIC"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_listing#discovery_type BigqueryAnalyticsHubListing#discovery_type}
  */
  readonly discoveryType?: string;
  /**
  * Human-readable display name of the listing. The display name must contain only Unicode letters, numbers (0-9), underscores (_), dashes (-), spaces ( ), ampersands (&) and can't start or end with spaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_listing#display_name BigqueryAnalyticsHubListing#display_name}
  */
  readonly displayName: string;
  /**
  * Documentation describing the listing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_listing#documentation BigqueryAnalyticsHubListing#documentation}
  */
  readonly documentation?: string;
  /**
  * Base64 encoded image representing the listing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_listing#icon BigqueryAnalyticsHubListing#icon}
  */
  readonly icon?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_listing#id BigqueryAnalyticsHubListing#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the listing. Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_listing#listing_id BigqueryAnalyticsHubListing#listing_id}
  */
  readonly listingId: string;
  /**
  * The name of the location this data exchange listing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_listing#location BigqueryAnalyticsHubListing#location}
  */
  readonly location: string;
  /**
  * If true, subscriber email logging is enabled and all queries on the linked dataset will log the email address of the querying user. Once enabled, this setting cannot be turned off.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_listing#log_linked_dataset_query_user_email BigqueryAnalyticsHubListing#log_linked_dataset_query_user_email}
  */
  readonly logLinkedDatasetQueryUserEmail?: boolean | cdktn.IResolvable;
  /**
  * Email or URL of the primary point of contact of the listing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_listing#primary_contact BigqueryAnalyticsHubListing#primary_contact}
  */
  readonly primaryContact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_listing#project BigqueryAnalyticsHubListing#project}
  */
  readonly project?: string;
  /**
  * Email or URL of the request access of the listing. Subscribers can use this reference to request access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_listing#request_access BigqueryAnalyticsHubListing#request_access}
  */
  readonly requestAccess?: string;
  /**
  * bigquery_dataset block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_listing#bigquery_dataset BigqueryAnalyticsHubListing#bigquery_dataset}
  */
  readonly bigqueryDataset?: BigqueryAnalyticsHubListingBigqueryDataset;
  /**
  * data_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_listing#data_provider BigqueryAnalyticsHubListing#data_provider}
  */
  readonly dataProvider?: BigqueryAnalyticsHubListingDataProvider;
  /**
  * publisher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_listing#publisher BigqueryAnalyticsHubListing#publisher}
  */
  readonly publisher?: BigqueryAnalyticsHubListingPublisher;
  /**
  * pubsub_topic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_listing#pubsub_topic BigqueryAnalyticsHubListing#pubsub_topic}
  */
  readonly pubsubTopic?: BigqueryAnalyticsHubListingPubsubTopic;
  /**
  * restricted_export_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_listing#restricted_export_config BigqueryAnalyticsHubListing#restricted_export_config}
  */
  readonly restrictedExportConfig?: BigqueryAnalyticsHubListingRestrictedExportConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_listing#timeouts BigqueryAnalyticsHubListing#timeouts}
  */
  readonly timeouts?: BigqueryAnalyticsHubListingTimeouts;
}
export interface BigqueryAnalyticsHubListingCommercialInfoCloudMarketplace {
}

export function bigqueryAnalyticsHubListingCommercialInfoCloudMarketplaceToTerraform(struct?: BigqueryAnalyticsHubListingCommercialInfoCloudMarketplace): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bigqueryAnalyticsHubListingCommercialInfoCloudMarketplaceToHclTerraform(struct?: BigqueryAnalyticsHubListingCommercialInfoCloudMarketplace): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BigqueryAnalyticsHubListingCommercialInfoCloudMarketplaceOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BigqueryAnalyticsHubListingCommercialInfoCloudMarketplace | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryAnalyticsHubListingCommercialInfoCloudMarketplace | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // commercial_state - computed: true, optional: false, required: false
  public get commercialState() {
    return this.getStringAttribute('commercial_state');
  }

  // service - computed: true, optional: false, required: false
  public get service() {
    return this.getStringAttribute('service');
  }
}

export class BigqueryAnalyticsHubListingCommercialInfoCloudMarketplaceList extends cdktn.ComplexList {

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
  public get(index: number): BigqueryAnalyticsHubListingCommercialInfoCloudMarketplaceOutputReference {
    return new BigqueryAnalyticsHubListingCommercialInfoCloudMarketplaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BigqueryAnalyticsHubListingCommercialInfo {
}

export function bigqueryAnalyticsHubListingCommercialInfoToTerraform(struct?: BigqueryAnalyticsHubListingCommercialInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bigqueryAnalyticsHubListingCommercialInfoToHclTerraform(struct?: BigqueryAnalyticsHubListingCommercialInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BigqueryAnalyticsHubListingCommercialInfoOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BigqueryAnalyticsHubListingCommercialInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryAnalyticsHubListingCommercialInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cloud_marketplace - computed: true, optional: false, required: false
  private _cloudMarketplace = new BigqueryAnalyticsHubListingCommercialInfoCloudMarketplaceList(this, "cloud_marketplace", false);
  public get cloudMarketplace() {
    return this._cloudMarketplace;
  }
}

export class BigqueryAnalyticsHubListingCommercialInfoList extends cdktn.ComplexList {

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
  public get(index: number): BigqueryAnalyticsHubListingCommercialInfoOutputReference {
    return new BigqueryAnalyticsHubListingCommercialInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BigqueryAnalyticsHubListingBigqueryDatasetEffectiveReplicas {
}

export function bigqueryAnalyticsHubListingBigqueryDatasetEffectiveReplicasToTerraform(struct?: BigqueryAnalyticsHubListingBigqueryDatasetEffectiveReplicas): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function bigqueryAnalyticsHubListingBigqueryDatasetEffectiveReplicasToHclTerraform(struct?: BigqueryAnalyticsHubListingBigqueryDatasetEffectiveReplicas): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BigqueryAnalyticsHubListingBigqueryDatasetEffectiveReplicasOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BigqueryAnalyticsHubListingBigqueryDatasetEffectiveReplicas | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryAnalyticsHubListingBigqueryDatasetEffectiveReplicas | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // primary_state - computed: true, optional: false, required: false
  public get primaryState() {
    return this.getStringAttribute('primary_state');
  }

  // replica_state - computed: true, optional: false, required: false
  public get replicaState() {
    return this.getStringAttribute('replica_state');
  }
}

export class BigqueryAnalyticsHubListingBigqueryDatasetEffectiveReplicasList extends cdktn.ComplexList {

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
  public get(index: number): BigqueryAnalyticsHubListingBigqueryDatasetEffectiveReplicasOutputReference {
    return new BigqueryAnalyticsHubListingBigqueryDatasetEffectiveReplicasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources {
  /**
  * Format: For routine: projects/{projectId}/datasets/{datasetId}/routines/{routineId} Example:"projects/test_project/datasets/test_dataset/routines/test_routine"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_listing#routine BigqueryAnalyticsHubListing#routine}
  */
  readonly routine?: string;
  /**
  * Format: For table: projects/{projectId}/datasets/{datasetId}/tables/{tableId} Example:"projects/test_project/datasets/test_dataset/tables/test_table"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_listing#table BigqueryAnalyticsHubListing#table}
  */
  readonly table?: string;
}

export function bigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesToTerraform(struct?: BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    routine: cdktn.stringToTerraform(struct!.routine),
    table: cdktn.stringToTerraform(struct!.table),
  }
}


export function bigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesToHclTerraform(struct?: BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    routine: {
      value: cdktn.stringToHclTerraform(struct!.routine),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routine !== undefined) {
      hasAnyValues = true;
      internalValueResult.routine = this._routine;
    }
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._routine = undefined;
      this._table = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._routine = value.routine;
      this._table = value.table;
    }
  }

  // routine - computed: false, optional: true, required: false
  private _routine?: string; 
  public get routine() {
    return this.getStringAttribute('routine');
  }
  public set routine(value: string) {
    this._routine = value;
  }
  public resetRoutine() {
    this._routine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routineInput() {
    return this._routine;
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
}

export class BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList extends cdktn.ComplexList {
  public internalValue? : BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources[] | cdktn.IResolvable

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
  public get(index: number): BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference {
    return new BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BigqueryAnalyticsHubListingBigqueryDataset {
  /**
  * Resource name of the dataset source for this listing. e.g. projects/myproject/datasets/123
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_listing#dataset BigqueryAnalyticsHubListing#dataset}
  */
  readonly dataset: string;
  /**
  * A list of regions where the publisher has created shared dataset replicas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_listing#replica_locations BigqueryAnalyticsHubListing#replica_locations}
  */
  readonly replicaLocations?: string[];
  /**
  * selected_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_listing#selected_resources BigqueryAnalyticsHubListing#selected_resources}
  */
  readonly selectedResources?: BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources[] | cdktn.IResolvable;
}

export function bigqueryAnalyticsHubListingBigqueryDatasetToTerraform(struct?: BigqueryAnalyticsHubListingBigqueryDatasetOutputReference | BigqueryAnalyticsHubListingBigqueryDataset): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    dataset: cdktn.stringToTerraform(struct!.dataset),
    replica_locations: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.replicaLocations),
    selected_resources: cdktn.listMapper(bigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesToTerraform, true)(struct!.selectedResources),
  }
}


export function bigqueryAnalyticsHubListingBigqueryDatasetToHclTerraform(struct?: BigqueryAnalyticsHubListingBigqueryDatasetOutputReference | BigqueryAnalyticsHubListingBigqueryDataset): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    dataset: {
      value: cdktn.stringToHclTerraform(struct!.dataset),
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
    selected_resources: {
      value: cdktn.listMapperHcl(bigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesToHclTerraform, true)(struct!.selectedResources),
      isBlock: true,
      type: "list",
      storageClassType: "BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigqueryAnalyticsHubListingBigqueryDatasetOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryAnalyticsHubListingBigqueryDataset | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataset !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataset = this._dataset;
    }
    if (this._replicaLocations !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaLocations = this._replicaLocations;
    }
    if (this._selectedResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectedResources = this._selectedResources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryAnalyticsHubListingBigqueryDataset | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataset = undefined;
      this._replicaLocations = undefined;
      this._selectedResources.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataset = value.dataset;
      this._replicaLocations = value.replicaLocations;
      this._selectedResources.internalValue = value.selectedResources;
    }
  }

  // dataset - computed: false, optional: false, required: true
  private _dataset?: string; 
  public get dataset() {
    return this.getStringAttribute('dataset');
  }
  public set dataset(value: string) {
    this._dataset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetInput() {
    return this._dataset;
  }

  // effective_replicas - computed: true, optional: false, required: false
  private _effectiveReplicas = new BigqueryAnalyticsHubListingBigqueryDatasetEffectiveReplicasList(this, "effective_replicas", false);
  public get effectiveReplicas() {
    return this._effectiveReplicas;
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

  // selected_resources - computed: false, optional: true, required: false
  private _selectedResources = new BigqueryAnalyticsHubListingBigqueryDatasetSelectedResourcesList(this, "selected_resources", false);
  public get selectedResources() {
    return this._selectedResources;
  }
  public putSelectedResources(value: BigqueryAnalyticsHubListingBigqueryDatasetSelectedResources[] | cdktn.IResolvable) {
    this._selectedResources.internalValue = value;
  }
  public resetSelectedResources() {
    this._selectedResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedResourcesInput() {
    return this._selectedResources.internalValue;
  }
}
export interface BigqueryAnalyticsHubListingDataProvider {
  /**
  * Name of the data provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_listing#name BigqueryAnalyticsHubListing#name}
  */
  readonly name: string;
  /**
  * Email or URL of the data provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_listing#primary_contact BigqueryAnalyticsHubListing#primary_contact}
  */
  readonly primaryContact?: string;
}

export function bigqueryAnalyticsHubListingDataProviderToTerraform(struct?: BigqueryAnalyticsHubListingDataProviderOutputReference | BigqueryAnalyticsHubListingDataProvider): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    primary_contact: cdktn.stringToTerraform(struct!.primaryContact),
  }
}


export function bigqueryAnalyticsHubListingDataProviderToHclTerraform(struct?: BigqueryAnalyticsHubListingDataProviderOutputReference | BigqueryAnalyticsHubListingDataProvider): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_contact: {
      value: cdktn.stringToHclTerraform(struct!.primaryContact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigqueryAnalyticsHubListingDataProviderOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryAnalyticsHubListingDataProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._primaryContact !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryContact = this._primaryContact;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryAnalyticsHubListingDataProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._primaryContact = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._primaryContact = value.primaryContact;
    }
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

  // primary_contact - computed: false, optional: true, required: false
  private _primaryContact?: string; 
  public get primaryContact() {
    return this.getStringAttribute('primary_contact');
  }
  public set primaryContact(value: string) {
    this._primaryContact = value;
  }
  public resetPrimaryContact() {
    this._primaryContact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryContactInput() {
    return this._primaryContact;
  }
}
export interface BigqueryAnalyticsHubListingPublisher {
  /**
  * Name of the listing publisher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_listing#name BigqueryAnalyticsHubListing#name}
  */
  readonly name: string;
  /**
  * Email or URL of the listing publisher.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_listing#primary_contact BigqueryAnalyticsHubListing#primary_contact}
  */
  readonly primaryContact?: string;
}

export function bigqueryAnalyticsHubListingPublisherToTerraform(struct?: BigqueryAnalyticsHubListingPublisherOutputReference | BigqueryAnalyticsHubListingPublisher): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    name: cdktn.stringToTerraform(struct!.name),
    primary_contact: cdktn.stringToTerraform(struct!.primaryContact),
  }
}


export function bigqueryAnalyticsHubListingPublisherToHclTerraform(struct?: BigqueryAnalyticsHubListingPublisherOutputReference | BigqueryAnalyticsHubListingPublisher): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_contact: {
      value: cdktn.stringToHclTerraform(struct!.primaryContact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigqueryAnalyticsHubListingPublisherOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryAnalyticsHubListingPublisher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._primaryContact !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryContact = this._primaryContact;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryAnalyticsHubListingPublisher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._primaryContact = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._primaryContact = value.primaryContact;
    }
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

  // primary_contact - computed: false, optional: true, required: false
  private _primaryContact?: string; 
  public get primaryContact() {
    return this.getStringAttribute('primary_contact');
  }
  public set primaryContact(value: string) {
    this._primaryContact = value;
  }
  public resetPrimaryContact() {
    this._primaryContact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryContactInput() {
    return this._primaryContact;
  }
}
export interface BigqueryAnalyticsHubListingPubsubTopic {
  /**
  * Region hint on where the data might be published. Data affinity regions are modifiable.
  * See https://cloud.google.com/about/locations for full listing of possible Cloud regions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_listing#data_affinity_regions BigqueryAnalyticsHubListing#data_affinity_regions}
  */
  readonly dataAffinityRegions?: string[];
  /**
  * Resource name of the Pub/Sub topic source for this listing. e.g. projects/myproject/topics/topicId
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_listing#topic BigqueryAnalyticsHubListing#topic}
  */
  readonly topic: string;
}

export function bigqueryAnalyticsHubListingPubsubTopicToTerraform(struct?: BigqueryAnalyticsHubListingPubsubTopicOutputReference | BigqueryAnalyticsHubListingPubsubTopic): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    data_affinity_regions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.dataAffinityRegions),
    topic: cdktn.stringToTerraform(struct!.topic),
  }
}


export function bigqueryAnalyticsHubListingPubsubTopicToHclTerraform(struct?: BigqueryAnalyticsHubListingPubsubTopicOutputReference | BigqueryAnalyticsHubListingPubsubTopic): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    data_affinity_regions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.dataAffinityRegions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    topic: {
      value: cdktn.stringToHclTerraform(struct!.topic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigqueryAnalyticsHubListingPubsubTopicOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryAnalyticsHubListingPubsubTopic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataAffinityRegions !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataAffinityRegions = this._dataAffinityRegions;
    }
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryAnalyticsHubListingPubsubTopic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataAffinityRegions = undefined;
      this._topic = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataAffinityRegions = value.dataAffinityRegions;
      this._topic = value.topic;
    }
  }

  // data_affinity_regions - computed: false, optional: true, required: false
  private _dataAffinityRegions?: string[]; 
  public get dataAffinityRegions() {
    return cdktn.Fn.tolist(this.getListAttribute('data_affinity_regions'));
  }
  public set dataAffinityRegions(value: string[]) {
    this._dataAffinityRegions = value;
  }
  public resetDataAffinityRegions() {
    this._dataAffinityRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataAffinityRegionsInput() {
    return this._dataAffinityRegions;
  }

  // topic - computed: false, optional: false, required: true
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }
}
export interface BigqueryAnalyticsHubListingRestrictedExportConfig {
  /**
  * If true, enable restricted export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_listing#enabled BigqueryAnalyticsHubListing#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * If true, restrict export of query result derived from restricted linked dataset table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_listing#restrict_query_result BigqueryAnalyticsHubListing#restrict_query_result}
  */
  readonly restrictQueryResult?: boolean | cdktn.IResolvable;
}

export function bigqueryAnalyticsHubListingRestrictedExportConfigToTerraform(struct?: BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference | BigqueryAnalyticsHubListingRestrictedExportConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    restrict_query_result: cdktn.booleanToTerraform(struct!.restrictQueryResult),
  }
}


export function bigqueryAnalyticsHubListingRestrictedExportConfigToHclTerraform(struct?: BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference | BigqueryAnalyticsHubListingRestrictedExportConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restrict_query_result: {
      value: cdktn.booleanToHclTerraform(struct!.restrictQueryResult),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryAnalyticsHubListingRestrictedExportConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._restrictQueryResult !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictQueryResult = this._restrictQueryResult;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryAnalyticsHubListingRestrictedExportConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._restrictQueryResult = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._restrictQueryResult = value.restrictQueryResult;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // restrict_direct_table_access - computed: true, optional: false, required: false
  public get restrictDirectTableAccess() {
    return this.getBooleanAttribute('restrict_direct_table_access');
  }

  // restrict_query_result - computed: false, optional: true, required: false
  private _restrictQueryResult?: boolean | cdktn.IResolvable; 
  public get restrictQueryResult() {
    return this.getBooleanAttribute('restrict_query_result');
  }
  public set restrictQueryResult(value: boolean | cdktn.IResolvable) {
    this._restrictQueryResult = value;
  }
  public resetRestrictQueryResult() {
    this._restrictQueryResult = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictQueryResultInput() {
    return this._restrictQueryResult;
  }
}
export interface BigqueryAnalyticsHubListingTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_listing#create BigqueryAnalyticsHubListing#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_listing#delete BigqueryAnalyticsHubListing#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_listing#update BigqueryAnalyticsHubListing#update}
  */
  readonly update?: string;
}

export function bigqueryAnalyticsHubListingTimeoutsToTerraform(struct?: BigqueryAnalyticsHubListingTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function bigqueryAnalyticsHubListingTimeoutsToHclTerraform(struct?: BigqueryAnalyticsHubListingTimeouts | cdktn.IResolvable): any {
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
    update: {
      value: cdktn.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigqueryAnalyticsHubListingTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BigqueryAnalyticsHubListingTimeouts | cdktn.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryAnalyticsHubListingTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
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
      this._update = value.update;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_listing google_bigquery_analytics_hub_listing}
*/
export class BigqueryAnalyticsHubListing extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_bigquery_analytics_hub_listing";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a BigqueryAnalyticsHubListing resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BigqueryAnalyticsHubListing to import
  * @param importFromId The id of the existing BigqueryAnalyticsHubListing that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_listing#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BigqueryAnalyticsHubListing to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_bigquery_analytics_hub_listing", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/bigquery_analytics_hub_listing google_bigquery_analytics_hub_listing} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BigqueryAnalyticsHubListingConfig
  */
  public constructor(scope: Construct, id: string, config: BigqueryAnalyticsHubListingConfig) {
    super(scope, id, {
      terraformResourceType: 'google_bigquery_analytics_hub_listing',
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
    this._allowOnlyMetadataSharing = config.allowOnlyMetadataSharing;
    this._categories = config.categories;
    this._dataExchangeId = config.dataExchangeId;
    this._deleteCommercial = config.deleteCommercial;
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._discoveryType = config.discoveryType;
    this._displayName = config.displayName;
    this._documentation = config.documentation;
    this._icon = config.icon;
    this._id = config.id;
    this._listingId = config.listingId;
    this._location = config.location;
    this._logLinkedDatasetQueryUserEmail = config.logLinkedDatasetQueryUserEmail;
    this._primaryContact = config.primaryContact;
    this._project = config.project;
    this._requestAccess = config.requestAccess;
    this._bigqueryDataset.internalValue = config.bigqueryDataset;
    this._dataProvider.internalValue = config.dataProvider;
    this._publisher.internalValue = config.publisher;
    this._pubsubTopic.internalValue = config.pubsubTopic;
    this._restrictedExportConfig.internalValue = config.restrictedExportConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_only_metadata_sharing - computed: false, optional: true, required: false
  private _allowOnlyMetadataSharing?: boolean | cdktn.IResolvable; 
  public get allowOnlyMetadataSharing() {
    return this.getBooleanAttribute('allow_only_metadata_sharing');
  }
  public set allowOnlyMetadataSharing(value: boolean | cdktn.IResolvable) {
    this._allowOnlyMetadataSharing = value;
  }
  public resetAllowOnlyMetadataSharing() {
    this._allowOnlyMetadataSharing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOnlyMetadataSharingInput() {
    return this._allowOnlyMetadataSharing;
  }

  // categories - computed: false, optional: true, required: false
  private _categories?: string[]; 
  public get categories() {
    return this.getListAttribute('categories');
  }
  public set categories(value: string[]) {
    this._categories = value;
  }
  public resetCategories() {
    this._categories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoriesInput() {
    return this._categories;
  }

  // commercial_info - computed: true, optional: false, required: false
  private _commercialInfo = new BigqueryAnalyticsHubListingCommercialInfoList(this, "commercial_info", false);
  public get commercialInfo() {
    return this._commercialInfo;
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

  // delete_commercial - computed: false, optional: true, required: false
  private _deleteCommercial?: boolean | cdktn.IResolvable; 
  public get deleteCommercial() {
    return this.getBooleanAttribute('delete_commercial');
  }
  public set deleteCommercial(value: boolean | cdktn.IResolvable) {
    this._deleteCommercial = value;
  }
  public resetDeleteCommercial() {
    this._deleteCommercial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteCommercialInput() {
    return this._deleteCommercial;
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

  // discovery_type - computed: true, optional: true, required: false
  private _discoveryType?: string; 
  public get discoveryType() {
    return this.getStringAttribute('discovery_type');
  }
  public set discoveryType(value: string) {
    this._discoveryType = value;
  }
  public resetDiscoveryType() {
    this._discoveryType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryTypeInput() {
    return this._discoveryType;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // documentation - computed: false, optional: true, required: false
  private _documentation?: string; 
  public get documentation() {
    return this.getStringAttribute('documentation');
  }
  public set documentation(value: string) {
    this._documentation = value;
  }
  public resetDocumentation() {
    this._documentation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentationInput() {
    return this._documentation;
  }

  // icon - computed: false, optional: true, required: false
  private _icon?: string; 
  public get icon() {
    return this.getStringAttribute('icon');
  }
  public set icon(value: string) {
    this._icon = value;
  }
  public resetIcon() {
    this._icon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon;
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

  // log_linked_dataset_query_user_email - computed: false, optional: true, required: false
  private _logLinkedDatasetQueryUserEmail?: boolean | cdktn.IResolvable; 
  public get logLinkedDatasetQueryUserEmail() {
    return this.getBooleanAttribute('log_linked_dataset_query_user_email');
  }
  public set logLinkedDatasetQueryUserEmail(value: boolean | cdktn.IResolvable) {
    this._logLinkedDatasetQueryUserEmail = value;
  }
  public resetLogLinkedDatasetQueryUserEmail() {
    this._logLinkedDatasetQueryUserEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLinkedDatasetQueryUserEmailInput() {
    return this._logLinkedDatasetQueryUserEmail;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // primary_contact - computed: false, optional: true, required: false
  private _primaryContact?: string; 
  public get primaryContact() {
    return this.getStringAttribute('primary_contact');
  }
  public set primaryContact(value: string) {
    this._primaryContact = value;
  }
  public resetPrimaryContact() {
    this._primaryContact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryContactInput() {
    return this._primaryContact;
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

  // request_access - computed: false, optional: true, required: false
  private _requestAccess?: string; 
  public get requestAccess() {
    return this.getStringAttribute('request_access');
  }
  public set requestAccess(value: string) {
    this._requestAccess = value;
  }
  public resetRequestAccess() {
    this._requestAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestAccessInput() {
    return this._requestAccess;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // bigquery_dataset - computed: false, optional: true, required: false
  private _bigqueryDataset = new BigqueryAnalyticsHubListingBigqueryDatasetOutputReference(this, "bigquery_dataset");
  public get bigqueryDataset() {
    return this._bigqueryDataset;
  }
  public putBigqueryDataset(value: BigqueryAnalyticsHubListingBigqueryDataset) {
    this._bigqueryDataset.internalValue = value;
  }
  public resetBigqueryDataset() {
    this._bigqueryDataset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryDatasetInput() {
    return this._bigqueryDataset.internalValue;
  }

  // data_provider - computed: false, optional: true, required: false
  private _dataProvider = new BigqueryAnalyticsHubListingDataProviderOutputReference(this, "data_provider");
  public get dataProvider() {
    return this._dataProvider;
  }
  public putDataProvider(value: BigqueryAnalyticsHubListingDataProvider) {
    this._dataProvider.internalValue = value;
  }
  public resetDataProvider() {
    this._dataProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataProviderInput() {
    return this._dataProvider.internalValue;
  }

  // publisher - computed: false, optional: true, required: false
  private _publisher = new BigqueryAnalyticsHubListingPublisherOutputReference(this, "publisher");
  public get publisher() {
    return this._publisher;
  }
  public putPublisher(value: BigqueryAnalyticsHubListingPublisher) {
    this._publisher.internalValue = value;
  }
  public resetPublisher() {
    this._publisher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publisherInput() {
    return this._publisher.internalValue;
  }

  // pubsub_topic - computed: false, optional: true, required: false
  private _pubsubTopic = new BigqueryAnalyticsHubListingPubsubTopicOutputReference(this, "pubsub_topic");
  public get pubsubTopic() {
    return this._pubsubTopic;
  }
  public putPubsubTopic(value: BigqueryAnalyticsHubListingPubsubTopic) {
    this._pubsubTopic.internalValue = value;
  }
  public resetPubsubTopic() {
    this._pubsubTopic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pubsubTopicInput() {
    return this._pubsubTopic.internalValue;
  }

  // restricted_export_config - computed: false, optional: true, required: false
  private _restrictedExportConfig = new BigqueryAnalyticsHubListingRestrictedExportConfigOutputReference(this, "restricted_export_config");
  public get restrictedExportConfig() {
    return this._restrictedExportConfig;
  }
  public putRestrictedExportConfig(value: BigqueryAnalyticsHubListingRestrictedExportConfig) {
    this._restrictedExportConfig.internalValue = value;
  }
  public resetRestrictedExportConfig() {
    this._restrictedExportConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedExportConfigInput() {
    return this._restrictedExportConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BigqueryAnalyticsHubListingTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BigqueryAnalyticsHubListingTimeouts) {
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
      allow_only_metadata_sharing: cdktn.booleanToTerraform(this._allowOnlyMetadataSharing),
      categories: cdktn.listMapper(cdktn.stringToTerraform, false)(this._categories),
      data_exchange_id: cdktn.stringToTerraform(this._dataExchangeId),
      delete_commercial: cdktn.booleanToTerraform(this._deleteCommercial),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      description: cdktn.stringToTerraform(this._description),
      discovery_type: cdktn.stringToTerraform(this._discoveryType),
      display_name: cdktn.stringToTerraform(this._displayName),
      documentation: cdktn.stringToTerraform(this._documentation),
      icon: cdktn.stringToTerraform(this._icon),
      id: cdktn.stringToTerraform(this._id),
      listing_id: cdktn.stringToTerraform(this._listingId),
      location: cdktn.stringToTerraform(this._location),
      log_linked_dataset_query_user_email: cdktn.booleanToTerraform(this._logLinkedDatasetQueryUserEmail),
      primary_contact: cdktn.stringToTerraform(this._primaryContact),
      project: cdktn.stringToTerraform(this._project),
      request_access: cdktn.stringToTerraform(this._requestAccess),
      bigquery_dataset: bigqueryAnalyticsHubListingBigqueryDatasetToTerraform(this._bigqueryDataset.internalValue),
      data_provider: bigqueryAnalyticsHubListingDataProviderToTerraform(this._dataProvider.internalValue),
      publisher: bigqueryAnalyticsHubListingPublisherToTerraform(this._publisher.internalValue),
      pubsub_topic: bigqueryAnalyticsHubListingPubsubTopicToTerraform(this._pubsubTopic.internalValue),
      restricted_export_config: bigqueryAnalyticsHubListingRestrictedExportConfigToTerraform(this._restrictedExportConfig.internalValue),
      timeouts: bigqueryAnalyticsHubListingTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_only_metadata_sharing: {
        value: cdktn.booleanToHclTerraform(this._allowOnlyMetadataSharing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      categories: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._categories),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      data_exchange_id: {
        value: cdktn.stringToHclTerraform(this._dataExchangeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_commercial: {
        value: cdktn.booleanToHclTerraform(this._deleteCommercial),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
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
      discovery_type: {
        value: cdktn.stringToHclTerraform(this._discoveryType),
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
      documentation: {
        value: cdktn.stringToHclTerraform(this._documentation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icon: {
        value: cdktn.stringToHclTerraform(this._icon),
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
      log_linked_dataset_query_user_email: {
        value: cdktn.booleanToHclTerraform(this._logLinkedDatasetQueryUserEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      primary_contact: {
        value: cdktn.stringToHclTerraform(this._primaryContact),
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
      request_access: {
        value: cdktn.stringToHclTerraform(this._requestAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bigquery_dataset: {
        value: bigqueryAnalyticsHubListingBigqueryDatasetToHclTerraform(this._bigqueryDataset.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BigqueryAnalyticsHubListingBigqueryDatasetList",
      },
      data_provider: {
        value: bigqueryAnalyticsHubListingDataProviderToHclTerraform(this._dataProvider.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BigqueryAnalyticsHubListingDataProviderList",
      },
      publisher: {
        value: bigqueryAnalyticsHubListingPublisherToHclTerraform(this._publisher.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BigqueryAnalyticsHubListingPublisherList",
      },
      pubsub_topic: {
        value: bigqueryAnalyticsHubListingPubsubTopicToHclTerraform(this._pubsubTopic.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BigqueryAnalyticsHubListingPubsubTopicList",
      },
      restricted_export_config: {
        value: bigqueryAnalyticsHubListingRestrictedExportConfigToHclTerraform(this._restrictedExportConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BigqueryAnalyticsHubListingRestrictedExportConfigList",
      },
      timeouts: {
        value: bigqueryAnalyticsHubListingTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BigqueryAnalyticsHubListingTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
