# `oracleDatabaseExascaleDbStorageVault` Submodule <a name="`oracleDatabaseExascaleDbStorageVault` Submodule" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OracleDatabaseExascaleDbStorageVault <a name="OracleDatabaseExascaleDbStorageVault" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_exascale_db_storage_vault google_oracle_database_exascale_db_storage_vault}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_exascale_db_storage_vault.OracleDatabaseExascaleDbStorageVault;

OracleDatabaseExascaleDbStorageVault.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
    .exascaleDbStorageVaultId(java.lang.String)
    .location(java.lang.String)
    .properties(OracleDatabaseExascaleDbStorageVaultProperties)
//  .deletionPolicy(java.lang.String)
//  .deletionProtection(java.lang.Boolean|IResolvable)
//  .exadataInfrastructure(java.lang.String)
//  .gcpOracleZone(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(OracleDatabaseExascaleDbStorageVaultTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name for the ExascaleDbStorageVault. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.Initializer.parameter.exascaleDbStorageVaultId">exascaleDbStorageVaultId</a></code> | <code>java.lang.String</code> | The ID of the ExascaleDbStorageVault to create. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.Initializer.parameter.properties">properties</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultProperties">OracleDatabaseExascaleDbStorageVaultProperties</a></code> | properties block. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.Initializer.parameter.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether or not to allow Terraform to destroy the instance. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.Initializer.parameter.exadataInfrastructure">exadataInfrastructure</a></code> | <code>java.lang.String</code> | The Exadata Infrastructure resource on which ExascaleDbStorageVault resource is created. In the format: projects/{project}/locations/{region}/cloudExadataInfrastructures/{cloud_extradata_infrastructure}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.Initializer.parameter.gcpOracleZone">gcpOracleZone</a></code> | <code>java.lang.String</code> | The GCP Oracle zone where Oracle ExascaleDbStorageVault is hosted. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_exascale_db_storage_vault#id OracleDatabaseExascaleDbStorageVault#id}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels or tags associated with the ExascaleDbStorageVault. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_exascale_db_storage_vault#project OracleDatabaseExascaleDbStorageVault#project}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeouts">OracleDatabaseExascaleDbStorageVaultTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The display name for the ExascaleDbStorageVault.

The name does not have to
be unique within your project. The name must be 1-255 characters long and
can only contain alphanumeric characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_exascale_db_storage_vault#display_name OracleDatabaseExascaleDbStorageVault#display_name}

---

##### `exascaleDbStorageVaultId`<sup>Required</sup> <a name="exascaleDbStorageVaultId" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.Initializer.parameter.exascaleDbStorageVaultId"></a>

- *Type:* java.lang.String

The ID of the ExascaleDbStorageVault to create.

This value is
restricted to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of
63 characters in length. The value must start with a letter and end with a
letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_exascale_db_storage_vault#exascale_db_storage_vault_id OracleDatabaseExascaleDbStorageVault#exascale_db_storage_vault_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_exascale_db_storage_vault#location OracleDatabaseExascaleDbStorageVault#location}

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.Initializer.parameter.properties"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultProperties">OracleDatabaseExascaleDbStorageVaultProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_exascale_db_storage_vault#properties OracleDatabaseExascaleDbStorageVault#properties}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_exascale_db_storage_vault#deletion_policy OracleDatabaseExascaleDbStorageVault#deletion_policy}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.Initializer.parameter.deletionProtection"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_exascale_db_storage_vault#deletion_protection OracleDatabaseExascaleDbStorageVault#deletion_protection}

---

##### `exadataInfrastructure`<sup>Optional</sup> <a name="exadataInfrastructure" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.Initializer.parameter.exadataInfrastructure"></a>

- *Type:* java.lang.String

The Exadata Infrastructure resource on which ExascaleDbStorageVault resource is created. In the format: projects/{project}/locations/{region}/cloudExadataInfrastructures/{cloud_extradata_infrastructure}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_exascale_db_storage_vault#exadata_infrastructure OracleDatabaseExascaleDbStorageVault#exadata_infrastructure}

---

##### `gcpOracleZone`<sup>Optional</sup> <a name="gcpOracleZone" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.Initializer.parameter.gcpOracleZone"></a>

