/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/secure_source_manager_hook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SecureSourceManagerHookConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/secure_source_manager_hook#deletion_policy SecureSourceManagerHook#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Determines if the hook disabled or not.
  * Set to true to stop sending traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/secure_source_manager_hook#disabled SecureSourceManagerHook#disabled}
  */
  readonly disabled?: boolean | cdktn.IResolvable;
  /**
  * The events that trigger hook on. Possible values: ["PUSH", "PULL_REQUEST", "PULL_REQUEST_COMMENT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/secure_source_manager_hook#events SecureSourceManagerHook#events}
  */
  readonly events?: string[];
  /**
  * The ID for the Hook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/secure_source_manager_hook#hook_id SecureSourceManagerHook#hook_id}
  */
  readonly hookId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/secure_source_manager_hook#id SecureSourceManagerHook#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location for the Repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/secure_source_manager_hook#location SecureSourceManagerHook#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/secure_source_manager_hook#project SecureSourceManagerHook#project}
  */
  readonly project?: string;
  /**
  * The ID for the Repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/secure_source_manager_hook#repository_id SecureSourceManagerHook#repository_id}
  */
  readonly repositoryId: string;
  /**
  * The sensitive query string to be appended to the target URI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/secure_source_manager_hook#sensitive_query_string SecureSourceManagerHook#sensitive_query_string}
  */
  readonly sensitiveQueryString?: string;
  /**
  * The target URI to which the payloads will be delivered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/secure_source_manager_hook#target_uri SecureSourceManagerHook#target_uri}
  */
  readonly targetUri: string;
  /**
  * push_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/secure_source_manager_hook#push_option SecureSourceManagerHook#push_option}
  */
  readonly pushOption?: SecureSourceManagerHookPushOption;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/secure_source_manager_hook#timeouts SecureSourceManagerHook#timeouts}
  */
  readonly timeouts?: SecureSourceManagerHookTimeouts;
}
export interface SecureSourceManagerHookPushOption {
  /**
  * Trigger hook for matching branches only.
  * Specified as glob pattern. If empty or *, events for all branches are
  * reported. Examples: main, {main,release*}.
  * See https://pkg.go.dev/github.com/gobwas/glob documentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/secure_source_manager_hook#branch_filter SecureSourceManagerHook#branch_filter}
  */
  readonly branchFilter?: string;
}

export function secureSourceManagerHookPushOptionToTerraform(struct?: SecureSourceManagerHookPushOptionOutputReference | SecureSourceManagerHookPushOption): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    branch_filter: cdktn.stringToTerraform(struct!.branchFilter),
  }
}


export function secureSourceManagerHookPushOptionToHclTerraform(struct?: SecureSourceManagerHookPushOptionOutputReference | SecureSourceManagerHookPushOption): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    branch_filter: {
      value: cdktn.stringToHclTerraform(struct!.branchFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecureSourceManagerHookPushOptionOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecureSourceManagerHookPushOption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._branchFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.branchFilter = this._branchFilter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecureSourceManagerHookPushOption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._branchFilter = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._branchFilter = value.branchFilter;
    }
  }

  // branch_filter - computed: false, optional: true, required: false
  private _branchFilter?: string; 
  public get branchFilter() {
    return this.getStringAttribute('branch_filter');
  }
  public set branchFilter(value: string) {
    this._branchFilter = value;
  }
  public resetBranchFilter() {
    this._branchFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchFilterInput() {
    return this._branchFilter;
  }
}
export interface SecureSourceManagerHookTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/secure_source_manager_hook#create SecureSourceManagerHook#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/secure_source_manager_hook#delete SecureSourceManagerHook#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/secure_source_manager_hook#update SecureSourceManagerHook#update}
  */
  readonly update?: string;
}

