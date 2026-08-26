/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/data-sources/storage_control_folder_intelligence_findings_summary
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataGoogleStorageControlFolderIntelligenceFindingsSummaryConfig extends cdktn.TerraformMetaArguments {
  /**
  * The filter expression. Supports filtering by FindingType.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/data-sources/storage_control_folder_intelligence_findings_summary#filter DataGoogleStorageControlFolderIntelligenceFindingsSummary#filter}
  */
  readonly filter?: string;
  /**
  * The ID of the Google Cloud Folder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/data-sources/storage_control_folder_intelligence_findings_summary#folder DataGoogleStorageControlFolderIntelligenceFindingsSummary#folder}
  */
  readonly folder: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/data-sources/storage_control_folder_intelligence_findings_summary#id DataGoogleStorageControlFolderIntelligenceFindingsSummary#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location of the intelligence findings summary. Currently default value is global and users cannot use for input for now.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/data-sources/storage_control_folder_intelligence_findings_summary#location DataGoogleStorageControlFolderIntelligenceFindingsSummary#location}
  */
  readonly location?: string;
  /**
  * Determines the granularity of the findings when the parent is an organization or folder. Possible values are PARENT and PROJECT. Default value is PARENT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/data-sources/storage_control_folder_intelligence_findings_summary#resource_scope DataGoogleStorageControlFolderIntelligenceFindingsSummary#resource_scope}
  */
  readonly resourceScope?: string;
}
export interface DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetails {
}

export function dataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsToTerraform(struct?: DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsToHclTerraform(struct?: DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetails): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getStringAttribute('count');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // percentage - computed: true, optional: false, required: false
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
}

export class DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference {
    return new DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummaries {
}

export function dataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesToTerraform(struct?: DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummaries): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
  }
}


export function dataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesToHclTerraform(struct?: DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummaries): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference extends cdktn.ComplexObject {
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

  public get internalValue(): DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummaries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummaries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
  }

  // summary_details - computed: true, optional: false, required: false
  private _summaryDetails = new DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList(this, "summary_details", false);
  public get summaryDetails() {
    return this._summaryDetails;
  }

  // target_resource - computed: true, optional: false, required: false
  public get targetResource() {
    return this.getStringAttribute('target_resource');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
}

export class DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesList extends cdktn.ComplexList {

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
  public get(index: number): DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference {
    return new DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/data-sources/storage_control_folder_intelligence_findings_summary google_storage_control_folder_intelligence_findings_summary}
*/
export class DataGoogleStorageControlFolderIntelligenceFindingsSummary extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_storage_control_folder_intelligence_findings_summary";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataGoogleStorageControlFolderIntelligenceFindingsSummary resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGoogleStorageControlFolderIntelligenceFindingsSummary to import
  * @param importFromId The id of the existing DataGoogleStorageControlFolderIntelligenceFindingsSummary that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/data-sources/storage_control_folder_intelligence_findings_summary#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGoogleStorageControlFolderIntelligenceFindingsSummary to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_storage_control_folder_intelligence_findings_summary", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/data-sources/storage_control_folder_intelligence_findings_summary google_storage_control_folder_intelligence_findings_summary} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleStorageControlFolderIntelligenceFindingsSummaryConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleStorageControlFolderIntelligenceFindingsSummaryConfig) {
    super(scope, id, {
      terraformResourceType: 'google_storage_control_folder_intelligence_findings_summary',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.46.0',
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
    this._filter = config.filter;
    this._folder = config.folder;
    this._id = config.id;
    this._location = config.location;
    this._resourceScope = config.resourceScope;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // finding_summaries - computed: true, optional: false, required: false
  private _findingSummaries = new DataGoogleStorageControlFolderIntelligenceFindingsSummaryFindingSummariesList(this, "finding_summaries", false);
  public get findingSummaries() {
    return this._findingSummaries;
  }

  // folder - computed: false, optional: false, required: true
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
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

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // resource_scope - computed: false, optional: true, required: false
  private _resourceScope?: string; 
  public get resourceScope() {
    return this.getStringAttribute('resource_scope');
  }
  public set resourceScope(value: string) {
    this._resourceScope = value;
  }
  public resetResourceScope() {
    this._resourceScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceScopeInput() {
    return this._resourceScope;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter: cdktn.stringToTerraform(this._filter),
      folder: cdktn.stringToTerraform(this._folder),
      id: cdktn.stringToTerraform(this._id),
      location: cdktn.stringToTerraform(this._location),
      resource_scope: cdktn.stringToTerraform(this._resourceScope),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: cdktn.stringToHclTerraform(this._filter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder: {
        value: cdktn.stringToHclTerraform(this._folder),
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
      resource_scope: {
        value: cdktn.stringToHclTerraform(this._resourceScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
