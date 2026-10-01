/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_semantic_governance_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface VertexAiSemanticGovernancePolicyConfig extends cdktn.TerraformMetaArguments {
  /**
  * The name of the agent in Agent Registry that is affected by this policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_semantic_governance_policy#agent VertexAiSemanticGovernancePolicy#agent}
  */
  readonly agent: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_semantic_governance_policy#deletion_policy VertexAiSemanticGovernancePolicy#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * The description of the SemanticGovernancePolicy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_semantic_governance_policy#description VertexAiSemanticGovernancePolicy#description}
  */
  readonly description?: string;
  /**
  * The user-defined name of the SemanticGovernancePolicy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_semantic_governance_policy#display_name VertexAiSemanticGovernancePolicy#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_semantic_governance_policy#id VertexAiSemanticGovernancePolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The natural language constraint of the SemanticGovernancePolicy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_semantic_governance_policy#natural_language_constraint VertexAiSemanticGovernancePolicy#natural_language_constraint}
  */
  readonly naturalLanguageConstraint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_semantic_governance_policy#project VertexAiSemanticGovernancePolicy#project}
  */
  readonly project?: string;
  /**
  * The region of the SemanticGovernancePolicy, e.g. 'us-central1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_semantic_governance_policy#region VertexAiSemanticGovernancePolicy#region}
  */
  readonly region?: string;
  /**
  * The ID of the SemanticGovernancePolicy, which will become the final component of the resource name.
  * This value may be up to 63 characters, and valid characters are [a-z0-9-]. The first character cannot be a number or hyphen. The last character must be a letter or a number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_semantic_governance_policy#semantic_governance_policy_id VertexAiSemanticGovernancePolicy#semantic_governance_policy_id}
  */
  readonly semanticGovernancePolicyId: string;
  /**
  * agent_response_customization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_semantic_governance_policy#agent_response_customization VertexAiSemanticGovernancePolicy#agent_response_customization}
  */
  readonly agentResponseCustomization?: VertexAiSemanticGovernancePolicyAgentResponseCustomization;
  /**
  * mcp_tools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_semantic_governance_policy#mcp_tools VertexAiSemanticGovernancePolicy#mcp_tools}
  */
  readonly mcpTools?: VertexAiSemanticGovernancePolicyMcpTools;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_semantic_governance_policy#timeouts VertexAiSemanticGovernancePolicy#timeouts}
  */
  readonly timeouts?: VertexAiSemanticGovernancePolicyTimeouts;
}
export interface VertexAiSemanticGovernancePolicyAgentResponseCustomization {
  /**
  * Custom message shown to the end user when the policy check results in a denial. Use this
  * to explain the rationale to the user. Max 1000 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_semantic_governance_policy#denial_message VertexAiSemanticGovernancePolicy#denial_message}
  */
  readonly denialMessage?: string;
}

export function vertexAiSemanticGovernancePolicyAgentResponseCustomizationToTerraform(struct?: VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference | VertexAiSemanticGovernancePolicyAgentResponseCustomization): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    denial_message: cdktn.stringToTerraform(struct!.denialMessage),
  }
}


export function vertexAiSemanticGovernancePolicyAgentResponseCustomizationToHclTerraform(struct?: VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference | VertexAiSemanticGovernancePolicyAgentResponseCustomization): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    denial_message: {
      value: cdktn.stringToHclTerraform(struct!.denialMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiSemanticGovernancePolicyAgentResponseCustomization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._denialMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.denialMessage = this._denialMessage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiSemanticGovernancePolicyAgentResponseCustomization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._denialMessage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._denialMessage = value.denialMessage;
    }
  }

  // denial_message - computed: false, optional: true, required: false
  private _denialMessage?: string; 
  public get denialMessage() {
    return this.getStringAttribute('denial_message');
  }
  public set denialMessage(value: string) {
    this._denialMessage = value;
  }
  public resetDenialMessage() {
    this._denialMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denialMessageInput() {
    return this._denialMessage;
  }
}
export interface VertexAiSemanticGovernancePolicyMcpTools {
  /**
  * The resource name of the McpServer in Agent Registry that is affected by this policy.
  * Format: 'projects/{project}/locations/{location}/mcpServers/{mcpServer}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_semantic_governance_policy#mcp_server VertexAiSemanticGovernancePolicy#mcp_server}
  */
  readonly mcpServer: string;
  /**
  * The resource names of the McpTools used by the Agent that is affected by this policy.
  * At least one tool must be listed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_semantic_governance_policy#tools VertexAiSemanticGovernancePolicy#tools}
  */
  readonly tools: string[];
}

