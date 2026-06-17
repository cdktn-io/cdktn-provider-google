/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/discovery_engine_data_connector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DiscoveryEngineDataConnectorConfig extends cdktn.TerraformMetaArguments {
  /**
  * Indicates whether full syncs are paused for this connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/discovery_engine_data_connector#auto_run_disabled DiscoveryEngineDataConnector#auto_run_disabled}
  */
  readonly autoRunDisabled?: boolean | cdktn.IResolvable;
  /**
  * The display name of the Collection.
  * Should be human readable, used to display collections in the Console
  * Dashboard. UTF-8 encoded string with limit of 1024 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/discovery_engine_data_connector#collection_display_name DiscoveryEngineDataConnector#collection_display_name}
  */
  readonly collectionDisplayName: string;
  /**
  * The ID to use for the Collection, which will become the final component
  * of the Collection's resource name. A new Collection is created as
  * part of the DataConnector setup. DataConnector is a singleton
  * resource under Collection, managing all DataStores of the Collection.
  * This field must conform to [RFC-1034](https://tools.ietf.org/html/rfc1034)
  * standard with a length limit of 63 characters. Otherwise, an
  * INVALID_ARGUMENT error is returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/discovery_engine_data_connector#collection_id DiscoveryEngineDataConnector#collection_id}
  */
  readonly collectionId: string;
  /**
  * The modes enabled for this connector. The possible value can be:
  * 'DATA_INGESTION', 'ACTIONS', 'FEDERATED'
  * 'EUA', 'FEDERATED_AND_EUA'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/discovery_engine_data_connector#connector_modes DiscoveryEngineDataConnector#connector_modes}
  */
  readonly connectorModes?: string[];
  /**
  * The identifier for the data source.
  * This is a partial list of supported connectors. Please refer to the
  * [documentation](https://docs.cloud.google.com/gemini/enterprise/docs/connectors/introduction-to-connectors-and-data-stores)
  * for the full list of connectors.
  * 
  * Supported first-party connectors include:
  * 
  * *   'bigquery'
  * *   'gcp_fhir'
  * *   'google_mail'
  * *   'google_drive'
  * *   'google_calendar'
  * *   'google_chat'
  * 
  * Supported third-party connectors include:
  * Generally available (GA) connectors:
  * 
  * *   'onedrive'
  * *   'outlook'
  * *   'confluence'
  * *   'jira'
  * *   'servicenow'
  * *   'sharepoint'
  * 
  * Preview connectors:
  * 
  * *   'asana'
  * *   'azure_active_directory'
  * *   'box'
  * *   'canva'
  * *   'confluence_server'
  * *   'custom_connector'
  * *   'docusign'
  * *   'dropbox'
  * *   'dynamics365'
  * *   'github'
  * *   'gitlab'
  * *   'hubspot'
  * *   'jira_server'
  * *   'linear'
  * *   'native_cloud_identity'
  * *   'notion'
  * *   'okta'
  * *   'pagerduty'
  * *   'peoplesoft'
  * *   'salesforce'
  * *   'shopify'
  * *   'slack'
  * *   'snowflake'
  * *   'teams'
  * *   'trello'
  * *   'workday'
  * *   'zendesk'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/discovery_engine_data_connector#data_source DiscoveryEngineDataConnector#data_source}
  */
  readonly dataSource: string;
  /**
  * The version of the data source. For example, '3' for Jira v3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/discovery_engine_data_connector#data_source_version DiscoveryEngineDataConnector#data_source_version}
  */
  readonly dataSourceVersion?: number;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/discovery_engine_data_connector#deletion_policy DiscoveryEngineDataConnector#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/discovery_engine_data_connector#id DiscoveryEngineDataConnector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The refresh interval specifically for incremental data syncs. If unset,
  * incremental syncs will use the default from env, set to 3hrs.
  * The minimum is 30 minutes and maximum is 7 days. Applicable to only 3P
  * connectors. When the refresh interval is
  * set to the same value as the incremental refresh interval, incremental
  * sync will be disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/discovery_engine_data_connector#incremental_refresh_interval DiscoveryEngineDataConnector#incremental_refresh_interval}
  */
  readonly incrementalRefreshInterval?: string;
  /**
  * Indicates whether incremental syncs are paused for this connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/discovery_engine_data_connector#incremental_sync_disabled DiscoveryEngineDataConnector#incremental_sync_disabled}
  */
  readonly incrementalSyncDisabled?: boolean | cdktn.IResolvable;
  /**
  * Params needed to access the source in the format of json string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/discovery_engine_data_connector#json_params DiscoveryEngineDataConnector#json_params}
  */
  readonly jsonParams?: string;
  /**
  * The KMS key to be used to protect the DataStores managed by this connector.
  * Must be set for requests that need to comply with CMEK Org Policy
  * protections.
  * If this field is set and processed successfully, the DataStores created by
  * this connector will be protected by the KMS key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/discovery_engine_data_connector#kms_key_name DiscoveryEngineDataConnector#kms_key_name}
  */
  readonly kmsKeyName?: string;
  /**
  * The geographic location where the data store should reside. The value can
  * only be one of "global", "us" and "eu".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/discovery_engine_data_connector#location DiscoveryEngineDataConnector#location}
  */
  readonly location: string;
  /**
  * Params needed to access the source in the format of String-to-String (Key, Value) pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/discovery_engine_data_connector#params DiscoveryEngineDataConnector#params}
  */
  readonly params?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/discovery_engine_data_connector#project DiscoveryEngineDataConnector#project}
  */
  readonly project?: string;
  /**
  * The refresh interval for data sync. If duration is set to 0, the data will
  * be synced in real time. The streaming feature is not supported yet. The
  * minimum is 30 minutes and maximum is 7 days. When the refresh interval is
  * set to the same value as the incremental refresh interval, incremental
  * sync will be disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/discovery_engine_data_connector#refresh_interval DiscoveryEngineDataConnector#refresh_interval}
  */
  readonly refreshInterval: string;
  /**
  * Whether customer has enabled static IP addresses for this connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/discovery_engine_data_connector#static_ip_enabled DiscoveryEngineDataConnector#static_ip_enabled}
  */
  readonly staticIpEnabled?: boolean | cdktn.IResolvable;
  /**
  * The data synchronization mode supported by the data connector. The possible value can be:
  * 'PERIODIC', 'STREAMING'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/discovery_engine_data_connector#sync_mode DiscoveryEngineDataConnector#sync_mode}
  */
  readonly syncMode?: string;
  /**
  * action_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/discovery_engine_data_connector#action_config DiscoveryEngineDataConnector#action_config}
  */
  readonly actionConfig?: DiscoveryEngineDataConnectorActionConfig;
  /**
  * bap_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/discovery_engine_data_connector#bap_config DiscoveryEngineDataConnector#bap_config}
  */
  readonly bapConfig?: DiscoveryEngineDataConnectorBapConfig;
  /**
  * destination_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/discovery_engine_data_connector#destination_configs DiscoveryEngineDataConnector#destination_configs}
  */
  readonly destinationConfigs?: DiscoveryEngineDataConnectorDestinationConfigs[] | cdktn.IResolvable;
  /**
  * entities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/discovery_engine_data_connector#entities DiscoveryEngineDataConnector#entities}
  */
  readonly entities?: DiscoveryEngineDataConnectorEntities[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/discovery_engine_data_connector#timeouts DiscoveryEngineDataConnector#timeouts}
  */
  readonly timeouts?: DiscoveryEngineDataConnectorTimeouts;
}
export interface DiscoveryEngineDataConnectorErrors {
}

export function discoveryEngineDataConnectorErrorsToTerraform(struct?: DiscoveryEngineDataConnectorErrors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function discoveryEngineDataConnectorErrorsToHclTerraform(struct?: DiscoveryEngineDataConnectorErrors): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DiscoveryEngineDataConnectorErrorsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DiscoveryEngineDataConnectorErrors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryEngineDataConnectorErrors | undefined) {
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

export class DiscoveryEngineDataConnectorErrorsList extends cdktn.ComplexList {

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
  public get(index: number): DiscoveryEngineDataConnectorErrorsOutputReference {
    return new DiscoveryEngineDataConnectorErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DiscoveryEngineDataConnectorActionConfig {
  /**
  * Params needed to configure the actions in the format of
  * String-to-String (Key, Value) pairs. Contains connection
  * credentials and configuration for the action connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/discovery_engine_data_connector#action_params DiscoveryEngineDataConnector#action_params}
  */
  readonly actionParams?: { [key: string]: string };
  /**
  * Whether to create a BAP (Business Application Platform) connection
  * for this action connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/discovery_engine_data_connector#create_bap_connection DiscoveryEngineDataConnector#create_bap_connection}
  */
  readonly createBapConnection?: boolean | cdktn.IResolvable;
}

export function discoveryEngineDataConnectorActionConfigToTerraform(struct?: DiscoveryEngineDataConnectorActionConfigOutputReference | DiscoveryEngineDataConnectorActionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    action_params: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.actionParams),
    create_bap_connection: cdktn.booleanToTerraform(struct!.createBapConnection),
  }
}


export function discoveryEngineDataConnectorActionConfigToHclTerraform(struct?: DiscoveryEngineDataConnectorActionConfigOutputReference | DiscoveryEngineDataConnectorActionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    action_params: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.actionParams),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    create_bap_connection: {
      value: cdktn.booleanToHclTerraform(struct!.createBapConnection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryEngineDataConnectorActionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryEngineDataConnectorActionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionParams = this._actionParams;
    }
    if (this._createBapConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.createBapConnection = this._createBapConnection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryEngineDataConnectorActionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionParams = undefined;
      this._createBapConnection = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionParams = value.actionParams;
      this._createBapConnection = value.createBapConnection;
    }
  }

  // action_params - computed: false, optional: true, required: false
  private _actionParams?: { [key: string]: string }; 
  public get actionParams() {
    return this.getStringMapAttribute('action_params');
  }
  public set actionParams(value: { [key: string]: string }) {
    this._actionParams = value;
  }
  public resetActionParams() {
    this._actionParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionParamsInput() {
    return this._actionParams;
  }

  // create_bap_connection - computed: false, optional: true, required: false
  private _createBapConnection?: boolean | cdktn.IResolvable; 
  public get createBapConnection() {
    return this.getBooleanAttribute('create_bap_connection');
  }
  public set createBapConnection(value: boolean | cdktn.IResolvable) {
    this._createBapConnection = value;
  }
  public resetCreateBapConnection() {
    this._createBapConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createBapConnectionInput() {
    return this._createBapConnection;
  }

  // is_action_configured - computed: true, optional: false, required: false
  public get isActionConfigured() {
    return this.getBooleanAttribute('is_action_configured');
  }
}
export interface DiscoveryEngineDataConnectorBapConfig {
  /**
  * The list of enabled actions for this connector. Supported
  * values include: 'create_issue', 'update_issue',
  * 'change_issue_status', 'create_comment', 'update_comment',
  * 'upload_attachment'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/discovery_engine_data_connector#enabled_actions DiscoveryEngineDataConnector#enabled_actions}
  */
  readonly enabledActions?: string[];
  /**
  * The connector modes supported by the BAP configuration.
  * The possible values include: 'ACTIONS'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/discovery_engine_data_connector#supported_connector_modes DiscoveryEngineDataConnector#supported_connector_modes}
  */
  readonly supportedConnectorModes?: string[];
}

export function discoveryEngineDataConnectorBapConfigToTerraform(struct?: DiscoveryEngineDataConnectorBapConfigOutputReference | DiscoveryEngineDataConnectorBapConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled_actions: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.enabledActions),
    supported_connector_modes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.supportedConnectorModes),
  }
}


