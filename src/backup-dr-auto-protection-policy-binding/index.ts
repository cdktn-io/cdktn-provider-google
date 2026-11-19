/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/backup_dr_auto_protection_policy_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface BackupDrAutoProtectionPolicyBindingConfig extends cdktn.TerraformMetaArguments {
  /**
  * The ID of the binding. This becomes the final component of the binding's resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/backup_dr_auto_protection_policy_binding#auto_protection_policy_binding_id BackupDrAutoProtectionPolicyBinding#auto_protection_policy_binding_id}
  */
  readonly autoProtectionPolicyBindingId: string;
  /**
  * The ID of the auto protection policy to bind.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/backup_dr_auto_protection_policy_binding#auto_protection_policy_id BackupDrAutoProtectionPolicyBinding#auto_protection_policy_id}
  */
  readonly autoProtectionPolicyId: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/backup_dr_auto_protection_policy_binding#deletion_policy BackupDrAutoProtectionPolicyBinding#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/backup_dr_auto_protection_policy_binding#id BackupDrAutoProtectionPolicyBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location of the auto protection policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/backup_dr_auto_protection_policy_binding#location BackupDrAutoProtectionPolicyBinding#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/backup_dr_auto_protection_policy_binding#project BackupDrAutoProtectionPolicyBinding#project}
  */
  readonly project?: string;
  /**
  * The container that the policy is applied to, in the format 'projects/{project}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/backup_dr_auto_protection_policy_binding#scope BackupDrAutoProtectionPolicyBinding#scope}
  */
  readonly scope: string;
  /**
  * Whether Terraform should wait for the binding and all associated background resource
  * unprotection operations to be completely deleted before returning. Setting
  * 'wait_for_delete = true' will block the Terraform script/execution until all resources
  * are unprotected and the binding is fully removed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/backup_dr_auto_protection_policy_binding#wait_for_delete BackupDrAutoProtectionPolicyBinding#wait_for_delete}
  */
  readonly waitForDelete?: boolean | cdktn.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/backup_dr_auto_protection_policy_binding#timeouts BackupDrAutoProtectionPolicyBinding#timeouts}
  */
  readonly timeouts?: BackupDrAutoProtectionPolicyBindingTimeouts;
}
export interface BackupDrAutoProtectionPolicyBindingBindingEvaluationSummary {
}

export function backupDrAutoProtectionPolicyBindingBindingEvaluationSummaryToTerraform(struct?: BackupDrAutoProtectionPolicyBindingBindingEvaluationSummary): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function backupDrAutoProtectionPolicyBindingBindingEvaluationSummaryToHclTerraform(struct?: BackupDrAutoProtectionPolicyBindingBindingEvaluationSummary): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): BackupDrAutoProtectionPolicyBindingBindingEvaluationSummary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BackupDrAutoProtectionPolicyBindingBindingEvaluationSummary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // failed_resource_count - computed: true, optional: false, required: false
  public get failedResourceCount() {
    return this.getStringAttribute('failed_resource_count');
  }

  // matching_resource_count - computed: true, optional: false, required: false
  public get matchingResourceCount() {
    return this.getStringAttribute('matching_resource_count');
  }

  // protected_resource_count - computed: true, optional: false, required: false
  public get protectedResourceCount() {
    return this.getStringAttribute('protected_resource_count');
  }
}