export function vertexAiSemanticGovernancePolicyMcpToolsToTerraform(struct?: VertexAiSemanticGovernancePolicyMcpToolsOutputReference | VertexAiSemanticGovernancePolicyMcpTools): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    mcp_server: cdktn.stringToTerraform(struct!.mcpServer),
    tools: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.tools),
  }
}


export function vertexAiSemanticGovernancePolicyMcpToolsToHclTerraform(struct?: VertexAiSemanticGovernancePolicyMcpToolsOutputReference | VertexAiSemanticGovernancePolicyMcpTools): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    mcp_server: {
      value: cdktn.stringToHclTerraform(struct!.mcpServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tools: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.tools),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiSemanticGovernancePolicyMcpToolsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiSemanticGovernancePolicyMcpTools | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mcpServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.mcpServer = this._mcpServer;
    }
    if (this._tools !== undefined) {
      hasAnyValues = true;
      internalValueResult.tools = this._tools;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiSemanticGovernancePolicyMcpTools | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mcpServer = undefined;
      this._tools = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mcpServer = value.mcpServer;
      this._tools = value.tools;
    }
  }

  // mcp_server - computed: false, optional: false, required: true
  private _mcpServer?: string; 
  public get mcpServer() {
    return this.getStringAttribute('mcp_server');
  }
  public set mcpServer(value: string) {
    this._mcpServer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mcpServerInput() {
    return this._mcpServer;
  }

  // tools - computed: false, optional: false, required: true
  private _tools?: string[]; 
  public get tools() {
    return cdktn.Fn.tolist(this.getListAttribute('tools'));
  }
  public set tools(value: string[]) {
    this._tools = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toolsInput() {
    return this._tools;
  }
}
export interface VertexAiSemanticGovernancePolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_semantic_governance_policy#create VertexAiSemanticGovernancePolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_semantic_governance_policy#delete VertexAiSemanticGovernancePolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_semantic_governance_policy#update VertexAiSemanticGovernancePolicy#update}
  */
  readonly update?: string;
}

