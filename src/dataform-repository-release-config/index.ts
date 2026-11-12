/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataformRepositoryReleaseConfigConfig extends cdktn.TerraformMetaArguments {
  /**
  * Optional. Optional schedule (in cron format) for automatic creation of compilation results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#cron_schedule DataformRepositoryReleaseConfig#cron_schedule}
  */
  readonly cronSchedule?: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#deletion_policy DataformRepositoryReleaseConfig#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Disables automatic creation of compilation results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#disabled DataformRepositoryReleaseConfig#disabled}
  */
  readonly disabled?: boolean | cdktn.IResolvable;
  /**
  * Git commit/tag/branch name at which the repository should be compiled. Must exist in the remote repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#git_commitish DataformRepositoryReleaseConfig#git_commitish}
  */
  readonly gitCommitish: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#id DataformRepositoryReleaseConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The release's name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#name DataformRepositoryReleaseConfig#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#project DataformRepositoryReleaseConfig#project}
  */
  readonly project?: string;
  /**
  * A reference to the region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#region DataformRepositoryReleaseConfig#region}
  */
  readonly region?: string;
  /**
  * A reference to the Dataform repository
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#repository DataformRepositoryReleaseConfig#repository}
  */
  readonly repository?: string;
  /**
  * Optional. Specifies the time zone to be used when interpreting cronSchedule. Must be a time zone name from the time zone database (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). If left unspecified, the default is UTC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#time_zone DataformRepositoryReleaseConfig#time_zone}
  */
  readonly timeZone?: string;
  /**
  * code_compilation_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#code_compilation_config DataformRepositoryReleaseConfig#code_compilation_config}
  */
  readonly codeCompilationConfig?: DataformRepositoryReleaseConfigCodeCompilationConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#timeouts DataformRepositoryReleaseConfig#timeouts}
  */
  readonly timeouts?: DataformRepositoryReleaseConfigTimeouts;
}
export interface DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus {
}

