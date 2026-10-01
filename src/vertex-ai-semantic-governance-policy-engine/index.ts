/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_semantic_governance_policy_engine
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface VertexAiSemanticGovernancePolicyEngineConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_semantic_governance_policy_engine#deletion_policy VertexAiSemanticGovernancePolicyEngine#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_semantic_governance_policy_engine#id VertexAiSemanticGovernancePolicyEngine#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_semantic_governance_policy_engine#project VertexAiSemanticGovernancePolicyEngine#project}
  */
  readonly project?: string;
  /**
  * The region of the SemanticGovernancePolicyEngine, e.g. 'us-central1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_semantic_governance_policy_engine#region VertexAiSemanticGovernancePolicyEngine#region}
  */
  readonly region?: string;
  /**
  * gateway_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_semantic_governance_policy_engine#gateway_configs VertexAiSemanticGovernancePolicyEngine#gateway_configs}
  */
  readonly gatewayConfigs?: VertexAiSemanticGovernancePolicyEngineGatewayConfigs[] | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_semantic_governance_policy_engine#timeouts VertexAiSemanticGovernancePolicyEngine#timeouts}
  */
  readonly timeouts?: VertexAiSemanticGovernancePolicyEngineTimeouts;
}
export interface VertexAiSemanticGovernancePolicyEngineGatewayConfigs {
  /**
  * Additional consumer projects permitted to attach their own PSC endpoint
  * to this gateway's ServiceAttachment. This is the "decoupled" mode, where
  * the customer creates the PSC endpoint in a project other than this
  * gateway's network project. Each listed project is VPC-SC enforced: it
  * must be within the caller's service perimeter. The owning
  * SemanticGovernancePolicyEngine's own project is always permitted
  * implicitly and need not be listed. Format: projects/{project} (ID or number).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_semantic_governance_policy_engine#allowed_projects VertexAiSemanticGovernancePolicyEngine#allowed_projects}
  */
  readonly allowedProjects?: string[];
  /**
  * The name of the private Cloud DNS managed zone in which the backend
  * creates the DNS record set for this gateway's PSC endpoint. This is the
  * managed-zone resource name, not a fully-qualified domain name. The zone
  * must already exist and be attached to the gateway's VPC at provision
  * time. The name must match '^[a-z0-9.-]{1,63}$'. Must be set together
  * with 'network' and 'subnetwork' (all three or none).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_semantic_governance_policy_engine#dns_zone_name VertexAiSemanticGovernancePolicyEngine#dns_zone_name}
  */
  readonly dnsZoneName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_semantic_governance_policy_engine#name VertexAiSemanticGovernancePolicyEngine#name}
  */
  readonly name: string;
  /**
  * The URI of the network resource where the gateway's PSC endpoint is
  * provisioned. Format: projects/{project}/global/networks/{network}.
  * 'network', 'subnetwork', and 'dns_zone_name' must all be set together
  * or all omitted; setting only some is rejected by the API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_semantic_governance_policy_engine#network VertexAiSemanticGovernancePolicyEngine#network}
  */
  readonly network?: string;
  /**
  * The URI of the subnetwork resource where the gateway's PSC endpoint is
  * provisioned. Format:
  * projects/{project}/regions/{region}/subnetworks/{subnetwork}. Must be
  * set together with 'network' and 'dns_zone_name' (all three or none).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_semantic_governance_policy_engine#subnetwork VertexAiSemanticGovernancePolicyEngine#subnetwork}
  */
  readonly subnetwork?: string;
}

export function vertexAiSemanticGovernancePolicyEngineGatewayConfigsToTerraform(struct?: VertexAiSemanticGovernancePolicyEngineGatewayConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_projects: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedProjects),
    dns_zone_name: cdktn.stringToTerraform(struct!.dnsZoneName),
    name: cdktn.stringToTerraform(struct!.name),
    network: cdktn.stringToTerraform(struct!.network),
    subnetwork: cdktn.stringToTerraform(struct!.subnetwork),
  }
}