export function discoveryEngineDataConnectorBapConfigToHclTerraform(struct?: DiscoveryEngineDataConnectorBapConfigOutputReference | DiscoveryEngineDataConnectorBapConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled_actions: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.enabledActions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    supported_connector_modes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.supportedConnectorModes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryEngineDataConnectorBapConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DiscoveryEngineDataConnectorBapConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabledActions !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledActions = this._enabledActions;
    }
    if (this._supportedConnectorModes !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportedConnectorModes = this._supportedConnectorModes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryEngineDataConnectorBapConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabledActions = undefined;
      this._supportedConnectorModes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabledActions = value.enabledActions;
      this._supportedConnectorModes = value.supportedConnectorModes;
    }
  }

  // enabled_actions - computed: false, optional: true, required: false
  private _enabledActions?: string[]; 
  public get enabledActions() {
    return this.getListAttribute('enabled_actions');
  }
  public set enabledActions(value: string[]) {
    this._enabledActions = value;
  }
  public resetEnabledActions() {
    this._enabledActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledActionsInput() {
    return this._enabledActions;
  }

  // supported_connector_modes - computed: false, optional: true, required: false
  private _supportedConnectorModes?: string[]; 
  public get supportedConnectorModes() {
    return this.getListAttribute('supported_connector_modes');
  }
  public set supportedConnectorModes(value: string[]) {
    this._supportedConnectorModes = value;
  }
  public resetSupportedConnectorModes() {
    this._supportedConnectorModes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedConnectorModesInput() {
    return this._supportedConnectorModes;
  }
}
export interface DiscoveryEngineDataConnectorDestinationConfigsDestinations {
  /**
  * The host of the destination, for example
  * 'https://example.atlassian.net'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/discovery_engine_data_connector#host DiscoveryEngineDataConnector#host}
  */
  readonly host?: string;
  /**
  * Target port number accepted by the destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/discovery_engine_data_connector#port DiscoveryEngineDataConnector#port}
  */
  readonly port?: number;
}

export function discoveryEngineDataConnectorDestinationConfigsDestinationsToTerraform(struct?: DiscoveryEngineDataConnectorDestinationConfigsDestinations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    host: cdktn.stringToTerraform(struct!.host),
    port: cdktn.numberToTerraform(struct!.port),
  }
}


