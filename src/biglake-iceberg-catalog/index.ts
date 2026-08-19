/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/biglake_iceberg_catalog
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface BiglakeIcebergCatalogConfig extends cdktn.TerraformMetaArguments {
  /**
  * The catalog type of the IcebergCatalog.
  * * 'CATALOG_TYPE_GCS_BUCKET': Google Cloud Storage bucket catalog type.
  * * 'CATALOG_TYPE_BIGLAKE': BigLake catalog type.
  * * 'CATALOG_TYPE_FEDERATED': Federated catalog type, for integrating with external Iceberg REST Catalogs such as Databricks Unity Catalog or AWS Glue. Possible values: ["CATALOG_TYPE_GCS_BUCKET", "CATALOG_TYPE_BIGLAKE", "CATALOG_TYPE_FEDERATED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/biglake_iceberg_catalog#catalog_type BiglakeIcebergCatalog#catalog_type}
  */
  readonly catalogType: string;
  /**
  * The credential mode used for the catalog. CREDENTIAL_MODE_END_USER - End user credentials, default. The authenticating user must have access to the catalog resources and the corresponding Google Cloud Storage files. CREDENTIAL_MODE_VENDED_CREDENTIALS - Use credential vending. The authenticating user must have access to the catalog resources and the system will provide the caller with downscoped credentials to access the Google Cloud Storage files. All table operations in this mode would require 'X-Iceberg-Access-Delegation' header with 'vended-credentials' value included. System will generate a service account and the catalog administrator must grant the service account appropriate permissions. Possible values: ["CREDENTIAL_MODE_END_USER", "CREDENTIAL_MODE_VENDED_CREDENTIALS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/biglake_iceberg_catalog#credential_mode BiglakeIcebergCatalog#credential_mode}
  */
  readonly credentialMode?: string;
  /**
  * The default storage location for the catalog, e.g., 'gs://my-bucket'.
  * Output only when the catalog type is CATALOG_TYPE_GCS_BUCKET.
  * Required when the catalog type is CATALOG_TYPE_BIGLAKE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/biglake_iceberg_catalog#default_location BiglakeIcebergCatalog#default_location}
  */
  readonly defaultLocation?: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/biglake_iceberg_catalog#deletion_policy BiglakeIcebergCatalog#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * A user-provided description of the catalog. Maximum 1024 UTF-8 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/biglake_iceberg_catalog#description BiglakeIcebergCatalog#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/biglake_iceberg_catalog#id BiglakeIcebergCatalog#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the IcebergCatalog.
  * For CATALOG_TYPE_GCS_BUCKET typed catalogs, the name needs to be the
  * exact same value of the GCS bucket's name. For example, for a bucket:
  * gs://bucket-name, the catalog name will be exactly "bucket-name".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/biglake_iceberg_catalog#name BiglakeIcebergCatalog#name}
  */
  readonly name: string;
  /**
  * The primary location for mirroring the remote catalog metadata. It must be
  * a BigLake-supported location, and it should be proximate to the remote
  * catalog's location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/biglake_iceberg_catalog#primary_location BiglakeIcebergCatalog#primary_location}
  */
  readonly primaryLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/biglake_iceberg_catalog#project BiglakeIcebergCatalog#project}
  */
  readonly project?: string;
  /**
  * federated_catalog_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/biglake_iceberg_catalog#federated_catalog_options BiglakeIcebergCatalog#federated_catalog_options}
  */
  readonly federatedCatalogOptions?: BiglakeIcebergCatalogFederatedCatalogOptions;
  /**
  * restricted_locations_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/biglake_iceberg_catalog#restricted_locations_config BiglakeIcebergCatalog#restricted_locations_config}
  */
  readonly restrictedLocationsConfig?: BiglakeIcebergCatalogRestrictedLocationsConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/biglake_iceberg_catalog#timeouts BiglakeIcebergCatalog#timeouts}
  */
  readonly timeouts?: BiglakeIcebergCatalogTimeouts;
}
export interface BiglakeIcebergCatalogReplicas {
}

