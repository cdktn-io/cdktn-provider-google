/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gke_hub_scope_rbac_role_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface GkeHubScopeRbacRoleBindingConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gke_hub_scope_rbac_role_binding#deletion_policy GkeHubScopeRbacRoleBinding#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Principal that is be authorized in the cluster (at least of one the oneof
  * is required). Updating one will unset the other automatically.
  * group is the group, as seen by the kubernetes cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gke_hub_scope_rbac_role_binding#group GkeHubScopeRbacRoleBinding#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gke_hub_scope_rbac_role_binding#id GkeHubScopeRbacRoleBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Labels for this ScopeRBACRoleBinding.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gke_hub_scope_rbac_role_binding#labels GkeHubScopeRbacRoleBinding#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gke_hub_scope_rbac_role_binding#project GkeHubScopeRbacRoleBinding#project}
  */
  readonly project?: string;
  /**
  * Id of the scope
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gke_hub_scope_rbac_role_binding#scope_id GkeHubScopeRbacRoleBinding#scope_id}
  */
  readonly scopeId: string;
  /**
  * The client-provided identifier of the RBAC Role Binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gke_hub_scope_rbac_role_binding#scope_rbac_role_binding_id GkeHubScopeRbacRoleBinding#scope_rbac_role_binding_id}
  */
  readonly scopeRbacRoleBindingId: string;
  /**
  * Principal that is be authorized in the cluster (at least of one the oneof
  * is required). Updating one will unset the other automatically.
  * user is the name of the user as seen by the kubernetes cluster, example
  * "alice" or "alice@domain.tld"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gke_hub_scope_rbac_role_binding#user GkeHubScopeRbacRoleBinding#user}
  */
  readonly user?: string;
  /**
  * role block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gke_hub_scope_rbac_role_binding#role GkeHubScopeRbacRoleBinding#role}
  */
  readonly role: GkeHubScopeRbacRoleBindingRole;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gke_hub_scope_rbac_role_binding#timeouts GkeHubScopeRbacRoleBinding#timeouts}
  */
  readonly timeouts?: GkeHubScopeRbacRoleBindingTimeouts;
}
export interface GkeHubScopeRbacRoleBindingState {
}

