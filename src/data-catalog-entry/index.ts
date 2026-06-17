/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/data_catalog_entry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataCatalogEntryConfig extends cdktn.TerraformMetaArguments {
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/data_catalog_entry#deletion_policy DataCatalogEntry#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Entry description, which can consist of several sentences or paragraphs that describe entry contents.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/data_catalog_entry#description DataCatalogEntry#description}
  */
  readonly description?: string;
  /**
  * Display information such as title and description. A short name to identify the entry,
  * for example, "Analytics Data - Jan 2011".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/data_catalog_entry#display_name DataCatalogEntry#display_name}
  */
  readonly displayName?: string;
  /**
  * The name of the entry group this entry is in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/data_catalog_entry#entry_group DataCatalogEntry#entry_group}
  */
  readonly entryGroup: string;
  /**
  * The id of the entry to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/data_catalog_entry#entry_id DataCatalogEntry#entry_id}
  */
  readonly entryId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/data_catalog_entry#id DataCatalogEntry#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The resource this metadata entry refers to.
  * For Google Cloud Platform resources, linkedResource is the full name of the resource.
  * For example, the linkedResource for a table resource from BigQuery is:
  * //bigquery.googleapis.com/projects/projectId/datasets/datasetId/tables/tableId
  * Output only when Entry is of type in the EntryType enum. For entries with userSpecifiedType,
  * this field is optional and defaults to an empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/data_catalog_entry#linked_resource DataCatalogEntry#linked_resource}
  */
  readonly linkedResource?: string;
  /**
  * Schema of the entry (e.g. BigQuery, GoogleSQL, Avro schema), as a json string. An entry might not have any schema
  * attached to it. See
  * https://cloud.google.com/data-catalog/docs/reference/rest/v1/projects.locations.entryGroups.entries#schema
  * for what fields this schema can contain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/data_catalog_entry#schema DataCatalogEntry#schema}
  */
  readonly schema?: string;
  /**
  * The type of the entry. Only used for Entries with types in the EntryType enum.
  * Currently, only FILESET enum value is allowed. All other entries created through Data Catalog must use userSpecifiedType. Possible values: ["FILESET"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/data_catalog_entry#type DataCatalogEntry#type}
  */
  readonly type?: string;
  /**
  * This field indicates the entry's source system that Data Catalog does not integrate with.
  * userSpecifiedSystem strings must begin with a letter or underscore and can only contain letters, numbers,
  * and underscores; are case insensitive; must be at least 1 character and at most 64 characters long.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/data_catalog_entry#user_specified_system DataCatalogEntry#user_specified_system}
  */
  readonly userSpecifiedSystem?: string;
  /**
  * Entry type if it does not fit any of the input-allowed values listed in EntryType enum above.
  * When creating an entry, users should check the enum values first, if nothing matches the entry
  * to be created, then provide a custom value, for example "my_special_type".
  * userSpecifiedType strings must begin with a letter or underscore and can only contain letters,
  * numbers, and underscores; are case insensitive; must be at least 1 character and at most 64 characters long.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/data_catalog_entry#user_specified_type DataCatalogEntry#user_specified_type}
  */
  readonly userSpecifiedType?: string;
  /**
  * gcs_fileset_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/data_catalog_entry#gcs_fileset_spec DataCatalogEntry#gcs_fileset_spec}
  */
  readonly gcsFilesetSpec?: DataCatalogEntryGcsFilesetSpec;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/data_catalog_entry#timeouts DataCatalogEntry#timeouts}
  */
  readonly timeouts?: DataCatalogEntryTimeouts;
}
export interface DataCatalogEntryBigqueryDateShardedSpec {
}

