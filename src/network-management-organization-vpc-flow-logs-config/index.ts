/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/network_management_organization_vpc_flow_logs_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface NetworkManagementOrganizationVpcFlowLogsConfigConfig extends cdktn.TerraformMetaArguments {
  /**
  * Optional. The aggregation interval for the logs. Default value is
  * INTERVAL_5_SEC.   Possible values: INTERVAL_5_SEC INTERVAL_30_SEC INTERVAL_1_MIN INTERVAL_5_MIN INTERVAL_10_MIN INTERVAL_15_MIN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/network_management_organization_vpc_flow_logs_config#aggregation_interval NetworkManagementOrganizationVpcFlowLogsConfig#aggregation_interval}
  */
  readonly aggregationInterval?: string;
  /**
  * Determines whether to include cross project annotations in the logs.
  * This field is available only for organization configurations. If not
  * specified in org configs will be set to CROSS_PROJECT_METADATA_ENABLED.
  * Possible values:
  * CROSS_PROJECT_METADATA_ENABLED
  * CROSS_PROJECT_METADATA_DISABLED Possible values: ["CROSS_PROJECT_METADATA_ENABLED", "CROSS_PROJECT_METADATA_DISABLED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/network_management_organization_vpc_flow_logs_config#cross_project_metadata NetworkManagementOrganizationVpcFlowLogsConfig#cross_project_metadata}
  */
  readonly crossProjectMetadata?: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/network_management_organization_vpc_flow_logs_config#deletion_policy NetworkManagementOrganizationVpcFlowLogsConfig#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Optional. The user-supplied description of the VPC Flow Logs configuration. Maximum
  * of 512 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/network_management_organization_vpc_flow_logs_config#description NetworkManagementOrganizationVpcFlowLogsConfig#description}
  */
  readonly description?: string;
  /**
  * Optional. Export filter used to define which VPC Flow Logs should be logged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/network_management_organization_vpc_flow_logs_config#filter_expr NetworkManagementOrganizationVpcFlowLogsConfig#filter_expr}
  */
  readonly filterExpr?: string;
  /**
  * Optional. The value of the field must be in (0, 1]. The sampling rate
  * of VPC Flow Logs where 1.0 means all collected logs are reported. Setting the
  * sampling rate to 0.0 is not allowed. If you want to disable VPC Flow Logs, use
  * the state field instead. Default value is 1.0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/network_management_organization_vpc_flow_logs_config#flow_sampling NetworkManagementOrganizationVpcFlowLogsConfig#flow_sampling}
  */
  readonly flowSampling?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/network_management_organization_vpc_flow_logs_config#id NetworkManagementOrganizationVpcFlowLogsConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Optional. Resource labels to represent the user-provided metadata.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/network_management_organization_vpc_flow_logs_config#labels NetworkManagementOrganizationVpcFlowLogsConfig#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource
  * within its parent collection as described in https://google.aip.dev/122. See documentation
  * for resource type 'networkmanagement.googleapis.com/VpcFlowLogsConfig'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/network_management_organization_vpc_flow_logs_config#location NetworkManagementOrganizationVpcFlowLogsConfig#location}
  */
  readonly location: string;
  /**
  * Optional. Configures whether all, none or a subset of metadata fields
  * should be added to the reported VPC flow logs. Default value is INCLUDE_ALL_METADATA.
  *   Possible values:  METADATA_UNSPECIFIED INCLUDE_ALL_METADATA EXCLUDE_ALL_METADATA CUSTOM_METADATA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/network_management_organization_vpc_flow_logs_config#metadata NetworkManagementOrganizationVpcFlowLogsConfig#metadata}
  */
  readonly metadata?: string;
  /**
  * Optional. Custom metadata fields to include in the reported VPC flow
  * logs. Can only be specified if \"metadata\" was set to CUSTOM_METADATA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/network_management_organization_vpc_flow_logs_config#metadata_fields NetworkManagementOrganizationVpcFlowLogsConfig#metadata_fields}
  */
  readonly metadataFields?: string[];
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/network_management_organization_vpc_flow_logs_config#organization NetworkManagementOrganizationVpcFlowLogsConfig#organization}
  */
  readonly organization: string;
  /**
  * Optional. The state of the VPC Flow Log configuration. Default value
  * is ENABLED. When creating a new configuration, it must be enabled.
  * Possible values: ENABLED DISABLED
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/network_management_organization_vpc_flow_logs_config#state NetworkManagementOrganizationVpcFlowLogsConfig#state}
  */
  readonly state?: string;
  /**
  * Required. ID of the 'VpcFlowLogsConfig'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/network_management_organization_vpc_flow_logs_config#vpc_flow_logs_config_id NetworkManagementOrganizationVpcFlowLogsConfig#vpc_flow_logs_config_id}
  */
  readonly vpcFlowLogsConfigId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/network_management_organization_vpc_flow_logs_config#timeouts NetworkManagementOrganizationVpcFlowLogsConfig#timeouts}
  */
  readonly timeouts?: NetworkManagementOrganizationVpcFlowLogsConfigTimeouts;
}
export interface NetworkManagementOrganizationVpcFlowLogsConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/network_management_organization_vpc_flow_logs_config#create NetworkManagementOrganizationVpcFlowLogsConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/network_management_organization_vpc_flow_logs_config#delete NetworkManagementOrganizationVpcFlowLogsConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/network_management_organization_vpc_flow_logs_config#update NetworkManagementOrganizationVpcFlowLogsConfig#update}
  */
  readonly update?: string;
}

