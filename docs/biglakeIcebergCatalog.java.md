# `biglakeIcebergCatalog` Submodule <a name="`biglakeIcebergCatalog` Submodule" id="@cdktn/provider-google.biglakeIcebergCatalog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BiglakeIcebergCatalog <a name="BiglakeIcebergCatalog" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/biglake_iceberg_catalog google_biglake_iceberg_catalog}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.Initializer"></a>

```java
import io.cdktn.providers.google.biglake_iceberg_catalog.BiglakeIcebergCatalog;

BiglakeIcebergCatalog.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .catalogType(java.lang.String)
    .name(java.lang.String)
//  .credentialMode(java.lang.String)
//  .defaultLocation(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .federatedCatalogOptions(BiglakeIcebergCatalogFederatedCatalogOptions)
//  .id(java.lang.String)
//  .primaryLocation(java.lang.String)
//  .project(java.lang.String)
//  .restrictedLocationsConfig(BiglakeIcebergCatalogRestrictedLocationsConfig)
//  .timeouts(BiglakeIcebergCatalogTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.Initializer.parameter.catalogType">catalogType</a></code> | <code>java.lang.String</code> | The catalog type of the IcebergCatalog. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the IcebergCatalog. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.Initializer.parameter.credentialMode">credentialMode</a></code> | <code>java.lang.String</code> | The credential mode used for the catalog. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.Initializer.parameter.defaultLocation">defaultLocation</a></code> | <code>java.lang.String</code> | The default storage location for the catalog, e.g., 'gs://my-bucket'. Output only when the catalog type is CATALOG_TYPE_GCS_BUCKET. Required when the catalog type is CATALOG_TYPE_BIGLAKE. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A user-provided description of the catalog. Maximum 1024 UTF-8 characters. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.Initializer.parameter.federatedCatalogOptions">federatedCatalogOptions</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptions">BiglakeIcebergCatalogFederatedCatalogOptions</a></code> | federated_catalog_options block. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/biglake_iceberg_catalog#id BiglakeIcebergCatalog#id}. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.Initializer.parameter.primaryLocation">primaryLocation</a></code> | <code>java.lang.String</code> | The primary location for mirroring the remote catalog metadata. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/biglake_iceberg_catalog#project BiglakeIcebergCatalog#project}. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.Initializer.parameter.restrictedLocationsConfig">restrictedLocationsConfig</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfig">BiglakeIcebergCatalogRestrictedLocationsConfig</a></code> | restricted_locations_config block. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeouts">BiglakeIcebergCatalogTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `catalogType`<sup>Required</sup> <a name="catalogType" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.Initializer.parameter.catalogType"></a>

- *Type:* java.lang.String

The catalog type of the IcebergCatalog.

* 'CATALOG_TYPE_GCS_BUCKET': Google Cloud Storage bucket catalog type.
* 'CATALOG_TYPE_BIGLAKE': BigLake catalog type.
* 'CATALOG_TYPE_FEDERATED': Federated catalog type, for integrating with external Iceberg REST Catalogs such as Databricks Unity Catalog or AWS Glue. Possible values: ["CATALOG_TYPE_GCS_BUCKET", "CATALOG_TYPE_BIGLAKE", "CATALOG_TYPE_FEDERATED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/biglake_iceberg_catalog#catalog_type BiglakeIcebergCatalog#catalog_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the IcebergCatalog.

For CATALOG_TYPE_GCS_BUCKET typed catalogs, the name needs to be the
exact same value of the GCS bucket's name. For example, for a bucket:
gs://bucket-name, the catalog name will be exactly "bucket-name".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/biglake_iceberg_catalog#name BiglakeIcebergCatalog#name}

---

##### `credentialMode`<sup>Optional</sup> <a name="credentialMode" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.Initializer.parameter.credentialMode"></a>

- *Type:* java.lang.String

The credential mode used for the catalog.

CREDENTIAL_MODE_END_USER - End user credentials, default. The authenticating user must have access to the catalog resources and the corresponding Google Cloud Storage files. CREDENTIAL_MODE_VENDED_CREDENTIALS - Use credential vending. The authenticating user must have access to the catalog resources and the system will provide the caller with downscoped credentials to access the Google Cloud Storage files. All table operations in this mode would require 'X-Iceberg-Access-Delegation' header with 'vended-credentials' value included. System will generate a service account and the catalog administrator must grant the service account appropriate permissions. Possible values: ["CREDENTIAL_MODE_END_USER", "CREDENTIAL_MODE_VENDED_CREDENTIALS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/biglake_iceberg_catalog#credential_mode BiglakeIcebergCatalog#credential_mode}

---

##### `defaultLocation`<sup>Optional</sup> <a name="defaultLocation" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.Initializer.parameter.defaultLocation"></a>

- *Type:* java.lang.String

The default storage location for the catalog, e.g., 'gs://my-bucket'. Output only when the catalog type is CATALOG_TYPE_GCS_BUCKET. Required when the catalog type is CATALOG_TYPE_BIGLAKE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/biglake_iceberg_catalog#default_location BiglakeIcebergCatalog#default_location}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/biglake_iceberg_catalog#deletion_policy BiglakeIcebergCatalog#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A user-provided description of the catalog. Maximum 1024 UTF-8 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/biglake_iceberg_catalog#description BiglakeIcebergCatalog#description}

---

##### `federatedCatalogOptions`<sup>Optional</sup> <a name="federatedCatalogOptions" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.Initializer.parameter.federatedCatalogOptions"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptions">BiglakeIcebergCatalogFederatedCatalogOptions</a>

federated_catalog_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/biglake_iceberg_catalog#federated_catalog_options BiglakeIcebergCatalog#federated_catalog_options}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/biglake_iceberg_catalog#id BiglakeIcebergCatalog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `primaryLocation`<sup>Optional</sup> <a name="primaryLocation" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.Initializer.parameter.primaryLocation"></a>

- *Type:* java.lang.String

The primary location for mirroring the remote catalog metadata.

It must be
a BigLake-supported location, and it should be proximate to the remote
catalog's location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/biglake_iceberg_catalog#primary_location BiglakeIcebergCatalog#primary_location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/biglake_iceberg_catalog#project BiglakeIcebergCatalog#project}.

---

##### `restrictedLocationsConfig`<sup>Optional</sup> <a name="restrictedLocationsConfig" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.Initializer.parameter.restrictedLocationsConfig"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfig">BiglakeIcebergCatalogRestrictedLocationsConfig</a>

restricted_locations_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/biglake_iceberg_catalog#restricted_locations_config BiglakeIcebergCatalog#restricted_locations_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeouts">BiglakeIcebergCatalogTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/biglake_iceberg_catalog#timeouts BiglakeIcebergCatalog#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.putFederatedCatalogOptions">putFederatedCatalogOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.putRestrictedLocationsConfig">putRestrictedLocationsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetCredentialMode">resetCredentialMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetDefaultLocation">resetDefaultLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetFederatedCatalogOptions">resetFederatedCatalogOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetPrimaryLocation">resetPrimaryLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetRestrictedLocationsConfig">resetRestrictedLocationsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFederatedCatalogOptions` <a name="putFederatedCatalogOptions" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.putFederatedCatalogOptions"></a>