export function biglakeIcebergCatalogReplicasToTerraform(struct?: BiglakeIcebergCatalogReplicas): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function biglakeIcebergCatalogReplicasToHclTerraform(struct?: BiglakeIcebergCatalogReplicas): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BiglakeIcebergCatalogReplicasOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BiglakeIcebergCatalogReplicas | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BiglakeIcebergCatalogReplicas | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class BiglakeIcebergCatalogReplicasList extends cdktn.ComplexList {

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
  public get(index: number): BiglakeIcebergCatalogReplicasOutputReference {
    return new BiglakeIcebergCatalogReplicasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatus {
}

export function biglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusToTerraform(struct?: BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function biglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusToHclTerraform(struct?: BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatus | undefined) {
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

export class BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList extends cdktn.ComplexList {

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
  public get(index: number): BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference {
    return new BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatus {
}

export function biglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusToTerraform(struct?: BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function biglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusToHclTerraform(struct?: BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatus | undefined) {
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

  // status - computed: true, optional: false, required: false
  private _status = new BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList(this, "status", false);
  public get status() {
    return this._status;
  }
}

export class BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList extends cdktn.ComplexList {

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
  public get(index: number): BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference {
    return new BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo {
  /**
  * The AWS region where the Glue catalog is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/biglake_iceberg_catalog#aws_region BiglakeIcebergCatalog#aws_region}
  */
  readonly awsRegion: string;
  /**
  * The ARN of the AWS IAM role to assume for accessing the Glue catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/biglake_iceberg_catalog#aws_role_arn BiglakeIcebergCatalog#aws_role_arn}
  */
  readonly awsRoleArn: string;
  /**
  * The AWS Glue warehouse identifier (account ID or S3 table bucket).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/biglake_iceberg_catalog#warehouse BiglakeIcebergCatalog#warehouse}
  */
  readonly warehouse: string;
}

export function biglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoToTerraform(struct?: BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference | BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    aws_region: cdktn.stringToTerraform(struct!.awsRegion),
    aws_role_arn: cdktn.stringToTerraform(struct!.awsRoleArn),
    warehouse: cdktn.stringToTerraform(struct!.warehouse),
  }
}


export function biglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoToHclTerraform(struct?: BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference | BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    aws_region: {
      value: cdktn.stringToHclTerraform(struct!.awsRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_role_arn: {
      value: cdktn.stringToHclTerraform(struct!.awsRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warehouse: {
      value: cdktn.stringToHclTerraform(struct!.warehouse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegion = this._awsRegion;
    }
    if (this._awsRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRoleArn = this._awsRoleArn;
    }
    if (this._warehouse !== undefined) {
      hasAnyValues = true;
      internalValueResult.warehouse = this._warehouse;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsRegion = undefined;
      this._awsRoleArn = undefined;
      this._warehouse = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsRegion = value.awsRegion;
      this._awsRoleArn = value.awsRoleArn;
      this._warehouse = value.warehouse;
    }
  }

  // aws_region - computed: false, optional: false, required: true
  private _awsRegion?: string; 
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }
  public set awsRegion(value: string) {
    this._awsRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion;
  }

  // aws_role_arn - computed: false, optional: false, required: true
  private _awsRoleArn?: string; 
  public get awsRoleArn() {
    return this.getStringAttribute('aws_role_arn');
  }
  public set awsRoleArn(value: string) {
    this._awsRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRoleArnInput() {
    return this._awsRoleArn;
  }

  // warehouse - computed: false, optional: false, required: true
  private _warehouse?: string; 
  public get warehouse() {
    return this.getStringAttribute('warehouse');
  }
  public set warehouse(value: string) {
    this._warehouse = value;
  }
  // Temporarily expose input value. Use with caution.
  public get warehouseInput() {
    return this._warehouse;
  }
}
export interface BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule {
  /**
  * The interval between metadata refreshes, expressed as a duration
  * string (e.g., '300s').
  * The value must be at least 300s or 0s to disable refresh.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/biglake_iceberg_catalog#refresh_interval BiglakeIcebergCatalog#refresh_interval}
  */
  readonly refreshInterval?: string;
}

export function biglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleToTerraform(struct?: BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference | BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    refresh_interval: cdktn.stringToTerraform(struct!.refreshInterval),
  }
}


export function biglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleToHclTerraform(struct?: BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference | BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    refresh_interval: {
      value: cdktn.stringToHclTerraform(struct!.refreshInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._refreshInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshInterval = this._refreshInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._refreshInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._refreshInterval = value.refreshInterval;
    }
  }

  // refresh_interval - computed: false, optional: true, required: false
  private _refreshInterval?: string; 
  public get refreshInterval() {
    return this.getStringAttribute('refresh_interval');
  }
  public set refreshInterval(value: string) {
    this._refreshInterval = value;
  }
  public resetRefreshInterval() {
    this._refreshInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshIntervalInput() {
    return this._refreshInterval;
  }
}
export interface BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope {
  /**
  * A list of namespace filters to limit which namespaces are
  * synchronized from the remote catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/biglake_iceberg_catalog#namespace_filters BiglakeIcebergCatalog#namespace_filters}
  */
  readonly namespaceFilters?: string[];
}

export function biglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeToTerraform(struct?: BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference | BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    namespace_filters: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.namespaceFilters),
  }
}


export function biglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeToHclTerraform(struct?: BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference | BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    namespace_filters: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.namespaceFilters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespaceFilters !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceFilters = this._namespaceFilters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._namespaceFilters = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._namespaceFilters = value.namespaceFilters;
    }
  }

  // namespace_filters - computed: false, optional: true, required: false
  private _namespaceFilters?: string[]; 
  public get namespaceFilters() {
    return this.getListAttribute('namespace_filters');
  }
  public set namespaceFilters(value: string[]) {
    this._namespaceFilters = value;
  }
  public resetNamespaceFilters() {
    this._namespaceFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceFiltersInput() {
    return this._namespaceFilters;
  }
}
export interface BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions {
  /**
  * refresh_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/biglake_iceberg_catalog#refresh_schedule BiglakeIcebergCatalog#refresh_schedule}
  */
  readonly refreshSchedule?: BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule;
  /**
  * refresh_scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/biglake_iceberg_catalog#refresh_scope BiglakeIcebergCatalog#refresh_scope}
  */
  readonly refreshScope?: BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope;
}

export function biglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsToTerraform(struct?: BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference | BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    refresh_schedule: biglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleToTerraform(struct!.refreshSchedule),
    refresh_scope: biglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeToTerraform(struct!.refreshScope),
  }
}


export function biglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsToHclTerraform(struct?: BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference | BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    refresh_schedule: {
      value: biglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleToHclTerraform(struct!.refreshSchedule),
      isBlock: true,
      type: "list",
      storageClassType: "BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleList",
    },
    refresh_scope: {
      value: biglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeToHclTerraform(struct!.refreshScope),
      isBlock: true,
      type: "list",
      storageClassType: "BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._refreshSchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshSchedule = this._refreshSchedule?.internalValue;
    }
    if (this._refreshScope?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshScope = this._refreshScope?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._refreshSchedule.internalValue = undefined;
      this._refreshScope.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._refreshSchedule.internalValue = value.refreshSchedule;
      this._refreshScope.internalValue = value.refreshScope;
    }
  }

  // refresh_schedule - computed: false, optional: true, required: false
  private _refreshSchedule = new BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference(this, "refresh_schedule");
  public get refreshSchedule() {
    return this._refreshSchedule;
  }
  public putRefreshSchedule(value: BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule) {
    this._refreshSchedule.internalValue = value;
  }
  public resetRefreshSchedule() {
    this._refreshSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshScheduleInput() {
    return this._refreshSchedule.internalValue;
  }

  // refresh_scope - computed: false, optional: true, required: false
  private _refreshScope = new BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference(this, "refresh_scope");
  public get refreshScope() {
    return this._refreshScope;
  }
  public putRefreshScope(value: BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope) {
    this._refreshScope.internalValue = value;
  }
  public resetRefreshScope() {
    this._refreshScope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshScopeInput() {
    return this._refreshScope.internalValue;
  }
}
export interface BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo {
  /**
  * The name of the catalog within the Unity Catalog instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/biglake_iceberg_catalog#catalog_name BiglakeIcebergCatalog#catalog_name}
  */
  readonly catalogName: string;
  /**
  * The Databricks workspace instance name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/biglake_iceberg_catalog#instance_name BiglakeIcebergCatalog#instance_name}
  */
  readonly instanceName: string;
  /**
  * The application ID of the Databricks service principal for OIDC authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/biglake_iceberg_catalog#service_principal_application_id BiglakeIcebergCatalog#service_principal_application_id}
  */
  readonly servicePrincipalApplicationId?: string;
}

export function biglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoToTerraform(struct?: BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference | BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    catalog_name: cdktn.stringToTerraform(struct!.catalogName),
    instance_name: cdktn.stringToTerraform(struct!.instanceName),
    service_principal_application_id: cdktn.stringToTerraform(struct!.servicePrincipalApplicationId),
  }
}


export function biglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoToHclTerraform(struct?: BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference | BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    catalog_name: {
      value: cdktn.stringToHclTerraform(struct!.catalogName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_name: {
      value: cdktn.stringToHclTerraform(struct!.instanceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_principal_application_id: {
      value: cdktn.stringToHclTerraform(struct!.servicePrincipalApplicationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalogName !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogName = this._catalogName;
    }
    if (this._instanceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceName = this._instanceName;
    }
    if (this._servicePrincipalApplicationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePrincipalApplicationId = this._servicePrincipalApplicationId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._catalogName = undefined;
      this._instanceName = undefined;
      this._servicePrincipalApplicationId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._catalogName = value.catalogName;
      this._instanceName = value.instanceName;
      this._servicePrincipalApplicationId = value.servicePrincipalApplicationId;
    }
  }

  // catalog_name - computed: false, optional: false, required: true
  private _catalogName?: string; 
  public get catalogName() {
    return this.getStringAttribute('catalog_name');
  }
  public set catalogName(value: string) {
    this._catalogName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogNameInput() {
    return this._catalogName;
  }

  // instance_name - computed: false, optional: false, required: true
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // service_principal_application_id - computed: false, optional: true, required: false
  private _servicePrincipalApplicationId?: string; 
  public get servicePrincipalApplicationId() {
    return this.getStringAttribute('service_principal_application_id');
  }
  public set servicePrincipalApplicationId(value: string) {
    this._servicePrincipalApplicationId = value;
  }
  public resetServicePrincipalApplicationId() {
    this._servicePrincipalApplicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePrincipalApplicationIdInput() {
    return this._servicePrincipalApplicationId;
  }
}
export interface BiglakeIcebergCatalogFederatedCatalogOptions {
  /**
  * The secret resource name in Secret Manager, in the format
  * 'projects/{projectId}/locations/{location}/secrets/{secret_id}'.
  * Used to store credentials for authenticating with the remote catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/biglake_iceberg_catalog#secret_name BiglakeIcebergCatalog#secret_name}
  */
  readonly secretName?: string;
  /**
  * The Service Directory service name for private network connectivity
  * through Cross-Cloud Interconnect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/biglake_iceberg_catalog#service_directory_name BiglakeIcebergCatalog#service_directory_name}
  */
  readonly serviceDirectoryName?: string;
  /**
  * glue_catalog_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/biglake_iceberg_catalog#glue_catalog_info BiglakeIcebergCatalog#glue_catalog_info}
  */
  readonly glueCatalogInfo?: BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo;
  /**
  * refresh_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/biglake_iceberg_catalog#refresh_options BiglakeIcebergCatalog#refresh_options}
  */
  readonly refreshOptions?: BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions;
  /**
  * unity_catalog_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/biglake_iceberg_catalog#unity_catalog_info BiglakeIcebergCatalog#unity_catalog_info}
  */
  readonly unityCatalogInfo?: BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo;
}

export function biglakeIcebergCatalogFederatedCatalogOptionsToTerraform(struct?: BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference | BiglakeIcebergCatalogFederatedCatalogOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    secret_name: cdktn.stringToTerraform(struct!.secretName),
    service_directory_name: cdktn.stringToTerraform(struct!.serviceDirectoryName),
    glue_catalog_info: biglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoToTerraform(struct!.glueCatalogInfo),
    refresh_options: biglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsToTerraform(struct!.refreshOptions),
    unity_catalog_info: biglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoToTerraform(struct!.unityCatalogInfo),
  }
}


export function biglakeIcebergCatalogFederatedCatalogOptionsToHclTerraform(struct?: BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference | BiglakeIcebergCatalogFederatedCatalogOptions): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    secret_name: {
      value: cdktn.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_directory_name: {
      value: cdktn.stringToHclTerraform(struct!.serviceDirectoryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    glue_catalog_info: {
      value: biglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoToHclTerraform(struct!.glueCatalogInfo),
      isBlock: true,
      type: "list",
      storageClassType: "BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoList",
    },
    refresh_options: {
      value: biglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsToHclTerraform(struct!.refreshOptions),
      isBlock: true,
      type: "list",
      storageClassType: "BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsList",
    },
    unity_catalog_info: {
      value: biglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoToHclTerraform(struct!.unityCatalogInfo),
      isBlock: true,
      type: "list",
      storageClassType: "BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BiglakeIcebergCatalogFederatedCatalogOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    if (this._serviceDirectoryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceDirectoryName = this._serviceDirectoryName;
    }
    if (this._glueCatalogInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.glueCatalogInfo = this._glueCatalogInfo?.internalValue;
    }
    if (this._refreshOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshOptions = this._refreshOptions?.internalValue;
    }
    if (this._unityCatalogInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unityCatalogInfo = this._unityCatalogInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BiglakeIcebergCatalogFederatedCatalogOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretName = undefined;
      this._serviceDirectoryName = undefined;
      this._glueCatalogInfo.internalValue = undefined;
      this._refreshOptions.internalValue = undefined;
      this._unityCatalogInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretName = value.secretName;
      this._serviceDirectoryName = value.serviceDirectoryName;
      this._glueCatalogInfo.internalValue = value.glueCatalogInfo;
      this._refreshOptions.internalValue = value.refreshOptions;
      this._unityCatalogInfo.internalValue = value.unityCatalogInfo;
    }
  }

  // refresh_status - computed: true, optional: false, required: false
  private _refreshStatus = new BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList(this, "refresh_status", false);
  public get refreshStatus() {
    return this._refreshStatus;
  }

  // secret_name - computed: false, optional: true, required: false
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  public resetSecretName() {
    this._secretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }

  // service_directory_name - computed: false, optional: true, required: false
  private _serviceDirectoryName?: string; 
  public get serviceDirectoryName() {
    return this.getStringAttribute('service_directory_name');
  }
  public set serviceDirectoryName(value: string) {
    this._serviceDirectoryName = value;
  }
  public resetServiceDirectoryName() {
    this._serviceDirectoryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDirectoryNameInput() {
    return this._serviceDirectoryName;
  }

  // glue_catalog_info - computed: false, optional: true, required: false
  private _glueCatalogInfo = new BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference(this, "glue_catalog_info");
  public get glueCatalogInfo() {
    return this._glueCatalogInfo;
  }
  public putGlueCatalogInfo(value: BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo) {
    this._glueCatalogInfo.internalValue = value;
  }
  public resetGlueCatalogInfo() {
    this._glueCatalogInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glueCatalogInfoInput() {
    return this._glueCatalogInfo.internalValue;
  }

  // refresh_options - computed: false, optional: true, required: false
  private _refreshOptions = new BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference(this, "refresh_options");
  public get refreshOptions() {
    return this._refreshOptions;
  }
  public putRefreshOptions(value: BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions) {
    this._refreshOptions.internalValue = value;
  }
  public resetRefreshOptions() {
    this._refreshOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshOptionsInput() {
    return this._refreshOptions.internalValue;
  }

  // unity_catalog_info - computed: false, optional: true, required: false
  private _unityCatalogInfo = new BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference(this, "unity_catalog_info");
  public get unityCatalogInfo() {
    return this._unityCatalogInfo;
  }
  public putUnityCatalogInfo(value: BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo) {
    this._unityCatalogInfo.internalValue = value;
  }
  public resetUnityCatalogInfo() {
    this._unityCatalogInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unityCatalogInfoInput() {
    return this._unityCatalogInfo.internalValue;
  }
}
export interface BiglakeIcebergCatalogRestrictedLocationsConfig {
  /**
  * A list of GCS locations (e.g., 'gs://my-other-bucket/...') that are
  * permitted for use by resources within this catalog. Each entry can be
  * either a GCS bucket or a path within it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/biglake_iceberg_catalog#restricted_locations BiglakeIcebergCatalog#restricted_locations}
  */
  readonly restrictedLocations?: string[];
}

export function biglakeIcebergCatalogRestrictedLocationsConfigToTerraform(struct?: BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference | BiglakeIcebergCatalogRestrictedLocationsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    restricted_locations: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.restrictedLocations),
  }
}


export function biglakeIcebergCatalogRestrictedLocationsConfigToHclTerraform(struct?: BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference | BiglakeIcebergCatalogRestrictedLocationsConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    restricted_locations: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.restrictedLocations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BiglakeIcebergCatalogRestrictedLocationsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._restrictedLocations !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictedLocations = this._restrictedLocations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BiglakeIcebergCatalogRestrictedLocationsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._restrictedLocations = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._restrictedLocations = value.restrictedLocations;
    }
  }

  // restricted_locations - computed: false, optional: true, required: false
  private _restrictedLocations?: string[]; 
  public get restrictedLocations() {
    return this.getListAttribute('restricted_locations');
  }
  public set restrictedLocations(value: string[]) {
    this._restrictedLocations = value;
  }
  public resetRestrictedLocations() {
    this._restrictedLocations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedLocationsInput() {
    return this._restrictedLocations;
  }
}
export interface BiglakeIcebergCatalogTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/biglake_iceberg_catalog#create BiglakeIcebergCatalog#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/biglake_iceberg_catalog#delete BiglakeIcebergCatalog#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/biglake_iceberg_catalog#update BiglakeIcebergCatalog#update}
  */
  readonly update?: string;
}

export function biglakeIcebergCatalogTimeoutsToTerraform(struct?: BiglakeIcebergCatalogTimeouts | cdktn.IResolvable): any {
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


export function biglakeIcebergCatalogTimeoutsToHclTerraform(struct?: BiglakeIcebergCatalogTimeouts | cdktn.IResolvable): any {
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

export class BiglakeIcebergCatalogTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BiglakeIcebergCatalogTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BiglakeIcebergCatalogTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/biglake_iceberg_catalog google_biglake_iceberg_catalog}
*/
export class BiglakeIcebergCatalog extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_biglake_iceberg_catalog";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a BiglakeIcebergCatalog resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BiglakeIcebergCatalog to import
  * @param importFromId The id of the existing BiglakeIcebergCatalog that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/biglake_iceberg_catalog#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BiglakeIcebergCatalog to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_biglake_iceberg_catalog", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/biglake_iceberg_catalog google_biglake_iceberg_catalog} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BiglakeIcebergCatalogConfig
  */
  public constructor(scope: Construct, id: string, config: BiglakeIcebergCatalogConfig) {
    super(scope, id, {
      terraformResourceType: 'google_biglake_iceberg_catalog',
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
    this._catalogType = config.catalogType;
    this._credentialMode = config.credentialMode;
    this._defaultLocation = config.defaultLocation;
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._primaryLocation = config.primaryLocation;
    this._project = config.project;
    this._federatedCatalogOptions.internalValue = config.federatedCatalogOptions;
    this._restrictedLocationsConfig.internalValue = config.restrictedLocationsConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // biglake_service_account - computed: true, optional: false, required: false
  public get biglakeServiceAccount() {
    return this.getStringAttribute('biglake_service_account');
  }

  // biglake_service_account_id - computed: true, optional: false, required: false
  public get biglakeServiceAccountId() {
    return this.getStringAttribute('biglake_service_account_id');
  }

  // catalog_type - computed: false, optional: false, required: true
  private _catalogType?: string; 
  public get catalogType() {
    return this.getStringAttribute('catalog_type');
  }
  public set catalogType(value: string) {
    this._catalogType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogTypeInput() {
    return this._catalogType;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // credential_mode - computed: true, optional: true, required: false
  private _credentialMode?: string; 
  public get credentialMode() {
    return this.getStringAttribute('credential_mode');
  }
  public set credentialMode(value: string) {
    this._credentialMode = value;
  }
  public resetCredentialMode() {
    this._credentialMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialModeInput() {
    return this._credentialMode;
  }

  // default_location - computed: true, optional: true, required: false
  private _defaultLocation?: string; 
  public get defaultLocation() {
    return this.getStringAttribute('default_location');
  }
  public set defaultLocation(value: string) {
    this._defaultLocation = value;
  }
  public resetDefaultLocation() {
    this._defaultLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLocationInput() {
    return this._defaultLocation;
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

  // primary_location - computed: false, optional: true, required: false
  private _primaryLocation?: string; 
  public get primaryLocation() {
    return this.getStringAttribute('primary_location');
  }
  public set primaryLocation(value: string) {
    this._primaryLocation = value;
  }
  public resetPrimaryLocation() {
    this._primaryLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryLocationInput() {
    return this._primaryLocation;
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

  // replicas - computed: true, optional: false, required: false
  private _replicas = new BiglakeIcebergCatalogReplicasList(this, "replicas", false);
  public get replicas() {
    return this._replicas;
  }

  // storage_regions - computed: true, optional: false, required: false
  public get storageRegions() {
    return this.getListAttribute('storage_regions');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // federated_catalog_options - computed: false, optional: true, required: false
  private _federatedCatalogOptions = new BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference(this, "federated_catalog_options");
  public get federatedCatalogOptions() {
    return this._federatedCatalogOptions;
  }
  public putFederatedCatalogOptions(value: BiglakeIcebergCatalogFederatedCatalogOptions) {
    this._federatedCatalogOptions.internalValue = value;
  }
  public resetFederatedCatalogOptions() {
    this._federatedCatalogOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get federatedCatalogOptionsInput() {
    return this._federatedCatalogOptions.internalValue;
  }

  // restricted_locations_config - computed: false, optional: true, required: false
  private _restrictedLocationsConfig = new BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference(this, "restricted_locations_config");
  public get restrictedLocationsConfig() {
    return this._restrictedLocationsConfig;
  }
  public putRestrictedLocationsConfig(value: BiglakeIcebergCatalogRestrictedLocationsConfig) {
    this._restrictedLocationsConfig.internalValue = value;
  }
  public resetRestrictedLocationsConfig() {
    this._restrictedLocationsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedLocationsConfigInput() {
    return this._restrictedLocationsConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BiglakeIcebergCatalogTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BiglakeIcebergCatalogTimeouts) {
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
      catalog_type: cdktn.stringToTerraform(this._catalogType),
      credential_mode: cdktn.stringToTerraform(this._credentialMode),
      default_location: cdktn.stringToTerraform(this._defaultLocation),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      description: cdktn.stringToTerraform(this._description),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      primary_location: cdktn.stringToTerraform(this._primaryLocation),
      project: cdktn.stringToTerraform(this._project),
      federated_catalog_options: biglakeIcebergCatalogFederatedCatalogOptionsToTerraform(this._federatedCatalogOptions.internalValue),
      restricted_locations_config: biglakeIcebergCatalogRestrictedLocationsConfigToTerraform(this._restrictedLocationsConfig.internalValue),
      timeouts: biglakeIcebergCatalogTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      catalog_type: {
        value: cdktn.stringToHclTerraform(this._catalogType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credential_mode: {
        value: cdktn.stringToHclTerraform(this._credentialMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_location: {
        value: cdktn.stringToHclTerraform(this._defaultLocation),
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
      description: {
        value: cdktn.stringToHclTerraform(this._description),
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
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_location: {
        value: cdktn.stringToHclTerraform(this._primaryLocation),
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
      federated_catalog_options: {
        value: biglakeIcebergCatalogFederatedCatalogOptionsToHclTerraform(this._federatedCatalogOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BiglakeIcebergCatalogFederatedCatalogOptionsList",
      },
      restricted_locations_config: {
        value: biglakeIcebergCatalogRestrictedLocationsConfigToHclTerraform(this._restrictedLocationsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BiglakeIcebergCatalogRestrictedLocationsConfigList",
      },
      timeouts: {
        value: biglakeIcebergCatalogTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BiglakeIcebergCatalogTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