export function networkManagementOrganizationVpcFlowLogsConfigTimeoutsToTerraform(struct?: NetworkManagementOrganizationVpcFlowLogsConfigTimeouts | cdktn.IResolvable): any {
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


export function networkManagementOrganizationVpcFlowLogsConfigTimeoutsToHclTerraform(struct?: NetworkManagementOrganizationVpcFlowLogsConfigTimeouts | cdktn.IResolvable): any {
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

export class NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkManagementOrganizationVpcFlowLogsConfigTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: NetworkManagementOrganizationVpcFlowLogsConfigTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/network_management_organization_vpc_flow_logs_config google_network_management_organization_vpc_flow_logs_config}
*/
export class NetworkManagementOrganizationVpcFlowLogsConfig extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_network_management_organization_vpc_flow_logs_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a NetworkManagementOrganizationVpcFlowLogsConfig resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkManagementOrganizationVpcFlowLogsConfig to import
  * @param importFromId The id of the existing NetworkManagementOrganizationVpcFlowLogsConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/network_management_organization_vpc_flow_logs_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkManagementOrganizationVpcFlowLogsConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_network_management_organization_vpc_flow_logs_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/network_management_organization_vpc_flow_logs_config google_network_management_organization_vpc_flow_logs_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkManagementOrganizationVpcFlowLogsConfigConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkManagementOrganizationVpcFlowLogsConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_network_management_organization_vpc_flow_logs_config',
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
    this._aggregationInterval = config.aggregationInterval;
    this._crossProjectMetadata = config.crossProjectMetadata;
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._filterExpr = config.filterExpr;
    this._flowSampling = config.flowSampling;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._metadata = config.metadata;
    this._metadataFields = config.metadataFields;
    this._organization = config.organization;
    this._state = config.state;
    this._vpcFlowLogsConfigId = config.vpcFlowLogsConfigId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aggregation_interval - computed: true, optional: true, required: false
  private _aggregationInterval?: string; 
  public get aggregationInterval() {
    return this.getStringAttribute('aggregation_interval');
  }
  public set aggregationInterval(value: string) {
    this._aggregationInterval = value;
  }
  public resetAggregationInterval() {
    this._aggregationInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationIntervalInput() {
    return this._aggregationInterval;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // cross_project_metadata - computed: true, optional: true, required: false
  private _crossProjectMetadata?: string; 
  public get crossProjectMetadata() {
    return this.getStringAttribute('cross_project_metadata');
  }
  public set crossProjectMetadata(value: string) {
    this._crossProjectMetadata = value;
  }
  public resetCrossProjectMetadata() {
    this._crossProjectMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crossProjectMetadataInput() {
    return this._crossProjectMetadata;
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

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktn.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // filter_expr - computed: false, optional: true, required: false
  private _filterExpr?: string; 
  public get filterExpr() {
    return this.getStringAttribute('filter_expr');
  }
  public set filterExpr(value: string) {
    this._filterExpr = value;
  }
  public resetFilterExpr() {
    this._filterExpr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterExprInput() {
    return this._filterExpr;
  }

  // flow_sampling - computed: true, optional: true, required: false
  private _flowSampling?: number; 
  public get flowSampling() {
    return this.getNumberAttribute('flow_sampling');
  }
  public set flowSampling(value: number) {
    this._flowSampling = value;
  }
  public resetFlowSampling() {
    this._flowSampling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowSamplingInput() {
    return this._flowSampling;
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

  // metadata - computed: true, optional: true, required: false
  private _metadata?: string; 
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // metadata_fields - computed: false, optional: true, required: false
  private _metadataFields?: string[]; 
  public get metadataFields() {
    return this.getListAttribute('metadata_fields');
  }
  public set metadataFields(value: string[]) {
    this._metadataFields = value;
  }
  public resetMetadataFields() {
    this._metadataFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataFieldsInput() {
    return this._metadataFields;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // organization - computed: false, optional: false, required: true
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktn.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // vpc_flow_logs_config_id - computed: false, optional: false, required: true
  private _vpcFlowLogsConfigId?: string; 
  public get vpcFlowLogsConfigId() {
    return this.getStringAttribute('vpc_flow_logs_config_id');
  }
  public set vpcFlowLogsConfigId(value: string) {
    this._vpcFlowLogsConfigId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcFlowLogsConfigIdInput() {
    return this._vpcFlowLogsConfigId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetworkManagementOrganizationVpcFlowLogsConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetworkManagementOrganizationVpcFlowLogsConfigTimeouts) {
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
      aggregation_interval: cdktn.stringToTerraform(this._aggregationInterval),
      cross_project_metadata: cdktn.stringToTerraform(this._crossProjectMetadata),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      description: cdktn.stringToTerraform(this._description),
      filter_expr: cdktn.stringToTerraform(this._filterExpr),
      flow_sampling: cdktn.numberToTerraform(this._flowSampling),
      id: cdktn.stringToTerraform(this._id),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      location: cdktn.stringToTerraform(this._location),
      metadata: cdktn.stringToTerraform(this._metadata),
      metadata_fields: cdktn.listMapper(cdktn.stringToTerraform, false)(this._metadataFields),
      organization: cdktn.stringToTerraform(this._organization),
      state: cdktn.stringToTerraform(this._state),
      vpc_flow_logs_config_id: cdktn.stringToTerraform(this._vpcFlowLogsConfigId),
      timeouts: networkManagementOrganizationVpcFlowLogsConfigTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aggregation_interval: {
        value: cdktn.stringToHclTerraform(this._aggregationInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cross_project_metadata: {
        value: cdktn.stringToHclTerraform(this._crossProjectMetadata),
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
      filter_expr: {
        value: cdktn.stringToHclTerraform(this._filterExpr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flow_sampling: {
        value: cdktn.numberToHclTerraform(this._flowSampling),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      location: {
        value: cdktn.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata: {
        value: cdktn.stringToHclTerraform(this._metadata),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata_fields: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._metadataFields),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      organization: {
        value: cdktn.stringToHclTerraform(this._organization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktn.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_flow_logs_config_id: {
        value: cdktn.stringToHclTerraform(this._vpcFlowLogsConfigId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: networkManagementOrganizationVpcFlowLogsConfigTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkManagementOrganizationVpcFlowLogsConfigTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