export function vertexAiSemanticGovernancePolicyEngineGatewayConfigsToHclTerraform(struct?: VertexAiSemanticGovernancePolicyEngineGatewayConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allowed_projects: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedProjects),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    dns_zone_name: {
      value: cdktn.stringToHclTerraform(struct!.dnsZoneName),
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
    network: {
      value: cdktn.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnetwork: {
      value: cdktn.stringToHclTerraform(struct!.subnetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): VertexAiSemanticGovernancePolicyEngineGatewayConfigs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedProjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedProjects = this._allowedProjects;
    }
    if (this._dnsZoneName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsZoneName = this._dnsZoneName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._subnetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetwork = this._subnetwork;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiSemanticGovernancePolicyEngineGatewayConfigs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedProjects = undefined;
      this._dnsZoneName = undefined;
      this._name = undefined;
      this._network = undefined;
      this._subnetwork = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedProjects = value.allowedProjects;
      this._dnsZoneName = value.dnsZoneName;
      this._name = value.name;
      this._network = value.network;
      this._subnetwork = value.subnetwork;
    }
  }

  // allowed_projects - computed: false, optional: true, required: false
  private _allowedProjects?: string[]; 
  public get allowedProjects() {
    return this.getListAttribute('allowed_projects');
  }
  public set allowedProjects(value: string[]) {
    this._allowedProjects = value;
  }
  public resetAllowedProjects() {
    this._allowedProjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedProjectsInput() {
    return this._allowedProjects;
  }

  // dns_record - computed: true, optional: false, required: false
  public get dnsRecord() {
    return this.getStringAttribute('dns_record');
  }

  // dns_zone_name - computed: false, optional: true, required: false
  private _dnsZoneName?: string; 
  public get dnsZoneName() {
    return this.getStringAttribute('dns_zone_name');
  }
  public set dnsZoneName(value: string) {
    this._dnsZoneName = value;
  }
  public resetDnsZoneName() {
    this._dnsZoneName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsZoneNameInput() {
    return this._dnsZoneName;
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
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

  // network - computed: false, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // psc_endpoint - computed: true, optional: false, required: false
  public get pscEndpoint() {
    return this.getStringAttribute('psc_endpoint');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnetwork - computed: false, optional: true, required: false
  private _subnetwork?: string; 
  public get subnetwork() {
    return this.getStringAttribute('subnetwork');
  }
  public set subnetwork(value: string) {
    this._subnetwork = value;
  }
  public resetSubnetwork() {
    this._subnetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetworkInput() {
    return this._subnetwork;
  }
}

export class VertexAiSemanticGovernancePolicyEngineGatewayConfigsList extends cdktn.ComplexList {
  public internalValue? : VertexAiSemanticGovernancePolicyEngineGatewayConfigs[] | cdktn.IResolvable

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
  public get(index: number): VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference {
    return new VertexAiSemanticGovernancePolicyEngineGatewayConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VertexAiSemanticGovernancePolicyEngineTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_semantic_governance_policy_engine#create VertexAiSemanticGovernancePolicyEngine#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_semantic_governance_policy_engine#delete VertexAiSemanticGovernancePolicyEngine#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_semantic_governance_policy_engine#update VertexAiSemanticGovernancePolicyEngine#update}
  */
  readonly update?: string;
}

export function vertexAiSemanticGovernancePolicyEngineTimeoutsToTerraform(struct?: VertexAiSemanticGovernancePolicyEngineTimeouts | cdktn.IResolvable): any {
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


export function vertexAiSemanticGovernancePolicyEngineTimeoutsToHclTerraform(struct?: VertexAiSemanticGovernancePolicyEngineTimeouts | cdktn.IResolvable): any {
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

export class VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VertexAiSemanticGovernancePolicyEngineTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: VertexAiSemanticGovernancePolicyEngineTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_semantic_governance_policy_engine google_vertex_ai_semantic_governance_policy_engine}
*/
export class VertexAiSemanticGovernancePolicyEngine extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_vertex_ai_semantic_governance_policy_engine";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a VertexAiSemanticGovernancePolicyEngine resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VertexAiSemanticGovernancePolicyEngine to import
  * @param importFromId The id of the existing VertexAiSemanticGovernancePolicyEngine that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_semantic_governance_policy_engine#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VertexAiSemanticGovernancePolicyEngine to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_vertex_ai_semantic_governance_policy_engine", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_semantic_governance_policy_engine google_vertex_ai_semantic_governance_policy_engine} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VertexAiSemanticGovernancePolicyEngineConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VertexAiSemanticGovernancePolicyEngineConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_vertex_ai_semantic_governance_policy_engine',
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
    this._deletionPolicy = config.deletionPolicy;
    this._id = config.id;
    this._project = config.project;
    this._region = config.region;
    this._gatewayConfigs.internalValue = config.gatewayConfigs;
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

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
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

  // psc_forwarding_rule - computed: true, optional: false, required: false
  public get pscForwardingRule() {
    return this.getStringAttribute('psc_forwarding_rule');
  }

  // psc_service_attachment - computed: true, optional: false, required: false
  public get pscServiceAttachment() {
    return this.getStringAttribute('psc_service_attachment');
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // gateway_configs - computed: false, optional: true, required: false
  private _gatewayConfigs = new VertexAiSemanticGovernancePolicyEngineGatewayConfigsList(this, "gateway_configs", true);
  public get gatewayConfigs() {
    return this._gatewayConfigs;
  }
  public putGatewayConfigs(value: VertexAiSemanticGovernancePolicyEngineGatewayConfigs[] | cdktn.IResolvable) {
    this._gatewayConfigs.internalValue = value;
  }
  public resetGatewayConfigs() {
    this._gatewayConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayConfigsInput() {
    return this._gatewayConfigs.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VertexAiSemanticGovernancePolicyEngineTimeouts) {
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
      id: cdktn.stringToTerraform(this._id),
      project: cdktn.stringToTerraform(this._project),
      region: cdktn.stringToTerraform(this._region),
      gateway_configs: cdktn.listMapper(vertexAiSemanticGovernancePolicyEngineGatewayConfigsToTerraform, true)(this._gatewayConfigs.internalValue),
      timeouts: vertexAiSemanticGovernancePolicyEngineTimeoutsToTerraform(this._timeouts.internalValue),
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
      id: {
        value: cdktn.stringToHclTerraform(this._id),
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
      region: {
        value: cdktn.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway_configs: {
        value: cdktn.listMapperHcl(vertexAiSemanticGovernancePolicyEngineGatewayConfigsToHclTerraform, true)(this._gatewayConfigs.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VertexAiSemanticGovernancePolicyEngineGatewayConfigsList",
      },
      timeouts: {
        value: vertexAiSemanticGovernancePolicyEngineTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VertexAiSemanticGovernancePolicyEngineTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