export function gkeHubScopeRbacRoleBindingStateToTerraform(struct?: GkeHubScopeRbacRoleBindingState): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function gkeHubScopeRbacRoleBindingStateToHclTerraform(struct?: GkeHubScopeRbacRoleBindingState): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class GkeHubScopeRbacRoleBindingStateOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): GkeHubScopeRbacRoleBindingState | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeHubScopeRbacRoleBindingState | undefined) {
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

export class GkeHubScopeRbacRoleBindingStateList extends cdktn.ComplexList {

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
  public get(index: number): GkeHubScopeRbacRoleBindingStateOutputReference {
    return new GkeHubScopeRbacRoleBindingStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeHubScopeRbacRoleBindingRole {
  /**
  * CustomRole is the custom Kubernetes ClusterRole to be used. The custom role format must be allowlisted in the rbacrolebindingactuation feature and RFC 1123 compliant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gke_hub_scope_rbac_role_binding#custom_role GkeHubScopeRbacRoleBinding#custom_role}
  */
  readonly customRole?: string;
  /**
  * PredefinedRole is an ENUM representation of the default Kubernetes Roles Possible values: ["UNKNOWN", "ADMIN", "EDIT", "VIEW"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gke_hub_scope_rbac_role_binding#predefined_role GkeHubScopeRbacRoleBinding#predefined_role}
  */
  readonly predefinedRole?: string;
}

export function gkeHubScopeRbacRoleBindingRoleToTerraform(struct?: GkeHubScopeRbacRoleBindingRoleOutputReference | GkeHubScopeRbacRoleBindingRole): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    custom_role: cdktn.stringToTerraform(struct!.customRole),
    predefined_role: cdktn.stringToTerraform(struct!.predefinedRole),
  }
}


export function gkeHubScopeRbacRoleBindingRoleToHclTerraform(struct?: GkeHubScopeRbacRoleBindingRoleOutputReference | GkeHubScopeRbacRoleBindingRole): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    custom_role: {
      value: cdktn.stringToHclTerraform(struct!.customRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    predefined_role: {
      value: cdktn.stringToHclTerraform(struct!.predefinedRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeHubScopeRbacRoleBindingRoleOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeHubScopeRbacRoleBindingRole | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.customRole = this._customRole;
    }
    if (this._predefinedRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.predefinedRole = this._predefinedRole;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeHubScopeRbacRoleBindingRole | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customRole = undefined;
      this._predefinedRole = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customRole = value.customRole;
      this._predefinedRole = value.predefinedRole;
    }
  }

  // custom_role - computed: false, optional: true, required: false
  private _customRole?: string; 
  public get customRole() {
    return this.getStringAttribute('custom_role');
  }
  public set customRole(value: string) {
    this._customRole = value;
  }
  public resetCustomRole() {
    this._customRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRoleInput() {
    return this._customRole;
  }

  // predefined_role - computed: false, optional: true, required: false
  private _predefinedRole?: string; 
  public get predefinedRole() {
    return this.getStringAttribute('predefined_role');
  }
  public set predefinedRole(value: string) {
    this._predefinedRole = value;
  }
  public resetPredefinedRole() {
    this._predefinedRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predefinedRoleInput() {
    return this._predefinedRole;
  }
}
export interface GkeHubScopeRbacRoleBindingTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gke_hub_scope_rbac_role_binding#create GkeHubScopeRbacRoleBinding#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gke_hub_scope_rbac_role_binding#delete GkeHubScopeRbacRoleBinding#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gke_hub_scope_rbac_role_binding#update GkeHubScopeRbacRoleBinding#update}
  */
  readonly update?: string;
}

export function gkeHubScopeRbacRoleBindingTimeoutsToTerraform(struct?: GkeHubScopeRbacRoleBindingTimeouts | cdktn.IResolvable): any {
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


export function gkeHubScopeRbacRoleBindingTimeoutsToHclTerraform(struct?: GkeHubScopeRbacRoleBindingTimeouts | cdktn.IResolvable): any {
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

export class GkeHubScopeRbacRoleBindingTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GkeHubScopeRbacRoleBindingTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: GkeHubScopeRbacRoleBindingTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gke_hub_scope_rbac_role_binding google_gke_hub_scope_rbac_role_binding}
*/
export class GkeHubScopeRbacRoleBinding extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_gke_hub_scope_rbac_role_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a GkeHubScopeRbacRoleBinding resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GkeHubScopeRbacRoleBinding to import
  * @param importFromId The id of the existing GkeHubScopeRbacRoleBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gke_hub_scope_rbac_role_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GkeHubScopeRbacRoleBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_gke_hub_scope_rbac_role_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/gke_hub_scope_rbac_role_binding google_gke_hub_scope_rbac_role_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GkeHubScopeRbacRoleBindingConfig
  */
  public constructor(scope: Construct, id: string, config: GkeHubScopeRbacRoleBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'google_gke_hub_scope_rbac_role_binding',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.39.0',
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
    this._group = config.group;
    this._id = config.id;
    this._labels = config.labels;
    this._project = config.project;
    this._scopeId = config.scopeId;
    this._scopeRbacRoleBindingId = config.scopeRbacRoleBindingId;
    this._user = config.user;
    this._role.internalValue = config.role;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // delete_time - computed: true, optional: false, required: false
  public get deleteTime() {
    return this.getStringAttribute('delete_time');
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

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktn.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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

  // scope_id - computed: false, optional: false, required: true
  private _scopeId?: string; 
  public get scopeId() {
    return this.getStringAttribute('scope_id');
  }
  public set scopeId(value: string) {
    this._scopeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeIdInput() {
    return this._scopeId;
  }

  // scope_rbac_role_binding_id - computed: false, optional: false, required: true
  private _scopeRbacRoleBindingId?: string; 
  public get scopeRbacRoleBindingId() {
    return this.getStringAttribute('scope_rbac_role_binding_id');
  }
  public set scopeRbacRoleBindingId(value: string) {
    this._scopeRbacRoleBindingId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeRbacRoleBindingIdInput() {
    return this._scopeRbacRoleBindingId;
  }

  // state - computed: true, optional: false, required: false
  private _state = new GkeHubScopeRbacRoleBindingStateList(this, "state", false);
  public get state() {
    return this._state;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktn.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // role - computed: false, optional: false, required: true
  private _role = new GkeHubScopeRbacRoleBindingRoleOutputReference(this, "role");
  public get role() {
    return this._role;
  }
  public putRole(value: GkeHubScopeRbacRoleBindingRole) {
    this._role.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GkeHubScopeRbacRoleBindingTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GkeHubScopeRbacRoleBindingTimeouts) {
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
      group: cdktn.stringToTerraform(this._group),
      id: cdktn.stringToTerraform(this._id),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      project: cdktn.stringToTerraform(this._project),
      scope_id: cdktn.stringToTerraform(this._scopeId),
      scope_rbac_role_binding_id: cdktn.stringToTerraform(this._scopeRbacRoleBindingId),
      user: cdktn.stringToTerraform(this._user),
      role: gkeHubScopeRbacRoleBindingRoleToTerraform(this._role.internalValue),
      timeouts: gkeHubScopeRbacRoleBindingTimeoutsToTerraform(this._timeouts.internalValue),
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
      group: {
        value: cdktn.stringToHclTerraform(this._group),
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
      labels: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._labels),
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
      scope_id: {
        value: cdktn.stringToHclTerraform(this._scopeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope_rbac_role_binding_id: {
        value: cdktn.stringToHclTerraform(this._scopeRbacRoleBindingId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user: {
        value: cdktn.stringToHclTerraform(this._user),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role: {
        value: gkeHubScopeRbacRoleBindingRoleToHclTerraform(this._role.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GkeHubScopeRbacRoleBindingRoleList",
      },
      timeouts: {
        value: gkeHubScopeRbacRoleBindingTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GkeHubScopeRbacRoleBindingTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