```java
public void putFederatedCatalogOptions(BiglakeIcebergCatalogFederatedCatalogOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.putFederatedCatalogOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptions">BiglakeIcebergCatalogFederatedCatalogOptions</a>

---

##### `putRestrictedLocationsConfig` <a name="putRestrictedLocationsConfig" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.putRestrictedLocationsConfig"></a>

```java
public void putRestrictedLocationsConfig(BiglakeIcebergCatalogRestrictedLocationsConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.putRestrictedLocationsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfig">BiglakeIcebergCatalogRestrictedLocationsConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.putTimeouts"></a>

```java
public void putTimeouts(BiglakeIcebergCatalogTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeouts">BiglakeIcebergCatalogTimeouts</a>

---

##### `resetCredentialMode` <a name="resetCredentialMode" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetCredentialMode"></a>

```java
public void resetCredentialMode()
```

##### `resetDefaultLocation` <a name="resetDefaultLocation" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetDefaultLocation"></a>

```java
public void resetDefaultLocation()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFederatedCatalogOptions` <a name="resetFederatedCatalogOptions" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetFederatedCatalogOptions"></a>

```java
public void resetFederatedCatalogOptions()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetId"></a>

```java
public void resetId()
```

##### `resetPrimaryLocation` <a name="resetPrimaryLocation" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetPrimaryLocation"></a>

```java
public void resetPrimaryLocation()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetProject"></a>

```java
public void resetProject()
```

##### `resetRestrictedLocationsConfig` <a name="resetRestrictedLocationsConfig" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetRestrictedLocationsConfig"></a>

```java
public void resetRestrictedLocationsConfig()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BiglakeIcebergCatalog resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.isConstruct"></a>

```java
import io.cdktn.providers.google.biglake_iceberg_catalog.BiglakeIcebergCatalog;

BiglakeIcebergCatalog.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.isTerraformElement"></a>

```java
import io.cdktn.providers.google.biglake_iceberg_catalog.BiglakeIcebergCatalog;

BiglakeIcebergCatalog.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.isTerraformResource"></a>

```java
import io.cdktn.providers.google.biglake_iceberg_catalog.BiglakeIcebergCatalog;

BiglakeIcebergCatalog.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.biglake_iceberg_catalog.BiglakeIcebergCatalog;

BiglakeIcebergCatalog.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BiglakeIcebergCatalog.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a BiglakeIcebergCatalog resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BiglakeIcebergCatalog to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BiglakeIcebergCatalog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/biglake_iceberg_catalog#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the BiglakeIcebergCatalog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.biglakeServiceAccount">biglakeServiceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.biglakeServiceAccountId">biglakeServiceAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.federatedCatalogOptions">federatedCatalogOptions</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference">BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.replicas">replicas</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList">BiglakeIcebergCatalogReplicasList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.restrictedLocationsConfig">restrictedLocationsConfig</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference">BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.storageRegions">storageRegions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference">BiglakeIcebergCatalogTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.catalogTypeInput">catalogTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.credentialModeInput">credentialModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.defaultLocationInput">defaultLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.federatedCatalogOptionsInput">federatedCatalogOptionsInput</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptions">BiglakeIcebergCatalogFederatedCatalogOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.primaryLocationInput">primaryLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.restrictedLocationsConfigInput">restrictedLocationsConfigInput</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfig">BiglakeIcebergCatalogRestrictedLocationsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeouts">BiglakeIcebergCatalogTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.catalogType">catalogType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.credentialMode">credentialMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.defaultLocation">defaultLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.primaryLocation">primaryLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `biglakeServiceAccount`<sup>Required</sup> <a name="biglakeServiceAccount" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.biglakeServiceAccount"></a>

```java
public java.lang.String getBiglakeServiceAccount();
```

- *Type:* java.lang.String

---

##### `biglakeServiceAccountId`<sup>Required</sup> <a name="biglakeServiceAccountId" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.biglakeServiceAccountId"></a>

```java
public java.lang.String getBiglakeServiceAccountId();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `federatedCatalogOptions`<sup>Required</sup> <a name="federatedCatalogOptions" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.federatedCatalogOptions"></a>

```java
public BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference getFederatedCatalogOptions();
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference">BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference</a>

---

##### `replicas`<sup>Required</sup> <a name="replicas" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.replicas"></a>

```java
public BiglakeIcebergCatalogReplicasList getReplicas();
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList">BiglakeIcebergCatalogReplicasList</a>

---

##### `restrictedLocationsConfig`<sup>Required</sup> <a name="restrictedLocationsConfig" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.restrictedLocationsConfig"></a>

```java
public BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference getRestrictedLocationsConfig();
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference">BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference</a>

---

##### `storageRegions`<sup>Required</sup> <a name="storageRegions" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.storageRegions"></a>

```java
public java.util.List<java.lang.String> getStorageRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.timeouts"></a>

```java
public BiglakeIcebergCatalogTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference">BiglakeIcebergCatalogTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `catalogTypeInput`<sup>Optional</sup> <a name="catalogTypeInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.catalogTypeInput"></a>

```java
public java.lang.String getCatalogTypeInput();
```

- *Type:* java.lang.String

---

##### `credentialModeInput`<sup>Optional</sup> <a name="credentialModeInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.credentialModeInput"></a>

```java
public java.lang.String getCredentialModeInput();
```

- *Type:* java.lang.String

---

##### `defaultLocationInput`<sup>Optional</sup> <a name="defaultLocationInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.defaultLocationInput"></a>

```java
public java.lang.String getDefaultLocationInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `federatedCatalogOptionsInput`<sup>Optional</sup> <a name="federatedCatalogOptionsInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.federatedCatalogOptionsInput"></a>

```java
public BiglakeIcebergCatalogFederatedCatalogOptions getFederatedCatalogOptionsInput();
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptions">BiglakeIcebergCatalogFederatedCatalogOptions</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `primaryLocationInput`<sup>Optional</sup> <a name="primaryLocationInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.primaryLocationInput"></a>

```java
public java.lang.String getPrimaryLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `restrictedLocationsConfigInput`<sup>Optional</sup> <a name="restrictedLocationsConfigInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.restrictedLocationsConfigInput"></a>

```java
public BiglakeIcebergCatalogRestrictedLocationsConfig getRestrictedLocationsConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfig">BiglakeIcebergCatalogRestrictedLocationsConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.timeoutsInput"></a>

```java
public IResolvable|BiglakeIcebergCatalogTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeouts">BiglakeIcebergCatalogTimeouts</a>

---

##### `catalogType`<sup>Required</sup> <a name="catalogType" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.catalogType"></a>

```java
public java.lang.String getCatalogType();
```

- *Type:* java.lang.String

---

##### `credentialMode`<sup>Required</sup> <a name="credentialMode" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.credentialMode"></a>

```java
public java.lang.String getCredentialMode();
```

- *Type:* java.lang.String

---

##### `defaultLocation`<sup>Required</sup> <a name="defaultLocation" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.defaultLocation"></a>

```java
public java.lang.String getDefaultLocation();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `primaryLocation`<sup>Required</sup> <a name="primaryLocation" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.primaryLocation"></a>

```java
public java.lang.String getPrimaryLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalog.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BiglakeIcebergCatalogConfig <a name="BiglakeIcebergCatalogConfig" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.Initializer"></a>

```java
import io.cdktn.providers.google.biglake_iceberg_catalog.BiglakeIcebergCatalogConfig;

BiglakeIcebergCatalogConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .catalogType(java.lang.String)
    .name(java.lang.String)
//  .credentialMode(java.lang.String)
//  .defaultLocation(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .federatedCatalogOptions(BiglakeIcebergCatalogFederatedCatalogOptions)
//  .id(java.lang.String)
//  .primaryLocation(java.lang.String)
//  .project(java.lang.String)
//  .restrictedLocationsConfig(BiglakeIcebergCatalogRestrictedLocationsConfig)
//  .timeouts(BiglakeIcebergCatalogTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.catalogType">catalogType</a></code> | <code>java.lang.String</code> | The catalog type of the IcebergCatalog. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the IcebergCatalog. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.credentialMode">credentialMode</a></code> | <code>java.lang.String</code> | The credential mode used for the catalog. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.defaultLocation">defaultLocation</a></code> | <code>java.lang.String</code> | The default storage location for the catalog, e.g., 'gs://my-bucket'. Output only when the catalog type is CATALOG_TYPE_GCS_BUCKET. Required when the catalog type is CATALOG_TYPE_BIGLAKE. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.description">description</a></code> | <code>java.lang.String</code> | A user-provided description of the catalog. Maximum 1024 UTF-8 characters. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.federatedCatalogOptions">federatedCatalogOptions</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptions">BiglakeIcebergCatalogFederatedCatalogOptions</a></code> | federated_catalog_options block. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/biglake_iceberg_catalog#id BiglakeIcebergCatalog#id}. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.primaryLocation">primaryLocation</a></code> | <code>java.lang.String</code> | The primary location for mirroring the remote catalog metadata. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/biglake_iceberg_catalog#project BiglakeIcebergCatalog#project}. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.restrictedLocationsConfig">restrictedLocationsConfig</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfig">BiglakeIcebergCatalogRestrictedLocationsConfig</a></code> | restricted_locations_config block. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeouts">BiglakeIcebergCatalogTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `catalogType`<sup>Required</sup> <a name="catalogType" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.catalogType"></a>

```java
public java.lang.String getCatalogType();
```

- *Type:* java.lang.String

The catalog type of the IcebergCatalog.

* 'CATALOG_TYPE_GCS_BUCKET': Google Cloud Storage bucket catalog type.
* 'CATALOG_TYPE_BIGLAKE': BigLake catalog type.
* 'CATALOG_TYPE_FEDERATED': Federated catalog type, for integrating with external Iceberg REST Catalogs such as Databricks Unity Catalog or AWS Glue. Possible values: ["CATALOG_TYPE_GCS_BUCKET", "CATALOG_TYPE_BIGLAKE", "CATALOG_TYPE_FEDERATED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/biglake_iceberg_catalog#catalog_type BiglakeIcebergCatalog#catalog_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the IcebergCatalog.

For CATALOG_TYPE_GCS_BUCKET typed catalogs, the name needs to be the
exact same value of the GCS bucket's name. For example, for a bucket:
gs://bucket-name, the catalog name will be exactly "bucket-name".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/biglake_iceberg_catalog#name BiglakeIcebergCatalog#name}

---

##### `credentialMode`<sup>Optional</sup> <a name="credentialMode" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.credentialMode"></a>

```java
public java.lang.String getCredentialMode();
```

- *Type:* java.lang.String

The credential mode used for the catalog.

CREDENTIAL_MODE_END_USER - End user credentials, default. The authenticating user must have access to the catalog resources and the corresponding Google Cloud Storage files. CREDENTIAL_MODE_VENDED_CREDENTIALS - Use credential vending. The authenticating user must have access to the catalog resources and the system will provide the caller with downscoped credentials to access the Google Cloud Storage files. All table operations in this mode would require 'X-Iceberg-Access-Delegation' header with 'vended-credentials' value included. System will generate a service account and the catalog administrator must grant the service account appropriate permissions. Possible values: ["CREDENTIAL_MODE_END_USER", "CREDENTIAL_MODE_VENDED_CREDENTIALS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/biglake_iceberg_catalog#credential_mode BiglakeIcebergCatalog#credential_mode}

---

##### `defaultLocation`<sup>Optional</sup> <a name="defaultLocation" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.defaultLocation"></a>

```java
public java.lang.String getDefaultLocation();
```

- *Type:* java.lang.String

The default storage location for the catalog, e.g., 'gs://my-bucket'. Output only when the catalog type is CATALOG_TYPE_GCS_BUCKET. Required when the catalog type is CATALOG_TYPE_BIGLAKE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/biglake_iceberg_catalog#default_location BiglakeIcebergCatalog#default_location}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/biglake_iceberg_catalog#deletion_policy BiglakeIcebergCatalog#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A user-provided description of the catalog. Maximum 1024 UTF-8 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/biglake_iceberg_catalog#description BiglakeIcebergCatalog#description}

---

##### `federatedCatalogOptions`<sup>Optional</sup> <a name="federatedCatalogOptions" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.federatedCatalogOptions"></a>

```java
public BiglakeIcebergCatalogFederatedCatalogOptions getFederatedCatalogOptions();
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptions">BiglakeIcebergCatalogFederatedCatalogOptions</a>

federated_catalog_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/biglake_iceberg_catalog#federated_catalog_options BiglakeIcebergCatalog#federated_catalog_options}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/biglake_iceberg_catalog#id BiglakeIcebergCatalog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `primaryLocation`<sup>Optional</sup> <a name="primaryLocation" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.primaryLocation"></a>

```java
public java.lang.String getPrimaryLocation();
```

- *Type:* java.lang.String

The primary location for mirroring the remote catalog metadata.

It must be
a BigLake-supported location, and it should be proximate to the remote
catalog's location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/biglake_iceberg_catalog#primary_location BiglakeIcebergCatalog#primary_location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/biglake_iceberg_catalog#project BiglakeIcebergCatalog#project}.

---

##### `restrictedLocationsConfig`<sup>Optional</sup> <a name="restrictedLocationsConfig" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.restrictedLocationsConfig"></a>

```java
public BiglakeIcebergCatalogRestrictedLocationsConfig getRestrictedLocationsConfig();
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfig">BiglakeIcebergCatalogRestrictedLocationsConfig</a>

restricted_locations_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/biglake_iceberg_catalog#restricted_locations_config BiglakeIcebergCatalog#restricted_locations_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogConfig.property.timeouts"></a>

```java
public BiglakeIcebergCatalogTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeouts">BiglakeIcebergCatalogTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/biglake_iceberg_catalog#timeouts BiglakeIcebergCatalog#timeouts}

---

### BiglakeIcebergCatalogFederatedCatalogOptions <a name="BiglakeIcebergCatalogFederatedCatalogOptions" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptions.Initializer"></a>

```java
import io.cdktn.providers.google.biglake_iceberg_catalog.BiglakeIcebergCatalogFederatedCatalogOptions;

BiglakeIcebergCatalogFederatedCatalogOptions.builder()
//  .glueCatalogInfo(BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo)
//  .refreshOptions(BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions)
//  .secretName(java.lang.String)
//  .serviceDirectoryName(java.lang.String)
//  .unityCatalogInfo(BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptions.property.glueCatalogInfo">glueCatalogInfo</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo">BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo</a></code> | glue_catalog_info block. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptions.property.refreshOptions">refreshOptions</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions">BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions</a></code> | refresh_options block. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptions.property.secretName">secretName</a></code> | <code>java.lang.String</code> | The secret resource name in Secret Manager, in the format 'projects/{projectId}/locations/{location}/secrets/{secret_id}'. Used to store credentials for authenticating with the remote catalog. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptions.property.serviceDirectoryName">serviceDirectoryName</a></code> | <code>java.lang.String</code> | The Service Directory service name for private network connectivity through Cross-Cloud Interconnect. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptions.property.unityCatalogInfo">unityCatalogInfo</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo">BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo</a></code> | unity_catalog_info block. |

---

##### `glueCatalogInfo`<sup>Optional</sup> <a name="glueCatalogInfo" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptions.property.glueCatalogInfo"></a>

```java
public BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo getGlueCatalogInfo();
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo">BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo</a>

glue_catalog_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/biglake_iceberg_catalog#glue_catalog_info BiglakeIcebergCatalog#glue_catalog_info}

---

##### `refreshOptions`<sup>Optional</sup> <a name="refreshOptions" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptions.property.refreshOptions"></a>

```java
public BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions getRefreshOptions();
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions">BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions</a>

refresh_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/biglake_iceberg_catalog#refresh_options BiglakeIcebergCatalog#refresh_options}

---

##### `secretName`<sup>Optional</sup> <a name="secretName" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptions.property.secretName"></a>

```java
public java.lang.String getSecretName();
```

- *Type:* java.lang.String

The secret resource name in Secret Manager, in the format 'projects/{projectId}/locations/{location}/secrets/{secret_id}'. Used to store credentials for authenticating with the remote catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/biglake_iceberg_catalog#secret_name BiglakeIcebergCatalog#secret_name}

---

##### `serviceDirectoryName`<sup>Optional</sup> <a name="serviceDirectoryName" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptions.property.serviceDirectoryName"></a>

```java
public java.lang.String getServiceDirectoryName();
```

- *Type:* java.lang.String

The Service Directory service name for private network connectivity through Cross-Cloud Interconnect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/biglake_iceberg_catalog#service_directory_name BiglakeIcebergCatalog#service_directory_name}

---

##### `unityCatalogInfo`<sup>Optional</sup> <a name="unityCatalogInfo" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptions.property.unityCatalogInfo"></a>

```java
public BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo getUnityCatalogInfo();
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo">BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo</a>

unity_catalog_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/biglake_iceberg_catalog#unity_catalog_info BiglakeIcebergCatalog#unity_catalog_info}

---

### BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo <a name="BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo.Initializer"></a>

```java
import io.cdktn.providers.google.biglake_iceberg_catalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo;

BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo.builder()
    .awsRegion(java.lang.String)
    .awsRoleArn(java.lang.String)
    .warehouse(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo.property.awsRegion">awsRegion</a></code> | <code>java.lang.String</code> | The AWS region where the Glue catalog is located. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo.property.awsRoleArn">awsRoleArn</a></code> | <code>java.lang.String</code> | The ARN of the AWS IAM role to assume for accessing the Glue catalog. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo.property.warehouse">warehouse</a></code> | <code>java.lang.String</code> | The AWS Glue warehouse identifier (account ID or S3 table bucket). |

---

##### `awsRegion`<sup>Required</sup> <a name="awsRegion" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo.property.awsRegion"></a>

```java
public java.lang.String getAwsRegion();
```

- *Type:* java.lang.String

The AWS region where the Glue catalog is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/biglake_iceberg_catalog#aws_region BiglakeIcebergCatalog#aws_region}

---

##### `awsRoleArn`<sup>Required</sup> <a name="awsRoleArn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo.property.awsRoleArn"></a>

```java
public java.lang.String getAwsRoleArn();
```

- *Type:* java.lang.String

The ARN of the AWS IAM role to assume for accessing the Glue catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/biglake_iceberg_catalog#aws_role_arn BiglakeIcebergCatalog#aws_role_arn}

---

##### `warehouse`<sup>Required</sup> <a name="warehouse" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo.property.warehouse"></a>

```java
public java.lang.String getWarehouse();
```

- *Type:* java.lang.String

The AWS Glue warehouse identifier (account ID or S3 table bucket).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/biglake_iceberg_catalog#warehouse BiglakeIcebergCatalog#warehouse}

---

### BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions <a name="BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions.Initializer"></a>

```java
import io.cdktn.providers.google.biglake_iceberg_catalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions;

BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions.builder()
//  .refreshSchedule(BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule)
//  .refreshScope(BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions.property.refreshSchedule">refreshSchedule</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule">BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule</a></code> | refresh_schedule block. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions.property.refreshScope">refreshScope</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope">BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope</a></code> | refresh_scope block. |

---

##### `refreshSchedule`<sup>Optional</sup> <a name="refreshSchedule" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions.property.refreshSchedule"></a>

```java
public BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule getRefreshSchedule();
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule">BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule</a>

refresh_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/biglake_iceberg_catalog#refresh_schedule BiglakeIcebergCatalog#refresh_schedule}

---

##### `refreshScope`<sup>Optional</sup> <a name="refreshScope" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions.property.refreshScope"></a>

```java
public BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope getRefreshScope();
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope">BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope</a>

refresh_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/biglake_iceberg_catalog#refresh_scope BiglakeIcebergCatalog#refresh_scope}

---

### BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule <a name="BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule.Initializer"></a>

```java
import io.cdktn.providers.google.biglake_iceberg_catalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule;

BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule.builder()
//  .refreshInterval(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule.property.refreshInterval">refreshInterval</a></code> | <code>java.lang.String</code> | The interval between metadata refreshes, expressed as a duration string (e.g., '300s'). The value must be at least 300s or 0s to disable refresh. |

---

##### `refreshInterval`<sup>Optional</sup> <a name="refreshInterval" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule.property.refreshInterval"></a>

```java
public java.lang.String getRefreshInterval();
```

- *Type:* java.lang.String

The interval between metadata refreshes, expressed as a duration string (e.g., '300s'). The value must be at least 300s or 0s to disable refresh.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/biglake_iceberg_catalog#refresh_interval BiglakeIcebergCatalog#refresh_interval}

---

### BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope <a name="BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope.Initializer"></a>

```java
import io.cdktn.providers.google.biglake_iceberg_catalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope;

BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope.builder()
//  .namespaceFilters(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope.property.namespaceFilters">namespaceFilters</a></code> | <code>java.util.List<java.lang.String></code> | A list of namespace filters to limit which namespaces are synchronized from the remote catalog. |

---

##### `namespaceFilters`<sup>Optional</sup> <a name="namespaceFilters" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope.property.namespaceFilters"></a>

```java
public java.util.List<java.lang.String> getNamespaceFilters();
```

- *Type:* java.util.List<java.lang.String>

A list of namespace filters to limit which namespaces are synchronized from the remote catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/biglake_iceberg_catalog#namespace_filters BiglakeIcebergCatalog#namespace_filters}

---

### BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatus <a name="BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatus" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatus.Initializer"></a>

```java
import io.cdktn.providers.google.biglake_iceberg_catalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatus;

BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatus.builder()
    .build();
```


### BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatus <a name="BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatus" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatus.Initializer"></a>

```java
import io.cdktn.providers.google.biglake_iceberg_catalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatus;

BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatus.builder()
    .build();
```


### BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo <a name="BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo.Initializer"></a>

```java
import io.cdktn.providers.google.biglake_iceberg_catalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo;

BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo.builder()
    .catalogName(java.lang.String)
    .instanceName(java.lang.String)
//  .servicePrincipalApplicationId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo.property.catalogName">catalogName</a></code> | <code>java.lang.String</code> | The name of the catalog within the Unity Catalog instance. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo.property.instanceName">instanceName</a></code> | <code>java.lang.String</code> | The Databricks workspace instance name. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo.property.servicePrincipalApplicationId">servicePrincipalApplicationId</a></code> | <code>java.lang.String</code> | The application ID of the Databricks service principal for OIDC authentication. |

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo.property.catalogName"></a>

```java
public java.lang.String getCatalogName();
```

- *Type:* java.lang.String

The name of the catalog within the Unity Catalog instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/biglake_iceberg_catalog#catalog_name BiglakeIcebergCatalog#catalog_name}

---

##### `instanceName`<sup>Required</sup> <a name="instanceName" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo.property.instanceName"></a>

```java
public java.lang.String getInstanceName();
```

- *Type:* java.lang.String

The Databricks workspace instance name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/biglake_iceberg_catalog#instance_name BiglakeIcebergCatalog#instance_name}

---

##### `servicePrincipalApplicationId`<sup>Optional</sup> <a name="servicePrincipalApplicationId" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo.property.servicePrincipalApplicationId"></a>

```java
public java.lang.String getServicePrincipalApplicationId();
```

- *Type:* java.lang.String

The application ID of the Databricks service principal for OIDC authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/biglake_iceberg_catalog#service_principal_application_id BiglakeIcebergCatalog#service_principal_application_id}

---

### BiglakeIcebergCatalogReplicas <a name="BiglakeIcebergCatalogReplicas" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicas"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicas.Initializer"></a>

```java
import io.cdktn.providers.google.biglake_iceberg_catalog.BiglakeIcebergCatalogReplicas;

BiglakeIcebergCatalogReplicas.builder()
    .build();
```


### BiglakeIcebergCatalogRestrictedLocationsConfig <a name="BiglakeIcebergCatalogRestrictedLocationsConfig" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfig.Initializer"></a>

```java
import io.cdktn.providers.google.biglake_iceberg_catalog.BiglakeIcebergCatalogRestrictedLocationsConfig;

BiglakeIcebergCatalogRestrictedLocationsConfig.builder()
//  .restrictedLocations(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfig.property.restrictedLocations">restrictedLocations</a></code> | <code>java.util.List<java.lang.String></code> | A list of GCS locations (e.g., 'gs://my-other-bucket/...') that are permitted for use by resources within this catalog. Each entry can be either a GCS bucket or a path within it. |

---

##### `restrictedLocations`<sup>Optional</sup> <a name="restrictedLocations" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfig.property.restrictedLocations"></a>

```java
public java.util.List<java.lang.String> getRestrictedLocations();
```

- *Type:* java.util.List<java.lang.String>

A list of GCS locations (e.g., 'gs://my-other-bucket/...') that are permitted for use by resources within this catalog. Each entry can be either a GCS bucket or a path within it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/biglake_iceberg_catalog#restricted_locations BiglakeIcebergCatalog#restricted_locations}

---

### BiglakeIcebergCatalogTimeouts <a name="BiglakeIcebergCatalogTimeouts" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.biglake_iceberg_catalog.BiglakeIcebergCatalogTimeouts;

BiglakeIcebergCatalogTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/biglake_iceberg_catalog#create BiglakeIcebergCatalog#create}. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/biglake_iceberg_catalog#delete BiglakeIcebergCatalog#delete}. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/biglake_iceberg_catalog#update BiglakeIcebergCatalog#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/biglake_iceberg_catalog#create BiglakeIcebergCatalog#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/biglake_iceberg_catalog#delete BiglakeIcebergCatalog#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/biglake_iceberg_catalog#update BiglakeIcebergCatalog#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference <a name="BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.biglake_iceberg_catalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference;

new BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.awsRegionInput">awsRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.awsRoleArnInput">awsRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.warehouseInput">warehouseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.awsRegion">awsRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.awsRoleArn">awsRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.warehouse">warehouse</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo">BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsRegionInput`<sup>Optional</sup> <a name="awsRegionInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.awsRegionInput"></a>

```java
public java.lang.String getAwsRegionInput();
```

- *Type:* java.lang.String

---

##### `awsRoleArnInput`<sup>Optional</sup> <a name="awsRoleArnInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.awsRoleArnInput"></a>

```java
public java.lang.String getAwsRoleArnInput();
```

- *Type:* java.lang.String

---

##### `warehouseInput`<sup>Optional</sup> <a name="warehouseInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.warehouseInput"></a>

```java
public java.lang.String getWarehouseInput();
```

- *Type:* java.lang.String

---

##### `awsRegion`<sup>Required</sup> <a name="awsRegion" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.awsRegion"></a>

```java
public java.lang.String getAwsRegion();
```

- *Type:* java.lang.String

---

##### `awsRoleArn`<sup>Required</sup> <a name="awsRoleArn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.awsRoleArn"></a>

```java
public java.lang.String getAwsRoleArn();
```

- *Type:* java.lang.String

---

##### `warehouse`<sup>Required</sup> <a name="warehouse" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.warehouse"></a>

```java
public java.lang.String getWarehouse();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.internalValue"></a>

```java
public BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo">BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo</a>

---


### BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference <a name="BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.biglake_iceberg_catalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference;

new BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.putGlueCatalogInfo">putGlueCatalogInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.putRefreshOptions">putRefreshOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.putUnityCatalogInfo">putUnityCatalogInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.resetGlueCatalogInfo">resetGlueCatalogInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.resetRefreshOptions">resetRefreshOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.resetSecretName">resetSecretName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.resetServiceDirectoryName">resetServiceDirectoryName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.resetUnityCatalogInfo">resetUnityCatalogInfo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGlueCatalogInfo` <a name="putGlueCatalogInfo" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.putGlueCatalogInfo"></a>

```java
public void putGlueCatalogInfo(BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.putGlueCatalogInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo">BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo</a>

---

##### `putRefreshOptions` <a name="putRefreshOptions" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.putRefreshOptions"></a>

```java
public void putRefreshOptions(BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.putRefreshOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions">BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions</a>

---

##### `putUnityCatalogInfo` <a name="putUnityCatalogInfo" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.putUnityCatalogInfo"></a>

```java
public void putUnityCatalogInfo(BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.putUnityCatalogInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo">BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo</a>

---

##### `resetGlueCatalogInfo` <a name="resetGlueCatalogInfo" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.resetGlueCatalogInfo"></a>

```java
public void resetGlueCatalogInfo()
```

##### `resetRefreshOptions` <a name="resetRefreshOptions" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.resetRefreshOptions"></a>

```java
public void resetRefreshOptions()
```

##### `resetSecretName` <a name="resetSecretName" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.resetSecretName"></a>

```java
public void resetSecretName()
```

##### `resetServiceDirectoryName` <a name="resetServiceDirectoryName" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.resetServiceDirectoryName"></a>

```java
public void resetServiceDirectoryName()
```

##### `resetUnityCatalogInfo` <a name="resetUnityCatalogInfo" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.resetUnityCatalogInfo"></a>

```java
public void resetUnityCatalogInfo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.glueCatalogInfo">glueCatalogInfo</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference">BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.refreshOptions">refreshOptions</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference">BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.refreshStatus">refreshStatus</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList">BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.unityCatalogInfo">unityCatalogInfo</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference">BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.glueCatalogInfoInput">glueCatalogInfoInput</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo">BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.refreshOptionsInput">refreshOptionsInput</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions">BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.secretNameInput">secretNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.serviceDirectoryNameInput">serviceDirectoryNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.unityCatalogInfoInput">unityCatalogInfoInput</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo">BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.secretName">secretName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.serviceDirectoryName">serviceDirectoryName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptions">BiglakeIcebergCatalogFederatedCatalogOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `glueCatalogInfo`<sup>Required</sup> <a name="glueCatalogInfo" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.glueCatalogInfo"></a>

```java
public BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference getGlueCatalogInfo();
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference">BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference</a>

---

##### `refreshOptions`<sup>Required</sup> <a name="refreshOptions" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.refreshOptions"></a>

```java
public BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference getRefreshOptions();
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference">BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference</a>

---

##### `refreshStatus`<sup>Required</sup> <a name="refreshStatus" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.refreshStatus"></a>

```java
public BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList getRefreshStatus();
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList">BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList</a>

---

##### `unityCatalogInfo`<sup>Required</sup> <a name="unityCatalogInfo" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.unityCatalogInfo"></a>

```java
public BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference getUnityCatalogInfo();
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference">BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference</a>

---

##### `glueCatalogInfoInput`<sup>Optional</sup> <a name="glueCatalogInfoInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.glueCatalogInfoInput"></a>

```java
public BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo getGlueCatalogInfoInput();
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo">BiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo</a>

---

##### `refreshOptionsInput`<sup>Optional</sup> <a name="refreshOptionsInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.refreshOptionsInput"></a>

```java
public BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions getRefreshOptionsInput();
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions">BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions</a>

---

##### `secretNameInput`<sup>Optional</sup> <a name="secretNameInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.secretNameInput"></a>

```java
public java.lang.String getSecretNameInput();
```

- *Type:* java.lang.String

---

##### `serviceDirectoryNameInput`<sup>Optional</sup> <a name="serviceDirectoryNameInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.serviceDirectoryNameInput"></a>

```java
public java.lang.String getServiceDirectoryNameInput();
```

- *Type:* java.lang.String

---

##### `unityCatalogInfoInput`<sup>Optional</sup> <a name="unityCatalogInfoInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.unityCatalogInfoInput"></a>

```java
public BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo getUnityCatalogInfoInput();
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo">BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo</a>

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.secretName"></a>

```java
public java.lang.String getSecretName();
```

- *Type:* java.lang.String

---

##### `serviceDirectoryName`<sup>Required</sup> <a name="serviceDirectoryName" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.serviceDirectoryName"></a>

```java
public java.lang.String getServiceDirectoryName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.internalValue"></a>

```java
public BiglakeIcebergCatalogFederatedCatalogOptions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptions">BiglakeIcebergCatalogFederatedCatalogOptions</a>

---


### BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference <a name="BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.biglake_iceberg_catalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference;

new BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.putRefreshSchedule">putRefreshSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.putRefreshScope">putRefreshScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.resetRefreshSchedule">resetRefreshSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.resetRefreshScope">resetRefreshScope</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRefreshSchedule` <a name="putRefreshSchedule" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.putRefreshSchedule"></a>

```java
public void putRefreshSchedule(BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.putRefreshSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule">BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule</a>

---

##### `putRefreshScope` <a name="putRefreshScope" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.putRefreshScope"></a>

```java
public void putRefreshScope(BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.putRefreshScope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope">BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope</a>

---

##### `resetRefreshSchedule` <a name="resetRefreshSchedule" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.resetRefreshSchedule"></a>

```java
public void resetRefreshSchedule()
```

##### `resetRefreshScope` <a name="resetRefreshScope" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.resetRefreshScope"></a>

```java
public void resetRefreshScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.property.refreshSchedule">refreshSchedule</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference">BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.property.refreshScope">refreshScope</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference">BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.property.refreshScheduleInput">refreshScheduleInput</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule">BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.property.refreshScopeInput">refreshScopeInput</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope">BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions">BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `refreshSchedule`<sup>Required</sup> <a name="refreshSchedule" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.property.refreshSchedule"></a>

```java
public BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference getRefreshSchedule();
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference">BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference</a>

---

##### `refreshScope`<sup>Required</sup> <a name="refreshScope" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.property.refreshScope"></a>

```java
public BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference getRefreshScope();
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference">BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference</a>

---

##### `refreshScheduleInput`<sup>Optional</sup> <a name="refreshScheduleInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.property.refreshScheduleInput"></a>

```java
public BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule getRefreshScheduleInput();
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule">BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule</a>

---

##### `refreshScopeInput`<sup>Optional</sup> <a name="refreshScopeInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.property.refreshScopeInput"></a>

```java
public BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope getRefreshScopeInput();
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope">BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.property.internalValue"></a>

```java
public BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions">BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions</a>

---


### BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference <a name="BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.biglake_iceberg_catalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference;

new BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.resetRefreshInterval">resetRefreshInterval</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRefreshInterval` <a name="resetRefreshInterval" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.resetRefreshInterval"></a>

```java
public void resetRefreshInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.property.refreshIntervalInput">refreshIntervalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.property.refreshInterval">refreshInterval</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule">BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `refreshIntervalInput`<sup>Optional</sup> <a name="refreshIntervalInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.property.refreshIntervalInput"></a>

```java
public java.lang.String getRefreshIntervalInput();
```

- *Type:* java.lang.String

---

##### `refreshInterval`<sup>Required</sup> <a name="refreshInterval" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.property.refreshInterval"></a>

```java
public java.lang.String getRefreshInterval();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.property.internalValue"></a>

```java
public BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule">BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule</a>

---


### BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference <a name="BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.biglake_iceberg_catalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference;

new BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.resetNamespaceFilters">resetNamespaceFilters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNamespaceFilters` <a name="resetNamespaceFilters" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.resetNamespaceFilters"></a>

```java
public void resetNamespaceFilters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.property.namespaceFiltersInput">namespaceFiltersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.property.namespaceFilters">namespaceFilters</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope">BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `namespaceFiltersInput`<sup>Optional</sup> <a name="namespaceFiltersInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.property.namespaceFiltersInput"></a>

```java
public java.util.List<java.lang.String> getNamespaceFiltersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `namespaceFilters`<sup>Required</sup> <a name="namespaceFilters" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.property.namespaceFilters"></a>

```java
public java.util.List<java.lang.String> getNamespaceFilters();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.property.internalValue"></a>

```java
public BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope">BiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope</a>

---


### BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList <a name="BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.Initializer"></a>

```java
import io.cdktn.providers.google.biglake_iceberg_catalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList;

new BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.get"></a>

```java
public BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference <a name="BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.biglake_iceberg_catalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference;

new BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.property.endTime">endTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.property.status">status</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList">BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatus">BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.property.status"></a>

```java
public BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList getStatus();
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList">BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.property.internalValue"></a>

```java
public BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatus getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatus">BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatus</a>

---


### BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList <a name="BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.Initializer"></a>

```java
import io.cdktn.providers.google.biglake_iceberg_catalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList;

new BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.get"></a>

```java
public BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference <a name="BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.biglake_iceberg_catalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference;

new BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.property.code">code</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatus">BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.property.code"></a>

```java
public java.lang.Number getCode();
```

- *Type:* java.lang.Number

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.property.internalValue"></a>

```java
public BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatus getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatus">BiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatus</a>

---


### BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference <a name="BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.biglake_iceberg_catalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference;

new BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.resetServicePrincipalApplicationId">resetServicePrincipalApplicationId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetServicePrincipalApplicationId` <a name="resetServicePrincipalApplicationId" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.resetServicePrincipalApplicationId"></a>

```java
public void resetServicePrincipalApplicationId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.catalogNameInput">catalogNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.instanceNameInput">instanceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.servicePrincipalApplicationIdInput">servicePrincipalApplicationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.catalogName">catalogName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.instanceName">instanceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.servicePrincipalApplicationId">servicePrincipalApplicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo">BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `catalogNameInput`<sup>Optional</sup> <a name="catalogNameInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.catalogNameInput"></a>

```java
public java.lang.String getCatalogNameInput();
```

- *Type:* java.lang.String

---

##### `instanceNameInput`<sup>Optional</sup> <a name="instanceNameInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.instanceNameInput"></a>

```java
public java.lang.String getInstanceNameInput();
```

- *Type:* java.lang.String

---

##### `servicePrincipalApplicationIdInput`<sup>Optional</sup> <a name="servicePrincipalApplicationIdInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.servicePrincipalApplicationIdInput"></a>

```java
public java.lang.String getServicePrincipalApplicationIdInput();
```

- *Type:* java.lang.String

---

##### `catalogName`<sup>Required</sup> <a name="catalogName" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.catalogName"></a>

```java
public java.lang.String getCatalogName();
```

- *Type:* java.lang.String

---

##### `instanceName`<sup>Required</sup> <a name="instanceName" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.instanceName"></a>

```java
public java.lang.String getInstanceName();
```

- *Type:* java.lang.String

---

##### `servicePrincipalApplicationId`<sup>Required</sup> <a name="servicePrincipalApplicationId" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.servicePrincipalApplicationId"></a>

```java
public java.lang.String getServicePrincipalApplicationId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.internalValue"></a>

```java
public BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo">BiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo</a>

---


### BiglakeIcebergCatalogReplicasList <a name="BiglakeIcebergCatalogReplicasList" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.Initializer"></a>

```java
import io.cdktn.providers.google.biglake_iceberg_catalog.BiglakeIcebergCatalogReplicasList;

new BiglakeIcebergCatalogReplicasList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.get"></a>

```java
public BiglakeIcebergCatalogReplicasOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### BiglakeIcebergCatalogReplicasOutputReference <a name="BiglakeIcebergCatalogReplicasOutputReference" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.biglake_iceberg_catalog.BiglakeIcebergCatalogReplicasOutputReference;

new BiglakeIcebergCatalogReplicasOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicas">BiglakeIcebergCatalogReplicas</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicasOutputReference.property.internalValue"></a>

```java
public BiglakeIcebergCatalogReplicas getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogReplicas">BiglakeIcebergCatalogReplicas</a>

---


### BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference <a name="BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.biglake_iceberg_catalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference;

new BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.resetRestrictedLocations">resetRestrictedLocations</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRestrictedLocations` <a name="resetRestrictedLocations" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.resetRestrictedLocations"></a>

```java
public void resetRestrictedLocations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.property.restrictedLocationsInput">restrictedLocationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.property.restrictedLocations">restrictedLocations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfig">BiglakeIcebergCatalogRestrictedLocationsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `restrictedLocationsInput`<sup>Optional</sup> <a name="restrictedLocationsInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.property.restrictedLocationsInput"></a>

```java
public java.util.List<java.lang.String> getRestrictedLocationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `restrictedLocations`<sup>Required</sup> <a name="restrictedLocations" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.property.restrictedLocations"></a>

```java
public java.util.List<java.lang.String> getRestrictedLocations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.property.internalValue"></a>

```java
public BiglakeIcebergCatalogRestrictedLocationsConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogRestrictedLocationsConfig">BiglakeIcebergCatalogRestrictedLocationsConfig</a>

---


### BiglakeIcebergCatalogTimeoutsOutputReference <a name="BiglakeIcebergCatalogTimeoutsOutputReference" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.biglake_iceberg_catalog.BiglakeIcebergCatalogTimeoutsOutputReference;

new BiglakeIcebergCatalogTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeouts">BiglakeIcebergCatalogTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|BiglakeIcebergCatalogTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.biglakeIcebergCatalog.BiglakeIcebergCatalogTimeouts">BiglakeIcebergCatalogTimeouts</a>

---