export function dataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusToTerraform(struct?: DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusToHclTerraform(struct?: DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatus | undefined) {
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

export class DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList extends cdktn.ComplexList {

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
  public get(index: number): DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference {
    return new DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataformRepositoryReleaseConfigRecentScheduledReleaseRecords {
}

export function dataformRepositoryReleaseConfigRecentScheduledReleaseRecordsToTerraform(struct?: DataformRepositoryReleaseConfigRecentScheduledReleaseRecords): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataformRepositoryReleaseConfigRecentScheduledReleaseRecordsToHclTerraform(struct?: DataformRepositoryReleaseConfigRecentScheduledReleaseRecords): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataformRepositoryReleaseConfigRecentScheduledReleaseRecords | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataformRepositoryReleaseConfigRecentScheduledReleaseRecords | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compilation_result - computed: true, optional: false, required: false
  public get compilationResult() {
    return this.getStringAttribute('compilation_result');
  }

  // error_status - computed: true, optional: false, required: false
  private _errorStatus = new DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsErrorStatusList(this, "error_status", false);
  public get errorStatus() {
    return this._errorStatus;
  }

  // release_time - computed: true, optional: false, required: false
  public get releaseTime() {
    return this.getStringAttribute('release_time');
  }
}

export class DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList extends cdktn.ComplexList {

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
  public get(index: number): DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference {
    return new DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataformRepositoryReleaseConfigCodeCompilationConfig {
  /**
  * Optional. The default schema (BigQuery dataset ID) for assertions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#assertion_schema DataformRepositoryReleaseConfig#assertion_schema}
  */
  readonly assertionSchema?: string;
  /**
  * Optional. The suffix that should be appended to all database (Google Cloud project ID) names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#database_suffix DataformRepositoryReleaseConfig#database_suffix}
  */
  readonly databaseSuffix?: string;
  /**
  * Optional. The default database (Google Cloud project ID).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#default_database DataformRepositoryReleaseConfig#default_database}
  */
  readonly defaultDatabase?: string;
  /**
  * Optional. The default BigQuery location to use. Defaults to "US".
  * See the BigQuery docs for a full list of locations: https://cloud.google.com/bigquery/docs/locations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#default_location DataformRepositoryReleaseConfig#default_location}
  */
  readonly defaultLocation?: string;
  /**
  * Optional. The default schema (BigQuery dataset ID).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#default_schema DataformRepositoryReleaseConfig#default_schema}
  */
  readonly defaultSchema?: string;
  /**
  * Optional. The suffix that should be appended to all schema (BigQuery dataset ID) names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#schema_suffix DataformRepositoryReleaseConfig#schema_suffix}
  */
  readonly schemaSuffix?: string;
  /**
  * Optional. The prefix that should be prepended to all table names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#table_prefix DataformRepositoryReleaseConfig#table_prefix}
  */
  readonly tablePrefix?: string;
  /**
  * Optional. User-defined variables that are made available to project code during compilation.
  * An object containing a list of "key": value pairs.
  * Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#vars DataformRepositoryReleaseConfig#vars}
  */
  readonly vars?: { [key: string]: string };
}

export function dataformRepositoryReleaseConfigCodeCompilationConfigToTerraform(struct?: DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference | DataformRepositoryReleaseConfigCodeCompilationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    assertion_schema: cdktn.stringToTerraform(struct!.assertionSchema),
    database_suffix: cdktn.stringToTerraform(struct!.databaseSuffix),
    default_database: cdktn.stringToTerraform(struct!.defaultDatabase),
    default_location: cdktn.stringToTerraform(struct!.defaultLocation),
    default_schema: cdktn.stringToTerraform(struct!.defaultSchema),
    schema_suffix: cdktn.stringToTerraform(struct!.schemaSuffix),
    table_prefix: cdktn.stringToTerraform(struct!.tablePrefix),
    vars: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.vars),
  }
}


export function dataformRepositoryReleaseConfigCodeCompilationConfigToHclTerraform(struct?: DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference | DataformRepositoryReleaseConfigCodeCompilationConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    assertion_schema: {
      value: cdktn.stringToHclTerraform(struct!.assertionSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_suffix: {
      value: cdktn.stringToHclTerraform(struct!.databaseSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_database: {
      value: cdktn.stringToHclTerraform(struct!.defaultDatabase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_location: {
      value: cdktn.stringToHclTerraform(struct!.defaultLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_schema: {
      value: cdktn.stringToHclTerraform(struct!.defaultSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_suffix: {
      value: cdktn.stringToHclTerraform(struct!.schemaSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_prefix: {
      value: cdktn.stringToHclTerraform(struct!.tablePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vars: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.vars),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataformRepositoryReleaseConfigCodeCompilationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assertionSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.assertionSchema = this._assertionSchema;
    }
    if (this._databaseSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseSuffix = this._databaseSuffix;
    }
    if (this._defaultDatabase !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultDatabase = this._defaultDatabase;
    }
    if (this._defaultLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultLocation = this._defaultLocation;
    }
    if (this._defaultSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSchema = this._defaultSchema;
    }
    if (this._schemaSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaSuffix = this._schemaSuffix;
    }
    if (this._tablePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.tablePrefix = this._tablePrefix;
    }
    if (this._vars !== undefined) {
      hasAnyValues = true;
      internalValueResult.vars = this._vars;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataformRepositoryReleaseConfigCodeCompilationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._assertionSchema = undefined;
      this._databaseSuffix = undefined;
      this._defaultDatabase = undefined;
      this._defaultLocation = undefined;
      this._defaultSchema = undefined;
      this._schemaSuffix = undefined;
      this._tablePrefix = undefined;
      this._vars = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._assertionSchema = value.assertionSchema;
      this._databaseSuffix = value.databaseSuffix;
      this._defaultDatabase = value.defaultDatabase;
      this._defaultLocation = value.defaultLocation;
      this._defaultSchema = value.defaultSchema;
      this._schemaSuffix = value.schemaSuffix;
      this._tablePrefix = value.tablePrefix;
      this._vars = value.vars;
    }
  }

  // assertion_schema - computed: false, optional: true, required: false
  private _assertionSchema?: string; 
  public get assertionSchema() {
    return this.getStringAttribute('assertion_schema');
  }
  public set assertionSchema(value: string) {
    this._assertionSchema = value;
  }
  public resetAssertionSchema() {
    this._assertionSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assertionSchemaInput() {
    return this._assertionSchema;
  }

  // database_suffix - computed: false, optional: true, required: false
  private _databaseSuffix?: string; 
  public get databaseSuffix() {
    return this.getStringAttribute('database_suffix');
  }
  public set databaseSuffix(value: string) {
    this._databaseSuffix = value;
  }
  public resetDatabaseSuffix() {
    this._databaseSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseSuffixInput() {
    return this._databaseSuffix;
  }

  // default_database - computed: false, optional: true, required: false
  private _defaultDatabase?: string; 
  public get defaultDatabase() {
    return this.getStringAttribute('default_database');
  }
  public set defaultDatabase(value: string) {
    this._defaultDatabase = value;
  }
  public resetDefaultDatabase() {
    this._defaultDatabase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDatabaseInput() {
    return this._defaultDatabase;
  }

  // default_location - computed: false, optional: true, required: false
  private _defaultLocation?: string; 
  public get defaultLocation() {
    return this.getStringAttribute('default_location');
  }
  public set defaultLocation(value: string) {
    this._defaultLocation = value;
  }
  public resetDefaultLocation() {
    this._defaultLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLocationInput() {
    return this._defaultLocation;
  }

  // default_schema - computed: false, optional: true, required: false
  private _defaultSchema?: string; 
  public get defaultSchema() {
    return this.getStringAttribute('default_schema');
  }
  public set defaultSchema(value: string) {
    this._defaultSchema = value;
  }
  public resetDefaultSchema() {
    this._defaultSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSchemaInput() {
    return this._defaultSchema;
  }

  // schema_suffix - computed: false, optional: true, required: false
  private _schemaSuffix?: string; 
  public get schemaSuffix() {
    return this.getStringAttribute('schema_suffix');
  }
  public set schemaSuffix(value: string) {
    this._schemaSuffix = value;
  }
  public resetSchemaSuffix() {
    this._schemaSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaSuffixInput() {
    return this._schemaSuffix;
  }

  // table_prefix - computed: false, optional: true, required: false
  private _tablePrefix?: string; 
  public get tablePrefix() {
    return this.getStringAttribute('table_prefix');
  }
  public set tablePrefix(value: string) {
    this._tablePrefix = value;
  }
  public resetTablePrefix() {
    this._tablePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tablePrefixInput() {
    return this._tablePrefix;
  }

  // vars - computed: false, optional: true, required: false
  private _vars?: { [key: string]: string }; 
  public get vars() {
    return this.getStringMapAttribute('vars');
  }
  public set vars(value: { [key: string]: string }) {
    this._vars = value;
  }
  public resetVars() {
    this._vars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get varsInput() {
    return this._vars;
  }
}
export interface DataformRepositoryReleaseConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#create DataformRepositoryReleaseConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#delete DataformRepositoryReleaseConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#update DataformRepositoryReleaseConfig#update}
  */
  readonly update?: string;
}

export function dataformRepositoryReleaseConfigTimeoutsToTerraform(struct?: DataformRepositoryReleaseConfigTimeouts | cdktn.IResolvable): any {
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


export function dataformRepositoryReleaseConfigTimeoutsToHclTerraform(struct?: DataformRepositoryReleaseConfigTimeouts | cdktn.IResolvable): any {
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

export class DataformRepositoryReleaseConfigTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataformRepositoryReleaseConfigTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataformRepositoryReleaseConfigTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config google_dataform_repository_release_config}
*/
export class DataformRepositoryReleaseConfig extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dataform_repository_release_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataformRepositoryReleaseConfig resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataformRepositoryReleaseConfig to import
  * @param importFromId The id of the existing DataformRepositoryReleaseConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataformRepositoryReleaseConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_dataform_repository_release_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/8.11.0/docs/resources/dataform_repository_release_config google_dataform_repository_release_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataformRepositoryReleaseConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DataformRepositoryReleaseConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dataform_repository_release_config',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '8.11.0',
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
    this._cronSchedule = config.cronSchedule;
    this._deletionPolicy = config.deletionPolicy;
    this._disabled = config.disabled;
    this._gitCommitish = config.gitCommitish;
    this._id = config.id;
    this._name = config.name;
    this._project = config.project;
    this._region = config.region;
    this._repository = config.repository;
    this._timeZone = config.timeZone;
    this._codeCompilationConfig.internalValue = config.codeCompilationConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cron_schedule - computed: false, optional: true, required: false
  private _cronSchedule?: string; 
  public get cronSchedule() {
    return this.getStringAttribute('cron_schedule');
  }
  public set cronSchedule(value: string) {
    this._cronSchedule = value;
  }
  public resetCronSchedule() {
    this._cronSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronScheduleInput() {
    return this._cronSchedule;
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

  // git_commitish - computed: false, optional: false, required: true
  private _gitCommitish?: string; 
  public get gitCommitish() {
    return this.getStringAttribute('git_commitish');
  }
  public set gitCommitish(value: string) {
    this._gitCommitish = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gitCommitishInput() {
    return this._gitCommitish;
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

  // recent_scheduled_release_records - computed: true, optional: false, required: false
  private _recentScheduledReleaseRecords = new DataformRepositoryReleaseConfigRecentScheduledReleaseRecordsList(this, "recent_scheduled_release_records", false);
  public get recentScheduledReleaseRecords() {
    return this._recentScheduledReleaseRecords;
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

  // repository - computed: false, optional: true, required: false
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  public resetRepository() {
    this._repository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // time_zone - computed: false, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // code_compilation_config - computed: false, optional: true, required: false
  private _codeCompilationConfig = new DataformRepositoryReleaseConfigCodeCompilationConfigOutputReference(this, "code_compilation_config");
  public get codeCompilationConfig() {
    return this._codeCompilationConfig;
  }
  public putCodeCompilationConfig(value: DataformRepositoryReleaseConfigCodeCompilationConfig) {
    this._codeCompilationConfig.internalValue = value;
  }
  public resetCodeCompilationConfig() {
    this._codeCompilationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeCompilationConfigInput() {
    return this._codeCompilationConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataformRepositoryReleaseConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataformRepositoryReleaseConfigTimeouts) {
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
      cron_schedule: cdktn.stringToTerraform(this._cronSchedule),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      disabled: cdktn.booleanToTerraform(this._disabled),
      git_commitish: cdktn.stringToTerraform(this._gitCommitish),
      id: cdktn.stringToTerraform(this._id),
      name: cdktn.stringToTerraform(this._name),
      project: cdktn.stringToTerraform(this._project),
      region: cdktn.stringToTerraform(this._region),
      repository: cdktn.stringToTerraform(this._repository),
      time_zone: cdktn.stringToTerraform(this._timeZone),
      code_compilation_config: dataformRepositoryReleaseConfigCodeCompilationConfigToTerraform(this._codeCompilationConfig.internalValue),
      timeouts: dataformRepositoryReleaseConfigTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cron_schedule: {
        value: cdktn.stringToHclTerraform(this._cronSchedule),
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
      disabled: {
        value: cdktn.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      git_commitish: {
        value: cdktn.stringToHclTerraform(this._gitCommitish),
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
      name: {
        value: cdktn.stringToHclTerraform(this._name),
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
      repository: {
        value: cdktn.stringToHclTerraform(this._repository),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_zone: {
        value: cdktn.stringToHclTerraform(this._timeZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      code_compilation_config: {
        value: dataformRepositoryReleaseConfigCodeCompilationConfigToHclTerraform(this._codeCompilationConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataformRepositoryReleaseConfigCodeCompilationConfigList",
      },
      timeouts: {
        value: dataformRepositoryReleaseConfigTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataformRepositoryReleaseConfigTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
