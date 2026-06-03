/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/kms_secret_asymmetric
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DataGoogleKmsSecretAsymmetricConfig extends cdktn.TerraformMetaArguments {
  /**
  * The public key encrypted ciphertext in base64 encoding
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/kms_secret_asymmetric#ciphertext DataGoogleKmsSecretAsymmetric#ciphertext}
  */
  readonly ciphertext: string;
  /**
  * The crc32 checksum of the ciphertext, hexadecimal encoding. If not specified, it will be computed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/kms_secret_asymmetric#crc32 DataGoogleKmsSecretAsymmetric#crc32}
  */
  readonly crc32?: string;
  /**
  * The fully qualified KMS crypto key version name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/kms_secret_asymmetric#crypto_key_version DataGoogleKmsSecretAsymmetric#crypto_key_version}
  */
  readonly cryptoKeyVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/kms_secret_asymmetric#id DataGoogleKmsSecretAsymmetric#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/kms_secret_asymmetric google_kms_secret_asymmetric}
*/
export class DataGoogleKmsSecretAsymmetric extends cdktn.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_kms_secret_asymmetric";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DataGoogleKmsSecretAsymmetric resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGoogleKmsSecretAsymmetric to import
  * @param importFromId The id of the existing DataGoogleKmsSecretAsymmetric that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/kms_secret_asymmetric#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGoogleKmsSecretAsymmetric to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_kms_secret_asymmetric", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/kms_secret_asymmetric google_kms_secret_asymmetric} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleKmsSecretAsymmetricConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleKmsSecretAsymmetricConfig) {
    super(scope, id, {
      terraformResourceType: 'google_kms_secret_asymmetric',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.35.0',
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
    this._ciphertext = config.ciphertext;
    this._crc32 = config.crc32;
    this._cryptoKeyVersion = config.cryptoKeyVersion;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ciphertext - computed: false, optional: false, required: true
  private _ciphertext?: string; 
  public get ciphertext() {
    return this.getStringAttribute('ciphertext');
  }
  public set ciphertext(value: string) {
    this._ciphertext = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ciphertextInput() {
    return this._ciphertext;
  }

  // crc32 - computed: false, optional: true, required: false
  private _crc32?: string; 
  public get crc32() {
    return this.getStringAttribute('crc32');
  }
  public set crc32(value: string) {
    this._crc32 = value;
  }
  public resetCrc32() {
    this._crc32 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crc32Input() {
    return this._crc32;
  }

  // crypto_key_version - computed: false, optional: false, required: true
  private _cryptoKeyVersion?: string; 
  public get cryptoKeyVersion() {
    return this.getStringAttribute('crypto_key_version');
  }
  public set cryptoKeyVersion(value: string) {
    this._cryptoKeyVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoKeyVersionInput() {
    return this._cryptoKeyVersion;
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

  // plaintext - computed: true, optional: false, required: false
  public get plaintext() {
    return this.getStringAttribute('plaintext');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ciphertext: cdktn.stringToTerraform(this._ciphertext),
      crc32: cdktn.stringToTerraform(this._crc32),
      crypto_key_version: cdktn.stringToTerraform(this._cryptoKeyVersion),
      id: cdktn.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ciphertext: {
        value: cdktn.stringToHclTerraform(this._ciphertext),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      crc32: {
        value: cdktn.stringToHclTerraform(this._crc32),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      crypto_key_version: {
        value: cdktn.stringToHclTerraform(this._cryptoKeyVersion),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
