/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/sql_provision_script
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface SqlProvisionScriptConfig extends cdktn.TerraformMetaArguments {
  /**
  * The name of the database to which Terraform connects. Changing
  * 				this forces Terraform to connect to the new database and run the script. This argument is
  * 				required for Postgres instances. It's optional for MySQL, but some of your queries may require
  * 				a database. You can create and use a database in the script or explicitly reference a
  * 				google_sql_database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/sql_provision_script#database SqlProvisionScript#database}
  */
  readonly database?: string;
  /**
  * The deletion policy for the resources created by the script. The default is "ABANDON".
  * 				It must be "ABANDON" to allow Terraform to abandon the resources. If you want to delete resources, add statements
  * 				in the script such as "drop … if exists".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/sql_provision_script#deletion_policy SqlProvisionScript#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * The description of the provision script.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/sql_provision_script#description SqlProvisionScript#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/sql_provision_script#id SqlProvisionScript#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the Cloud SQL instance. Changing this forces the script to be run on the new instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/sql_provision_script#instance SqlProvisionScript#instance}
  */
  readonly instance: string;
  /**
  * The resource name of the Secret Manager secret storing the password. The secret
  * 				should be a regional secret and stored in the exact same region as the Cloud SQL instance.
  * 				Follow https://docs.cloud.google.com/secret-manager/regional-secrets/create-regional-secret.
  * 				When user and password_secret_version are provided, the script is run using this user.
  * 				Otherwise, the script is run using the identity account used to apply your Terraform config.
  * 				Changing this field forces the script to be run again.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/sql_provision_script#password_secret_version SqlProvisionScript#password_secret_version}
  */
  readonly passwordSecretVersion?: string;
  /**
  * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/sql_provision_script#project SqlProvisionScript#project}
  */
  readonly project?: string;
  /**
  * The SQL script to provision database resources. Its execution time limit is 30 s.
  * 				Changing this forces the script to be rerun. Make sure the script is idempotent.
  * 				You can use statements like "create if not exists …" or
  * 				"if not exists (select …) then … end if" to prevent existence-related errors. If it's not
  * 				possible to make a statement idempotent, you can run it once and then remove it from this script.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/sql_provision_script#script SqlProvisionScript#script}
  */
  readonly script: string;
  /**
  * The name of the built-in database user to authenticate as. For MySQL user,
  * 				omit '@' and the hostname. The user should exist as a built-in user in the database.
  * 				When user and password_secret_version are provided, the script is run using this user. Otherwise,
  * 				the script is run using the identity account used to apply your Terraform config.
  * 				Changing this forces the script to be run using the new user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/sql_provision_script#user SqlProvisionScript#user}
  */
  readonly user?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/sql_provision_script google_sql_provision_script}
*/
export class SqlProvisionScript extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_sql_provision_script";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a SqlProvisionScript resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SqlProvisionScript to import
  * @param importFromId The id of the existing SqlProvisionScript that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/sql_provision_script#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SqlProvisionScript to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_sql_provision_script", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/resources/sql_provision_script google_sql_provision_script} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SqlProvisionScriptConfig
  */
  public constructor(scope: Construct, id: string, config: SqlProvisionScriptConfig) {
    super(scope, id, {
      terraformResourceType: 'google_sql_provision_script',
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
    this._database = config.database;
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._id = config.id;
    this._instance = config.instance;
    this._passwordSecretVersion = config.passwordSecretVersion;
    this._project = config.project;
    this._script = config.script;
    this._user = config.user;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // database - computed: false, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // deletion_policy - computed: false, optional: true, required: false
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

  // instance - computed: false, optional: false, required: true
  private _instance?: string; 
  public get instance() {
    return this.getStringAttribute('instance');
  }
  public set instance(value: string) {
    this._instance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance;
  }

  // password_secret_version - computed: false, optional: true, required: false
  private _passwordSecretVersion?: string; 
  public get passwordSecretVersion() {
    return this.getStringAttribute('password_secret_version');
  }
  public set passwordSecretVersion(value: string) {
    this._passwordSecretVersion = value;
  }
  public resetPasswordSecretVersion() {
    this._passwordSecretVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordSecretVersionInput() {
    return this._passwordSecretVersion;
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

  // script - computed: false, optional: false, required: true
  private _script?: string; 
  public get script() {
    return this.getStringAttribute('script');
  }
  public set script(value: string) {
    this._script = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      database: cdktn.stringToTerraform(this._database),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      description: cdktn.stringToTerraform(this._description),
      id: cdktn.stringToTerraform(this._id),
      instance: cdktn.stringToTerraform(this._instance),
      password_secret_version: cdktn.stringToTerraform(this._passwordSecretVersion),
      project: cdktn.stringToTerraform(this._project),
      script: cdktn.stringToTerraform(this._script),
      user: cdktn.stringToTerraform(this._user),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      database: {
        value: cdktn.stringToHclTerraform(this._database),
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
      instance: {
        value: cdktn.stringToHclTerraform(this._instance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_secret_version: {
        value: cdktn.stringToHclTerraform(this._passwordSecretVersion),
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
      script: {
        value: cdktn.stringToHclTerraform(this._script),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
