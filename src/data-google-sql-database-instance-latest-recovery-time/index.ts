/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/sql_database_instance_latest_recovery_time
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataGoogleSqlDatabaseInstanceLatestRecoveryTimeConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/sql_database_instance_latest_recovery_time#id DataGoogleSqlDatabaseInstanceLatestRecoveryTime#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/sql_database_instance_latest_recovery_time#instance DataGoogleSqlDatabaseInstanceLatestRecoveryTime#instance}
  */
  readonly instance: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/sql_database_instance_latest_recovery_time#project DataGoogleSqlDatabaseInstanceLatestRecoveryTime#project}
  */
  readonly project?: string;
  /**
  * Timestamp, identifies when the source instance was deleted. If this instance is deleted, then you must set the timestamp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/sql_database_instance_latest_recovery_time#source_instance_deletion_time DataGoogleSqlDatabaseInstanceLatestRecoveryTime#source_instance_deletion_time}
  */
  readonly sourceInstanceDeletionTime?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/sql_database_instance_latest_recovery_time google_sql_database_instance_latest_recovery_time}
*/
export class DataGoogleSqlDatabaseInstanceLatestRecoveryTime extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_sql_database_instance_latest_recovery_time";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataGoogleSqlDatabaseInstanceLatestRecoveryTime resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGoogleSqlDatabaseInstanceLatestRecoveryTime to import
  * @param importFromId The id of the existing DataGoogleSqlDatabaseInstanceLatestRecoveryTime that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/sql_database_instance_latest_recovery_time#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGoogleSqlDatabaseInstanceLatestRecoveryTime to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_sql_database_instance_latest_recovery_time", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/data-sources/sql_database_instance_latest_recovery_time google_sql_database_instance_latest_recovery_time} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleSqlDatabaseInstanceLatestRecoveryTimeConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleSqlDatabaseInstanceLatestRecoveryTimeConfig) {
    super(scope, id, {
      terraformResourceType: 'google_sql_database_instance_latest_recovery_time',
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
    this._id = config.id;
    this._instance = config.instance;
    this._project = config.project;
    this._sourceInstanceDeletionTime = config.sourceInstanceDeletionTime;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // latest_recovery_time - computed: true, optional: false, required: false
  public get latestRecoveryTime() {
    return this.getStringAttribute('latest_recovery_time');
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

  // source_instance_deletion_time - computed: false, optional: true, required: false
  private _sourceInstanceDeletionTime?: string; 
  public get sourceInstanceDeletionTime() {
    return this.getStringAttribute('source_instance_deletion_time');
  }
  public set sourceInstanceDeletionTime(value: string) {
    this._sourceInstanceDeletionTime = value;
  }
  public resetSourceInstanceDeletionTime() {
    this._sourceInstanceDeletionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInstanceDeletionTimeInput() {
    return this._sourceInstanceDeletionTime;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktn.stringToTerraform(this._id),
      instance: cdktn.stringToTerraform(this._instance),
      project: cdktn.stringToTerraform(this._project),
      source_instance_deletion_time: cdktn.stringToTerraform(this._sourceInstanceDeletionTime),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      project: {
        value: cdktn.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_instance_deletion_time: {
        value: cdktn.stringToHclTerraform(this._sourceInstanceDeletionTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