export function vertexAiSemanticGovernancePolicyTimeoutsToTerraform(struct?: VertexAiSemanticGovernancePolicyTimeouts | cdktn.IResolvable): any {
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


export function vertexAiSemanticGovernancePolicyTimeoutsToHclTerraform(struct?: VertexAiSemanticGovernancePolicyTimeouts | cdktn.IResolvable): any {
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

export class VertexAiSemanticGovernancePolicyTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VertexAiSemanticGovernancePolicyTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: VertexAiSemanticGovernancePolicyTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_semantic_governance_policy google_vertex_ai_semantic_governance_policy}
*/
export class VertexAiSemanticGovernancePolicy extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_vertex_ai_semantic_governance_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a VertexAiSemanticGovernancePolicy resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VertexAiSemanticGovernancePolicy to import
  * @param importFromId The id of the existing VertexAiSemanticGovernancePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_semantic_governance_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VertexAiSemanticGovernancePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_vertex_ai_semantic_governance_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/8.5.0/docs/resources/vertex_ai_semantic_governance_policy google_vertex_ai_semantic_governance_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VertexAiSemanticGovernancePolicyConfig
  */
  public constructor(scope: Construct, id: string, config: VertexAiSemanticGovernancePolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_vertex_ai_semantic_governance_policy',
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
    this._agent = config.agent;
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._naturalLanguageConstraint = config.naturalLanguageConstraint;
    this._project = config.project;
    this._region = config.region;
    this._semanticGovernancePolicyId = config.semanticGovernancePolicyId;
    this._agentResponseCustomization.internalValue = config.agentResponseCustomization;
    this._mcpTools.internalValue = config.mcpTools;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent - computed: false, optional: false, required: true
  private _agent?: string; 
  public get agent() {
    return this.getStringAttribute('agent');
  }
  public set agent(value: string) {
    this._agent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentInput() {
    return this._agent;
  }

  // agent_identity - computed: true, optional: false, required: false
  public get agentIdentity() {
    return this.getStringAttribute('agent_identity');
  }

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

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // natural_language_constraint - computed: false, optional: false, required: true
  private _naturalLanguageConstraint?: string; 
  public get naturalLanguageConstraint() {
    return this.getStringAttribute('natural_language_constraint');
  }
  public set naturalLanguageConstraint(value: string) {
    this._naturalLanguageConstraint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get naturalLanguageConstraintInput() {
    return this._naturalLanguageConstraint;
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

  // region - computed: false, optional: true, required: false
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

  // semantic_governance_policy_id - computed: false, optional: false, required: true
  private _semanticGovernancePolicyId?: string; 
  public get semanticGovernancePolicyId() {
    return this.getStringAttribute('semantic_governance_policy_id');
  }
  public set semanticGovernancePolicyId(value: string) {
    this._semanticGovernancePolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get semanticGovernancePolicyIdInput() {
    return this._semanticGovernancePolicyId;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // agent_response_customization - computed: false, optional: true, required: false
  private _agentResponseCustomization = new VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference(this, "agent_response_customization");
  public get agentResponseCustomization() {
    return this._agentResponseCustomization;
  }
  public putAgentResponseCustomization(value: VertexAiSemanticGovernancePolicyAgentResponseCustomization) {
    this._agentResponseCustomization.internalValue = value;
  }
  public resetAgentResponseCustomization() {
    this._agentResponseCustomization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentResponseCustomizationInput() {
    return this._agentResponseCustomization.internalValue;
  }

  // mcp_tools - computed: false, optional: true, required: false
  private _mcpTools = new VertexAiSemanticGovernancePolicyMcpToolsOutputReference(this, "mcp_tools");
  public get mcpTools() {
    return this._mcpTools;
  }
  public putMcpTools(value: VertexAiSemanticGovernancePolicyMcpTools) {
    this._mcpTools.internalValue = value;
  }
  public resetMcpTools() {
    this._mcpTools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mcpToolsInput() {
    return this._mcpTools.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VertexAiSemanticGovernancePolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VertexAiSemanticGovernancePolicyTimeouts) {
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
      agent: cdktn.stringToTerraform(this._agent),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      description: cdktn.stringToTerraform(this._description),
      display_name: cdktn.stringToTerraform(this._displayName),
      id: cdktn.stringToTerraform(this._id),
      natural_language_constraint: cdktn.stringToTerraform(this._naturalLanguageConstraint),
      project: cdktn.stringToTerraform(this._project),
      region: cdktn.stringToTerraform(this._region),
      semantic_governance_policy_id: cdktn.stringToTerraform(this._semanticGovernancePolicyId),
      agent_response_customization: vertexAiSemanticGovernancePolicyAgentResponseCustomizationToTerraform(this._agentResponseCustomization.internalValue),
      mcp_tools: vertexAiSemanticGovernancePolicyMcpToolsToTerraform(this._mcpTools.internalValue),
      timeouts: vertexAiSemanticGovernancePolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agent: {
        value: cdktn.stringToHclTerraform(this._agent),
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
      natural_language_constraint: {
        value: cdktn.stringToHclTerraform(this._naturalLanguageConstraint),
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
      semantic_governance_policy_id: {
        value: cdktn.stringToHclTerraform(this._semanticGovernancePolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      agent_response_customization: {
        value: vertexAiSemanticGovernancePolicyAgentResponseCustomizationToHclTerraform(this._agentResponseCustomization.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VertexAiSemanticGovernancePolicyAgentResponseCustomizationList",
      },
      mcp_tools: {
        value: vertexAiSemanticGovernancePolicyMcpToolsToHclTerraform(this._mcpTools.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VertexAiSemanticGovernancePolicyMcpToolsList",
      },
      timeouts: {
        value: vertexAiSemanticGovernancePolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VertexAiSemanticGovernancePolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
