# `datastreamConnectionProfile` Submodule <a name="`datastreamConnectionProfile` Submodule" id="@cdktn/provider-google.datastreamConnectionProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatastreamConnectionProfile <a name="DatastreamConnectionProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile google_datastream_connection_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer"></a>

```java
import io.cdktn.providers.google.datastream_connection_profile.DatastreamConnectionProfile;

DatastreamConnectionProfile.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .connectionProfileId(java.lang.String)
    .displayName(java.lang.String)
    .location(java.lang.String)
//  .bigqueryProfile(DatastreamConnectionProfileBigqueryProfile)
//  .createWithoutValidation(java.lang.Boolean|IResolvable)
//  .deletionPolicy(java.lang.String)
//  .forwardSshConnectivity(DatastreamConnectionProfileForwardSshConnectivity)
//  .gcsProfile(DatastreamConnectionProfileGcsProfile)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .mongodbProfile(DatastreamConnectionProfileMongodbProfile)
//  .mysqlProfile(DatastreamConnectionProfileMysqlProfile)
//  .oracleProfile(DatastreamConnectionProfileOracleProfile)
//  .postgresqlProfile(DatastreamConnectionProfilePostgresqlProfile)
//  .privateConnectivity(DatastreamConnectionProfilePrivateConnectivity)
//  .project(java.lang.String)
//  .sqlServerProfile(DatastreamConnectionProfileSqlServerProfile)
//  .timeouts(DatastreamConnectionProfileTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.connectionProfileId">connectionProfileId</a></code> | <code>java.lang.String</code> | The connection profile identifier. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Display name. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The name of the location this connection profile is located in. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.bigqueryProfile">bigqueryProfile</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfile">DatastreamConnectionProfileBigqueryProfile</a></code> | bigquery_profile block. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.createWithoutValidation">createWithoutValidation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Create the connection profile without validating it. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.forwardSshConnectivity">forwardSshConnectivity</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity">DatastreamConnectionProfileForwardSshConnectivity</a></code> | forward_ssh_connectivity block. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.gcsProfile">gcsProfile</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile">DatastreamConnectionProfileGcsProfile</a></code> | gcs_profile block. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#id DatastreamConnectionProfile#id}. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.mongodbProfile">mongodbProfile</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile">DatastreamConnectionProfileMongodbProfile</a></code> | mongodb_profile block. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.mysqlProfile">mysqlProfile</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile">DatastreamConnectionProfileMysqlProfile</a></code> | mysql_profile block. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.oracleProfile">oracleProfile</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile">DatastreamConnectionProfileOracleProfile</a></code> | oracle_profile block. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.postgresqlProfile">postgresqlProfile</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile">DatastreamConnectionProfilePostgresqlProfile</a></code> | postgresql_profile block. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.privateConnectivity">privateConnectivity</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity">DatastreamConnectionProfilePrivateConnectivity</a></code> | private_connectivity block. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#project DatastreamConnectionProfile#project}. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.sqlServerProfile">sqlServerProfile</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfile">DatastreamConnectionProfileSqlServerProfile</a></code> | sql_server_profile block. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts">DatastreamConnectionProfileTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `connectionProfileId`<sup>Required</sup> <a name="connectionProfileId" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.connectionProfileId"></a>

- *Type:* java.lang.String

The connection profile identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#connection_profile_id DatastreamConnectionProfile#connection_profile_id}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#display_name DatastreamConnectionProfile#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The name of the location this connection profile is located in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#location DatastreamConnectionProfile#location}

---

##### `bigqueryProfile`<sup>Optional</sup> <a name="bigqueryProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.bigqueryProfile"></a>

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfile">DatastreamConnectionProfileBigqueryProfile</a>

bigquery_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#bigquery_profile DatastreamConnectionProfile#bigquery_profile}

---

##### `createWithoutValidation`<sup>Optional</sup> <a name="createWithoutValidation" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.createWithoutValidation"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Create the connection profile without validating it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#create_without_validation DatastreamConnectionProfile#create_without_validation}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#deletion_policy DatastreamConnectionProfile#deletion_policy}

---

##### `forwardSshConnectivity`<sup>Optional</sup> <a name="forwardSshConnectivity" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.forwardSshConnectivity"></a>

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity">DatastreamConnectionProfileForwardSshConnectivity</a>

forward_ssh_connectivity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#forward_ssh_connectivity DatastreamConnectionProfile#forward_ssh_connectivity}

---

##### `gcsProfile`<sup>Optional</sup> <a name="gcsProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.gcsProfile"></a>

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile">DatastreamConnectionProfileGcsProfile</a>

gcs_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#gcs_profile DatastreamConnectionProfile#gcs_profile}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#id DatastreamConnectionProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#labels DatastreamConnectionProfile#labels}

---

##### `mongodbProfile`<sup>Optional</sup> <a name="mongodbProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.mongodbProfile"></a>

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile">DatastreamConnectionProfileMongodbProfile</a>

mongodb_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#mongodb_profile DatastreamConnectionProfile#mongodb_profile}

---

##### `mysqlProfile`<sup>Optional</sup> <a name="mysqlProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.mysqlProfile"></a>

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile">DatastreamConnectionProfileMysqlProfile</a>

mysql_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#mysql_profile DatastreamConnectionProfile#mysql_profile}

---

##### `oracleProfile`<sup>Optional</sup> <a name="oracleProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.oracleProfile"></a>

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile">DatastreamConnectionProfileOracleProfile</a>

oracle_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#oracle_profile DatastreamConnectionProfile#oracle_profile}

---

##### `postgresqlProfile`<sup>Optional</sup> <a name="postgresqlProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.postgresqlProfile"></a>

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile">DatastreamConnectionProfilePostgresqlProfile</a>

postgresql_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#postgresql_profile DatastreamConnectionProfile#postgresql_profile}

---

##### `privateConnectivity`<sup>Optional</sup> <a name="privateConnectivity" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.privateConnectivity"></a>

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity">DatastreamConnectionProfilePrivateConnectivity</a>

private_connectivity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#private_connectivity DatastreamConnectionProfile#private_connectivity}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#project DatastreamConnectionProfile#project}.

---

##### `sqlServerProfile`<sup>Optional</sup> <a name="sqlServerProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.sqlServerProfile"></a>

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfile">DatastreamConnectionProfileSqlServerProfile</a>

sql_server_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#sql_server_profile DatastreamConnectionProfile#sql_server_profile}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts">DatastreamConnectionProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#timeouts DatastreamConnectionProfile#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putBigqueryProfile">putBigqueryProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putForwardSshConnectivity">putForwardSshConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putGcsProfile">putGcsProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putMongodbProfile">putMongodbProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putMysqlProfile">putMysqlProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putOracleProfile">putOracleProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putPostgresqlProfile">putPostgresqlProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putPrivateConnectivity">putPrivateConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putSqlServerProfile">putSqlServerProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetBigqueryProfile">resetBigqueryProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetCreateWithoutValidation">resetCreateWithoutValidation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetForwardSshConnectivity">resetForwardSshConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetGcsProfile">resetGcsProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetMongodbProfile">resetMongodbProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetMysqlProfile">resetMysqlProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetOracleProfile">resetOracleProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetPostgresqlProfile">resetPostgresqlProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetPrivateConnectivity">resetPrivateConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetSqlServerProfile">resetSqlServerProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBigqueryProfile` <a name="putBigqueryProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putBigqueryProfile"></a>