- *Type:* java.lang.String

The GCP Oracle zone where Oracle ExascaleDbStorageVault is hosted.

Example: us-east4-b-r2.
If not specified, the system will pick a zone based on availability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_exascale_db_storage_vault#gcp_oracle_zone OracleDatabaseExascaleDbStorageVault#gcp_oracle_zone}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_exascale_db_storage_vault#id OracleDatabaseExascaleDbStorageVault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels or tags associated with the ExascaleDbStorageVault.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_exascale_db_storage_vault#labels OracleDatabaseExascaleDbStorageVault#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_exascale_db_storage_vault#project OracleDatabaseExascaleDbStorageVault#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeouts">OracleDatabaseExascaleDbStorageVaultTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_exascale_db_storage_vault#timeouts OracleDatabaseExascaleDbStorageVault#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.putProperties">putProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.resetExadataInfrastructure">resetExadataInfrastructure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.resetGcpOracleZone">resetGcpOracleZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProperties` <a name="putProperties" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.putProperties"></a>

```java
public void putProperties(OracleDatabaseExascaleDbStorageVaultProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultProperties">OracleDatabaseExascaleDbStorageVaultProperties</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.putTimeouts"></a>

```java
public void putTimeouts(OracleDatabaseExascaleDbStorageVaultTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeouts">OracleDatabaseExascaleDbStorageVaultTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.resetDeletionProtection"></a>

```java
public void resetDeletionProtection()
```

##### `resetExadataInfrastructure` <a name="resetExadataInfrastructure" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.resetExadataInfrastructure"></a>

```java
public void resetExadataInfrastructure()
```

##### `resetGcpOracleZone` <a name="resetGcpOracleZone" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.resetGcpOracleZone"></a>

```java
public void resetGcpOracleZone()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OracleDatabaseExascaleDbStorageVault resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.isConstruct"></a>

```java
import io.cdktn.providers.google.oracle_database_exascale_db_storage_vault.OracleDatabaseExascaleDbStorageVault;

OracleDatabaseExascaleDbStorageVault.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.isTerraformElement"></a>

```java
import io.cdktn.providers.google.oracle_database_exascale_db_storage_vault.OracleDatabaseExascaleDbStorageVault;

OracleDatabaseExascaleDbStorageVault.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.isTerraformResource"></a>

```java
import io.cdktn.providers.google.oracle_database_exascale_db_storage_vault.OracleDatabaseExascaleDbStorageVault;

OracleDatabaseExascaleDbStorageVault.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.oracle_database_exascale_db_storage_vault.OracleDatabaseExascaleDbStorageVault;

OracleDatabaseExascaleDbStorageVault.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OracleDatabaseExascaleDbStorageVault.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a OracleDatabaseExascaleDbStorageVault resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OracleDatabaseExascaleDbStorageVault to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OracleDatabaseExascaleDbStorageVault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_exascale_db_storage_vault#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the OracleDatabaseExascaleDbStorageVault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.entitlementId">entitlementId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference">OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference">OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.exadataInfrastructureInput">exadataInfrastructureInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.exascaleDbStorageVaultIdInput">exascaleDbStorageVaultIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.gcpOracleZoneInput">gcpOracleZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.propertiesInput">propertiesInput</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultProperties">OracleDatabaseExascaleDbStorageVaultProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeouts">OracleDatabaseExascaleDbStorageVaultTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.exadataInfrastructure">exadataInfrastructure</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.exascaleDbStorageVaultId">exascaleDbStorageVaultId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.gcpOracleZone">gcpOracleZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `entitlementId`<sup>Required</sup> <a name="entitlementId" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.entitlementId"></a>

```java
public java.lang.String getEntitlementId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.properties"></a>

```java
public OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference getProperties();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference">OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.timeouts"></a>

```java
public OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference">OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.deletionProtectionInput"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtectionInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `exadataInfrastructureInput`<sup>Optional</sup> <a name="exadataInfrastructureInput" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.exadataInfrastructureInput"></a>

```java
public java.lang.String getExadataInfrastructureInput();
```

- *Type:* java.lang.String

---

##### `exascaleDbStorageVaultIdInput`<sup>Optional</sup> <a name="exascaleDbStorageVaultIdInput" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.exascaleDbStorageVaultIdInput"></a>

```java
public java.lang.String getExascaleDbStorageVaultIdInput();
```

- *Type:* java.lang.String

---

##### `gcpOracleZoneInput`<sup>Optional</sup> <a name="gcpOracleZoneInput" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.gcpOracleZoneInput"></a>

```java
public java.lang.String getGcpOracleZoneInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.propertiesInput"></a>

```java
public OracleDatabaseExascaleDbStorageVaultProperties getPropertiesInput();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultProperties">OracleDatabaseExascaleDbStorageVaultProperties</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.timeoutsInput"></a>

```java
public IResolvable|OracleDatabaseExascaleDbStorageVaultTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeouts">OracleDatabaseExascaleDbStorageVaultTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.deletionProtection"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtection();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `exadataInfrastructure`<sup>Required</sup> <a name="exadataInfrastructure" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.exadataInfrastructure"></a>

```java
public java.lang.String getExadataInfrastructure();
```

- *Type:* java.lang.String

---

##### `exascaleDbStorageVaultId`<sup>Required</sup> <a name="exascaleDbStorageVaultId" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.exascaleDbStorageVaultId"></a>

```java
public java.lang.String getExascaleDbStorageVaultId();
```

- *Type:* java.lang.String

---

##### `gcpOracleZone`<sup>Required</sup> <a name="gcpOracleZone" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.gcpOracleZone"></a>

```java
public java.lang.String getGcpOracleZone();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVault.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OracleDatabaseExascaleDbStorageVaultConfig <a name="OracleDatabaseExascaleDbStorageVaultConfig" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_exascale_db_storage_vault.OracleDatabaseExascaleDbStorageVaultConfig;

OracleDatabaseExascaleDbStorageVaultConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .displayName(java.lang.String)
    .exascaleDbStorageVaultId(java.lang.String)
    .location(java.lang.String)
    .properties(OracleDatabaseExascaleDbStorageVaultProperties)
//  .deletionPolicy(java.lang.String)
//  .deletionProtection(java.lang.Boolean|IResolvable)
//  .exadataInfrastructure(java.lang.String)
//  .gcpOracleZone(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(OracleDatabaseExascaleDbStorageVaultTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name for the ExascaleDbStorageVault. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.exascaleDbStorageVaultId">exascaleDbStorageVaultId</a></code> | <code>java.lang.String</code> | The ID of the ExascaleDbStorageVault to create. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultProperties">OracleDatabaseExascaleDbStorageVaultProperties</a></code> | properties block. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether or not to allow Terraform to destroy the instance. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.exadataInfrastructure">exadataInfrastructure</a></code> | <code>java.lang.String</code> | The Exadata Infrastructure resource on which ExascaleDbStorageVault resource is created. In the format: projects/{project}/locations/{region}/cloudExadataInfrastructures/{cloud_extradata_infrastructure}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.gcpOracleZone">gcpOracleZone</a></code> | <code>java.lang.String</code> | The GCP Oracle zone where Oracle ExascaleDbStorageVault is hosted. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_exascale_db_storage_vault#id OracleDatabaseExascaleDbStorageVault#id}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels or tags associated with the ExascaleDbStorageVault. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_exascale_db_storage_vault#project OracleDatabaseExascaleDbStorageVault#project}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeouts">OracleDatabaseExascaleDbStorageVaultTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The display name for the ExascaleDbStorageVault.

The name does not have to
be unique within your project. The name must be 1-255 characters long and
can only contain alphanumeric characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_exascale_db_storage_vault#display_name OracleDatabaseExascaleDbStorageVault#display_name}

---

##### `exascaleDbStorageVaultId`<sup>Required</sup> <a name="exascaleDbStorageVaultId" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.exascaleDbStorageVaultId"></a>

```java
public java.lang.String getExascaleDbStorageVaultId();
```

- *Type:* java.lang.String

The ID of the ExascaleDbStorageVault to create.

This value is
restricted to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of
63 characters in length. The value must start with a letter and end with a
letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_exascale_db_storage_vault#exascale_db_storage_vault_id OracleDatabaseExascaleDbStorageVault#exascale_db_storage_vault_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_exascale_db_storage_vault#location OracleDatabaseExascaleDbStorageVault#location}

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.properties"></a>

```java
public OracleDatabaseExascaleDbStorageVaultProperties getProperties();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultProperties">OracleDatabaseExascaleDbStorageVaultProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_exascale_db_storage_vault#properties OracleDatabaseExascaleDbStorageVault#properties}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_exascale_db_storage_vault#deletion_policy OracleDatabaseExascaleDbStorageVault#deletion_policy}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.deletionProtection"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtection();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_exascale_db_storage_vault#deletion_protection OracleDatabaseExascaleDbStorageVault#deletion_protection}

---

##### `exadataInfrastructure`<sup>Optional</sup> <a name="exadataInfrastructure" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.exadataInfrastructure"></a>

```java
public java.lang.String getExadataInfrastructure();
```

- *Type:* java.lang.String

The Exadata Infrastructure resource on which ExascaleDbStorageVault resource is created. In the format: projects/{project}/locations/{region}/cloudExadataInfrastructures/{cloud_extradata_infrastructure}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_exascale_db_storage_vault#exadata_infrastructure OracleDatabaseExascaleDbStorageVault#exadata_infrastructure}

---

##### `gcpOracleZone`<sup>Optional</sup> <a name="gcpOracleZone" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.gcpOracleZone"></a>

```java
public java.lang.String getGcpOracleZone();
```

- *Type:* java.lang.String

The GCP Oracle zone where Oracle ExascaleDbStorageVault is hosted.

Example: us-east4-b-r2.
If not specified, the system will pick a zone based on availability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_exascale_db_storage_vault#gcp_oracle_zone OracleDatabaseExascaleDbStorageVault#gcp_oracle_zone}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_exascale_db_storage_vault#id OracleDatabaseExascaleDbStorageVault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels or tags associated with the ExascaleDbStorageVault.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_exascale_db_storage_vault#labels OracleDatabaseExascaleDbStorageVault#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_exascale_db_storage_vault#project OracleDatabaseExascaleDbStorageVault#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultConfig.property.timeouts"></a>

```java
public OracleDatabaseExascaleDbStorageVaultTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeouts">OracleDatabaseExascaleDbStorageVaultTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_exascale_db_storage_vault#timeouts OracleDatabaseExascaleDbStorageVault#timeouts}

---

### OracleDatabaseExascaleDbStorageVaultProperties <a name="OracleDatabaseExascaleDbStorageVaultProperties" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultProperties.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_exascale_db_storage_vault.OracleDatabaseExascaleDbStorageVaultProperties;

OracleDatabaseExascaleDbStorageVaultProperties.builder()
    .exascaleDbStorageDetails(OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails)
//  .additionalFlashCachePercent(java.lang.Number)
//  .timeZone(OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultProperties.property.exascaleDbStorageDetails">exascaleDbStorageDetails</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails">OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails</a></code> | exascale_db_storage_details block. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultProperties.property.additionalFlashCachePercent">additionalFlashCachePercent</a></code> | <code>java.lang.Number</code> | The size of additional flash cache in percentage of high capacity database storage. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultProperties.property.timeZone">timeZone</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone">OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone</a></code> | time_zone block. |

---

##### `exascaleDbStorageDetails`<sup>Required</sup> <a name="exascaleDbStorageDetails" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultProperties.property.exascaleDbStorageDetails"></a>

```java
public OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails getExascaleDbStorageDetails();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails">OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails</a>

exascale_db_storage_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_exascale_db_storage_vault#exascale_db_storage_details OracleDatabaseExascaleDbStorageVault#exascale_db_storage_details}

---

##### `additionalFlashCachePercent`<sup>Optional</sup> <a name="additionalFlashCachePercent" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultProperties.property.additionalFlashCachePercent"></a>

```java
public java.lang.Number getAdditionalFlashCachePercent();
```

- *Type:* java.lang.Number

The size of additional flash cache in percentage of high capacity database storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_exascale_db_storage_vault#additional_flash_cache_percent OracleDatabaseExascaleDbStorageVault#additional_flash_cache_percent}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultProperties.property.timeZone"></a>

```java
public OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone getTimeZone();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone">OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone</a>

time_zone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_exascale_db_storage_vault#time_zone OracleDatabaseExascaleDbStorageVault#time_zone}

---

### OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails <a name="OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_exascale_db_storage_vault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails;

OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails.builder()
    .totalSizeGbs(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails.property.totalSizeGbs">totalSizeGbs</a></code> | <code>java.lang.Number</code> | The total storage allocation for the ExascaleDbStorageVault, in gigabytes (GB). |

---

##### `totalSizeGbs`<sup>Required</sup> <a name="totalSizeGbs" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails.property.totalSizeGbs"></a>

```java
public java.lang.Number getTotalSizeGbs();
```

- *Type:* java.lang.Number

The total storage allocation for the ExascaleDbStorageVault, in gigabytes (GB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_exascale_db_storage_vault#total_size_gbs OracleDatabaseExascaleDbStorageVault#total_size_gbs}

---

### OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone <a name="OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_exascale_db_storage_vault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone;

OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone.builder()
//  .id(java.lang.String)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone.property.id">id</a></code> | <code>java.lang.String</code> | IANA Time Zone Database time zone. For example "America/New_York". |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone.property.version">version</a></code> | <code>java.lang.String</code> | IANA Time Zone Database version number. For example "2019a". |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

IANA Time Zone Database time zone. For example "America/New_York".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_exascale_db_storage_vault#id OracleDatabaseExascaleDbStorageVault#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

IANA Time Zone Database version number. For example "2019a".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_exascale_db_storage_vault#version OracleDatabaseExascaleDbStorageVault#version}

---

### OracleDatabaseExascaleDbStorageVaultTimeouts <a name="OracleDatabaseExascaleDbStorageVaultTimeouts" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_exascale_db_storage_vault.OracleDatabaseExascaleDbStorageVaultTimeouts;

OracleDatabaseExascaleDbStorageVaultTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_exascale_db_storage_vault#create OracleDatabaseExascaleDbStorageVault#create}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_exascale_db_storage_vault#delete OracleDatabaseExascaleDbStorageVault#delete}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_exascale_db_storage_vault#update OracleDatabaseExascaleDbStorageVault#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_exascale_db_storage_vault#create OracleDatabaseExascaleDbStorageVault#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_exascale_db_storage_vault#delete OracleDatabaseExascaleDbStorageVault#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/oracle_database_exascale_db_storage_vault#update OracleDatabaseExascaleDbStorageVault#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference <a name="OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_exascale_db_storage_vault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference;

new OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.availableSizeGbs">availableSizeGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.totalSizeGbsInput">totalSizeGbsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.totalSizeGbs">totalSizeGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails">OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availableSizeGbs`<sup>Required</sup> <a name="availableSizeGbs" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.availableSizeGbs"></a>

```java
public java.lang.Number getAvailableSizeGbs();
```

- *Type:* java.lang.Number

---

##### `totalSizeGbsInput`<sup>Optional</sup> <a name="totalSizeGbsInput" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.totalSizeGbsInput"></a>

```java
public java.lang.Number getTotalSizeGbsInput();
```

- *Type:* java.lang.Number

---

##### `totalSizeGbs`<sup>Required</sup> <a name="totalSizeGbs" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.totalSizeGbs"></a>

```java
public java.lang.Number getTotalSizeGbs();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference.property.internalValue"></a>

```java
public OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails">OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails</a>

---


### OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference <a name="OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_exascale_db_storage_vault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference;

new OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.putExascaleDbStorageDetails">putExascaleDbStorageDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.putTimeZone">putTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.resetAdditionalFlashCachePercent">resetAdditionalFlashCachePercent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExascaleDbStorageDetails` <a name="putExascaleDbStorageDetails" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.putExascaleDbStorageDetails"></a>

```java
public void putExascaleDbStorageDetails(OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.putExascaleDbStorageDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails">OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails</a>

---

##### `putTimeZone` <a name="putTimeZone" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.putTimeZone"></a>

```java
public void putTimeZone(OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.putTimeZone.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone">OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone</a>

---

##### `resetAdditionalFlashCachePercent` <a name="resetAdditionalFlashCachePercent" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.resetAdditionalFlashCachePercent"></a>

```java
public void resetAdditionalFlashCachePercent()
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.resetTimeZone"></a>

```java
public void resetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.attachedShapeAttributes">attachedShapeAttributes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.availableShapeAttributes">availableShapeAttributes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.exascaleDbStorageDetails">exascaleDbStorageDetails</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference">OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.ociUri">ociUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.timeZone">timeZone</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference">OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.vmClusterCount">vmClusterCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.vmClusterIds">vmClusterIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.additionalFlashCachePercentInput">additionalFlashCachePercentInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.exascaleDbStorageDetailsInput">exascaleDbStorageDetailsInput</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails">OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone">OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.additionalFlashCachePercent">additionalFlashCachePercent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultProperties">OracleDatabaseExascaleDbStorageVaultProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attachedShapeAttributes`<sup>Required</sup> <a name="attachedShapeAttributes" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.attachedShapeAttributes"></a>

```java
public java.util.List<java.lang.String> getAttachedShapeAttributes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `availableShapeAttributes`<sup>Required</sup> <a name="availableShapeAttributes" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.availableShapeAttributes"></a>

```java
public java.util.List<java.lang.String> getAvailableShapeAttributes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `exascaleDbStorageDetails`<sup>Required</sup> <a name="exascaleDbStorageDetails" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.exascaleDbStorageDetails"></a>

```java
public OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference getExascaleDbStorageDetails();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference">OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetailsOutputReference</a>

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `ociUri`<sup>Required</sup> <a name="ociUri" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.ociUri"></a>

```java
public java.lang.String getOciUri();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.timeZone"></a>

```java
public OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference getTimeZone();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference">OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference</a>

---

##### `vmClusterCount`<sup>Required</sup> <a name="vmClusterCount" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.vmClusterCount"></a>

```java
public java.lang.Number getVmClusterCount();
```

- *Type:* java.lang.Number

---

##### `vmClusterIds`<sup>Required</sup> <a name="vmClusterIds" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.vmClusterIds"></a>

```java
public java.util.List<java.lang.String> getVmClusterIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `additionalFlashCachePercentInput`<sup>Optional</sup> <a name="additionalFlashCachePercentInput" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.additionalFlashCachePercentInput"></a>

```java
public java.lang.Number getAdditionalFlashCachePercentInput();
```

- *Type:* java.lang.Number

---

##### `exascaleDbStorageDetailsInput`<sup>Optional</sup> <a name="exascaleDbStorageDetailsInput" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.exascaleDbStorageDetailsInput"></a>

```java
public OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails getExascaleDbStorageDetailsInput();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails">OracleDatabaseExascaleDbStorageVaultPropertiesExascaleDbStorageDetails</a>

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.timeZoneInput"></a>

```java
public OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone getTimeZoneInput();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone">OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone</a>

---

##### `additionalFlashCachePercent`<sup>Required</sup> <a name="additionalFlashCachePercent" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.additionalFlashCachePercent"></a>

```java
public java.lang.Number getAdditionalFlashCachePercent();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesOutputReference.property.internalValue"></a>

```java
public OracleDatabaseExascaleDbStorageVaultProperties getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultProperties">OracleDatabaseExascaleDbStorageVaultProperties</a>

---


### OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference <a name="OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_exascale_db_storage_vault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference;

new OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone">OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZoneOutputReference.property.internalValue"></a>

```java
public OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone">OracleDatabaseExascaleDbStorageVaultPropertiesTimeZone</a>

---


### OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference <a name="OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_exascale_db_storage_vault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference;

new OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeouts">OracleDatabaseExascaleDbStorageVaultTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|OracleDatabaseExascaleDbStorageVaultTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.oracleDatabaseExascaleDbStorageVault.OracleDatabaseExascaleDbStorageVaultTimeouts">OracleDatabaseExascaleDbStorageVaultTimeouts</a>

---



