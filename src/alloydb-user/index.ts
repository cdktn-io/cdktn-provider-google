/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/alloydb_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface AlloydbUserConfig extends cdktn.TerraformMetaArguments {
  /**
  * Identifies the alloydb cluster. Must be in the format
  * 'projects/{project}/locations/{location}/clusters/{cluster_id}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/alloydb_user#cluster AlloydbUser#cluster}
  */
  readonly cluster: string;
  /**
  * List of database roles this database user has.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/alloydb_user#database_roles AlloydbUser#database_roles}
  */
  readonly databaseRoles?: string[];
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/alloydb_user#deletion_policy AlloydbUser#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/alloydb_user#id AlloydbUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Password for this database user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/alloydb_user#password AlloydbUser#password}
  */
  readonly password?: string;
  /**
  * Password for this database user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/alloydb_user#password_wo AlloydbUser#password_wo}
  */
  readonly passwordWo?: string;
  /**
  * Triggers update of 'password_wo' write-only. Increment this value when an update to 'password_wo' is needed. For more info see [updating write-only arguments](/docs/providers/google/guides/using_write_only_arguments.html#updating-write-only-arguments)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/alloydb_user#password_wo_version AlloydbUser#password_wo_version}
  */
  readonly passwordWoVersion?: string;
  /**
  * The database role name of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/alloydb_user#user_id AlloydbUser#user_id}
  */
  readonly userId: string;
  /**
  * The type of this user. Possible values: ["ALLOYDB_BUILT_IN", "ALLOYDB_IAM_USER"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/alloydb_user#user_type AlloydbUser#user_type}
  */
  readonly userType: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/alloydb_user#timeouts AlloydbUser#timeouts}
  */
  readonly timeouts?: AlloydbUserTimeouts;
}
export interface AlloydbUserTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/alloydb_user#create AlloydbUser#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/alloydb_user#delete AlloydbUser#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/alloydb_user#update AlloydbUser#update}
  */
  readonly update?: string;
}

export function alloydbUserTimeoutsToTerraform(struct?: AlloydbUserTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function alloydbUserTimeoutsToHclTerraform(struct?: AlloydbUserTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class AlloydbUserTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AlloydbUserTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: AlloydbUserTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/alloydb_user google_alloydb_user}
*/
export class AlloydbUser extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_alloydb_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a AlloydbUser resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AlloydbUser to import
  * @param importFromId The id of the existing AlloydbUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/alloydb_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AlloydbUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_alloydb_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.33.0/docs/resources/alloydb_user google_alloydb_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlloydbUserConfig
  */
  public constructor(scope: Construct, id: string, config: AlloydbUserConfig) {
    super(scope, id, {
      terraformResourceType: 'google_alloydb_user',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.33.0',
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
    this._cluster = config.cluster;
    this._databaseRoles = config.databaseRoles;
    this._deletionPolicy = config.deletionPolicy;
    this._id = config.id;
    this._password = config.password;
    this._passwordWo = config.passwordWo;
    this._passwordWoVersion = config.passwordWoVersion;
    this._userId = config.userId;
    this._userType = config.userType;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster - computed: false, optional: false, required: true
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // database_roles - computed: false, optional: true, required: false
  private _databaseRoles?: string[]; 
  public get databaseRoles() {
    return this.getListAttribute('database_roles');
  }
  public set databaseRoles(value: string[]) {
    this._databaseRoles = value;
  }
  public resetDatabaseRoles() {
    this._databaseRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseRolesInput() {
    return this._databaseRoles;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // password_wo - computed: false, optional: true, required: false
  private _passwordWo?: string; 
  public get passwordWo() {
    return this.getStringAttribute('password_wo');
  }
  public set passwordWo(value: string) {
    this._passwordWo = value;
  }
  public resetPasswordWo() {
    this._passwordWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordWoInput() {
    return this._passwordWo;
  }

  // password_wo_version - computed: false, optional: true, required: false
  private _passwordWoVersion?: string; 
  public get passwordWoVersion() {
    return this.getStringAttribute('password_wo_version');
  }
  public set passwordWoVersion(value: string) {
    this._passwordWoVersion = value;
  }
  public resetPasswordWoVersion() {
    this._passwordWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordWoVersionInput() {
    return this._passwordWoVersion;
  }

  // user_id - computed: false, optional: false, required: true
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // user_type - computed: false, optional: false, required: true
  private _userType?: string; 
  public get userType() {
    return this.getStringAttribute('user_type');
  }
  public set userType(value: string) {
    this._userType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userTypeInput() {
    return this._userType;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AlloydbUserTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AlloydbUserTimeouts) {
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
      cluster: cdktn.stringToTerraform(this._cluster),
      database_roles: cdktn.listMapper(cdktn.stringToTerraform, false)(this._databaseRoles),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      id: cdktn.stringToTerraform(this._id),
      password: cdktn.stringToTerraform(this._password),
      password_wo: cdktn.stringToTerraform(this._passwordWo),
      password_wo_version: cdktn.stringToTerraform(this._passwordWoVersion),
      user_id: cdktn.stringToTerraform(this._userId),
      user_type: cdktn.stringToTerraform(this._userType),
      timeouts: alloydbUserTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster: {
        value: cdktn.stringToHclTerraform(this._cluster),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database_roles: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._databaseRoles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      password: {
        value: cdktn.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_wo: {
        value: cdktn.stringToHclTerraform(this._passwordWo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_wo_version: {
        value: cdktn.stringToHclTerraform(this._passwordWoVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_id: {
        value: cdktn.stringToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_type: {
        value: cdktn.stringToHclTerraform(this._userType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: alloydbUserTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AlloydbUserTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