export function secureSourceManagerHookTimeoutsToTerraform(struct?: SecureSourceManagerHookTimeouts | cdktn.IResolvable): any {
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


export function secureSourceManagerHookTimeoutsToHclTerraform(struct?: SecureSourceManagerHookTimeouts | cdktn.IResolvable): any {
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

export class SecureSourceManagerHookTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecureSourceManagerHookTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: SecureSourceManagerHookTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/secure_source_manager_hook google_secure_source_manager_hook}
*/
export class SecureSourceManagerHook extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_secure_source_manager_hook";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SecureSourceManagerHook resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecureSourceManagerHook to import
  * @param importFromId The id of the existing SecureSourceManagerHook that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/secure_source_manager_hook#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecureSourceManagerHook to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_secure_source_manager_hook", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/secure_source_manager_hook google_secure_source_manager_hook} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecureSourceManagerHookConfig
  */
  public constructor(scope: Construct, id: string, config: SecureSourceManagerHookConfig) {
    super(scope, id, {
      terraformResourceType: 'google_secure_source_manager_hook',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.46.1',
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
    this._disabled = config.disabled;
    this._events = config.events;
    this._hookId = config.hookId;
    this._id = config.id;
    this._location = config.location;
    this._project = config.project;
    this._repositoryId = config.repositoryId;
    this._sensitiveQueryString = config.sensitiveQueryString;
    this._targetUri = config.targetUri;
    this._pushOption.internalValue = config.pushOption;
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

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktn.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktn.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // events - computed: true, optional: true, required: false
  private _events?: string[]; 
  public get events() {
    return this.getListAttribute('events');
  }
  public set events(value: string[]) {
    this._events = value;
  }
  public resetEvents() {
    this._events = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events;
  }

  // hook_id - computed: false, optional: false, required: true
  private _hookId?: string; 
  public get hookId() {
    return this.getStringAttribute('hook_id');
  }
  public set hookId(value: string) {
    this._hookId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hookIdInput() {
    return this._hookId;
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

  // repository_id - computed: false, optional: false, required: true
  private _repositoryId?: string; 
  public get repositoryId() {
    return this.getStringAttribute('repository_id');
  }
  public set repositoryId(value: string) {
    this._repositoryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryIdInput() {
    return this._repositoryId;
  }

  // sensitive_query_string - computed: false, optional: true, required: false
  private _sensitiveQueryString?: string; 
  public get sensitiveQueryString() {
    return this.getStringAttribute('sensitive_query_string');
  }
  public set sensitiveQueryString(value: string) {
    this._sensitiveQueryString = value;
  }
  public resetSensitiveQueryString() {
    this._sensitiveQueryString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveQueryStringInput() {
    return this._sensitiveQueryString;
  }

  // target_uri - computed: false, optional: false, required: true
  private _targetUri?: string; 
  public get targetUri() {
    return this.getStringAttribute('target_uri');
  }
  public set targetUri(value: string) {
    this._targetUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetUriInput() {
    return this._targetUri;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // push_option - computed: false, optional: true, required: false
  private _pushOption = new SecureSourceManagerHookPushOptionOutputReference(this, "push_option");
  public get pushOption() {
    return this._pushOption;
  }
  public putPushOption(value: SecureSourceManagerHookPushOption) {
    this._pushOption.internalValue = value;
  }
  public resetPushOption() {
    this._pushOption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushOptionInput() {
    return this._pushOption.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SecureSourceManagerHookTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SecureSourceManagerHookTimeouts) {
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
      disabled: cdktn.booleanToTerraform(this._disabled),
      events: cdktn.listMapper(cdktn.stringToTerraform, false)(this._events),
      hook_id: cdktn.stringToTerraform(this._hookId),
      id: cdktn.stringToTerraform(this._id),
      location: cdktn.stringToTerraform(this._location),
      project: cdktn.stringToTerraform(this._project),
      repository_id: cdktn.stringToTerraform(this._repositoryId),
      sensitive_query_string: cdktn.stringToTerraform(this._sensitiveQueryString),
      target_uri: cdktn.stringToTerraform(this._targetUri),
      push_option: secureSourceManagerHookPushOptionToTerraform(this._pushOption.internalValue),
      timeouts: secureSourceManagerHookTimeoutsToTerraform(this._timeouts.internalValue),
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
      disabled: {
        value: cdktn.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      events: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._events),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      hook_id: {
        value: cdktn.stringToHclTerraform(this._hookId),
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
      repository_id: {
        value: cdktn.stringToHclTerraform(this._repositoryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sensitive_query_string: {
        value: cdktn.stringToHclTerraform(this._sensitiveQueryString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_uri: {
        value: cdktn.stringToHclTerraform(this._targetUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      push_option: {
        value: secureSourceManagerHookPushOptionToHclTerraform(this._pushOption.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecureSourceManagerHookPushOptionList",
      },
      timeouts: {
        value: secureSourceManagerHookTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecureSourceManagerHookTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
