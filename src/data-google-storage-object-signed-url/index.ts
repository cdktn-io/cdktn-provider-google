/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/storage_object_signed_url
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataGoogleStorageObjectSignedUrlConfig extends cdktn.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/storage_object_signed_url#bucket DataGoogleStorageObjectSignedUrl#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/storage_object_signed_url#content_md5 DataGoogleStorageObjectSignedUrl#content_md5}
  */
  readonly contentMd5?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/storage_object_signed_url#content_type DataGoogleStorageObjectSignedUrl#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/storage_object_signed_url#credentials DataGoogleStorageObjectSignedUrl#credentials}
  */
  readonly credentials?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/storage_object_signed_url#duration DataGoogleStorageObjectSignedUrl#duration}
  */
  readonly duration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/storage_object_signed_url#extension_headers DataGoogleStorageObjectSignedUrl#extension_headers}
  */
  readonly extensionHeaders?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/storage_object_signed_url#http_method DataGoogleStorageObjectSignedUrl#http_method}
  */
  readonly httpMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/storage_object_signed_url#id DataGoogleStorageObjectSignedUrl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/storage_object_signed_url#path DataGoogleStorageObjectSignedUrl#path}
  */
  readonly path: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/storage_object_signed_url google_storage_object_signed_url}
*/
export class DataGoogleStorageObjectSignedUrl extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_storage_object_signed_url";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataGoogleStorageObjectSignedUrl resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGoogleStorageObjectSignedUrl to import
  * @param importFromId The id of the existing DataGoogleStorageObjectSignedUrl that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/storage_object_signed_url#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGoogleStorageObjectSignedUrl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_storage_object_signed_url", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/storage_object_signed_url google_storage_object_signed_url} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleStorageObjectSignedUrlConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleStorageObjectSignedUrlConfig) {
    super(scope, id, {
      terraformResourceType: 'google_storage_object_signed_url',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.34.0',
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
    this._bucket = config.bucket;
    this._contentMd5 = config.contentMd5;
    this._contentType = config.contentType;
    this._credentials = config.credentials;
    this._duration = config.duration;
    this._extensionHeaders = config.extensionHeaders;
    this._httpMethod = config.httpMethod;
    this._id = config.id;
    this._path = config.path;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // content_md5 - computed: false, optional: true, required: false
  private _contentMd5?: string; 
  public get contentMd5() {
    return this.getStringAttribute('content_md5');
  }
  public set contentMd5(value: string) {
    this._contentMd5 = value;
  }
  public resetContentMd5() {
    this._contentMd5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentMd5Input() {
    return this._contentMd5;
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials?: string; 
  public get credentials() {
    return this.getStringAttribute('credentials');
  }
  public set credentials(value: string) {
    this._credentials = value;
  }
  public resetCredentials() {
    this._credentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials;
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // extension_headers - computed: false, optional: true, required: false
  private _extensionHeaders?: { [key: string]: string }; 
  public get extensionHeaders() {
    return this.getStringMapAttribute('extension_headers');
  }
  public set extensionHeaders(value: { [key: string]: string }) {
    this._extensionHeaders = value;
  }
  public resetExtensionHeaders() {
    this._extensionHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionHeadersInput() {
    return this._extensionHeaders;
  }

  // http_method - computed: false, optional: true, required: false
  private _httpMethod?: string; 
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }
  public set httpMethod(value: string) {
    this._httpMethod = value;
  }
  public resetHttpMethod() {
    this._httpMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodInput() {
    return this._httpMethod;
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

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // signed_url - computed: true, optional: false, required: false
  public get signedUrl() {
    return this.getStringAttribute('signed_url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktn.stringToTerraform(this._bucket),
      content_md5: cdktn.stringToTerraform(this._contentMd5),
      content_type: cdktn.stringToTerraform(this._contentType),
      credentials: cdktn.stringToTerraform(this._credentials),
      duration: cdktn.stringToTerraform(this._duration),
      extension_headers: cdktn.hashMapper(cdktn.stringToTerraform)(this._extensionHeaders),
      http_method: cdktn.stringToTerraform(this._httpMethod),
      id: cdktn.stringToTerraform(this._id),
      path: cdktn.stringToTerraform(this._path),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bucket: {
        value: cdktn.stringToHclTerraform(this._bucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_md5: {
        value: cdktn.stringToHclTerraform(this._contentMd5),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_type: {
        value: cdktn.stringToHclTerraform(this._contentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credentials: {
        value: cdktn.stringToHclTerraform(this._credentials),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      duration: {
        value: cdktn.stringToHclTerraform(this._duration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extension_headers: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._extensionHeaders),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      http_method: {
        value: cdktn.stringToHclTerraform(this._httpMethod),
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
      path: {
        value: cdktn.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