```java
public void putBigqueryProfile(DatastreamConnectionProfileBigqueryProfile value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putBigqueryProfile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfile">DatastreamConnectionProfileBigqueryProfile</a>

---

##### `putForwardSshConnectivity` <a name="putForwardSshConnectivity" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putForwardSshConnectivity"></a>

```java
public void putForwardSshConnectivity(DatastreamConnectionProfileForwardSshConnectivity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putForwardSshConnectivity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity">DatastreamConnectionProfileForwardSshConnectivity</a>

---

##### `putGcsProfile` <a name="putGcsProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putGcsProfile"></a>

```java
public void putGcsProfile(DatastreamConnectionProfileGcsProfile value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putGcsProfile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile">DatastreamConnectionProfileGcsProfile</a>

---

##### `putMongodbProfile` <a name="putMongodbProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putMongodbProfile"></a>

```java
public void putMongodbProfile(DatastreamConnectionProfileMongodbProfile value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putMongodbProfile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile">DatastreamConnectionProfileMongodbProfile</a>

---

##### `putMysqlProfile` <a name="putMysqlProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putMysqlProfile"></a>

```java
public void putMysqlProfile(DatastreamConnectionProfileMysqlProfile value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putMysqlProfile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile">DatastreamConnectionProfileMysqlProfile</a>

---

##### `putOracleProfile` <a name="putOracleProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putOracleProfile"></a>

```java
public void putOracleProfile(DatastreamConnectionProfileOracleProfile value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putOracleProfile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile">DatastreamConnectionProfileOracleProfile</a>

---

##### `putPostgresqlProfile` <a name="putPostgresqlProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putPostgresqlProfile"></a>

```java
public void putPostgresqlProfile(DatastreamConnectionProfilePostgresqlProfile value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putPostgresqlProfile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile">DatastreamConnectionProfilePostgresqlProfile</a>

---

##### `putPrivateConnectivity` <a name="putPrivateConnectivity" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putPrivateConnectivity"></a>

```java
public void putPrivateConnectivity(DatastreamConnectionProfilePrivateConnectivity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putPrivateConnectivity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity">DatastreamConnectionProfilePrivateConnectivity</a>

---

##### `putSqlServerProfile` <a name="putSqlServerProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putSqlServerProfile"></a>

```java
public void putSqlServerProfile(DatastreamConnectionProfileSqlServerProfile value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putSqlServerProfile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfile">DatastreamConnectionProfileSqlServerProfile</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putTimeouts"></a>

```java
public void putTimeouts(DatastreamConnectionProfileTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts">DatastreamConnectionProfileTimeouts</a>

---

##### `resetBigqueryProfile` <a name="resetBigqueryProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetBigqueryProfile"></a>

```java
public void resetBigqueryProfile()
```

##### `resetCreateWithoutValidation` <a name="resetCreateWithoutValidation" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetCreateWithoutValidation"></a>

```java
public void resetCreateWithoutValidation()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetForwardSshConnectivity` <a name="resetForwardSshConnectivity" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetForwardSshConnectivity"></a>

```java
public void resetForwardSshConnectivity()
```

##### `resetGcsProfile` <a name="resetGcsProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetGcsProfile"></a>

```java
public void resetGcsProfile()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetMongodbProfile` <a name="resetMongodbProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetMongodbProfile"></a>

```java
public void resetMongodbProfile()
```

##### `resetMysqlProfile` <a name="resetMysqlProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetMysqlProfile"></a>

```java
public void resetMysqlProfile()
```

##### `resetOracleProfile` <a name="resetOracleProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetOracleProfile"></a>

```java
public void resetOracleProfile()
```

##### `resetPostgresqlProfile` <a name="resetPostgresqlProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetPostgresqlProfile"></a>

```java
public void resetPostgresqlProfile()
```

##### `resetPrivateConnectivity` <a name="resetPrivateConnectivity" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetPrivateConnectivity"></a>

```java
public void resetPrivateConnectivity()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetProject"></a>

```java
public void resetProject()
```

##### `resetSqlServerProfile` <a name="resetSqlServerProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetSqlServerProfile"></a>

```java
public void resetSqlServerProfile()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DatastreamConnectionProfile resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.isConstruct"></a>

```java
import io.cdktn.providers.google.datastream_connection_profile.DatastreamConnectionProfile;

DatastreamConnectionProfile.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.isTerraformElement"></a>

```java
import io.cdktn.providers.google.datastream_connection_profile.DatastreamConnectionProfile;

DatastreamConnectionProfile.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.isTerraformResource"></a>

```java
import io.cdktn.providers.google.datastream_connection_profile.DatastreamConnectionProfile;

DatastreamConnectionProfile.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.datastream_connection_profile.DatastreamConnectionProfile;

DatastreamConnectionProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatastreamConnectionProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DatastreamConnectionProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatastreamConnectionProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatastreamConnectionProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DatastreamConnectionProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.bigqueryProfile">bigqueryProfile</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference">DatastreamConnectionProfileBigqueryProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.forwardSshConnectivity">forwardSshConnectivity</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference">DatastreamConnectionProfileForwardSshConnectivityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.gcsProfile">gcsProfile</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference">DatastreamConnectionProfileGcsProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.mongodbProfile">mongodbProfile</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference">DatastreamConnectionProfileMongodbProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.mysqlProfile">mysqlProfile</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference">DatastreamConnectionProfileMysqlProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.oracleProfile">oracleProfile</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference">DatastreamConnectionProfileOracleProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.postgresqlProfile">postgresqlProfile</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference">DatastreamConnectionProfilePostgresqlProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.privateConnectivity">privateConnectivity</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference">DatastreamConnectionProfilePrivateConnectivityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.sqlServerProfile">sqlServerProfile</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference">DatastreamConnectionProfileSqlServerProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference">DatastreamConnectionProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.bigqueryProfileInput">bigqueryProfileInput</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfile">DatastreamConnectionProfileBigqueryProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.connectionProfileIdInput">connectionProfileIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.createWithoutValidationInput">createWithoutValidationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.forwardSshConnectivityInput">forwardSshConnectivityInput</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity">DatastreamConnectionProfileForwardSshConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.gcsProfileInput">gcsProfileInput</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile">DatastreamConnectionProfileGcsProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.mongodbProfileInput">mongodbProfileInput</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile">DatastreamConnectionProfileMongodbProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.mysqlProfileInput">mysqlProfileInput</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile">DatastreamConnectionProfileMysqlProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.oracleProfileInput">oracleProfileInput</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile">DatastreamConnectionProfileOracleProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.postgresqlProfileInput">postgresqlProfileInput</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile">DatastreamConnectionProfilePostgresqlProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.privateConnectivityInput">privateConnectivityInput</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity">DatastreamConnectionProfilePrivateConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.sqlServerProfileInput">sqlServerProfileInput</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfile">DatastreamConnectionProfileSqlServerProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts">DatastreamConnectionProfileTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.connectionProfileId">connectionProfileId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.createWithoutValidation">createWithoutValidation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `bigqueryProfile`<sup>Required</sup> <a name="bigqueryProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.bigqueryProfile"></a>

```java
public DatastreamConnectionProfileBigqueryProfileOutputReference getBigqueryProfile();
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference">DatastreamConnectionProfileBigqueryProfileOutputReference</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `forwardSshConnectivity`<sup>Required</sup> <a name="forwardSshConnectivity" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.forwardSshConnectivity"></a>

```java
public DatastreamConnectionProfileForwardSshConnectivityOutputReference getForwardSshConnectivity();
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference">DatastreamConnectionProfileForwardSshConnectivityOutputReference</a>

---

##### `gcsProfile`<sup>Required</sup> <a name="gcsProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.gcsProfile"></a>

```java
public DatastreamConnectionProfileGcsProfileOutputReference getGcsProfile();
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference">DatastreamConnectionProfileGcsProfileOutputReference</a>

---

##### `mongodbProfile`<sup>Required</sup> <a name="mongodbProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.mongodbProfile"></a>

```java
public DatastreamConnectionProfileMongodbProfileOutputReference getMongodbProfile();
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference">DatastreamConnectionProfileMongodbProfileOutputReference</a>

---

##### `mysqlProfile`<sup>Required</sup> <a name="mysqlProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.mysqlProfile"></a>

```java
public DatastreamConnectionProfileMysqlProfileOutputReference getMysqlProfile();
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference">DatastreamConnectionProfileMysqlProfileOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `oracleProfile`<sup>Required</sup> <a name="oracleProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.oracleProfile"></a>

```java
public DatastreamConnectionProfileOracleProfileOutputReference getOracleProfile();
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference">DatastreamConnectionProfileOracleProfileOutputReference</a>

---

##### `postgresqlProfile`<sup>Required</sup> <a name="postgresqlProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.postgresqlProfile"></a>

```java
public DatastreamConnectionProfilePostgresqlProfileOutputReference getPostgresqlProfile();
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference">DatastreamConnectionProfilePostgresqlProfileOutputReference</a>

---

##### `privateConnectivity`<sup>Required</sup> <a name="privateConnectivity" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.privateConnectivity"></a>

```java
public DatastreamConnectionProfilePrivateConnectivityOutputReference getPrivateConnectivity();
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference">DatastreamConnectionProfilePrivateConnectivityOutputReference</a>

---

##### `sqlServerProfile`<sup>Required</sup> <a name="sqlServerProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.sqlServerProfile"></a>

```java
public DatastreamConnectionProfileSqlServerProfileOutputReference getSqlServerProfile();
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference">DatastreamConnectionProfileSqlServerProfileOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.timeouts"></a>

```java
public DatastreamConnectionProfileTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference">DatastreamConnectionProfileTimeoutsOutputReference</a>

---

##### `bigqueryProfileInput`<sup>Optional</sup> <a name="bigqueryProfileInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.bigqueryProfileInput"></a>

```java
public DatastreamConnectionProfileBigqueryProfile getBigqueryProfileInput();
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfile">DatastreamConnectionProfileBigqueryProfile</a>

---

##### `connectionProfileIdInput`<sup>Optional</sup> <a name="connectionProfileIdInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.connectionProfileIdInput"></a>

```java
public java.lang.String getConnectionProfileIdInput();
```

- *Type:* java.lang.String

---

##### `createWithoutValidationInput`<sup>Optional</sup> <a name="createWithoutValidationInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.createWithoutValidationInput"></a>

```java
public java.lang.Boolean|IResolvable getCreateWithoutValidationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `forwardSshConnectivityInput`<sup>Optional</sup> <a name="forwardSshConnectivityInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.forwardSshConnectivityInput"></a>

```java
public DatastreamConnectionProfileForwardSshConnectivity getForwardSshConnectivityInput();
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity">DatastreamConnectionProfileForwardSshConnectivity</a>

---

##### `gcsProfileInput`<sup>Optional</sup> <a name="gcsProfileInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.gcsProfileInput"></a>

```java
public DatastreamConnectionProfileGcsProfile getGcsProfileInput();
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile">DatastreamConnectionProfileGcsProfile</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `mongodbProfileInput`<sup>Optional</sup> <a name="mongodbProfileInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.mongodbProfileInput"></a>

```java
public DatastreamConnectionProfileMongodbProfile getMongodbProfileInput();
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile">DatastreamConnectionProfileMongodbProfile</a>

---

##### `mysqlProfileInput`<sup>Optional</sup> <a name="mysqlProfileInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.mysqlProfileInput"></a>

```java
public DatastreamConnectionProfileMysqlProfile getMysqlProfileInput();
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile">DatastreamConnectionProfileMysqlProfile</a>

---

##### `oracleProfileInput`<sup>Optional</sup> <a name="oracleProfileInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.oracleProfileInput"></a>

```java
public DatastreamConnectionProfileOracleProfile getOracleProfileInput();
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile">DatastreamConnectionProfileOracleProfile</a>

---

##### `postgresqlProfileInput`<sup>Optional</sup> <a name="postgresqlProfileInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.postgresqlProfileInput"></a>

```java
public DatastreamConnectionProfilePostgresqlProfile getPostgresqlProfileInput();
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile">DatastreamConnectionProfilePostgresqlProfile</a>

---

##### `privateConnectivityInput`<sup>Optional</sup> <a name="privateConnectivityInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.privateConnectivityInput"></a>

```java
public DatastreamConnectionProfilePrivateConnectivity getPrivateConnectivityInput();
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity">DatastreamConnectionProfilePrivateConnectivity</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `sqlServerProfileInput`<sup>Optional</sup> <a name="sqlServerProfileInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.sqlServerProfileInput"></a>

```java
public DatastreamConnectionProfileSqlServerProfile getSqlServerProfileInput();
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfile">DatastreamConnectionProfileSqlServerProfile</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.timeoutsInput"></a>

```java
public IResolvable|DatastreamConnectionProfileTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts">DatastreamConnectionProfileTimeouts</a>

---

##### `connectionProfileId`<sup>Required</sup> <a name="connectionProfileId" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.connectionProfileId"></a>

```java
public java.lang.String getConnectionProfileId();
```

- *Type:* java.lang.String

---

##### `createWithoutValidation`<sup>Required</sup> <a name="createWithoutValidation" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.createWithoutValidation"></a>

```java
public java.lang.Boolean|IResolvable getCreateWithoutValidation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfile.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatastreamConnectionProfileBigqueryProfile <a name="DatastreamConnectionProfileBigqueryProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfile.Initializer"></a>

```java
import io.cdktn.providers.google.datastream_connection_profile.DatastreamConnectionProfileBigqueryProfile;

DatastreamConnectionProfileBigqueryProfile.builder()
    .build();
```


### DatastreamConnectionProfileConfig <a name="DatastreamConnectionProfileConfig" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.Initializer"></a>

```java
import io.cdktn.providers.google.datastream_connection_profile.DatastreamConnectionProfileConfig;

DatastreamConnectionProfileConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .connectionProfileId(java.lang.String)
    .displayName(java.lang.String)
    .location(java.lang.String)
//  .bigqueryProfile(DatastreamConnectionProfileBigqueryProfile)
//  .createWithoutValidation(java.lang.Boolean|IResolvable)
//  .deletionPolicy(java.lang.String)
//  .forwardSshConnectivity(DatastreamConnectionProfileForwardSshConnectivity)
//  .gcsProfile(DatastreamConnectionProfileGcsProfile)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .mongodbProfile(DatastreamConnectionProfileMongodbProfile)
//  .mysqlProfile(DatastreamConnectionProfileMysqlProfile)
//  .oracleProfile(DatastreamConnectionProfileOracleProfile)
//  .postgresqlProfile(DatastreamConnectionProfilePostgresqlProfile)
//  .privateConnectivity(DatastreamConnectionProfilePrivateConnectivity)
//  .project(java.lang.String)
//  .sqlServerProfile(DatastreamConnectionProfileSqlServerProfile)
//  .timeouts(DatastreamConnectionProfileTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.connectionProfileId">connectionProfileId</a></code> | <code>java.lang.String</code> | The connection profile identifier. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Display name. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.location">location</a></code> | <code>java.lang.String</code> | The name of the location this connection profile is located in. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.bigqueryProfile">bigqueryProfile</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfile">DatastreamConnectionProfileBigqueryProfile</a></code> | bigquery_profile block. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.createWithoutValidation">createWithoutValidation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Create the connection profile without validating it. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.forwardSshConnectivity">forwardSshConnectivity</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity">DatastreamConnectionProfileForwardSshConnectivity</a></code> | forward_ssh_connectivity block. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.gcsProfile">gcsProfile</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile">DatastreamConnectionProfileGcsProfile</a></code> | gcs_profile block. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#id DatastreamConnectionProfile#id}. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.mongodbProfile">mongodbProfile</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile">DatastreamConnectionProfileMongodbProfile</a></code> | mongodb_profile block. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.mysqlProfile">mysqlProfile</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile">DatastreamConnectionProfileMysqlProfile</a></code> | mysql_profile block. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.oracleProfile">oracleProfile</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile">DatastreamConnectionProfileOracleProfile</a></code> | oracle_profile block. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.postgresqlProfile">postgresqlProfile</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile">DatastreamConnectionProfilePostgresqlProfile</a></code> | postgresql_profile block. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.privateConnectivity">privateConnectivity</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity">DatastreamConnectionProfilePrivateConnectivity</a></code> | private_connectivity block. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#project DatastreamConnectionProfile#project}. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.sqlServerProfile">sqlServerProfile</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfile">DatastreamConnectionProfileSqlServerProfile</a></code> | sql_server_profile block. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts">DatastreamConnectionProfileTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `connectionProfileId`<sup>Required</sup> <a name="connectionProfileId" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.connectionProfileId"></a>

```java
public java.lang.String getConnectionProfileId();
```

- *Type:* java.lang.String

The connection profile identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#connection_profile_id DatastreamConnectionProfile#connection_profile_id}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#display_name DatastreamConnectionProfile#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The name of the location this connection profile is located in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#location DatastreamConnectionProfile#location}

---

##### `bigqueryProfile`<sup>Optional</sup> <a name="bigqueryProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.bigqueryProfile"></a>

```java
public DatastreamConnectionProfileBigqueryProfile getBigqueryProfile();
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfile">DatastreamConnectionProfileBigqueryProfile</a>

bigquery_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#bigquery_profile DatastreamConnectionProfile#bigquery_profile}

---

##### `createWithoutValidation`<sup>Optional</sup> <a name="createWithoutValidation" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.createWithoutValidation"></a>

```java
public java.lang.Boolean|IResolvable getCreateWithoutValidation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Create the connection profile without validating it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#create_without_validation DatastreamConnectionProfile#create_without_validation}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#deletion_policy DatastreamConnectionProfile#deletion_policy}

---

##### `forwardSshConnectivity`<sup>Optional</sup> <a name="forwardSshConnectivity" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.forwardSshConnectivity"></a>

```java
public DatastreamConnectionProfileForwardSshConnectivity getForwardSshConnectivity();
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity">DatastreamConnectionProfileForwardSshConnectivity</a>

forward_ssh_connectivity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#forward_ssh_connectivity DatastreamConnectionProfile#forward_ssh_connectivity}

---

##### `gcsProfile`<sup>Optional</sup> <a name="gcsProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.gcsProfile"></a>

```java
public DatastreamConnectionProfileGcsProfile getGcsProfile();
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile">DatastreamConnectionProfileGcsProfile</a>

gcs_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#gcs_profile DatastreamConnectionProfile#gcs_profile}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#id DatastreamConnectionProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#labels DatastreamConnectionProfile#labels}

---

##### `mongodbProfile`<sup>Optional</sup> <a name="mongodbProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.mongodbProfile"></a>

```java
public DatastreamConnectionProfileMongodbProfile getMongodbProfile();
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile">DatastreamConnectionProfileMongodbProfile</a>

mongodb_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#mongodb_profile DatastreamConnectionProfile#mongodb_profile}

---

##### `mysqlProfile`<sup>Optional</sup> <a name="mysqlProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.mysqlProfile"></a>

```java
public DatastreamConnectionProfileMysqlProfile getMysqlProfile();
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile">DatastreamConnectionProfileMysqlProfile</a>

mysql_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#mysql_profile DatastreamConnectionProfile#mysql_profile}

---

##### `oracleProfile`<sup>Optional</sup> <a name="oracleProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.oracleProfile"></a>

```java
public DatastreamConnectionProfileOracleProfile getOracleProfile();
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile">DatastreamConnectionProfileOracleProfile</a>

oracle_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#oracle_profile DatastreamConnectionProfile#oracle_profile}

---

##### `postgresqlProfile`<sup>Optional</sup> <a name="postgresqlProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.postgresqlProfile"></a>

```java
public DatastreamConnectionProfilePostgresqlProfile getPostgresqlProfile();
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile">DatastreamConnectionProfilePostgresqlProfile</a>

postgresql_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#postgresql_profile DatastreamConnectionProfile#postgresql_profile}

---

##### `privateConnectivity`<sup>Optional</sup> <a name="privateConnectivity" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.privateConnectivity"></a>

```java
public DatastreamConnectionProfilePrivateConnectivity getPrivateConnectivity();
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity">DatastreamConnectionProfilePrivateConnectivity</a>

private_connectivity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#private_connectivity DatastreamConnectionProfile#private_connectivity}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#project DatastreamConnectionProfile#project}.

---

##### `sqlServerProfile`<sup>Optional</sup> <a name="sqlServerProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.sqlServerProfile"></a>

```java
public DatastreamConnectionProfileSqlServerProfile getSqlServerProfile();
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfile">DatastreamConnectionProfileSqlServerProfile</a>

sql_server_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#sql_server_profile DatastreamConnectionProfile#sql_server_profile}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileConfig.property.timeouts"></a>

```java
public DatastreamConnectionProfileTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts">DatastreamConnectionProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#timeouts DatastreamConnectionProfile#timeouts}

---

### DatastreamConnectionProfileForwardSshConnectivity <a name="DatastreamConnectionProfileForwardSshConnectivity" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity.Initializer"></a>

```java
import io.cdktn.providers.google.datastream_connection_profile.DatastreamConnectionProfileForwardSshConnectivity;

DatastreamConnectionProfileForwardSshConnectivity.builder()
    .hostname(java.lang.String)
    .username(java.lang.String)
//  .password(java.lang.String)
//  .port(java.lang.Number)
//  .privateKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity.property.hostname">hostname</a></code> | <code>java.lang.String</code> | Hostname for the SSH tunnel. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity.property.username">username</a></code> | <code>java.lang.String</code> | Username for the SSH tunnel. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity.property.password">password</a></code> | <code>java.lang.String</code> | SSH password. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity.property.port">port</a></code> | <code>java.lang.Number</code> | Port for the SSH tunnel. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | SSH private key. |

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

Hostname for the SSH tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#hostname DatastreamConnectionProfile#hostname}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Username for the SSH tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#username DatastreamConnectionProfile#username}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

SSH password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#password DatastreamConnectionProfile#password}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Port for the SSH tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#port DatastreamConnectionProfile#port}

---

##### `privateKey`<sup>Optional</sup> <a name="privateKey" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

SSH private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#private_key DatastreamConnectionProfile#private_key}

---

### DatastreamConnectionProfileGcsProfile <a name="DatastreamConnectionProfileGcsProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile.Initializer"></a>

```java
import io.cdktn.providers.google.datastream_connection_profile.DatastreamConnectionProfileGcsProfile;

DatastreamConnectionProfileGcsProfile.builder()
    .bucket(java.lang.String)
//  .rootPath(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile.property.bucket">bucket</a></code> | <code>java.lang.String</code> | The Cloud Storage bucket name. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile.property.rootPath">rootPath</a></code> | <code>java.lang.String</code> | The root path inside the Cloud Storage bucket. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

The Cloud Storage bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#bucket DatastreamConnectionProfile#bucket}

---

##### `rootPath`<sup>Optional</sup> <a name="rootPath" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile.property.rootPath"></a>

```java
public java.lang.String getRootPath();
```

- *Type:* java.lang.String

The root path inside the Cloud Storage bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#root_path DatastreamConnectionProfile#root_path}

---

### DatastreamConnectionProfileMongodbProfile <a name="DatastreamConnectionProfileMongodbProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile.Initializer"></a>

```java
import io.cdktn.providers.google.datastream_connection_profile.DatastreamConnectionProfileMongodbProfile;

DatastreamConnectionProfileMongodbProfile.builder()
    .hostAddresses(IResolvable|java.util.List<DatastreamConnectionProfileMongodbProfileHostAddresses>)
    .username(java.lang.String)
//  .password(java.lang.String)
//  .replicaSet(java.lang.String)
//  .secretManagerStoredPassword(java.lang.String)
//  .srvConnectionFormat(DatastreamConnectionProfileMongodbProfileSrvConnectionFormat)
//  .sslConfig(DatastreamConnectionProfileMongodbProfileSslConfig)
//  .standardConnectionFormat(DatastreamConnectionProfileMongodbProfileStandardConnectionFormat)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile.property.hostAddresses">hostAddresses</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddresses">DatastreamConnectionProfileMongodbProfileHostAddresses</a>></code> | host_addresses block. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile.property.username">username</a></code> | <code>java.lang.String</code> | Username for the MongoDB connection. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile.property.password">password</a></code> | <code>java.lang.String</code> | Password for the MongoDB connection. Mutually exclusive with secretManagerStoredPassword. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile.property.replicaSet">replicaSet</a></code> | <code>java.lang.String</code> | Name of the replica set. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile.property.secretManagerStoredPassword">secretManagerStoredPassword</a></code> | <code>java.lang.String</code> | A reference to a Secret Manager resource name storing the MongoDB connection password. Mutually exclusive with password. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile.property.srvConnectionFormat">srvConnectionFormat</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormat">DatastreamConnectionProfileMongodbProfileSrvConnectionFormat</a></code> | srv_connection_format block. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile.property.sslConfig">sslConfig</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfig">DatastreamConnectionProfileMongodbProfileSslConfig</a></code> | ssl_config block. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile.property.standardConnectionFormat">standardConnectionFormat</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormat">DatastreamConnectionProfileMongodbProfileStandardConnectionFormat</a></code> | standard_connection_format block. |

---

##### `hostAddresses`<sup>Required</sup> <a name="hostAddresses" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile.property.hostAddresses"></a>

```java
public IResolvable|java.util.List<DatastreamConnectionProfileMongodbProfileHostAddresses> getHostAddresses();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddresses">DatastreamConnectionProfileMongodbProfileHostAddresses</a>>

host_addresses block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#host_addresses DatastreamConnectionProfile#host_addresses}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Username for the MongoDB connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#username DatastreamConnectionProfile#username}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Password for the MongoDB connection. Mutually exclusive with secretManagerStoredPassword.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#password DatastreamConnectionProfile#password}

---

##### `replicaSet`<sup>Optional</sup> <a name="replicaSet" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile.property.replicaSet"></a>

```java
public java.lang.String getReplicaSet();
```

- *Type:* java.lang.String

Name of the replica set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#replica_set DatastreamConnectionProfile#replica_set}

---

##### `secretManagerStoredPassword`<sup>Optional</sup> <a name="secretManagerStoredPassword" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile.property.secretManagerStoredPassword"></a>

```java
public java.lang.String getSecretManagerStoredPassword();
```

- *Type:* java.lang.String

A reference to a Secret Manager resource name storing the MongoDB connection password. Mutually exclusive with password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#secret_manager_stored_password DatastreamConnectionProfile#secret_manager_stored_password}

---

##### `srvConnectionFormat`<sup>Optional</sup> <a name="srvConnectionFormat" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile.property.srvConnectionFormat"></a>

```java
public DatastreamConnectionProfileMongodbProfileSrvConnectionFormat getSrvConnectionFormat();
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormat">DatastreamConnectionProfileMongodbProfileSrvConnectionFormat</a>

srv_connection_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#srv_connection_format DatastreamConnectionProfile#srv_connection_format}

---

##### `sslConfig`<sup>Optional</sup> <a name="sslConfig" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile.property.sslConfig"></a>

```java
public DatastreamConnectionProfileMongodbProfileSslConfig getSslConfig();
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfig">DatastreamConnectionProfileMongodbProfileSslConfig</a>

ssl_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#ssl_config DatastreamConnectionProfile#ssl_config}

---

##### `standardConnectionFormat`<sup>Optional</sup> <a name="standardConnectionFormat" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile.property.standardConnectionFormat"></a>

```java
public DatastreamConnectionProfileMongodbProfileStandardConnectionFormat getStandardConnectionFormat();
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormat">DatastreamConnectionProfileMongodbProfileStandardConnectionFormat</a>

standard_connection_format block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#standard_connection_format DatastreamConnectionProfile#standard_connection_format}

---

### DatastreamConnectionProfileMongodbProfileHostAddresses <a name="DatastreamConnectionProfileMongodbProfileHostAddresses" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddresses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddresses.Initializer"></a>

```java
import io.cdktn.providers.google.datastream_connection_profile.DatastreamConnectionProfileMongodbProfileHostAddresses;

DatastreamConnectionProfileMongodbProfileHostAddresses.builder()
    .hostname(java.lang.String)
//  .port(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddresses.property.hostname">hostname</a></code> | <code>java.lang.String</code> | Hostname for the connection. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddresses.property.port">port</a></code> | <code>java.lang.Number</code> | Port for the connection. |

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddresses.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

Hostname for the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#hostname DatastreamConnectionProfile#hostname}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddresses.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Port for the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#port DatastreamConnectionProfile#port}

---

### DatastreamConnectionProfileMongodbProfileSrvConnectionFormat <a name="DatastreamConnectionProfileMongodbProfileSrvConnectionFormat" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormat.Initializer"></a>

```java
import io.cdktn.providers.google.datastream_connection_profile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormat;

DatastreamConnectionProfileMongodbProfileSrvConnectionFormat.builder()
    .build();
```


### DatastreamConnectionProfileMongodbProfileSslConfig <a name="DatastreamConnectionProfileMongodbProfileSslConfig" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfig.Initializer"></a>

```java
import io.cdktn.providers.google.datastream_connection_profile.DatastreamConnectionProfileMongodbProfileSslConfig;

DatastreamConnectionProfileMongodbProfileSslConfig.builder()
//  .caCertificate(java.lang.String)
//  .clientCertificate(java.lang.String)
//  .clientKey(java.lang.String)
//  .secretManagerStoredClientKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfig.property.caCertificate">caCertificate</a></code> | <code>java.lang.String</code> | PEM-encoded certificate of the CA that signed the source database server's certificate. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfig.property.clientCertificate">clientCertificate</a></code> | <code>java.lang.String</code> | PEM-encoded certificate that will be used by the replica to authenticate against the source database server. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfig.property.clientKey">clientKey</a></code> | <code>java.lang.String</code> | PEM-encoded private key associated with the Client Certificate. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfig.property.secretManagerStoredClientKey">secretManagerStoredClientKey</a></code> | <code>java.lang.String</code> | A reference to a Secret Manager resource name storing the PEM-encoded private key. Mutually exclusive with clientKey. |

---

##### `caCertificate`<sup>Optional</sup> <a name="caCertificate" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfig.property.caCertificate"></a>

```java
public java.lang.String getCaCertificate();
```

- *Type:* java.lang.String

PEM-encoded certificate of the CA that signed the source database server's certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#ca_certificate DatastreamConnectionProfile#ca_certificate}

---

##### `clientCertificate`<sup>Optional</sup> <a name="clientCertificate" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfig.property.clientCertificate"></a>

```java
public java.lang.String getClientCertificate();
```

- *Type:* java.lang.String

PEM-encoded certificate that will be used by the replica to authenticate against the source database server.

If this field
is used then the 'clientKey' and the 'caCertificate' fields are
mandatory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#client_certificate DatastreamConnectionProfile#client_certificate}

---

##### `clientKey`<sup>Optional</sup> <a name="clientKey" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfig.property.clientKey"></a>

```java
public java.lang.String getClientKey();
```

- *Type:* java.lang.String

PEM-encoded private key associated with the Client Certificate.

If this field is used then the 'client_certificate' and the
'ca_certificate' fields are mandatory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#client_key DatastreamConnectionProfile#client_key}

---

##### `secretManagerStoredClientKey`<sup>Optional</sup> <a name="secretManagerStoredClientKey" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfig.property.secretManagerStoredClientKey"></a>

```java
public java.lang.String getSecretManagerStoredClientKey();
```

- *Type:* java.lang.String

A reference to a Secret Manager resource name storing the PEM-encoded private key. Mutually exclusive with clientKey.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#secret_manager_stored_client_key DatastreamConnectionProfile#secret_manager_stored_client_key}

---

### DatastreamConnectionProfileMongodbProfileStandardConnectionFormat <a name="DatastreamConnectionProfileMongodbProfileStandardConnectionFormat" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormat.Initializer"></a>

```java
import io.cdktn.providers.google.datastream_connection_profile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormat;

DatastreamConnectionProfileMongodbProfileStandardConnectionFormat.builder()
//  .directConnection(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormat.property.directConnection">directConnection</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether the client connects directly to the host[:port] in the connection URI. |

---

##### `directConnection`<sup>Optional</sup> <a name="directConnection" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormat.property.directConnection"></a>

```java
public java.lang.Boolean|IResolvable getDirectConnection();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether the client connects directly to the host[:port] in the connection URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#direct_connection DatastreamConnectionProfile#direct_connection}

---

### DatastreamConnectionProfileMysqlProfile <a name="DatastreamConnectionProfileMysqlProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.Initializer"></a>

```java
import io.cdktn.providers.google.datastream_connection_profile.DatastreamConnectionProfileMysqlProfile;

DatastreamConnectionProfileMysqlProfile.builder()
    .hostname(java.lang.String)
    .username(java.lang.String)
//  .password(java.lang.String)
//  .port(java.lang.Number)
//  .secretManagerStoredPassword(java.lang.String)
//  .sslConfig(DatastreamConnectionProfileMysqlProfileSslConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.property.hostname">hostname</a></code> | <code>java.lang.String</code> | Hostname for the MySQL connection. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.property.username">username</a></code> | <code>java.lang.String</code> | Username for the MySQL connection. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.property.password">password</a></code> | <code>java.lang.String</code> | Password for the MySQL connection. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.property.port">port</a></code> | <code>java.lang.Number</code> | Port for the MySQL connection. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.property.secretManagerStoredPassword">secretManagerStoredPassword</a></code> | <code>java.lang.String</code> | A reference to a Secret Manager resource name storing the user's password. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.property.sslConfig">sslConfig</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig">DatastreamConnectionProfileMysqlProfileSslConfig</a></code> | ssl_config block. |

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

Hostname for the MySQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#hostname DatastreamConnectionProfile#hostname}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Username for the MySQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#username DatastreamConnectionProfile#username}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Password for the MySQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#password DatastreamConnectionProfile#password}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Port for the MySQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#port DatastreamConnectionProfile#port}

---

##### `secretManagerStoredPassword`<sup>Optional</sup> <a name="secretManagerStoredPassword" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.property.secretManagerStoredPassword"></a>

```java
public java.lang.String getSecretManagerStoredPassword();
```

- *Type:* java.lang.String

A reference to a Secret Manager resource name storing the user's password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#secret_manager_stored_password DatastreamConnectionProfile#secret_manager_stored_password}

---

##### `sslConfig`<sup>Optional</sup> <a name="sslConfig" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile.property.sslConfig"></a>

```java
public DatastreamConnectionProfileMysqlProfileSslConfig getSslConfig();
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig">DatastreamConnectionProfileMysqlProfileSslConfig</a>

ssl_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#ssl_config DatastreamConnectionProfile#ssl_config}

---

### DatastreamConnectionProfileMysqlProfileSslConfig <a name="DatastreamConnectionProfileMysqlProfileSslConfig" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig.Initializer"></a>

```java
import io.cdktn.providers.google.datastream_connection_profile.DatastreamConnectionProfileMysqlProfileSslConfig;

DatastreamConnectionProfileMysqlProfileSslConfig.builder()
//  .caCertificate(java.lang.String)
//  .clientCertificate(java.lang.String)
//  .clientKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig.property.caCertificate">caCertificate</a></code> | <code>java.lang.String</code> | PEM-encoded certificate of the CA that signed the source database server's certificate. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig.property.clientCertificate">clientCertificate</a></code> | <code>java.lang.String</code> | PEM-encoded certificate that will be used by the replica to authenticate against the source database server. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig.property.clientKey">clientKey</a></code> | <code>java.lang.String</code> | PEM-encoded private key associated with the Client Certificate. |

---

##### `caCertificate`<sup>Optional</sup> <a name="caCertificate" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig.property.caCertificate"></a>

```java
public java.lang.String getCaCertificate();
```

- *Type:* java.lang.String

PEM-encoded certificate of the CA that signed the source database server's certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#ca_certificate DatastreamConnectionProfile#ca_certificate}

---

##### `clientCertificate`<sup>Optional</sup> <a name="clientCertificate" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig.property.clientCertificate"></a>

```java
public java.lang.String getClientCertificate();
```

- *Type:* java.lang.String

PEM-encoded certificate that will be used by the replica to authenticate against the source database server.

If this field
is used then the 'clientKey' and the 'caCertificate' fields are
mandatory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#client_certificate DatastreamConnectionProfile#client_certificate}

---

##### `clientKey`<sup>Optional</sup> <a name="clientKey" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig.property.clientKey"></a>

```java
public java.lang.String getClientKey();
```

- *Type:* java.lang.String

PEM-encoded private key associated with the Client Certificate.

If this field is used then the 'client_certificate' and the
'ca_certificate' fields are mandatory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#client_key DatastreamConnectionProfile#client_key}

---

### DatastreamConnectionProfileOracleProfile <a name="DatastreamConnectionProfileOracleProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.Initializer"></a>

```java
import io.cdktn.providers.google.datastream_connection_profile.DatastreamConnectionProfileOracleProfile;

DatastreamConnectionProfileOracleProfile.builder()
    .databaseService(java.lang.String)
    .hostname(java.lang.String)
    .username(java.lang.String)
//  .connectionAttributes(java.util.Map<java.lang.String, java.lang.String>)
//  .password(java.lang.String)
//  .port(java.lang.Number)
//  .secretManagerStoredPassword(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.databaseService">databaseService</a></code> | <code>java.lang.String</code> | Database for the Oracle connection. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.hostname">hostname</a></code> | <code>java.lang.String</code> | Hostname for the Oracle connection. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.username">username</a></code> | <code>java.lang.String</code> | Username for the Oracle connection. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.connectionAttributes">connectionAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Connection string attributes. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.password">password</a></code> | <code>java.lang.String</code> | Password for the Oracle connection. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.port">port</a></code> | <code>java.lang.Number</code> | Port for the Oracle connection. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.secretManagerStoredPassword">secretManagerStoredPassword</a></code> | <code>java.lang.String</code> | A reference to a Secret Manager resource name storing the user's password. |

---

##### `databaseService`<sup>Required</sup> <a name="databaseService" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.databaseService"></a>

```java
public java.lang.String getDatabaseService();
```

- *Type:* java.lang.String

Database for the Oracle connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#database_service DatastreamConnectionProfile#database_service}

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

Hostname for the Oracle connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#hostname DatastreamConnectionProfile#hostname}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Username for the Oracle connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#username DatastreamConnectionProfile#username}

---

##### `connectionAttributes`<sup>Optional</sup> <a name="connectionAttributes" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.connectionAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConnectionAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Connection string attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#connection_attributes DatastreamConnectionProfile#connection_attributes}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Password for the Oracle connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#password DatastreamConnectionProfile#password}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Port for the Oracle connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#port DatastreamConnectionProfile#port}

---

##### `secretManagerStoredPassword`<sup>Optional</sup> <a name="secretManagerStoredPassword" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile.property.secretManagerStoredPassword"></a>

```java
public java.lang.String getSecretManagerStoredPassword();
```

- *Type:* java.lang.String

A reference to a Secret Manager resource name storing the user's password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#secret_manager_stored_password DatastreamConnectionProfile#secret_manager_stored_password}

---

### DatastreamConnectionProfilePostgresqlProfile <a name="DatastreamConnectionProfilePostgresqlProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.Initializer"></a>

```java
import io.cdktn.providers.google.datastream_connection_profile.DatastreamConnectionProfilePostgresqlProfile;

DatastreamConnectionProfilePostgresqlProfile.builder()
    .database(java.lang.String)
    .hostname(java.lang.String)
    .username(java.lang.String)
//  .password(java.lang.String)
//  .port(java.lang.Number)
//  .secretManagerStoredPassword(java.lang.String)
//  .sslConfig(DatastreamConnectionProfilePostgresqlProfileSslConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.database">database</a></code> | <code>java.lang.String</code> | Database for the PostgreSQL connection. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.hostname">hostname</a></code> | <code>java.lang.String</code> | Hostname for the PostgreSQL connection. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.username">username</a></code> | <code>java.lang.String</code> | Username for the PostgreSQL connection. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.password">password</a></code> | <code>java.lang.String</code> | Password for the PostgreSQL connection. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.port">port</a></code> | <code>java.lang.Number</code> | Port for the PostgreSQL connection. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.secretManagerStoredPassword">secretManagerStoredPassword</a></code> | <code>java.lang.String</code> | A reference to a Secret Manager resource name storing the user's password. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.sslConfig">sslConfig</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfig">DatastreamConnectionProfilePostgresqlProfileSslConfig</a></code> | ssl_config block. |

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

Database for the PostgreSQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#database DatastreamConnectionProfile#database}

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

Hostname for the PostgreSQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#hostname DatastreamConnectionProfile#hostname}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Username for the PostgreSQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#username DatastreamConnectionProfile#username}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Password for the PostgreSQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#password DatastreamConnectionProfile#password}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Port for the PostgreSQL connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#port DatastreamConnectionProfile#port}

---

##### `secretManagerStoredPassword`<sup>Optional</sup> <a name="secretManagerStoredPassword" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.secretManagerStoredPassword"></a>

```java
public java.lang.String getSecretManagerStoredPassword();
```

- *Type:* java.lang.String

A reference to a Secret Manager resource name storing the user's password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#secret_manager_stored_password DatastreamConnectionProfile#secret_manager_stored_password}

---

##### `sslConfig`<sup>Optional</sup> <a name="sslConfig" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile.property.sslConfig"></a>

```java
public DatastreamConnectionProfilePostgresqlProfileSslConfig getSslConfig();
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfig">DatastreamConnectionProfilePostgresqlProfileSslConfig</a>

ssl_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#ssl_config DatastreamConnectionProfile#ssl_config}

---

### DatastreamConnectionProfilePostgresqlProfileSslConfig <a name="DatastreamConnectionProfilePostgresqlProfileSslConfig" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfig.Initializer"></a>

```java
import io.cdktn.providers.google.datastream_connection_profile.DatastreamConnectionProfilePostgresqlProfileSslConfig;

DatastreamConnectionProfilePostgresqlProfileSslConfig.builder()
//  .serverAndClientVerification(DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification)
//  .serverVerification(DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfig.property.serverAndClientVerification">serverAndClientVerification</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification">DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification</a></code> | server_and_client_verification block. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfig.property.serverVerification">serverVerification</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification">DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification</a></code> | server_verification block. |

---

##### `serverAndClientVerification`<sup>Optional</sup> <a name="serverAndClientVerification" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfig.property.serverAndClientVerification"></a>

```java
public DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification getServerAndClientVerification();
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification">DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification</a>

server_and_client_verification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#server_and_client_verification DatastreamConnectionProfile#server_and_client_verification}

---

##### `serverVerification`<sup>Optional</sup> <a name="serverVerification" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfig.property.serverVerification"></a>

```java
public DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification getServerVerification();
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification">DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification</a>

server_verification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#server_verification DatastreamConnectionProfile#server_verification}

---

### DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification <a name="DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification.Initializer"></a>

```java
import io.cdktn.providers.google.datastream_connection_profile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification;

DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification.builder()
    .caCertificate(java.lang.String)
    .clientCertificate(java.lang.String)
    .clientKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification.property.caCertificate">caCertificate</a></code> | <code>java.lang.String</code> | PEM-encoded server root CA certificate. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification.property.clientCertificate">clientCertificate</a></code> | <code>java.lang.String</code> | PEM-encoded certificate used by the source database to authenticate the client identity (i.e., the Datastream's identity). This certificate is signed by either a root certificate trusted by the server or one or more intermediate certificates (which is stored with the leaf certificate) to link to this certificate to the trusted root certificate. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification.property.clientKey">clientKey</a></code> | <code>java.lang.String</code> | PEM-encoded private key associated with the client certificate. |

---

##### `caCertificate`<sup>Required</sup> <a name="caCertificate" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification.property.caCertificate"></a>

```java
public java.lang.String getCaCertificate();
```

- *Type:* java.lang.String

PEM-encoded server root CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#ca_certificate DatastreamConnectionProfile#ca_certificate}

---

##### `clientCertificate`<sup>Required</sup> <a name="clientCertificate" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification.property.clientCertificate"></a>

```java
public java.lang.String getClientCertificate();
```

- *Type:* java.lang.String

PEM-encoded certificate used by the source database to authenticate the client identity (i.e., the Datastream's identity). This certificate is signed by either a root certificate trusted by the server or one or more intermediate certificates (which is stored with the leaf certificate) to link to this certificate to the trusted root certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#client_certificate DatastreamConnectionProfile#client_certificate}

---

##### `clientKey`<sup>Required</sup> <a name="clientKey" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification.property.clientKey"></a>

```java
public java.lang.String getClientKey();
```

- *Type:* java.lang.String

PEM-encoded private key associated with the client certificate.

This value will be used during the SSL/TLS handshake, allowing
the PostgreSQL server to authenticate the client's identity,
i.e. identity of the stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#client_key DatastreamConnectionProfile#client_key}

---

### DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification <a name="DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification.Initializer"></a>

```java
import io.cdktn.providers.google.datastream_connection_profile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification;

DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification.builder()
    .caCertificate(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification.property.caCertificate">caCertificate</a></code> | <code>java.lang.String</code> | PEM-encoded server root CA certificate. |

---

##### `caCertificate`<sup>Required</sup> <a name="caCertificate" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification.property.caCertificate"></a>

```java
public java.lang.String getCaCertificate();
```

- *Type:* java.lang.String

PEM-encoded server root CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#ca_certificate DatastreamConnectionProfile#ca_certificate}

---

### DatastreamConnectionProfilePrivateConnectivity <a name="DatastreamConnectionProfilePrivateConnectivity" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity.Initializer"></a>

```java
import io.cdktn.providers.google.datastream_connection_profile.DatastreamConnectionProfilePrivateConnectivity;

DatastreamConnectionProfilePrivateConnectivity.builder()
    .privateConnection(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity.property.privateConnection">privateConnection</a></code> | <code>java.lang.String</code> | A reference to a private connection resource. Format: 'projects/{project}/locations/{location}/privateConnections/{name}'. |

---

##### `privateConnection`<sup>Required</sup> <a name="privateConnection" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity.property.privateConnection"></a>

```java
public java.lang.String getPrivateConnection();
```

- *Type:* java.lang.String

A reference to a private connection resource. Format: 'projects/{project}/locations/{location}/privateConnections/{name}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#private_connection DatastreamConnectionProfile#private_connection}

---

### DatastreamConnectionProfileSqlServerProfile <a name="DatastreamConnectionProfileSqlServerProfile" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfile.Initializer"></a>

```java
import io.cdktn.providers.google.datastream_connection_profile.DatastreamConnectionProfileSqlServerProfile;

DatastreamConnectionProfileSqlServerProfile.builder()
    .database(java.lang.String)
    .hostname(java.lang.String)
    .username(java.lang.String)
//  .password(java.lang.String)
//  .port(java.lang.Number)
//  .secretManagerStoredPassword(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfile.property.database">database</a></code> | <code>java.lang.String</code> | Database for the SQL Server connection. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfile.property.hostname">hostname</a></code> | <code>java.lang.String</code> | Hostname for the SQL Server connection. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfile.property.username">username</a></code> | <code>java.lang.String</code> | Username for the SQL Server connection. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfile.property.password">password</a></code> | <code>java.lang.String</code> | Password for the SQL Server connection. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfile.property.port">port</a></code> | <code>java.lang.Number</code> | Port for the SQL Server connection. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfile.property.secretManagerStoredPassword">secretManagerStoredPassword</a></code> | <code>java.lang.String</code> | A reference to a Secret Manager resource name storing the user's password. |

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfile.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

Database for the SQL Server connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#database DatastreamConnectionProfile#database}

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfile.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

Hostname for the SQL Server connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#hostname DatastreamConnectionProfile#hostname}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfile.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Username for the SQL Server connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#username DatastreamConnectionProfile#username}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfile.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Password for the SQL Server connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#password DatastreamConnectionProfile#password}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfile.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Port for the SQL Server connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#port DatastreamConnectionProfile#port}

---

##### `secretManagerStoredPassword`<sup>Optional</sup> <a name="secretManagerStoredPassword" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfile.property.secretManagerStoredPassword"></a>

```java
public java.lang.String getSecretManagerStoredPassword();
```

- *Type:* java.lang.String

A reference to a Secret Manager resource name storing the user's password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#secret_manager_stored_password DatastreamConnectionProfile#secret_manager_stored_password}

---

### DatastreamConnectionProfileTimeouts <a name="DatastreamConnectionProfileTimeouts" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.datastream_connection_profile.DatastreamConnectionProfileTimeouts;

DatastreamConnectionProfileTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#create DatastreamConnectionProfile#create}. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#delete DatastreamConnectionProfile#delete}. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#update DatastreamConnectionProfile#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#create DatastreamConnectionProfile#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#delete DatastreamConnectionProfile#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/datastream_connection_profile#update DatastreamConnectionProfile#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatastreamConnectionProfileBigqueryProfileOutputReference <a name="DatastreamConnectionProfileBigqueryProfileOutputReference" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.datastream_connection_profile.DatastreamConnectionProfileBigqueryProfileOutputReference;

new DatastreamConnectionProfileBigqueryProfileOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfile">DatastreamConnectionProfileBigqueryProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfileOutputReference.property.internalValue"></a>

```java
public DatastreamConnectionProfileBigqueryProfile getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileBigqueryProfile">DatastreamConnectionProfileBigqueryProfile</a>

---


### DatastreamConnectionProfileForwardSshConnectivityOutputReference <a name="DatastreamConnectionProfileForwardSshConnectivityOutputReference" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.datastream_connection_profile.DatastreamConnectionProfileForwardSshConnectivityOutputReference;

new DatastreamConnectionProfileForwardSshConnectivityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.resetPrivateKey">resetPrivateKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPassword` <a name="resetPassword" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetPrivateKey` <a name="resetPrivateKey" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.resetPrivateKey"></a>

```java
public void resetPrivateKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.privateKeyInput">privateKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity">DatastreamConnectionProfileForwardSshConnectivity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.privateKeyInput"></a>

```java
public java.lang.String getPrivateKeyInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivityOutputReference.property.internalValue"></a>

```java
public DatastreamConnectionProfileForwardSshConnectivity getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileForwardSshConnectivity">DatastreamConnectionProfileForwardSshConnectivity</a>

---


### DatastreamConnectionProfileGcsProfileOutputReference <a name="DatastreamConnectionProfileGcsProfileOutputReference" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.datastream_connection_profile.DatastreamConnectionProfileGcsProfileOutputReference;

new DatastreamConnectionProfileGcsProfileOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.resetRootPath">resetRootPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRootPath` <a name="resetRootPath" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.resetRootPath"></a>

```java
public void resetRootPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.rootPathInput">rootPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.rootPath">rootPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile">DatastreamConnectionProfileGcsProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `rootPathInput`<sup>Optional</sup> <a name="rootPathInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.rootPathInput"></a>

```java
public java.lang.String getRootPathInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `rootPath`<sup>Required</sup> <a name="rootPath" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.rootPath"></a>

```java
public java.lang.String getRootPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfileOutputReference.property.internalValue"></a>

```java
public DatastreamConnectionProfileGcsProfile getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileGcsProfile">DatastreamConnectionProfileGcsProfile</a>

---


### DatastreamConnectionProfileMongodbProfileHostAddressesList <a name="DatastreamConnectionProfileMongodbProfileHostAddressesList" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.Initializer"></a>

```java
import io.cdktn.providers.google.datastream_connection_profile.DatastreamConnectionProfileMongodbProfileHostAddressesList;

new DatastreamConnectionProfileMongodbProfileHostAddressesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.get"></a>

```java
public DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddresses">DatastreamConnectionProfileMongodbProfileHostAddresses</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DatastreamConnectionProfileMongodbProfileHostAddresses> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddresses">DatastreamConnectionProfileMongodbProfileHostAddresses</a>>

---


### DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference <a name="DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.datastream_connection_profile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference;

new DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.resetPort"></a>

```java
public void resetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddresses">DatastreamConnectionProfileMongodbProfileHostAddresses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesOutputReference.property.internalValue"></a>

```java
public IResolvable|DatastreamConnectionProfileMongodbProfileHostAddresses getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddresses">DatastreamConnectionProfileMongodbProfileHostAddresses</a>

---


### DatastreamConnectionProfileMongodbProfileOutputReference <a name="DatastreamConnectionProfileMongodbProfileOutputReference" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.datastream_connection_profile.DatastreamConnectionProfileMongodbProfileOutputReference;

new DatastreamConnectionProfileMongodbProfileOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.putHostAddresses">putHostAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.putSrvConnectionFormat">putSrvConnectionFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.putSslConfig">putSslConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.putStandardConnectionFormat">putStandardConnectionFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.resetReplicaSet">resetReplicaSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.resetSecretManagerStoredPassword">resetSecretManagerStoredPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.resetSrvConnectionFormat">resetSrvConnectionFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.resetSslConfig">resetSslConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.resetStandardConnectionFormat">resetStandardConnectionFormat</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHostAddresses` <a name="putHostAddresses" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.putHostAddresses"></a>

```java
public void putHostAddresses(IResolvable|java.util.List<DatastreamConnectionProfileMongodbProfileHostAddresses> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.putHostAddresses.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddresses">DatastreamConnectionProfileMongodbProfileHostAddresses</a>>

---

##### `putSrvConnectionFormat` <a name="putSrvConnectionFormat" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.putSrvConnectionFormat"></a>

```java
public void putSrvConnectionFormat(DatastreamConnectionProfileMongodbProfileSrvConnectionFormat value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.putSrvConnectionFormat.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormat">DatastreamConnectionProfileMongodbProfileSrvConnectionFormat</a>

---

##### `putSslConfig` <a name="putSslConfig" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.putSslConfig"></a>

```java
public void putSslConfig(DatastreamConnectionProfileMongodbProfileSslConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.putSslConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfig">DatastreamConnectionProfileMongodbProfileSslConfig</a>

---

##### `putStandardConnectionFormat` <a name="putStandardConnectionFormat" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.putStandardConnectionFormat"></a>

```java
public void putStandardConnectionFormat(DatastreamConnectionProfileMongodbProfileStandardConnectionFormat value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.putStandardConnectionFormat.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormat">DatastreamConnectionProfileMongodbProfileStandardConnectionFormat</a>

---

##### `resetPassword` <a name="resetPassword" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetReplicaSet` <a name="resetReplicaSet" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.resetReplicaSet"></a>

```java
public void resetReplicaSet()
```

##### `resetSecretManagerStoredPassword` <a name="resetSecretManagerStoredPassword" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.resetSecretManagerStoredPassword"></a>

```java
public void resetSecretManagerStoredPassword()
```

##### `resetSrvConnectionFormat` <a name="resetSrvConnectionFormat" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.resetSrvConnectionFormat"></a>

```java
public void resetSrvConnectionFormat()
```

##### `resetSslConfig` <a name="resetSslConfig" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.resetSslConfig"></a>

```java
public void resetSslConfig()
```

##### `resetStandardConnectionFormat` <a name="resetStandardConnectionFormat" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.resetStandardConnectionFormat"></a>

```java
public void resetStandardConnectionFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.hostAddresses">hostAddresses</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList">DatastreamConnectionProfileMongodbProfileHostAddressesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.srvConnectionFormat">srvConnectionFormat</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference">DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.sslConfig">sslConfig</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference">DatastreamConnectionProfileMongodbProfileSslConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.standardConnectionFormat">standardConnectionFormat</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference">DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.hostAddressesInput">hostAddressesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddresses">DatastreamConnectionProfileMongodbProfileHostAddresses</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.replicaSetInput">replicaSetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.secretManagerStoredPasswordInput">secretManagerStoredPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.srvConnectionFormatInput">srvConnectionFormatInput</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormat">DatastreamConnectionProfileMongodbProfileSrvConnectionFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.sslConfigInput">sslConfigInput</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfig">DatastreamConnectionProfileMongodbProfileSslConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.standardConnectionFormatInput">standardConnectionFormatInput</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormat">DatastreamConnectionProfileMongodbProfileStandardConnectionFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.replicaSet">replicaSet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.secretManagerStoredPassword">secretManagerStoredPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile">DatastreamConnectionProfileMongodbProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostAddresses`<sup>Required</sup> <a name="hostAddresses" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.hostAddresses"></a>

```java
public DatastreamConnectionProfileMongodbProfileHostAddressesList getHostAddresses();
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddressesList">DatastreamConnectionProfileMongodbProfileHostAddressesList</a>

---

##### `srvConnectionFormat`<sup>Required</sup> <a name="srvConnectionFormat" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.srvConnectionFormat"></a>

```java
public DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference getSrvConnectionFormat();
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference">DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference</a>

---

##### `sslConfig`<sup>Required</sup> <a name="sslConfig" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.sslConfig"></a>

```java
public DatastreamConnectionProfileMongodbProfileSslConfigOutputReference getSslConfig();
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference">DatastreamConnectionProfileMongodbProfileSslConfigOutputReference</a>

---

##### `standardConnectionFormat`<sup>Required</sup> <a name="standardConnectionFormat" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.standardConnectionFormat"></a>

```java
public DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference getStandardConnectionFormat();
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference">DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference</a>

---

##### `hostAddressesInput`<sup>Optional</sup> <a name="hostAddressesInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.hostAddressesInput"></a>

```java
public IResolvable|java.util.List<DatastreamConnectionProfileMongodbProfileHostAddresses> getHostAddressesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileHostAddresses">DatastreamConnectionProfileMongodbProfileHostAddresses</a>>

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `replicaSetInput`<sup>Optional</sup> <a name="replicaSetInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.replicaSetInput"></a>

```java
public java.lang.String getReplicaSetInput();
```

- *Type:* java.lang.String

---

##### `secretManagerStoredPasswordInput`<sup>Optional</sup> <a name="secretManagerStoredPasswordInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.secretManagerStoredPasswordInput"></a>

```java
public java.lang.String getSecretManagerStoredPasswordInput();
```

- *Type:* java.lang.String

---

##### `srvConnectionFormatInput`<sup>Optional</sup> <a name="srvConnectionFormatInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.srvConnectionFormatInput"></a>

```java
public DatastreamConnectionProfileMongodbProfileSrvConnectionFormat getSrvConnectionFormatInput();
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormat">DatastreamConnectionProfileMongodbProfileSrvConnectionFormat</a>

---

##### `sslConfigInput`<sup>Optional</sup> <a name="sslConfigInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.sslConfigInput"></a>

```java
public DatastreamConnectionProfileMongodbProfileSslConfig getSslConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfig">DatastreamConnectionProfileMongodbProfileSslConfig</a>

---

##### `standardConnectionFormatInput`<sup>Optional</sup> <a name="standardConnectionFormatInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.standardConnectionFormatInput"></a>

```java
public DatastreamConnectionProfileMongodbProfileStandardConnectionFormat getStandardConnectionFormatInput();
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormat">DatastreamConnectionProfileMongodbProfileStandardConnectionFormat</a>

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `replicaSet`<sup>Required</sup> <a name="replicaSet" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.replicaSet"></a>

```java
public java.lang.String getReplicaSet();
```

- *Type:* java.lang.String

---

##### `secretManagerStoredPassword`<sup>Required</sup> <a name="secretManagerStoredPassword" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.secretManagerStoredPassword"></a>

```java
public java.lang.String getSecretManagerStoredPassword();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileOutputReference.property.internalValue"></a>

```java
public DatastreamConnectionProfileMongodbProfile getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfile">DatastreamConnectionProfileMongodbProfile</a>

---


### DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference <a name="DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.datastream_connection_profile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference;

new DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormat">DatastreamConnectionProfileMongodbProfileSrvConnectionFormat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormatOutputReference.property.internalValue"></a>

```java
public DatastreamConnectionProfileMongodbProfileSrvConnectionFormat getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSrvConnectionFormat">DatastreamConnectionProfileMongodbProfileSrvConnectionFormat</a>

---


### DatastreamConnectionProfileMongodbProfileSslConfigOutputReference <a name="DatastreamConnectionProfileMongodbProfileSslConfigOutputReference" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.datastream_connection_profile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference;

new DatastreamConnectionProfileMongodbProfileSslConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.resetCaCertificate">resetCaCertificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.resetClientCertificate">resetClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.resetClientKey">resetClientKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.resetSecretManagerStoredClientKey">resetSecretManagerStoredClientKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCaCertificate` <a name="resetCaCertificate" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.resetCaCertificate"></a>

```java
public void resetCaCertificate()
```

##### `resetClientCertificate` <a name="resetClientCertificate" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.resetClientCertificate"></a>

```java
public void resetClientCertificate()
```

##### `resetClientKey` <a name="resetClientKey" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.resetClientKey"></a>

```java
public void resetClientKey()
```

##### `resetSecretManagerStoredClientKey` <a name="resetSecretManagerStoredClientKey" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.resetSecretManagerStoredClientKey"></a>

```java
public void resetSecretManagerStoredClientKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.caCertificateSet">caCertificateSet</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.clientCertificateSet">clientCertificateSet</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.clientKeySet">clientKeySet</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.caCertificateInput">caCertificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.clientCertificateInput">clientCertificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.clientKeyInput">clientKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.secretManagerStoredClientKeyInput">secretManagerStoredClientKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.caCertificate">caCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.clientCertificate">clientCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.clientKey">clientKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.secretManagerStoredClientKey">secretManagerStoredClientKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfig">DatastreamConnectionProfileMongodbProfileSslConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `caCertificateSet`<sup>Required</sup> <a name="caCertificateSet" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.caCertificateSet"></a>

```java
public IResolvable getCaCertificateSet();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `clientCertificateSet`<sup>Required</sup> <a name="clientCertificateSet" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.clientCertificateSet"></a>

```java
public IResolvable getClientCertificateSet();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `clientKeySet`<sup>Required</sup> <a name="clientKeySet" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.clientKeySet"></a>

```java
public IResolvable getClientKeySet();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `caCertificateInput`<sup>Optional</sup> <a name="caCertificateInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.caCertificateInput"></a>

```java
public java.lang.String getCaCertificateInput();
```

- *Type:* java.lang.String

---

##### `clientCertificateInput`<sup>Optional</sup> <a name="clientCertificateInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.clientCertificateInput"></a>

```java
public java.lang.String getClientCertificateInput();
```

- *Type:* java.lang.String

---

##### `clientKeyInput`<sup>Optional</sup> <a name="clientKeyInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.clientKeyInput"></a>

```java
public java.lang.String getClientKeyInput();
```

- *Type:* java.lang.String

---

##### `secretManagerStoredClientKeyInput`<sup>Optional</sup> <a name="secretManagerStoredClientKeyInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.secretManagerStoredClientKeyInput"></a>

```java
public java.lang.String getSecretManagerStoredClientKeyInput();
```

- *Type:* java.lang.String

---

##### `caCertificate`<sup>Required</sup> <a name="caCertificate" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.caCertificate"></a>

```java
public java.lang.String getCaCertificate();
```

- *Type:* java.lang.String

---

##### `clientCertificate`<sup>Required</sup> <a name="clientCertificate" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.clientCertificate"></a>

```java
public java.lang.String getClientCertificate();
```

- *Type:* java.lang.String

---

##### `clientKey`<sup>Required</sup> <a name="clientKey" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.clientKey"></a>

```java
public java.lang.String getClientKey();
```

- *Type:* java.lang.String

---

##### `secretManagerStoredClientKey`<sup>Required</sup> <a name="secretManagerStoredClientKey" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.secretManagerStoredClientKey"></a>

```java
public java.lang.String getSecretManagerStoredClientKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfigOutputReference.property.internalValue"></a>

```java
public DatastreamConnectionProfileMongodbProfileSslConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileSslConfig">DatastreamConnectionProfileMongodbProfileSslConfig</a>

---


### DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference <a name="DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.datastream_connection_profile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference;

new DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.resetDirectConnection">resetDirectConnection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDirectConnection` <a name="resetDirectConnection" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.resetDirectConnection"></a>

```java
public void resetDirectConnection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.property.directConnectionInput">directConnectionInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.property.directConnection">directConnection</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormat">DatastreamConnectionProfileMongodbProfileStandardConnectionFormat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `directConnectionInput`<sup>Optional</sup> <a name="directConnectionInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.property.directConnectionInput"></a>

```java
public java.lang.Boolean|IResolvable getDirectConnectionInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `directConnection`<sup>Required</sup> <a name="directConnection" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.property.directConnection"></a>

```java
public java.lang.Boolean|IResolvable getDirectConnection();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormatOutputReference.property.internalValue"></a>

```java
public DatastreamConnectionProfileMongodbProfileStandardConnectionFormat getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMongodbProfileStandardConnectionFormat">DatastreamConnectionProfileMongodbProfileStandardConnectionFormat</a>

---


### DatastreamConnectionProfileMysqlProfileOutputReference <a name="DatastreamConnectionProfileMysqlProfileOutputReference" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.datastream_connection_profile.DatastreamConnectionProfileMysqlProfileOutputReference;

new DatastreamConnectionProfileMysqlProfileOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.putSslConfig">putSslConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.resetSecretManagerStoredPassword">resetSecretManagerStoredPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.resetSslConfig">resetSslConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSslConfig` <a name="putSslConfig" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.putSslConfig"></a>

```java
public void putSslConfig(DatastreamConnectionProfileMysqlProfileSslConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.putSslConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig">DatastreamConnectionProfileMysqlProfileSslConfig</a>

---

##### `resetPassword` <a name="resetPassword" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetSecretManagerStoredPassword` <a name="resetSecretManagerStoredPassword" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.resetSecretManagerStoredPassword"></a>

```java
public void resetSecretManagerStoredPassword()
```

##### `resetSslConfig` <a name="resetSslConfig" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.resetSslConfig"></a>

```java
public void resetSslConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.sslConfig">sslConfig</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference">DatastreamConnectionProfileMysqlProfileSslConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.secretManagerStoredPasswordInput">secretManagerStoredPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.sslConfigInput">sslConfigInput</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig">DatastreamConnectionProfileMysqlProfileSslConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.secretManagerStoredPassword">secretManagerStoredPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile">DatastreamConnectionProfileMysqlProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sslConfig`<sup>Required</sup> <a name="sslConfig" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.sslConfig"></a>

```java
public DatastreamConnectionProfileMysqlProfileSslConfigOutputReference getSslConfig();
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference">DatastreamConnectionProfileMysqlProfileSslConfigOutputReference</a>

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `secretManagerStoredPasswordInput`<sup>Optional</sup> <a name="secretManagerStoredPasswordInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.secretManagerStoredPasswordInput"></a>

```java
public java.lang.String getSecretManagerStoredPasswordInput();
```

- *Type:* java.lang.String

---

##### `sslConfigInput`<sup>Optional</sup> <a name="sslConfigInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.sslConfigInput"></a>

```java
public DatastreamConnectionProfileMysqlProfileSslConfig getSslConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig">DatastreamConnectionProfileMysqlProfileSslConfig</a>

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `secretManagerStoredPassword`<sup>Required</sup> <a name="secretManagerStoredPassword" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.secretManagerStoredPassword"></a>

```java
public java.lang.String getSecretManagerStoredPassword();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileOutputReference.property.internalValue"></a>

```java
public DatastreamConnectionProfileMysqlProfile getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfile">DatastreamConnectionProfileMysqlProfile</a>

---


### DatastreamConnectionProfileMysqlProfileSslConfigOutputReference <a name="DatastreamConnectionProfileMysqlProfileSslConfigOutputReference" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.datastream_connection_profile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference;

new DatastreamConnectionProfileMysqlProfileSslConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resetCaCertificate">resetCaCertificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resetClientCertificate">resetClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resetClientKey">resetClientKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCaCertificate` <a name="resetCaCertificate" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resetCaCertificate"></a>

```java
public void resetCaCertificate()
```

##### `resetClientCertificate` <a name="resetClientCertificate" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resetClientCertificate"></a>

```java
public void resetClientCertificate()
```

##### `resetClientKey` <a name="resetClientKey" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.resetClientKey"></a>

```java
public void resetClientKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.caCertificateSet">caCertificateSet</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientCertificateSet">clientCertificateSet</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientKeySet">clientKeySet</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.caCertificateInput">caCertificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientCertificateInput">clientCertificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientKeyInput">clientKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.caCertificate">caCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientCertificate">clientCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientKey">clientKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig">DatastreamConnectionProfileMysqlProfileSslConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `caCertificateSet`<sup>Required</sup> <a name="caCertificateSet" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.caCertificateSet"></a>

```java
public IResolvable getCaCertificateSet();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `clientCertificateSet`<sup>Required</sup> <a name="clientCertificateSet" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientCertificateSet"></a>

```java
public IResolvable getClientCertificateSet();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `clientKeySet`<sup>Required</sup> <a name="clientKeySet" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientKeySet"></a>

```java
public IResolvable getClientKeySet();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `caCertificateInput`<sup>Optional</sup> <a name="caCertificateInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.caCertificateInput"></a>

```java
public java.lang.String getCaCertificateInput();
```

- *Type:* java.lang.String

---

##### `clientCertificateInput`<sup>Optional</sup> <a name="clientCertificateInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientCertificateInput"></a>

```java
public java.lang.String getClientCertificateInput();
```

- *Type:* java.lang.String

---

##### `clientKeyInput`<sup>Optional</sup> <a name="clientKeyInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientKeyInput"></a>

```java
public java.lang.String getClientKeyInput();
```

- *Type:* java.lang.String

---

##### `caCertificate`<sup>Required</sup> <a name="caCertificate" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.caCertificate"></a>

```java
public java.lang.String getCaCertificate();
```

- *Type:* java.lang.String

---

##### `clientCertificate`<sup>Required</sup> <a name="clientCertificate" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientCertificate"></a>

```java
public java.lang.String getClientCertificate();
```

- *Type:* java.lang.String

---

##### `clientKey`<sup>Required</sup> <a name="clientKey" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.clientKey"></a>

```java
public java.lang.String getClientKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfigOutputReference.property.internalValue"></a>

```java
public DatastreamConnectionProfileMysqlProfileSslConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileMysqlProfileSslConfig">DatastreamConnectionProfileMysqlProfileSslConfig</a>

---


### DatastreamConnectionProfileOracleProfileOutputReference <a name="DatastreamConnectionProfileOracleProfileOutputReference" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.datastream_connection_profile.DatastreamConnectionProfileOracleProfileOutputReference;

new DatastreamConnectionProfileOracleProfileOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.resetConnectionAttributes">resetConnectionAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.resetSecretManagerStoredPassword">resetSecretManagerStoredPassword</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectionAttributes` <a name="resetConnectionAttributes" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.resetConnectionAttributes"></a>

```java
public void resetConnectionAttributes()
```

##### `resetPassword` <a name="resetPassword" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetSecretManagerStoredPassword` <a name="resetSecretManagerStoredPassword" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.resetSecretManagerStoredPassword"></a>

```java
public void resetSecretManagerStoredPassword()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.connectionAttributesInput">connectionAttributesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.databaseServiceInput">databaseServiceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.secretManagerStoredPasswordInput">secretManagerStoredPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.connectionAttributes">connectionAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.databaseService">databaseService</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.secretManagerStoredPassword">secretManagerStoredPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile">DatastreamConnectionProfileOracleProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectionAttributesInput`<sup>Optional</sup> <a name="connectionAttributesInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.connectionAttributesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConnectionAttributesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `databaseServiceInput`<sup>Optional</sup> <a name="databaseServiceInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.databaseServiceInput"></a>

```java
public java.lang.String getDatabaseServiceInput();
```

- *Type:* java.lang.String

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `secretManagerStoredPasswordInput`<sup>Optional</sup> <a name="secretManagerStoredPasswordInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.secretManagerStoredPasswordInput"></a>

```java
public java.lang.String getSecretManagerStoredPasswordInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `connectionAttributes`<sup>Required</sup> <a name="connectionAttributes" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.connectionAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConnectionAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `databaseService`<sup>Required</sup> <a name="databaseService" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.databaseService"></a>

```java
public java.lang.String getDatabaseService();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `secretManagerStoredPassword`<sup>Required</sup> <a name="secretManagerStoredPassword" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.secretManagerStoredPassword"></a>

```java
public java.lang.String getSecretManagerStoredPassword();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfileOutputReference.property.internalValue"></a>

```java
public DatastreamConnectionProfileOracleProfile getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileOracleProfile">DatastreamConnectionProfileOracleProfile</a>

---


### DatastreamConnectionProfilePostgresqlProfileOutputReference <a name="DatastreamConnectionProfilePostgresqlProfileOutputReference" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.datastream_connection_profile.DatastreamConnectionProfilePostgresqlProfileOutputReference;

new DatastreamConnectionProfilePostgresqlProfileOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.putSslConfig">putSslConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.resetSecretManagerStoredPassword">resetSecretManagerStoredPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.resetSslConfig">resetSslConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSslConfig` <a name="putSslConfig" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.putSslConfig"></a>

```java
public void putSslConfig(DatastreamConnectionProfilePostgresqlProfileSslConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.putSslConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfig">DatastreamConnectionProfilePostgresqlProfileSslConfig</a>

---

##### `resetPassword` <a name="resetPassword" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetSecretManagerStoredPassword` <a name="resetSecretManagerStoredPassword" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.resetSecretManagerStoredPassword"></a>

```java
public void resetSecretManagerStoredPassword()
```

##### `resetSslConfig` <a name="resetSslConfig" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.resetSslConfig"></a>

```java
public void resetSslConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.sslConfig">sslConfig</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference">DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.secretManagerStoredPasswordInput">secretManagerStoredPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.sslConfigInput">sslConfigInput</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfig">DatastreamConnectionProfilePostgresqlProfileSslConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.secretManagerStoredPassword">secretManagerStoredPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile">DatastreamConnectionProfilePostgresqlProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sslConfig`<sup>Required</sup> <a name="sslConfig" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.sslConfig"></a>

```java
public DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference getSslConfig();
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference">DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference</a>

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `secretManagerStoredPasswordInput`<sup>Optional</sup> <a name="secretManagerStoredPasswordInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.secretManagerStoredPasswordInput"></a>

```java
public java.lang.String getSecretManagerStoredPasswordInput();
```

- *Type:* java.lang.String

---

##### `sslConfigInput`<sup>Optional</sup> <a name="sslConfigInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.sslConfigInput"></a>

```java
public DatastreamConnectionProfilePostgresqlProfileSslConfig getSslConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfig">DatastreamConnectionProfilePostgresqlProfileSslConfig</a>

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `secretManagerStoredPassword`<sup>Required</sup> <a name="secretManagerStoredPassword" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.secretManagerStoredPassword"></a>

```java
public java.lang.String getSecretManagerStoredPassword();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileOutputReference.property.internalValue"></a>

```java
public DatastreamConnectionProfilePostgresqlProfile getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfile">DatastreamConnectionProfilePostgresqlProfile</a>

---


### DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference <a name="DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.datastream_connection_profile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference;

new DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.putServerAndClientVerification">putServerAndClientVerification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.putServerVerification">putServerVerification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.resetServerAndClientVerification">resetServerAndClientVerification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.resetServerVerification">resetServerVerification</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putServerAndClientVerification` <a name="putServerAndClientVerification" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.putServerAndClientVerification"></a>

```java
public void putServerAndClientVerification(DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.putServerAndClientVerification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification">DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification</a>

---

##### `putServerVerification` <a name="putServerVerification" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.putServerVerification"></a>

```java
public void putServerVerification(DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.putServerVerification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification">DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification</a>

---

##### `resetServerAndClientVerification` <a name="resetServerAndClientVerification" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.resetServerAndClientVerification"></a>

```java
public void resetServerAndClientVerification()
```

##### `resetServerVerification` <a name="resetServerVerification" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.resetServerVerification"></a>

```java
public void resetServerVerification()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.property.serverAndClientVerification">serverAndClientVerification</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference">DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.property.serverVerification">serverVerification</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference">DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.property.serverAndClientVerificationInput">serverAndClientVerificationInput</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification">DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.property.serverVerificationInput">serverVerificationInput</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification">DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfig">DatastreamConnectionProfilePostgresqlProfileSslConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `serverAndClientVerification`<sup>Required</sup> <a name="serverAndClientVerification" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.property.serverAndClientVerification"></a>

```java
public DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference getServerAndClientVerification();
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference">DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference</a>

---

##### `serverVerification`<sup>Required</sup> <a name="serverVerification" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.property.serverVerification"></a>

```java
public DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference getServerVerification();
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference">DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference</a>

---

##### `serverAndClientVerificationInput`<sup>Optional</sup> <a name="serverAndClientVerificationInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.property.serverAndClientVerificationInput"></a>

```java
public DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification getServerAndClientVerificationInput();
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification">DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification</a>

---

##### `serverVerificationInput`<sup>Optional</sup> <a name="serverVerificationInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.property.serverVerificationInput"></a>

```java
public DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification getServerVerificationInput();
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification">DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigOutputReference.property.internalValue"></a>

```java
public DatastreamConnectionProfilePostgresqlProfileSslConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfig">DatastreamConnectionProfilePostgresqlProfileSslConfig</a>

---


### DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference <a name="DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.datastream_connection_profile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference;

new DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.caCertificateInput">caCertificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.clientCertificateInput">clientCertificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.clientKeyInput">clientKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.caCertificate">caCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.clientCertificate">clientCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.clientKey">clientKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification">DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `caCertificateInput`<sup>Optional</sup> <a name="caCertificateInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.caCertificateInput"></a>

```java
public java.lang.String getCaCertificateInput();
```

- *Type:* java.lang.String

---

##### `clientCertificateInput`<sup>Optional</sup> <a name="clientCertificateInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.clientCertificateInput"></a>

```java
public java.lang.String getClientCertificateInput();
```

- *Type:* java.lang.String

---

##### `clientKeyInput`<sup>Optional</sup> <a name="clientKeyInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.clientKeyInput"></a>

```java
public java.lang.String getClientKeyInput();
```

- *Type:* java.lang.String

---

##### `caCertificate`<sup>Required</sup> <a name="caCertificate" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.caCertificate"></a>

```java
public java.lang.String getCaCertificate();
```

- *Type:* java.lang.String

---

##### `clientCertificate`<sup>Required</sup> <a name="clientCertificate" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.clientCertificate"></a>

```java
public java.lang.String getClientCertificate();
```

- *Type:* java.lang.String

---

##### `clientKey`<sup>Required</sup> <a name="clientKey" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.clientKey"></a>

```java
public java.lang.String getClientKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerificationOutputReference.property.internalValue"></a>

```java
public DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification">DatastreamConnectionProfilePostgresqlProfileSslConfigServerAndClientVerification</a>

---


### DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference <a name="DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.datastream_connection_profile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference;

new DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.property.caCertificateInput">caCertificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.property.caCertificate">caCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification">DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `caCertificateInput`<sup>Optional</sup> <a name="caCertificateInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.property.caCertificateInput"></a>

```java
public java.lang.String getCaCertificateInput();
```

- *Type:* java.lang.String

---

##### `caCertificate`<sup>Required</sup> <a name="caCertificate" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.property.caCertificate"></a>

```java
public java.lang.String getCaCertificate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerificationOutputReference.property.internalValue"></a>

```java
public DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification">DatastreamConnectionProfilePostgresqlProfileSslConfigServerVerification</a>

---


### DatastreamConnectionProfilePrivateConnectivityOutputReference <a name="DatastreamConnectionProfilePrivateConnectivityOutputReference" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.datastream_connection_profile.DatastreamConnectionProfilePrivateConnectivityOutputReference;

new DatastreamConnectionProfilePrivateConnectivityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.property.privateConnectionInput">privateConnectionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.property.privateConnection">privateConnection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity">DatastreamConnectionProfilePrivateConnectivity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `privateConnectionInput`<sup>Optional</sup> <a name="privateConnectionInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.property.privateConnectionInput"></a>

```java
public java.lang.String getPrivateConnectionInput();
```

- *Type:* java.lang.String

---

##### `privateConnection`<sup>Required</sup> <a name="privateConnection" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.property.privateConnection"></a>

```java
public java.lang.String getPrivateConnection();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivityOutputReference.property.internalValue"></a>

```java
public DatastreamConnectionProfilePrivateConnectivity getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfilePrivateConnectivity">DatastreamConnectionProfilePrivateConnectivity</a>

---


### DatastreamConnectionProfileSqlServerProfileOutputReference <a name="DatastreamConnectionProfileSqlServerProfileOutputReference" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.datastream_connection_profile.DatastreamConnectionProfileSqlServerProfileOutputReference;

new DatastreamConnectionProfileSqlServerProfileOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.resetSecretManagerStoredPassword">resetSecretManagerStoredPassword</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPassword` <a name="resetPassword" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetSecretManagerStoredPassword` <a name="resetSecretManagerStoredPassword" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.resetSecretManagerStoredPassword"></a>

```java
public void resetSecretManagerStoredPassword()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.secretManagerStoredPasswordInput">secretManagerStoredPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.secretManagerStoredPassword">secretManagerStoredPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfile">DatastreamConnectionProfileSqlServerProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `secretManagerStoredPasswordInput`<sup>Optional</sup> <a name="secretManagerStoredPasswordInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.secretManagerStoredPasswordInput"></a>

```java
public java.lang.String getSecretManagerStoredPasswordInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `secretManagerStoredPassword`<sup>Required</sup> <a name="secretManagerStoredPassword" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.secretManagerStoredPassword"></a>

```java
public java.lang.String getSecretManagerStoredPassword();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfileOutputReference.property.internalValue"></a>

```java
public DatastreamConnectionProfileSqlServerProfile getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileSqlServerProfile">DatastreamConnectionProfileSqlServerProfile</a>

---


### DatastreamConnectionProfileTimeoutsOutputReference <a name="DatastreamConnectionProfileTimeoutsOutputReference" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.datastream_connection_profile.DatastreamConnectionProfileTimeoutsOutputReference;

new DatastreamConnectionProfileTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts">DatastreamConnectionProfileTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DatastreamConnectionProfileTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.datastreamConnectionProfile.DatastreamConnectionProfileTimeouts">DatastreamConnectionProfileTimeouts</a>

---