export function dataCatalogEntryBigqueryDateShardedSpecToTerraform(struct?: DataCatalogEntryBigqueryDateShardedSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataCatalogEntryBigqueryDateShardedSpecToHclTerraform(struct?: DataCatalogEntryBigqueryDateShardedSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCatalogEntryBigqueryDateShardedSpecOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataCatalogEntryBigqueryDateShardedSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCatalogEntryBigqueryDateShardedSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dataset - computed: true, optional: false, required: false
  public get dataset() {
    return this.getStringAttribute('dataset');
  }

  // shard_count - computed: true, optional: false, required: false
  public get shardCount() {
    return this.getNumberAttribute('shard_count');
  }

  // table_prefix - computed: true, optional: false, required: false
  public get tablePrefix() {
    return this.getStringAttribute('table_prefix');
  }
}

export class DataCatalogEntryBigqueryDateShardedSpecList extends cdktn.ComplexList {

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
  public get(index: number): DataCatalogEntryBigqueryDateShardedSpecOutputReference {
    return new DataCatalogEntryBigqueryDateShardedSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCatalogEntryBigqueryTableSpecTableSpec {
}

export function dataCatalogEntryBigqueryTableSpecTableSpecToTerraform(struct?: DataCatalogEntryBigqueryTableSpecTableSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataCatalogEntryBigqueryTableSpecTableSpecToHclTerraform(struct?: DataCatalogEntryBigqueryTableSpecTableSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCatalogEntryBigqueryTableSpecTableSpecOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataCatalogEntryBigqueryTableSpecTableSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCatalogEntryBigqueryTableSpecTableSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // grouped_entry - computed: true, optional: false, required: false
  public get groupedEntry() {
    return this.getStringAttribute('grouped_entry');
  }
}

export class DataCatalogEntryBigqueryTableSpecTableSpecList extends cdktn.ComplexList {

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
  public get(index: number): DataCatalogEntryBigqueryTableSpecTableSpecOutputReference {
    return new DataCatalogEntryBigqueryTableSpecTableSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCatalogEntryBigqueryTableSpecViewSpec {
}

export function dataCatalogEntryBigqueryTableSpecViewSpecToTerraform(struct?: DataCatalogEntryBigqueryTableSpecViewSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataCatalogEntryBigqueryTableSpecViewSpecToHclTerraform(struct?: DataCatalogEntryBigqueryTableSpecViewSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCatalogEntryBigqueryTableSpecViewSpecOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataCatalogEntryBigqueryTableSpecViewSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCatalogEntryBigqueryTableSpecViewSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // view_query - computed: true, optional: false, required: false
  public get viewQuery() {
    return this.getStringAttribute('view_query');
  }
}

export class DataCatalogEntryBigqueryTableSpecViewSpecList extends cdktn.ComplexList {

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
  public get(index: number): DataCatalogEntryBigqueryTableSpecViewSpecOutputReference {
    return new DataCatalogEntryBigqueryTableSpecViewSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCatalogEntryBigqueryTableSpec {
}

export function dataCatalogEntryBigqueryTableSpecToTerraform(struct?: DataCatalogEntryBigqueryTableSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataCatalogEntryBigqueryTableSpecToHclTerraform(struct?: DataCatalogEntryBigqueryTableSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCatalogEntryBigqueryTableSpecOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataCatalogEntryBigqueryTableSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCatalogEntryBigqueryTableSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // table_source_type - computed: true, optional: false, required: false
  public get tableSourceType() {
    return this.getStringAttribute('table_source_type');
  }

  // table_spec - computed: true, optional: false, required: false
  private _tableSpec = new DataCatalogEntryBigqueryTableSpecTableSpecList(this, "table_spec", false);
  public get tableSpec() {
    return this._tableSpec;
  }

  // view_spec - computed: true, optional: false, required: false
  private _viewSpec = new DataCatalogEntryBigqueryTableSpecViewSpecList(this, "view_spec", false);
  public get viewSpec() {
    return this._viewSpec;
  }
}

export class DataCatalogEntryBigqueryTableSpecList extends cdktn.ComplexList {

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
  public get(index: number): DataCatalogEntryBigqueryTableSpecOutputReference {
    return new DataCatalogEntryBigqueryTableSpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecs {
}

export function dataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsToTerraform(struct?: DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsToHclTerraform(struct?: DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecs): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // file_path - computed: true, optional: false, required: false
  public get filePath() {
    return this.getStringAttribute('file_path');
  }

  // size_bytes - computed: true, optional: false, required: false
  public get sizeBytes() {
    return this.getNumberAttribute('size_bytes');
  }
}

export class DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList extends cdktn.ComplexList {

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
  public get(index: number): DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference {
    return new DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCatalogEntryGcsFilesetSpec {
  /**
  * Patterns to identify a set of files in Google Cloud Storage.
  * See [Cloud Storage documentation](https://cloud.google.com/storage/docs/gsutil/addlhelp/WildcardNames)
  * for more information. Note that bucket wildcards are currently not supported. Examples of valid filePatterns:
  * 
  * * gs://bucket_name/dir/*: matches all files within bucket_name/dir directory.
  * * gs://bucket_name/dir/**: matches all files in bucket_name/dir spanning all subdirectories.
  * * gs://bucket_name/file*: matches files prefixed by file in bucket_name
  * * gs://bucket_name/??.txt: matches files with two characters followed by .txt in bucket_name
  * * gs://bucket_name/[aeiou].txt: matches files that contain a single vowel character followed by .txt in bucket_name
  * * gs://bucket_name/[a-m].txt: matches files that contain a, b, ... or m followed by .txt in bucket_name
  * * gs://bucket_name/a/* /b: matches all files in bucket_name that match a/* /b pattern, such as a/c/b, a/d/b
  * * gs://another_bucket/a.txt: matches gs://another_bucket/a.txt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/data_catalog_entry#file_patterns DataCatalogEntry#file_patterns}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly filePatterns: string[];
}

export function dataCatalogEntryGcsFilesetSpecToTerraform(struct?: DataCatalogEntryGcsFilesetSpecOutputReference | DataCatalogEntryGcsFilesetSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    file_patterns: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.filePatterns),
  }
}


export function dataCatalogEntryGcsFilesetSpecToHclTerraform(struct?: DataCatalogEntryGcsFilesetSpecOutputReference | DataCatalogEntryGcsFilesetSpec): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    file_patterns: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.filePatterns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCatalogEntryGcsFilesetSpecOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataCatalogEntryGcsFilesetSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filePatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.filePatterns = this._filePatterns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCatalogEntryGcsFilesetSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filePatterns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filePatterns = value.filePatterns;
    }
  }

  // file_patterns - computed: false, optional: false, required: true
  private _filePatterns?: string[]; 
  public get filePatterns() {
    return this.getListAttribute('file_patterns');
  }
  public set filePatterns(value: string[]) {
    this._filePatterns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filePatternsInput() {
    return this._filePatterns;
  }

  // sample_gcs_file_specs - computed: true, optional: false, required: false
  private _sampleGcsFileSpecs = new DataCatalogEntryGcsFilesetSpecSampleGcsFileSpecsList(this, "sample_gcs_file_specs", false);
  public get sampleGcsFileSpecs() {
    return this._sampleGcsFileSpecs;
  }
}
export interface DataCatalogEntryTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/data_catalog_entry#create DataCatalogEntry#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/data_catalog_entry#delete DataCatalogEntry#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/data_catalog_entry#update DataCatalogEntry#update}
  */
  readonly update?: string;
}

export function dataCatalogEntryTimeoutsToTerraform(struct?: DataCatalogEntryTimeouts | cdktn.IResolvable): any {
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


export function dataCatalogEntryTimeoutsToHclTerraform(struct?: DataCatalogEntryTimeouts | cdktn.IResolvable): any {
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

export class DataCatalogEntryTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCatalogEntryTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DataCatalogEntryTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/data_catalog_entry google_data_catalog_entry}
*/
export class DataCatalogEntry extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_data_catalog_entry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataCatalogEntry resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCatalogEntry to import
  * @param importFromId The id of the existing DataCatalogEntry that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/data_catalog_entry#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCatalogEntry to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_data_catalog_entry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/data_catalog_entry google_data_catalog_entry} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCatalogEntryConfig
  */
  public constructor(scope: Construct, id: string, config: DataCatalogEntryConfig) {
    super(scope, id, {
      terraformResourceType: 'google_data_catalog_entry',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.37.0',
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
    this._description = config.description;
    this._displayName = config.displayName;
    this._entryGroup = config.entryGroup;
    this._entryId = config.entryId;
    this._id = config.id;
    this._linkedResource = config.linkedResource;
    this._schema = config.schema;
    this._type = config.type;
    this._userSpecifiedSystem = config.userSpecifiedSystem;
    this._userSpecifiedType = config.userSpecifiedType;
    this._gcsFilesetSpec.internalValue = config.gcsFilesetSpec;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bigquery_date_sharded_spec - computed: true, optional: false, required: false
  private _bigqueryDateShardedSpec = new DataCatalogEntryBigqueryDateShardedSpecList(this, "bigquery_date_sharded_spec", false);
  public get bigqueryDateShardedSpec() {
    return this._bigqueryDateShardedSpec;
  }

  // bigquery_table_spec - computed: true, optional: false, required: false
  private _bigqueryTableSpec = new DataCatalogEntryBigqueryTableSpecList(this, "bigquery_table_spec", false);
  public get bigqueryTableSpec() {
    return this._bigqueryTableSpec;
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

  // entry_group - computed: false, optional: false, required: true
  private _entryGroup?: string; 
  public get entryGroup() {
    return this.getStringAttribute('entry_group');
  }
  public set entryGroup(value: string) {
    this._entryGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entryGroupInput() {
    return this._entryGroup;
  }

  // entry_id - computed: false, optional: false, required: true
  private _entryId?: string; 
  public get entryId() {
    return this.getStringAttribute('entry_id');
  }
  public set entryId(value: string) {
    this._entryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entryIdInput() {
    return this._entryId;
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

  // integrated_system - computed: true, optional: false, required: false
  public get integratedSystem() {
    return this.getStringAttribute('integrated_system');
  }

  // linked_resource - computed: true, optional: true, required: false
  private _linkedResource?: string; 
  public get linkedResource() {
    return this.getStringAttribute('linked_resource');
  }
  public set linkedResource(value: string) {
    this._linkedResource = value;
  }
  public resetLinkedResource() {
    this._linkedResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkedResourceInput() {
    return this._linkedResource;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // schema - computed: false, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // user_specified_system - computed: false, optional: true, required: false
  private _userSpecifiedSystem?: string; 
  public get userSpecifiedSystem() {
    return this.getStringAttribute('user_specified_system');
  }
  public set userSpecifiedSystem(value: string) {
    this._userSpecifiedSystem = value;
  }
  public resetUserSpecifiedSystem() {
    this._userSpecifiedSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSpecifiedSystemInput() {
    return this._userSpecifiedSystem;
  }

  // user_specified_type - computed: false, optional: true, required: false
  private _userSpecifiedType?: string; 
  public get userSpecifiedType() {
    return this.getStringAttribute('user_specified_type');
  }
  public set userSpecifiedType(value: string) {
    this._userSpecifiedType = value;
  }
  public resetUserSpecifiedType() {
    this._userSpecifiedType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSpecifiedTypeInput() {
    return this._userSpecifiedType;
  }

  // gcs_fileset_spec - computed: false, optional: true, required: false
  private _gcsFilesetSpec = new DataCatalogEntryGcsFilesetSpecOutputReference(this, "gcs_fileset_spec");
  public get gcsFilesetSpec() {
    return this._gcsFilesetSpec;
  }
  public putGcsFilesetSpec(value: DataCatalogEntryGcsFilesetSpec) {
    this._gcsFilesetSpec.internalValue = value;
  }
  public resetGcsFilesetSpec() {
    this._gcsFilesetSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsFilesetSpecInput() {
    return this._gcsFilesetSpec.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataCatalogEntryTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataCatalogEntryTimeouts) {
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
      description: cdktn.stringToTerraform(this._description),
      display_name: cdktn.stringToTerraform(this._displayName),
      entry_group: cdktn.stringToTerraform(this._entryGroup),
      entry_id: cdktn.stringToTerraform(this._entryId),
      id: cdktn.stringToTerraform(this._id),
      linked_resource: cdktn.stringToTerraform(this._linkedResource),
      schema: cdktn.stringToTerraform(this._schema),
      type: cdktn.stringToTerraform(this._type),
      user_specified_system: cdktn.stringToTerraform(this._userSpecifiedSystem),
      user_specified_type: cdktn.stringToTerraform(this._userSpecifiedType),
      gcs_fileset_spec: dataCatalogEntryGcsFilesetSpecToTerraform(this._gcsFilesetSpec.internalValue),
      timeouts: dataCatalogEntryTimeoutsToTerraform(this._timeouts.internalValue),
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
      entry_group: {
        value: cdktn.stringToHclTerraform(this._entryGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entry_id: {
        value: cdktn.stringToHclTerraform(this._entryId),
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
      linked_resource: {
        value: cdktn.stringToHclTerraform(this._linkedResource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema: {
        value: cdktn.stringToHclTerraform(this._schema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_specified_system: {
        value: cdktn.stringToHclTerraform(this._userSpecifiedSystem),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_specified_type: {
        value: cdktn.stringToHclTerraform(this._userSpecifiedType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcs_fileset_spec: {
        value: dataCatalogEntryGcsFilesetSpecToHclTerraform(this._gcsFilesetSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataCatalogEntryGcsFilesetSpecList",
      },
      timeouts: {
        value: dataCatalogEntryTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataCatalogEntryTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