export class BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList extends cdktn.ComplexList {

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
  public get(index: number): BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference {
    return new BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BackupDrAutoProtectionPolicyBindingTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/backup_dr_auto_protection_policy_binding#create BackupDrAutoProtectionPolicyBinding#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/backup_dr_auto_protection_policy_binding#delete BackupDrAutoProtectionPolicyBinding#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/backup_dr_auto_protection_policy_binding#update BackupDrAutoProtectionPolicyBinding#update}
  */
  readonly update?: string;
}

export function backupDrAutoProtectionPolicyBindingTimeoutsToTerraform(struct?: BackupDrAutoProtectionPolicyBindingTimeouts | cdktn.IResolvable): any {
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


export function backupDrAutoProtectionPolicyBindingTimeoutsToHclTerraform(struct?: BackupDrAutoProtectionPolicyBindingTimeouts | cdktn.IResolvable): any {
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

export class BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BackupDrAutoProtectionPolicyBindingTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: BackupDrAutoProtectionPolicyBindingTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/backup_dr_auto_protection_policy_binding google_backup_dr_auto_protection_policy_binding}
*/
export class BackupDrAutoProtectionPolicyBinding extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_backup_dr_auto_protection_policy_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a BackupDrAutoProtectionPolicyBinding resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BackupDrAutoProtectionPolicyBinding to import
  * @param importFromId The id of the existing BackupDrAutoProtectionPolicyBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/backup_dr_auto_protection_policy_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BackupDrAutoProtectionPolicyBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_backup_dr_auto_protection_policy_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/backup_dr_auto_protection_policy_binding google_backup_dr_auto_protection_policy_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BackupDrAutoProtectionPolicyBindingConfig
  */
  public constructor(scope: Construct, id: string, config: BackupDrAutoProtectionPolicyBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'google_backup_dr_auto_protection_policy_binding',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '8.12.0',
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
    this._autoProtectionPolicyBindingId = config.autoProtectionPolicyBindingId;
    this._autoProtectionPolicyId = config.autoProtectionPolicyId;
    this._deletionPolicy = config.deletionPolicy;
    this._id = config.id;
    this._location = config.location;
    this._project = config.project;
    this._scope = config.scope;
    this._waitForDelete = config.waitForDelete;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_protection_policy_binding_id - computed: false, optional: false, required: true
  private _autoProtectionPolicyBindingId?: string; 
  public get autoProtectionPolicyBindingId() {
    return this.getStringAttribute('auto_protection_policy_binding_id');
  }
  public set autoProtectionPolicyBindingId(value: string) {
    this._autoProtectionPolicyBindingId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoProtectionPolicyBindingIdInput() {
    return this._autoProtectionPolicyBindingId;
  }

  // auto_protection_policy_id - computed: false, optional: false, required: true
  private _autoProtectionPolicyId?: string; 
  public get autoProtectionPolicyId() {
    return this.getStringAttribute('auto_protection_policy_id');
  }
  public set autoProtectionPolicyId(value: string) {
    this._autoProtectionPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoProtectionPolicyIdInput() {
    return this._autoProtectionPolicyId;
  }

  // binding_evaluation_summary - computed: true, optional: false, required: false
  private _bindingEvaluationSummary = new BackupDrAutoProtectionPolicyBindingBindingEvaluationSummaryList(this, "binding_evaluation_summary", false);
  public get bindingEvaluationSummary() {
    return this._bindingEvaluationSummary;
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

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // wait_for_delete - computed: false, optional: true, required: false
  private _waitForDelete?: boolean | cdktn.IResolvable; 
  public get waitForDelete() {
    return this.getBooleanAttribute('wait_for_delete');
  }
  public set waitForDelete(value: boolean | cdktn.IResolvable) {
    this._waitForDelete = value;
  }
  public resetWaitForDelete() {
    this._waitForDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForDeleteInput() {
    return this._waitForDelete;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BackupDrAutoProtectionPolicyBindingTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BackupDrAutoProtectionPolicyBindingTimeouts) {
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
      auto_protection_policy_binding_id: cdktn.stringToTerraform(this._autoProtectionPolicyBindingId),
      auto_protection_policy_id: cdktn.stringToTerraform(this._autoProtectionPolicyId),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      id: cdktn.stringToTerraform(this._id),
      location: cdktn.stringToTerraform(this._location),
      project: cdktn.stringToTerraform(this._project),
      scope: cdktn.stringToTerraform(this._scope),
      wait_for_delete: cdktn.booleanToTerraform(this._waitForDelete),
      timeouts: backupDrAutoProtectionPolicyBindingTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_protection_policy_binding_id: {
        value: cdktn.stringToHclTerraform(this._autoProtectionPolicyBindingId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_protection_policy_id: {
        value: cdktn.stringToHclTerraform(this._autoProtectionPolicyId),
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
      scope: {
        value: cdktn.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_for_delete: {
        value: cdktn.booleanToHclTerraform(this._waitForDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeouts: {
        value: backupDrAutoProtectionPolicyBindingTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BackupDrAutoProtectionPolicyBindingTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