export function discoveryEngineDataConnectorDestinationConfigsDestinationsToHclTerraform(struct?: DiscoveryEngineDataConnectorDestinationConfigsDestinations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    host: {
      value: cdktn.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktn.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DiscoveryEngineDataConnectorDestinationConfigsDestinations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryEngineDataConnectorDestinationConfigsDestinations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}

export class DiscoveryEngineDataConnectorDestinationConfigsDestinationsList extends cdktn.ComplexList {
  public internalValue? : DiscoveryEngineDataConnectorDestinationConfigsDestinations[] | cdktn.IResolvable

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
  public get(index: number): DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference {
    return new DiscoveryEngineDataConnectorDestinationConfigsDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DiscoveryEngineDataConnectorDestinationConfigs {
  /**
  * The key of the destination configuration, for example 'url'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/discovery_engine_data_connector#key DiscoveryEngineDataConnector#key}
  */
  readonly key?: string;
  /**
  * Additional parameters for this destination config in structured json format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/discovery_engine_data_connector#params DiscoveryEngineDataConnector#params}
  */
  readonly params?: string;
  /**
  * destinations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/discovery_engine_data_connector#destinations DiscoveryEngineDataConnector#destinations}
  */
  readonly destinations?: DiscoveryEngineDataConnectorDestinationConfigsDestinations[] | cdktn.IResolvable;
}

export function discoveryEngineDataConnectorDestinationConfigsToTerraform(struct?: DiscoveryEngineDataConnectorDestinationConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    key: cdktn.stringToTerraform(struct!.key),
    params: cdktn.stringToTerraform(struct!.params),
    destinations: cdktn.listMapper(discoveryEngineDataConnectorDestinationConfigsDestinationsToTerraform, true)(struct!.destinations),
  }
}


export function discoveryEngineDataConnectorDestinationConfigsToHclTerraform(struct?: DiscoveryEngineDataConnectorDestinationConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    key: {
      value: cdktn.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    params: {
      value: cdktn.stringToHclTerraform(struct!.params),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destinations: {
      value: cdktn.listMapperHcl(discoveryEngineDataConnectorDestinationConfigsDestinationsToHclTerraform, true)(struct!.destinations),
      isBlock: true,
      type: "list",
      storageClassType: "DiscoveryEngineDataConnectorDestinationConfigsDestinationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryEngineDataConnectorDestinationConfigsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DiscoveryEngineDataConnectorDestinationConfigs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._params !== undefined) {
      hasAnyValues = true;
      internalValueResult.params = this._params;
    }
    if (this._destinations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinations = this._destinations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryEngineDataConnectorDestinationConfigs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._params = undefined;
      this._destinations.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._params = value.params;
      this._destinations.internalValue = value.destinations;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // params - computed: false, optional: true, required: false
  private _params?: string; 
  public get params() {
    return this.getStringAttribute('params');
  }
  public set params(value: string) {
    this._params = value;
  }
  public resetParams() {
    this._params = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params;
  }

  // destinations - computed: false, optional: true, required: false
  private _destinations = new DiscoveryEngineDataConnectorDestinationConfigsDestinationsList(this, "destinations", false);
  public get destinations() {
    return this._destinations;
  }
  public putDestinations(value: DiscoveryEngineDataConnectorDestinationConfigsDestinations[] | cdktn.IResolvable) {
    this._destinations.internalValue = value;
  }
  public resetDestinations() {
    this._destinations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationsInput() {
    return this._destinations.internalValue;
  }
}

export class DiscoveryEngineDataConnectorDestinationConfigsList extends cdktn.ComplexList {
  public internalValue? : DiscoveryEngineDataConnectorDestinationConfigs[] | cdktn.IResolvable

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
  public get(index: number): DiscoveryEngineDataConnectorDestinationConfigsOutputReference {
    return new DiscoveryEngineDataConnectorDestinationConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DiscoveryEngineDataConnectorEntities {
  /**
  * The name of the entity. Supported values by data source:
  * * Salesforce: 'Lead', 'Opportunity', 'Contact', 'Account', 'Case', 'Contract', 'Campaign'
  * * Jira: project, issue, attachment, comment, worklog
  * * Confluence: 'Content', 'Space'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/discovery_engine_data_connector#entity_name DiscoveryEngineDataConnector#entity_name}
  */
  readonly entityName?: string;
  /**
  * Attributes for indexing.
  * Key: Field name.
  * Value: The key property to map a field to, such as 'title', and
  * 'description'. Supported key properties:
  * * 'title': The title for data record. This would be displayed on search
  *   results.
  * * 'description': The description for data record. This would be displayed
  *   on search results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/discovery_engine_data_connector#key_property_mappings DiscoveryEngineDataConnector#key_property_mappings}
  */
  readonly keyPropertyMappings?: { [key: string]: string };
  /**
  * The parameters for the entity to facilitate data ingestion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/discovery_engine_data_connector#params DiscoveryEngineDataConnector#params}
  */
  readonly params?: string;
}

export function discoveryEngineDataConnectorEntitiesToTerraform(struct?: DiscoveryEngineDataConnectorEntities | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    entity_name: cdktn.stringToTerraform(struct!.entityName),
    key_property_mappings: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.keyPropertyMappings),
    params: cdktn.stringToTerraform(struct!.params),
  }
}


export function discoveryEngineDataConnectorEntitiesToHclTerraform(struct?: DiscoveryEngineDataConnectorEntities | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    entity_name: {
      value: cdktn.stringToHclTerraform(struct!.entityName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_property_mappings: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.keyPropertyMappings),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    params: {
      value: cdktn.stringToHclTerraform(struct!.params),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DiscoveryEngineDataConnectorEntitiesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DiscoveryEngineDataConnectorEntities | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entityName !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityName = this._entityName;
    }
    if (this._keyPropertyMappings !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPropertyMappings = this._keyPropertyMappings;
    }
    if (this._params !== undefined) {
      hasAnyValues = true;
      internalValueResult.params = this._params;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DiscoveryEngineDataConnectorEntities | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entityName = undefined;
      this._keyPropertyMappings = undefined;
      this._params = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entityName = value.entityName;
      this._keyPropertyMappings = value.keyPropertyMappings;
      this._params = value.params;
    }
  }

  // data_store - computed: true, optional: false, required: false
  public get dataStore() {
    return this.getStringAttribute('data_store');
  }

  // entity_name - computed: false, optional: true, required: false
  private _entityName?: string; 
  public get entityName() {
    return this.getStringAttribute('entity_name');
  }
  public set entityName(value: string) {
    this._entityName = value;
  }
  public resetEntityName() {
    this._entityName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityNameInput() {
    return this._entityName;
  }

  // key_property_mappings - computed: true, optional: true, required: false
  private _keyPropertyMappings?: { [key: string]: string }; 
  public get keyPropertyMappings() {
    return this.getStringMapAttribute('key_property_mappings');
  }
  public set keyPropertyMappings(value: { [key: string]: string }) {
    this._keyPropertyMappings = value;
  }
  public resetKeyPropertyMappings() {
    this._keyPropertyMappings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPropertyMappingsInput() {
    return this._keyPropertyMappings;
  }

  // params - computed: false, optional: true, required: false
  private _params?: string; 
  public get params() {
    return this.getStringAttribute('params');
  }
  public set params(value: string) {
    this._params = value;
  }
  public resetParams() {
    this._params = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params;
  }
}

export class DiscoveryEngineDataConnectorEntitiesList extends cdktn.ComplexList {
  public internalValue? : DiscoveryEngineDataConnectorEntities[] | cdktn.IResolvable

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
  public get(index: number): DiscoveryEngineDataConnectorEntitiesOutputReference {
    return new DiscoveryEngineDataConnectorEntitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DiscoveryEngineDataConnectorTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/discovery_engine_data_connector#create DiscoveryEngineDataConnector#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/discovery_engine_data_connector#delete DiscoveryEngineDataConnector#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/discovery_engine_data_connector#update DiscoveryEngineDataConnector#update}
  */
  readonly update?: string;
}

export function discoveryEngineDataConnectorTimeoutsToTerraform(struct?: DiscoveryEngineDataConnectorTimeouts | cdktn.IResolvable): any {
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


export function discoveryEngineDataConnectorTimeoutsToHclTerraform(struct?: DiscoveryEngineDataConnectorTimeouts | cdktn.IResolvable): any {
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

export class DiscoveryEngineDataConnectorTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DiscoveryEngineDataConnectorTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DiscoveryEngineDataConnectorTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/discovery_engine_data_connector google_discovery_engine_data_connector}
*/
export class DiscoveryEngineDataConnector extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_discovery_engine_data_connector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DiscoveryEngineDataConnector resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DiscoveryEngineDataConnector to import
  * @param importFromId The id of the existing DiscoveryEngineDataConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/discovery_engine_data_connector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DiscoveryEngineDataConnector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_discovery_engine_data_connector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/discovery_engine_data_connector google_discovery_engine_data_connector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DiscoveryEngineDataConnectorConfig
  */
  public constructor(scope: Construct, id: string, config: DiscoveryEngineDataConnectorConfig) {
    super(scope, id, {
      terraformResourceType: 'google_discovery_engine_data_connector',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.37.0',
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
    this._autoRunDisabled = config.autoRunDisabled;
    this._collectionDisplayName = config.collectionDisplayName;
    this._collectionId = config.collectionId;
    this._connectorModes = config.connectorModes;
    this._dataSource = config.dataSource;
    this._dataSourceVersion = config.dataSourceVersion;
    this._deletionPolicy = config.deletionPolicy;
    this._id = config.id;
    this._incrementalRefreshInterval = config.incrementalRefreshInterval;
    this._incrementalSyncDisabled = config.incrementalSyncDisabled;
    this._jsonParams = config.jsonParams;
    this._kmsKeyName = config.kmsKeyName;
    this._location = config.location;
    this._params = config.params;
    this._project = config.project;
    this._refreshInterval = config.refreshInterval;
    this._staticIpEnabled = config.staticIpEnabled;
    this._syncMode = config.syncMode;
    this._actionConfig.internalValue = config.actionConfig;
    this._bapConfig.internalValue = config.bapConfig;
    this._destinationConfigs.internalValue = config.destinationConfigs;
    this._entities.internalValue = config.entities;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_state - computed: true, optional: false, required: false
  public get actionState() {
    return this.getStringAttribute('action_state');
  }

  // auto_run_disabled - computed: false, optional: true, required: false
  private _autoRunDisabled?: boolean | cdktn.IResolvable; 
  public get autoRunDisabled() {
    return this.getBooleanAttribute('auto_run_disabled');
  }
  public set autoRunDisabled(value: boolean | cdktn.IResolvable) {
    this._autoRunDisabled = value;
  }
  public resetAutoRunDisabled() {
    this._autoRunDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRunDisabledInput() {
    return this._autoRunDisabled;
  }

  // blocking_reasons - computed: true, optional: false, required: false
  public get blockingReasons() {
    return this.getListAttribute('blocking_reasons');
  }

  // collection_display_name - computed: false, optional: false, required: true
  private _collectionDisplayName?: string; 
  public get collectionDisplayName() {
    return this.getStringAttribute('collection_display_name');
  }
  public set collectionDisplayName(value: string) {
    this._collectionDisplayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionDisplayNameInput() {
    return this._collectionDisplayName;
  }

  // collection_id - computed: false, optional: false, required: true
  private _collectionId?: string; 
  public get collectionId() {
    return this.getStringAttribute('collection_id');
  }
  public set collectionId(value: string) {
    this._collectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionIdInput() {
    return this._collectionId;
  }

  // connector_modes - computed: false, optional: true, required: false
  private _connectorModes?: string[]; 
  public get connectorModes() {
    return this.getListAttribute('connector_modes');
  }
  public set connectorModes(value: string[]) {
    this._connectorModes = value;
  }
  public resetConnectorModes() {
    this._connectorModes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorModesInput() {
    return this._connectorModes;
  }

  // connector_type - computed: true, optional: false, required: false
  public get connectorType() {
    return this.getStringAttribute('connector_type');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // data_source - computed: false, optional: false, required: true
  private _dataSource?: string; 
  public get dataSource() {
    return this.getStringAttribute('data_source');
  }
  public set dataSource(value: string) {
    this._dataSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource;
  }

  // data_source_version - computed: true, optional: true, required: false
  private _dataSourceVersion?: number; 
  public get dataSourceVersion() {
    return this.getNumberAttribute('data_source_version');
  }
  public set dataSourceVersion(value: number) {
    this._dataSourceVersion = value;
  }
  public resetDataSourceVersion() {
    this._dataSourceVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceVersionInput() {
    return this._dataSourceVersion;
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

  // errors - computed: true, optional: false, required: false
  private _errors = new DiscoveryEngineDataConnectorErrorsList(this, "errors", false);
  public get errors() {
    return this._errors;
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

  // incremental_refresh_interval - computed: false, optional: true, required: false
  private _incrementalRefreshInterval?: string; 
  public get incrementalRefreshInterval() {
    return this.getStringAttribute('incremental_refresh_interval');
  }
  public set incrementalRefreshInterval(value: string) {
    this._incrementalRefreshInterval = value;
  }
  public resetIncrementalRefreshInterval() {
    this._incrementalRefreshInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incrementalRefreshIntervalInput() {
    return this._incrementalRefreshInterval;
  }

  // incremental_sync_disabled - computed: false, optional: true, required: false
  private _incrementalSyncDisabled?: boolean | cdktn.IResolvable; 
  public get incrementalSyncDisabled() {
    return this.getBooleanAttribute('incremental_sync_disabled');
  }
  public set incrementalSyncDisabled(value: boolean | cdktn.IResolvable) {
    this._incrementalSyncDisabled = value;
  }
  public resetIncrementalSyncDisabled() {
    this._incrementalSyncDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incrementalSyncDisabledInput() {
    return this._incrementalSyncDisabled;
  }

  // json_params - computed: false, optional: true, required: false
  private _jsonParams?: string; 
  public get jsonParams() {
    return this.getStringAttribute('json_params');
  }
  public set jsonParams(value: string) {
    this._jsonParams = value;
  }
  public resetJsonParams() {
    this._jsonParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonParamsInput() {
    return this._jsonParams;
  }

  // kms_key_name - computed: false, optional: true, required: false
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  public resetKmsKeyName() {
    this._kmsKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
  }

  // last_sync_time - computed: true, optional: false, required: false
  public get lastSyncTime() {
    return this.getStringAttribute('last_sync_time');
  }

  // latest_pause_time - computed: true, optional: false, required: false
  public get latestPauseTime() {
    return this.getStringAttribute('latest_pause_time');
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

  // params - computed: false, optional: true, required: false
  private _params?: { [key: string]: string }; 
  public get params() {
    return this.getStringMapAttribute('params');
  }
  public set params(value: { [key: string]: string }) {
    this._params = value;
  }
  public resetParams() {
    this._params = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params;
  }

  // private_connectivity_project_id - computed: true, optional: false, required: false
  public get privateConnectivityProjectId() {
    return this.getStringAttribute('private_connectivity_project_id');
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

  // realtime_state - computed: true, optional: false, required: false
  public get realtimeState() {
    return this.getStringAttribute('realtime_state');
  }

  // refresh_interval - computed: false, optional: false, required: true
  private _refreshInterval?: string; 
  public get refreshInterval() {
    return this.getStringAttribute('refresh_interval');
  }
  public set refreshInterval(value: string) {
    this._refreshInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshIntervalInput() {
    return this._refreshInterval;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // static_ip_addresses - computed: true, optional: false, required: false
  public get staticIpAddresses() {
    return this.getListAttribute('static_ip_addresses');
  }

  // static_ip_enabled - computed: false, optional: true, required: false
  private _staticIpEnabled?: boolean | cdktn.IResolvable; 
  public get staticIpEnabled() {
    return this.getBooleanAttribute('static_ip_enabled');
  }
  public set staticIpEnabled(value: boolean | cdktn.IResolvable) {
    this._staticIpEnabled = value;
  }
  public resetStaticIpEnabled() {
    this._staticIpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpEnabledInput() {
    return this._staticIpEnabled;
  }

  // sync_mode - computed: false, optional: true, required: false
  private _syncMode?: string; 
  public get syncMode() {
    return this.getStringAttribute('sync_mode');
  }
  public set syncMode(value: string) {
    this._syncMode = value;
  }
  public resetSyncMode() {
    this._syncMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncModeInput() {
    return this._syncMode;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // action_config - computed: false, optional: true, required: false
  private _actionConfig = new DiscoveryEngineDataConnectorActionConfigOutputReference(this, "action_config");
  public get actionConfig() {
    return this._actionConfig;
  }
  public putActionConfig(value: DiscoveryEngineDataConnectorActionConfig) {
    this._actionConfig.internalValue = value;
  }
  public resetActionConfig() {
    this._actionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionConfigInput() {
    return this._actionConfig.internalValue;
  }

  // bap_config - computed: false, optional: true, required: false
  private _bapConfig = new DiscoveryEngineDataConnectorBapConfigOutputReference(this, "bap_config");
  public get bapConfig() {
    return this._bapConfig;
  }
  public putBapConfig(value: DiscoveryEngineDataConnectorBapConfig) {
    this._bapConfig.internalValue = value;
  }
  public resetBapConfig() {
    this._bapConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bapConfigInput() {
    return this._bapConfig.internalValue;
  }

  // destination_configs - computed: false, optional: true, required: false
  private _destinationConfigs = new DiscoveryEngineDataConnectorDestinationConfigsList(this, "destination_configs", false);
  public get destinationConfigs() {
    return this._destinationConfigs;
  }
  public putDestinationConfigs(value: DiscoveryEngineDataConnectorDestinationConfigs[] | cdktn.IResolvable) {
    this._destinationConfigs.internalValue = value;
  }
  public resetDestinationConfigs() {
    this._destinationConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationConfigsInput() {
    return this._destinationConfigs.internalValue;
  }

  // entities - computed: false, optional: true, required: false
  private _entities = new DiscoveryEngineDataConnectorEntitiesList(this, "entities", false);
  public get entities() {
    return this._entities;
  }
  public putEntities(value: DiscoveryEngineDataConnectorEntities[] | cdktn.IResolvable) {
    this._entities.internalValue = value;
  }
  public resetEntities() {
    this._entities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entitiesInput() {
    return this._entities.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DiscoveryEngineDataConnectorTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DiscoveryEngineDataConnectorTimeouts) {
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
      auto_run_disabled: cdktn.booleanToTerraform(this._autoRunDisabled),
      collection_display_name: cdktn.stringToTerraform(this._collectionDisplayName),
      collection_id: cdktn.stringToTerraform(this._collectionId),
      connector_modes: cdktn.listMapper(cdktn.stringToTerraform, false)(this._connectorModes),
      data_source: cdktn.stringToTerraform(this._dataSource),
      data_source_version: cdktn.numberToTerraform(this._dataSourceVersion),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      id: cdktn.stringToTerraform(this._id),
      incremental_refresh_interval: cdktn.stringToTerraform(this._incrementalRefreshInterval),
      incremental_sync_disabled: cdktn.booleanToTerraform(this._incrementalSyncDisabled),
      json_params: cdktn.stringToTerraform(this._jsonParams),
      kms_key_name: cdktn.stringToTerraform(this._kmsKeyName),
      location: cdktn.stringToTerraform(this._location),
      params: cdktn.hashMapper(cdktn.stringToTerraform)(this._params),
      project: cdktn.stringToTerraform(this._project),
      refresh_interval: cdktn.stringToTerraform(this._refreshInterval),
      static_ip_enabled: cdktn.booleanToTerraform(this._staticIpEnabled),
      sync_mode: cdktn.stringToTerraform(this._syncMode),
      action_config: discoveryEngineDataConnectorActionConfigToTerraform(this._actionConfig.internalValue),
      bap_config: discoveryEngineDataConnectorBapConfigToTerraform(this._bapConfig.internalValue),
      destination_configs: cdktn.listMapper(discoveryEngineDataConnectorDestinationConfigsToTerraform, true)(this._destinationConfigs.internalValue),
      entities: cdktn.listMapper(discoveryEngineDataConnectorEntitiesToTerraform, true)(this._entities.internalValue),
      timeouts: discoveryEngineDataConnectorTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_run_disabled: {
        value: cdktn.booleanToHclTerraform(this._autoRunDisabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      collection_display_name: {
        value: cdktn.stringToHclTerraform(this._collectionDisplayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      collection_id: {
        value: cdktn.stringToHclTerraform(this._collectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connector_modes: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._connectorModes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      data_source: {
        value: cdktn.stringToHclTerraform(this._dataSource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_source_version: {
        value: cdktn.numberToHclTerraform(this._dataSourceVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      incremental_refresh_interval: {
        value: cdktn.stringToHclTerraform(this._incrementalRefreshInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      incremental_sync_disabled: {
        value: cdktn.booleanToHclTerraform(this._incrementalSyncDisabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      json_params: {
        value: cdktn.stringToHclTerraform(this._jsonParams),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_key_name: {
        value: cdktn.stringToHclTerraform(this._kmsKeyName),
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
      params: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._params),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      project: {
        value: cdktn.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      refresh_interval: {
        value: cdktn.stringToHclTerraform(this._refreshInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      static_ip_enabled: {
        value: cdktn.booleanToHclTerraform(this._staticIpEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sync_mode: {
        value: cdktn.stringToHclTerraform(this._syncMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_config: {
        value: discoveryEngineDataConnectorActionConfigToHclTerraform(this._actionConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DiscoveryEngineDataConnectorActionConfigList",
      },
      bap_config: {
        value: discoveryEngineDataConnectorBapConfigToHclTerraform(this._bapConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DiscoveryEngineDataConnectorBapConfigList",
      },
      destination_configs: {
        value: cdktn.listMapperHcl(discoveryEngineDataConnectorDestinationConfigsToHclTerraform, true)(this._destinationConfigs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DiscoveryEngineDataConnectorDestinationConfigsList",
      },
      entities: {
        value: cdktn.listMapperHcl(discoveryEngineDataConnectorEntitiesToHclTerraform, true)(this._entities.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DiscoveryEngineDataConnectorEntitiesList",
      },
      timeouts: {
        value: discoveryEngineDataConnectorTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DiscoveryEngineDataConnectorTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
