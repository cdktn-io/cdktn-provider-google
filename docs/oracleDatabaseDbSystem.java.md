# `oracleDatabaseDbSystem` Submodule <a name="`oracleDatabaseDbSystem` Submodule" id="@cdktn/provider-google.oracleDatabaseDbSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OracleDatabaseDbSystem <a name="OracleDatabaseDbSystem" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system google_oracle_database_db_system}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_db_system.OracleDatabaseDbSystem;

OracleDatabaseDbSystem.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dbSystemId(java.lang.String)
    .displayName(java.lang.String)
    .location(java.lang.String)
    .odbSubnet(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .deletionProtection(java.lang.Boolean|IResolvable)
//  .gcpOracleZone(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .odbNetwork(java.lang.String)
//  .project(java.lang.String)
//  .properties(OracleDatabaseDbSystemProperties)
//  .timeouts(OracleDatabaseDbSystemTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.Initializer.parameter.dbSystemId">dbSystemId</a></code> | <code>java.lang.String</code> | The ID of the DbSystem to create. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name for the System db. The name does not have to be unique within your project. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.Initializer.parameter.odbSubnet">odbSubnet</a></code> | <code>java.lang.String</code> | The name of the OdbSubnet associated with the DbSystem for IP allocation. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.Initializer.parameter.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether or not to allow Terraform to destroy the instance. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.Initializer.parameter.gcpOracleZone">gcpOracleZone</a></code> | <code>java.lang.String</code> | The GCP Oracle zone where Oracle DbSystem is hosted. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#id OracleDatabaseDbSystem#id}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels or tags associated with the DbSystem. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.Initializer.parameter.odbNetwork">odbNetwork</a></code> | <code>java.lang.String</code> | The name of the OdbNetwork associated with the DbSystem. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#project OracleDatabaseDbSystem#project}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.Initializer.parameter.properties">properties</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties">OracleDatabaseDbSystemProperties</a></code> | properties block. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeouts">OracleDatabaseDbSystemTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dbSystemId`<sup>Required</sup> <a name="dbSystemId" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.Initializer.parameter.dbSystemId"></a>

- *Type:* java.lang.String

The ID of the DbSystem to create.

This value is
restricted to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of
63 characters in length. The value must start with a letter and end with a
letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#db_system_id OracleDatabaseDbSystem#db_system_id}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The display name for the System db. The name does not have to be unique within your project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#display_name OracleDatabaseDbSystem#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#location OracleDatabaseDbSystem#location}

---

##### `odbSubnet`<sup>Required</sup> <a name="odbSubnet" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.Initializer.parameter.odbSubnet"></a>

- *Type:* java.lang.String

The name of the OdbSubnet associated with the DbSystem for IP allocation. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#odb_subnet OracleDatabaseDbSystem#odb_subnet}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#deletion_policy OracleDatabaseDbSystem#deletion_policy}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.Initializer.parameter.deletionProtection"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#deletion_protection OracleDatabaseDbSystem#deletion_protection}

---

##### `gcpOracleZone`<sup>Optional</sup> <a name="gcpOracleZone" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.Initializer.parameter.gcpOracleZone"></a>

- *Type:* java.lang.String

The GCP Oracle zone where Oracle DbSystem is hosted.

Example: us-east4-b-r2.
If not specified, the system will pick a zone based on availability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#gcp_oracle_zone OracleDatabaseDbSystem#gcp_oracle_zone}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#id OracleDatabaseDbSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels or tags associated with the DbSystem.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#labels OracleDatabaseDbSystem#labels}

---

##### `odbNetwork`<sup>Optional</sup> <a name="odbNetwork" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.Initializer.parameter.odbNetwork"></a>

- *Type:* java.lang.String

The name of the OdbNetwork associated with the DbSystem.

Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}
It is optional but if specified, this should match the parent ODBNetwork of
the OdbSubnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#odb_network OracleDatabaseDbSystem#odb_network}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#project OracleDatabaseDbSystem#project}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.Initializer.parameter.properties"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties">OracleDatabaseDbSystemProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#properties OracleDatabaseDbSystem#properties}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeouts">OracleDatabaseDbSystemTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#timeouts OracleDatabaseDbSystem#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.putProperties">putProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.resetGcpOracleZone">resetGcpOracleZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.resetOdbNetwork">resetOdbNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProperties` <a name="putProperties" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.putProperties"></a>

```java
public void putProperties(OracleDatabaseDbSystemProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties">OracleDatabaseDbSystemProperties</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.putTimeouts"></a>

```java
public void putTimeouts(OracleDatabaseDbSystemTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeouts">OracleDatabaseDbSystemTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.resetDeletionProtection"></a>

```java
public void resetDeletionProtection()
```

##### `resetGcpOracleZone` <a name="resetGcpOracleZone" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.resetGcpOracleZone"></a>

```java
public void resetGcpOracleZone()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetOdbNetwork` <a name="resetOdbNetwork" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.resetOdbNetwork"></a>

```java
public void resetOdbNetwork()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.resetProject"></a>

```java
public void resetProject()
```

##### `resetProperties` <a name="resetProperties" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.resetProperties"></a>

```java
public void resetProperties()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OracleDatabaseDbSystem resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.isConstruct"></a>

```java
import io.cdktn.providers.google.oracle_database_db_system.OracleDatabaseDbSystem;

OracleDatabaseDbSystem.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.isTerraformElement"></a>

```java
import io.cdktn.providers.google.oracle_database_db_system.OracleDatabaseDbSystem;

OracleDatabaseDbSystem.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.isTerraformResource"></a>

```java
import io.cdktn.providers.google.oracle_database_db_system.OracleDatabaseDbSystem;

OracleDatabaseDbSystem.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.oracle_database_db_system.OracleDatabaseDbSystem;

OracleDatabaseDbSystem.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OracleDatabaseDbSystem.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a OracleDatabaseDbSystem resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OracleDatabaseDbSystem to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OracleDatabaseDbSystem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the OracleDatabaseDbSystem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.entitlementId">entitlementId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.ociUrl">ociUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference">OracleDatabaseDbSystemPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference">OracleDatabaseDbSystemTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.dbSystemIdInput">dbSystemIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.gcpOracleZoneInput">gcpOracleZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.odbNetworkInput">odbNetworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.odbSubnetInput">odbSubnetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.propertiesInput">propertiesInput</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties">OracleDatabaseDbSystemProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeouts">OracleDatabaseDbSystemTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.dbSystemId">dbSystemId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.gcpOracleZone">gcpOracleZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.odbNetwork">odbNetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.odbSubnet">odbSubnet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `entitlementId`<sup>Required</sup> <a name="entitlementId" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.entitlementId"></a>

```java
public java.lang.String getEntitlementId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `ociUrl`<sup>Required</sup> <a name="ociUrl" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.ociUrl"></a>

```java
public java.lang.String getOciUrl();
```

- *Type:* java.lang.String

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.properties"></a>

```java
public OracleDatabaseDbSystemPropertiesOutputReference getProperties();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference">OracleDatabaseDbSystemPropertiesOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.timeouts"></a>

```java
public OracleDatabaseDbSystemTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference">OracleDatabaseDbSystemTimeoutsOutputReference</a>

---

##### `dbSystemIdInput`<sup>Optional</sup> <a name="dbSystemIdInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.dbSystemIdInput"></a>

```java
public java.lang.String getDbSystemIdInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.deletionProtectionInput"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtectionInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `gcpOracleZoneInput`<sup>Optional</sup> <a name="gcpOracleZoneInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.gcpOracleZoneInput"></a>

```java
public java.lang.String getGcpOracleZoneInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `odbNetworkInput`<sup>Optional</sup> <a name="odbNetworkInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.odbNetworkInput"></a>

```java
public java.lang.String getOdbNetworkInput();
```

- *Type:* java.lang.String

---

##### `odbSubnetInput`<sup>Optional</sup> <a name="odbSubnetInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.odbSubnetInput"></a>

```java
public java.lang.String getOdbSubnetInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.propertiesInput"></a>

```java
public OracleDatabaseDbSystemProperties getPropertiesInput();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties">OracleDatabaseDbSystemProperties</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.timeoutsInput"></a>

```java
public IResolvable|OracleDatabaseDbSystemTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeouts">OracleDatabaseDbSystemTimeouts</a>

---

##### `dbSystemId`<sup>Required</sup> <a name="dbSystemId" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.dbSystemId"></a>

```java
public java.lang.String getDbSystemId();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.deletionProtection"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtection();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `gcpOracleZone`<sup>Required</sup> <a name="gcpOracleZone" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.gcpOracleZone"></a>

```java
public java.lang.String getGcpOracleZone();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `odbNetwork`<sup>Required</sup> <a name="odbNetwork" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.odbNetwork"></a>

```java
public java.lang.String getOdbNetwork();
```

- *Type:* java.lang.String

---

##### `odbSubnet`<sup>Required</sup> <a name="odbSubnet" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.odbSubnet"></a>

```java
public java.lang.String getOdbSubnet();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystem.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OracleDatabaseDbSystemConfig <a name="OracleDatabaseDbSystemConfig" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_db_system.OracleDatabaseDbSystemConfig;

OracleDatabaseDbSystemConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dbSystemId(java.lang.String)
    .displayName(java.lang.String)
    .location(java.lang.String)
    .odbSubnet(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .deletionProtection(java.lang.Boolean|IResolvable)
//  .gcpOracleZone(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .odbNetwork(java.lang.String)
//  .project(java.lang.String)
//  .properties(OracleDatabaseDbSystemProperties)
//  .timeouts(OracleDatabaseDbSystemTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.dbSystemId">dbSystemId</a></code> | <code>java.lang.String</code> | The ID of the DbSystem to create. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name for the System db. The name does not have to be unique within your project. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.odbSubnet">odbSubnet</a></code> | <code>java.lang.String</code> | The name of the OdbSubnet associated with the DbSystem for IP allocation. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether or not to allow Terraform to destroy the instance. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.gcpOracleZone">gcpOracleZone</a></code> | <code>java.lang.String</code> | The GCP Oracle zone where Oracle DbSystem is hosted. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#id OracleDatabaseDbSystem#id}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels or tags associated with the DbSystem. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.odbNetwork">odbNetwork</a></code> | <code>java.lang.String</code> | The name of the OdbNetwork associated with the DbSystem. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#project OracleDatabaseDbSystem#project}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties">OracleDatabaseDbSystemProperties</a></code> | properties block. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeouts">OracleDatabaseDbSystemTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dbSystemId`<sup>Required</sup> <a name="dbSystemId" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.dbSystemId"></a>

```java
public java.lang.String getDbSystemId();
```

- *Type:* java.lang.String

The ID of the DbSystem to create.

This value is
restricted to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of
63 characters in length. The value must start with a letter and end with a
letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#db_system_id OracleDatabaseDbSystem#db_system_id}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The display name for the System db. The name does not have to be unique within your project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#display_name OracleDatabaseDbSystem#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#location OracleDatabaseDbSystem#location}

---

##### `odbSubnet`<sup>Required</sup> <a name="odbSubnet" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.odbSubnet"></a>

```java
public java.lang.String getOdbSubnet();
```

- *Type:* java.lang.String

The name of the OdbSubnet associated with the DbSystem for IP allocation. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#odb_subnet OracleDatabaseDbSystem#odb_subnet}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#deletion_policy OracleDatabaseDbSystem#deletion_policy}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.deletionProtection"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtection();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#deletion_protection OracleDatabaseDbSystem#deletion_protection}

---

##### `gcpOracleZone`<sup>Optional</sup> <a name="gcpOracleZone" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.gcpOracleZone"></a>

```java
public java.lang.String getGcpOracleZone();
```

- *Type:* java.lang.String

The GCP Oracle zone where Oracle DbSystem is hosted.

Example: us-east4-b-r2.
If not specified, the system will pick a zone based on availability.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#gcp_oracle_zone OracleDatabaseDbSystem#gcp_oracle_zone}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#id OracleDatabaseDbSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels or tags associated with the DbSystem.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#labels OracleDatabaseDbSystem#labels}

---

##### `odbNetwork`<sup>Optional</sup> <a name="odbNetwork" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.odbNetwork"></a>

```java
public java.lang.String getOdbNetwork();
```

- *Type:* java.lang.String

The name of the OdbNetwork associated with the DbSystem.

Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}
It is optional but if specified, this should match the parent ODBNetwork of
the OdbSubnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#odb_network OracleDatabaseDbSystem#odb_network}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#project OracleDatabaseDbSystem#project}.

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.properties"></a>

```java
public OracleDatabaseDbSystemProperties getProperties();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties">OracleDatabaseDbSystemProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#properties OracleDatabaseDbSystem#properties}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemConfig.property.timeouts"></a>

```java
public OracleDatabaseDbSystemTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeouts">OracleDatabaseDbSystemTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#timeouts OracleDatabaseDbSystem#timeouts}

---

### OracleDatabaseDbSystemProperties <a name="OracleDatabaseDbSystemProperties" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_db_system.OracleDatabaseDbSystemProperties;

OracleDatabaseDbSystemProperties.builder()
    .computeCount(java.lang.Number)
    .databaseEdition(java.lang.String)
    .initialDataStorageSizeGb(java.lang.Number)
    .licenseModel(java.lang.String)
    .shape(java.lang.String)
    .sshPublicKeys(java.util.List<java.lang.String>)
//  .computeModel(java.lang.String)
//  .dataCollectionOptions(OracleDatabaseDbSystemPropertiesDataCollectionOptions)
//  .dataStorageSizeGb(java.lang.Number)
//  .dbHome(OracleDatabaseDbSystemPropertiesDbHome)
//  .dbSystemOptions(OracleDatabaseDbSystemPropertiesDbSystemOptions)
//  .domain(java.lang.String)
//  .hostnamePrefix(java.lang.String)
//  .memorySizeGb(java.lang.Number)
//  .nodeCount(java.lang.Number)
//  .privateIp(java.lang.String)
//  .recoStorageSizeGb(java.lang.Number)
//  .timeZone(OracleDatabaseDbSystemPropertiesTimeZone)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.computeCount">computeCount</a></code> | <code>java.lang.Number</code> | The number of CPU cores to enable for the DbSystem. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.databaseEdition">databaseEdition</a></code> | <code>java.lang.String</code> | The database edition of the DbSystem. Possible values: STANDARD_EDITION ENTERPRISE_EDITION ENTERPRISE_EDITION_HIGH_PERFORMANCE. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.initialDataStorageSizeGb">initialDataStorageSizeGb</a></code> | <code>java.lang.Number</code> | The initial data storage size in GB. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | The license model of the DbSystem. Possible values: LICENSE_INCLUDED BRING_YOUR_OWN_LICENSE. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.shape">shape</a></code> | <code>java.lang.String</code> | Shape of DB System. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.sshPublicKeys">sshPublicKeys</a></code> | <code>java.util.List<java.lang.String></code> | SSH public keys to be stored with the DbSystem. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.computeModel">computeModel</a></code> | <code>java.lang.String</code> | The compute model of the DbSystem. Possible values: ECPU OCPU. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.dataCollectionOptions">dataCollectionOptions</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptions">OracleDatabaseDbSystemPropertiesDataCollectionOptions</a></code> | data_collection_options block. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.dataStorageSizeGb">dataStorageSizeGb</a></code> | <code>java.lang.Number</code> | The data storage size in GB that is currently available to DbSystems. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.dbHome">dbHome</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHome">OracleDatabaseDbSystemPropertiesDbHome</a></code> | db_home block. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.dbSystemOptions">dbSystemOptions</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptions">OracleDatabaseDbSystemPropertiesDbSystemOptions</a></code> | db_system_options block. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.domain">domain</a></code> | <code>java.lang.String</code> | The host domain name of the DbSystem. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.hostnamePrefix">hostnamePrefix</a></code> | <code>java.lang.String</code> | Prefix for DB System host names. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.memorySizeGb">memorySizeGb</a></code> | <code>java.lang.Number</code> | The memory size in GB. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | The number of nodes in the DbSystem. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.privateIp">privateIp</a></code> | <code>java.lang.String</code> | The private IP address of the DbSystem. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.recoStorageSizeGb">recoStorageSizeGb</a></code> | <code>java.lang.Number</code> | The reco/redo storage size in GB. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.timeZone">timeZone</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZone">OracleDatabaseDbSystemPropertiesTimeZone</a></code> | time_zone block. |

---

##### `computeCount`<sup>Required</sup> <a name="computeCount" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.computeCount"></a>

```java
public java.lang.Number getComputeCount();
```

- *Type:* java.lang.Number

The number of CPU cores to enable for the DbSystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#compute_count OracleDatabaseDbSystem#compute_count}

---

##### `databaseEdition`<sup>Required</sup> <a name="databaseEdition" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.databaseEdition"></a>

```java
public java.lang.String getDatabaseEdition();
```

- *Type:* java.lang.String

The database edition of the DbSystem. Possible values: STANDARD_EDITION ENTERPRISE_EDITION ENTERPRISE_EDITION_HIGH_PERFORMANCE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#database_edition OracleDatabaseDbSystem#database_edition}

---

##### `initialDataStorageSizeGb`<sup>Required</sup> <a name="initialDataStorageSizeGb" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.initialDataStorageSizeGb"></a>

```java
public java.lang.Number getInitialDataStorageSizeGb();
```

- *Type:* java.lang.Number

The initial data storage size in GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#initial_data_storage_size_gb OracleDatabaseDbSystem#initial_data_storage_size_gb}

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.licenseModel"></a>

```java
public java.lang.String getLicenseModel();
```

- *Type:* java.lang.String

The license model of the DbSystem. Possible values: LICENSE_INCLUDED BRING_YOUR_OWN_LICENSE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#license_model OracleDatabaseDbSystem#license_model}

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

Shape of DB System.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#shape OracleDatabaseDbSystem#shape}

---

##### `sshPublicKeys`<sup>Required</sup> <a name="sshPublicKeys" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.sshPublicKeys"></a>

```java
public java.util.List<java.lang.String> getSshPublicKeys();
```

- *Type:* java.util.List<java.lang.String>

SSH public keys to be stored with the DbSystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#ssh_public_keys OracleDatabaseDbSystem#ssh_public_keys}

---

##### `computeModel`<sup>Optional</sup> <a name="computeModel" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.computeModel"></a>

```java
public java.lang.String getComputeModel();
```

- *Type:* java.lang.String

The compute model of the DbSystem. Possible values: ECPU OCPU.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#compute_model OracleDatabaseDbSystem#compute_model}

---

##### `dataCollectionOptions`<sup>Optional</sup> <a name="dataCollectionOptions" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.dataCollectionOptions"></a>

```java
public OracleDatabaseDbSystemPropertiesDataCollectionOptions getDataCollectionOptions();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptions">OracleDatabaseDbSystemPropertiesDataCollectionOptions</a>

data_collection_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#data_collection_options OracleDatabaseDbSystem#data_collection_options}

---

##### `dataStorageSizeGb`<sup>Optional</sup> <a name="dataStorageSizeGb" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.dataStorageSizeGb"></a>

```java
public java.lang.Number getDataStorageSizeGb();
```

- *Type:* java.lang.Number

The data storage size in GB that is currently available to DbSystems.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#data_storage_size_gb OracleDatabaseDbSystem#data_storage_size_gb}

---

##### `dbHome`<sup>Optional</sup> <a name="dbHome" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.dbHome"></a>

```java
public OracleDatabaseDbSystemPropertiesDbHome getDbHome();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHome">OracleDatabaseDbSystemPropertiesDbHome</a>

db_home block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#db_home OracleDatabaseDbSystem#db_home}

---

##### `dbSystemOptions`<sup>Optional</sup> <a name="dbSystemOptions" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.dbSystemOptions"></a>

```java
public OracleDatabaseDbSystemPropertiesDbSystemOptions getDbSystemOptions();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptions">OracleDatabaseDbSystemPropertiesDbSystemOptions</a>

db_system_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#db_system_options OracleDatabaseDbSystem#db_system_options}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

The host domain name of the DbSystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#domain OracleDatabaseDbSystem#domain}

---

##### `hostnamePrefix`<sup>Optional</sup> <a name="hostnamePrefix" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.hostnamePrefix"></a>

```java
public java.lang.String getHostnamePrefix();
```

- *Type:* java.lang.String

Prefix for DB System host names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#hostname_prefix OracleDatabaseDbSystem#hostname_prefix}

---

##### `memorySizeGb`<sup>Optional</sup> <a name="memorySizeGb" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.memorySizeGb"></a>

```java
public java.lang.Number getMemorySizeGb();
```

- *Type:* java.lang.Number

The memory size in GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#memory_size_gb OracleDatabaseDbSystem#memory_size_gb}

---

##### `nodeCount`<sup>Optional</sup> <a name="nodeCount" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.nodeCount"></a>

```java
public java.lang.Number getNodeCount();
```

- *Type:* java.lang.Number

The number of nodes in the DbSystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#node_count OracleDatabaseDbSystem#node_count}

---

##### `privateIp`<sup>Optional</sup> <a name="privateIp" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.privateIp"></a>

```java
public java.lang.String getPrivateIp();
```

- *Type:* java.lang.String

The private IP address of the DbSystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#private_ip OracleDatabaseDbSystem#private_ip}

---

##### `recoStorageSizeGb`<sup>Optional</sup> <a name="recoStorageSizeGb" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.recoStorageSizeGb"></a>

```java
public java.lang.Number getRecoStorageSizeGb();
```

- *Type:* java.lang.Number

The reco/redo storage size in GB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#reco_storage_size_gb OracleDatabaseDbSystem#reco_storage_size_gb}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties.property.timeZone"></a>

```java
public OracleDatabaseDbSystemPropertiesTimeZone getTimeZone();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZone">OracleDatabaseDbSystemPropertiesTimeZone</a>

time_zone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#time_zone OracleDatabaseDbSystem#time_zone}

---

### OracleDatabaseDbSystemPropertiesDataCollectionOptions <a name="OracleDatabaseDbSystemPropertiesDataCollectionOptions" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptions.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_db_system.OracleDatabaseDbSystemPropertiesDataCollectionOptions;

OracleDatabaseDbSystemPropertiesDataCollectionOptions.builder()
//  .isDiagnosticsEventsEnabled(java.lang.Boolean|IResolvable)
//  .isIncidentLogsEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptions.property.isDiagnosticsEventsEnabled">isDiagnosticsEventsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether to enable data collection for diagnostics. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptions.property.isIncidentLogsEnabled">isIncidentLogsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether to enable incident logs and trace collection. |

---

##### `isDiagnosticsEventsEnabled`<sup>Optional</sup> <a name="isDiagnosticsEventsEnabled" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptions.property.isDiagnosticsEventsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsDiagnosticsEventsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether to enable data collection for diagnostics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#is_diagnostics_events_enabled OracleDatabaseDbSystem#is_diagnostics_events_enabled}

---

##### `isIncidentLogsEnabled`<sup>Optional</sup> <a name="isIncidentLogsEnabled" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptions.property.isIncidentLogsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsIncidentLogsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether to enable incident logs and trace collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#is_incident_logs_enabled OracleDatabaseDbSystem#is_incident_logs_enabled}

---

### OracleDatabaseDbSystemPropertiesDbHome <a name="OracleDatabaseDbSystemPropertiesDbHome" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHome"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHome.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_db_system.OracleDatabaseDbSystemPropertiesDbHome;

OracleDatabaseDbSystemPropertiesDbHome.builder()
    .database(OracleDatabaseDbSystemPropertiesDbHomeDatabase)
    .dbVersion(java.lang.String)
//  .displayName(java.lang.String)
//  .isUnifiedAuditingEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHome.property.database">database</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabase">OracleDatabaseDbSystemPropertiesDbHomeDatabase</a></code> | database block. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHome.property.dbVersion">dbVersion</a></code> | <code>java.lang.String</code> | A valid Oracle Database version. For a list of supported versions, use the ListDbVersions operation. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHome.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name for the Database Home. The name does not have to be unique within your project. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHome.property.isUnifiedAuditingEnabled">isUnifiedAuditingEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether unified auditing is enabled for the Database Home. |

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHome.property.database"></a>

```java
public OracleDatabaseDbSystemPropertiesDbHomeDatabase getDatabase();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabase">OracleDatabaseDbSystemPropertiesDbHomeDatabase</a>

database block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#database OracleDatabaseDbSystem#database}

---

##### `dbVersion`<sup>Required</sup> <a name="dbVersion" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHome.property.dbVersion"></a>

```java
public java.lang.String getDbVersion();
```

- *Type:* java.lang.String

A valid Oracle Database version. For a list of supported versions, use the ListDbVersions operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#db_version OracleDatabaseDbSystem#db_version}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHome.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The display name for the Database Home. The name does not have to be unique within your project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#display_name OracleDatabaseDbSystem#display_name}

---

##### `isUnifiedAuditingEnabled`<sup>Optional</sup> <a name="isUnifiedAuditingEnabled" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHome.property.isUnifiedAuditingEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsUnifiedAuditingEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether unified auditing is enabled for the Database Home.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#is_unified_auditing_enabled OracleDatabaseDbSystem#is_unified_auditing_enabled}

---

### OracleDatabaseDbSystemPropertiesDbHomeDatabase <a name="OracleDatabaseDbSystemPropertiesDbHomeDatabase" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabase.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_db_system.OracleDatabaseDbSystemPropertiesDbHomeDatabase;

OracleDatabaseDbSystemPropertiesDbHomeDatabase.builder()
    .adminPassword(java.lang.String)
    .databaseId(java.lang.String)
//  .characterSet(java.lang.String)
//  .dbHomeName(java.lang.String)
//  .dbName(java.lang.String)
//  .dbUniqueName(java.lang.String)
//  .gcpOracleZone(java.lang.String)
//  .ncharacterSet(java.lang.String)
//  .pluggableDatabaseId(java.lang.String)
//  .pluggableDatabaseName(java.lang.String)
//  .properties(OracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties)
//  .tdeWalletPassword(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabase.property.adminPassword">adminPassword</a></code> | <code>java.lang.String</code> | The password for the default ADMIN user. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabase.property.databaseId">databaseId</a></code> | <code>java.lang.String</code> | The database ID of the Database. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabase.property.characterSet">characterSet</a></code> | <code>java.lang.String</code> | The character set for the database. The default is AL32UTF8. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabase.property.dbHomeName">dbHomeName</a></code> | <code>java.lang.String</code> | The name of the DbHome resource associated with the Database. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabase.property.dbName">dbName</a></code> | <code>java.lang.String</code> | The database name. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabase.property.dbUniqueName">dbUniqueName</a></code> | <code>java.lang.String</code> | The DB_UNIQUE_NAME of the Oracle Database being backed up. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabase.property.gcpOracleZone">gcpOracleZone</a></code> | <code>java.lang.String</code> | The GCP Oracle zone where the Database is created. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabase.property.ncharacterSet">ncharacterSet</a></code> | <code>java.lang.String</code> | The national character set for the database. The default is AL16UTF16. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabase.property.pluggableDatabaseId">pluggableDatabaseId</a></code> | <code>java.lang.String</code> | The ID of the pluggable database associated with Database. The ID must be unique within the project and location. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabase.property.pluggableDatabaseName">pluggableDatabaseName</a></code> | <code>java.lang.String</code> | The pluggable dataabse associated with the Database. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabase.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties">OracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties</a></code> | properties block. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabase.property.tdeWalletPassword">tdeWalletPassword</a></code> | <code>java.lang.String</code> | The TDE wallet password for the database. |

---

##### `adminPassword`<sup>Required</sup> <a name="adminPassword" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabase.property.adminPassword"></a>

```java
public java.lang.String getAdminPassword();
```

- *Type:* java.lang.String

The password for the default ADMIN user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#admin_password OracleDatabaseDbSystem#admin_password}

---

##### `databaseId`<sup>Required</sup> <a name="databaseId" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabase.property.databaseId"></a>

```java
public java.lang.String getDatabaseId();
```

- *Type:* java.lang.String

The database ID of the Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#database_id OracleDatabaseDbSystem#database_id}

---

##### `characterSet`<sup>Optional</sup> <a name="characterSet" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabase.property.characterSet"></a>

```java
public java.lang.String getCharacterSet();
```

- *Type:* java.lang.String

The character set for the database. The default is AL32UTF8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#character_set OracleDatabaseDbSystem#character_set}

---

##### `dbHomeName`<sup>Optional</sup> <a name="dbHomeName" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabase.property.dbHomeName"></a>

```java
public java.lang.String getDbHomeName();
```

- *Type:* java.lang.String

The name of the DbHome resource associated with the Database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#db_home_name OracleDatabaseDbSystem#db_home_name}

---

##### `dbName`<sup>Optional</sup> <a name="dbName" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabase.property.dbName"></a>

```java
public java.lang.String getDbName();
```

- *Type:* java.lang.String

The database name.

The name must begin with an alphabetic character and can
contain a maximum of eight alphanumeric characters. Special characters are
not permitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#db_name OracleDatabaseDbSystem#db_name}

---

##### `dbUniqueName`<sup>Optional</sup> <a name="dbUniqueName" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabase.property.dbUniqueName"></a>

```java
public java.lang.String getDbUniqueName();
```

- *Type:* java.lang.String

The DB_UNIQUE_NAME of the Oracle Database being backed up.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#db_unique_name OracleDatabaseDbSystem#db_unique_name}

---

##### `gcpOracleZone`<sup>Optional</sup> <a name="gcpOracleZone" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabase.property.gcpOracleZone"></a>

```java
public java.lang.String getGcpOracleZone();
```

- *Type:* java.lang.String

The GCP Oracle zone where the Database is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#gcp_oracle_zone OracleDatabaseDbSystem#gcp_oracle_zone}

---

##### `ncharacterSet`<sup>Optional</sup> <a name="ncharacterSet" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabase.property.ncharacterSet"></a>

```java
public java.lang.String getNcharacterSet();
```

- *Type:* java.lang.String

The national character set for the database. The default is AL16UTF16.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#ncharacter_set OracleDatabaseDbSystem#ncharacter_set}

---

##### `pluggableDatabaseId`<sup>Optional</sup> <a name="pluggableDatabaseId" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabase.property.pluggableDatabaseId"></a>

```java
public java.lang.String getPluggableDatabaseId();
```

- *Type:* java.lang.String

The ID of the pluggable database associated with Database. The ID must be unique within the project and location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#pluggable_database_id OracleDatabaseDbSystem#pluggable_database_id}

---

##### `pluggableDatabaseName`<sup>Optional</sup> <a name="pluggableDatabaseName" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabase.property.pluggableDatabaseName"></a>

```java
public java.lang.String getPluggableDatabaseName();
```

- *Type:* java.lang.String

The pluggable dataabse associated with the Database.

The name must begin with an alphabetic character and can contain a maximum of thirty alphanumeric characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#pluggable_database_name OracleDatabaseDbSystem#pluggable_database_name}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabase.property.properties"></a>

```java
public OracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties getProperties();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties">OracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#properties OracleDatabaseDbSystem#properties}

---

##### `tdeWalletPassword`<sup>Optional</sup> <a name="tdeWalletPassword" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabase.property.tdeWalletPassword"></a>

```java
public java.lang.String getTdeWalletPassword();
```

- *Type:* java.lang.String

The TDE wallet password for the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#tde_wallet_password OracleDatabaseDbSystem#tde_wallet_password}

---

### OracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties <a name="OracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_db_system.OracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties;

OracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties.builder()
    .dbVersion(java.lang.String)
//  .databaseManagementConfig(OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig)
//  .dbBackupConfig(OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties.property.dbVersion">dbVersion</a></code> | <code>java.lang.String</code> | The Oracle Database version. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties.property.databaseManagementConfig">databaseManagementConfig</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig">OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig</a></code> | database_management_config block. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties.property.dbBackupConfig">dbBackupConfig</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig">OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig</a></code> | db_backup_config block. |

---

##### `dbVersion`<sup>Required</sup> <a name="dbVersion" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties.property.dbVersion"></a>

```java
public java.lang.String getDbVersion();
```

- *Type:* java.lang.String

The Oracle Database version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#db_version OracleDatabaseDbSystem#db_version}

---

##### `databaseManagementConfig`<sup>Optional</sup> <a name="databaseManagementConfig" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties.property.databaseManagementConfig"></a>

```java
public OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig getDatabaseManagementConfig();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig">OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig</a>

database_management_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#database_management_config OracleDatabaseDbSystem#database_management_config}

---

##### `dbBackupConfig`<sup>Optional</sup> <a name="dbBackupConfig" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties.property.dbBackupConfig"></a>

```java
public OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig getDbBackupConfig();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig">OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig</a>

db_backup_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#db_backup_config OracleDatabaseDbSystem#db_backup_config}

---

### OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig <a name="OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_db_system.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig;

OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig.builder()
    .build();
```


### OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig <a name="OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_db_system.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig;

OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.builder()
//  .autoBackupEnabled(java.lang.Boolean|IResolvable)
//  .autoFullBackupDay(java.lang.String)
//  .autoFullBackupWindow(java.lang.String)
//  .autoIncrementalBackupWindow(java.lang.String)
//  .backupDeletionPolicy(java.lang.String)
//  .backupDestinationDetails(IResolvable|java.util.List<OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails>)
//  .retentionPeriodDays(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.property.autoBackupEnabled">autoBackupEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If set to true, enables automatic backups on the database. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.property.autoFullBackupDay">autoFullBackupDay</a></code> | <code>java.lang.String</code> | Possible values: MONDAY TUESDAY WEDNESDAY THURSDAY FRIDAY SATURDAY SUNDAY. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.property.autoFullBackupWindow">autoFullBackupWindow</a></code> | <code>java.lang.String</code> | The window in which the full backup should be performed on the database. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.property.autoIncrementalBackupWindow">autoIncrementalBackupWindow</a></code> | <code>java.lang.String</code> | The window in which the incremental backup should be performed on the database. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.property.backupDeletionPolicy">backupDeletionPolicy</a></code> | <code>java.lang.String</code> | This defines when the backups will be deleted after Database termination. Possible values: DELETE_IMMEDIATELY DELETE_AFTER_RETENTION_PERIOD. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.property.backupDestinationDetails">backupDestinationDetails</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails">OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails</a>></code> | backup_destination_details block. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.property.retentionPeriodDays">retentionPeriodDays</a></code> | <code>java.lang.Number</code> | The number of days an automatic backup is retained before being automatically deleted. |

---

##### `autoBackupEnabled`<sup>Optional</sup> <a name="autoBackupEnabled" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.property.autoBackupEnabled"></a>

```java
public java.lang.Boolean|IResolvable getAutoBackupEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If set to true, enables automatic backups on the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#auto_backup_enabled OracleDatabaseDbSystem#auto_backup_enabled}

---

##### `autoFullBackupDay`<sup>Optional</sup> <a name="autoFullBackupDay" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.property.autoFullBackupDay"></a>

```java
public java.lang.String getAutoFullBackupDay();
```

- *Type:* java.lang.String

Possible values: MONDAY TUESDAY WEDNESDAY THURSDAY FRIDAY SATURDAY SUNDAY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#auto_full_backup_day OracleDatabaseDbSystem#auto_full_backup_day}

---

##### `autoFullBackupWindow`<sup>Optional</sup> <a name="autoFullBackupWindow" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.property.autoFullBackupWindow"></a>

```java
public java.lang.String getAutoFullBackupWindow();
```

- *Type:* java.lang.String

The window in which the full backup should be performed on the database.

If no value is provided, the default is anytime.
Possible values:
SLOT_ONE
SLOT_TWO
SLOT_THREE
SLOT_FOUR
SLOT_FIVE
SLOT_SIX
SLOT_SEVEN
SLOT_EIGHT
SLOT_NINE
SLOT_TEN
SLOT_ELEVEN
SLOT_TWELVE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#auto_full_backup_window OracleDatabaseDbSystem#auto_full_backup_window}

---

##### `autoIncrementalBackupWindow`<sup>Optional</sup> <a name="autoIncrementalBackupWindow" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.property.autoIncrementalBackupWindow"></a>

```java
public java.lang.String getAutoIncrementalBackupWindow();
```

- *Type:* java.lang.String

The window in which the incremental backup should be performed on the database.

If no value is provided, the default is anytime except the auto
full backup day.
Possible values:
SLOT_ONE
SLOT_TWO
SLOT_THREE
SLOT_FOUR
SLOT_FIVE
SLOT_SIX
SLOT_SEVEN
SLOT_EIGHT
SLOT_NINE
SLOT_TEN
SLOT_ELEVEN
SLOT_TWELVE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#auto_incremental_backup_window OracleDatabaseDbSystem#auto_incremental_backup_window}

---

##### `backupDeletionPolicy`<sup>Optional</sup> <a name="backupDeletionPolicy" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.property.backupDeletionPolicy"></a>

```java
public java.lang.String getBackupDeletionPolicy();
```

- *Type:* java.lang.String

This defines when the backups will be deleted after Database termination. Possible values: DELETE_IMMEDIATELY DELETE_AFTER_RETENTION_PERIOD.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#backup_deletion_policy OracleDatabaseDbSystem#backup_deletion_policy}

---

##### `backupDestinationDetails`<sup>Optional</sup> <a name="backupDestinationDetails" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.property.backupDestinationDetails"></a>

```java
public IResolvable|java.util.List<OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails> getBackupDestinationDetails();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails">OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails</a>>

backup_destination_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#backup_destination_details OracleDatabaseDbSystem#backup_destination_details}

---

##### `retentionPeriodDays`<sup>Optional</sup> <a name="retentionPeriodDays" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig.property.retentionPeriodDays"></a>

```java
public java.lang.Number getRetentionPeriodDays();
```

- *Type:* java.lang.Number

The number of days an automatic backup is retained before being automatically deleted.

This value determines the earliest point in time to
which a database can be restored. Min: 1, Max: 60.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#retention_period_days OracleDatabaseDbSystem#retention_period_days}

---

### OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails <a name="OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_db_system.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails;

OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails.builder()
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails.property.type">type</a></code> | <code>java.lang.String</code> | The type of the database backup destination. Possible values: NFS RECOVERY_APPLIANCE OBJECT_STORE LOCAL DBRS. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of the database backup destination. Possible values: NFS RECOVERY_APPLIANCE OBJECT_STORE LOCAL DBRS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#type OracleDatabaseDbSystem#type}

---

### OracleDatabaseDbSystemPropertiesDbSystemOptions <a name="OracleDatabaseDbSystemPropertiesDbSystemOptions" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptions.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_db_system.OracleDatabaseDbSystemPropertiesDbSystemOptions;

OracleDatabaseDbSystemPropertiesDbSystemOptions.builder()
//  .storageManagement(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptions.property.storageManagement">storageManagement</a></code> | <code>java.lang.String</code> | The storage option used in DB system. Possible values: ASM LVM. |

---

##### `storageManagement`<sup>Optional</sup> <a name="storageManagement" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptions.property.storageManagement"></a>

```java
public java.lang.String getStorageManagement();
```

- *Type:* java.lang.String

The storage option used in DB system. Possible values: ASM LVM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#storage_management OracleDatabaseDbSystem#storage_management}

---

### OracleDatabaseDbSystemPropertiesTimeZone <a name="OracleDatabaseDbSystemPropertiesTimeZone" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZone"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZone.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_db_system.OracleDatabaseDbSystemPropertiesTimeZone;

OracleDatabaseDbSystemPropertiesTimeZone.builder()
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZone.property.id">id</a></code> | <code>java.lang.String</code> | IANA Time Zone Database time zone. For example "America/New_York". |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZone.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

IANA Time Zone Database time zone. For example "America/New_York".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#id OracleDatabaseDbSystem#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### OracleDatabaseDbSystemTimeouts <a name="OracleDatabaseDbSystemTimeouts" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_db_system.OracleDatabaseDbSystemTimeouts;

OracleDatabaseDbSystemTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#create OracleDatabaseDbSystem#create}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#delete OracleDatabaseDbSystem#delete}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#update OracleDatabaseDbSystem#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#create OracleDatabaseDbSystem#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#delete OracleDatabaseDbSystem#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/oracle_database_db_system#update OracleDatabaseDbSystem#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference <a name="OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_db_system.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference;

new OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.resetIsDiagnosticsEventsEnabled">resetIsDiagnosticsEventsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.resetIsIncidentLogsEnabled">resetIsIncidentLogsEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsDiagnosticsEventsEnabled` <a name="resetIsDiagnosticsEventsEnabled" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.resetIsDiagnosticsEventsEnabled"></a>

```java
public void resetIsDiagnosticsEventsEnabled()
```

##### `resetIsIncidentLogsEnabled` <a name="resetIsIncidentLogsEnabled" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.resetIsIncidentLogsEnabled"></a>

```java
public void resetIsIncidentLogsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabledInput">isDiagnosticsEventsEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.property.isIncidentLogsEnabledInput">isIncidentLogsEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled">isDiagnosticsEventsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled">isIncidentLogsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptions">OracleDatabaseDbSystemPropertiesDataCollectionOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isDiagnosticsEventsEnabledInput`<sup>Optional</sup> <a name="isDiagnosticsEventsEnabledInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getIsDiagnosticsEventsEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isIncidentLogsEnabledInput`<sup>Optional</sup> <a name="isIncidentLogsEnabledInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.property.isIncidentLogsEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getIsIncidentLogsEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isDiagnosticsEventsEnabled`<sup>Required</sup> <a name="isDiagnosticsEventsEnabled" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsDiagnosticsEventsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isIncidentLogsEnabled`<sup>Required</sup> <a name="isIncidentLogsEnabled" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsIncidentLogsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference.property.internalValue"></a>

```java
public OracleDatabaseDbSystemPropertiesDataCollectionOptions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptions">OracleDatabaseDbSystemPropertiesDataCollectionOptions</a>

---


### OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference <a name="OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_db_system.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference;

new OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.putProperties">putProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetCharacterSet">resetCharacterSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetDbHomeName">resetDbHomeName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetDbName">resetDbName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetDbUniqueName">resetDbUniqueName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetGcpOracleZone">resetGcpOracleZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetNcharacterSet">resetNcharacterSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetPluggableDatabaseId">resetPluggableDatabaseId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetPluggableDatabaseName">resetPluggableDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetTdeWalletPassword">resetTdeWalletPassword</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProperties` <a name="putProperties" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.putProperties"></a>

```java
public void putProperties(OracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties">OracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties</a>

---

##### `resetCharacterSet` <a name="resetCharacterSet" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetCharacterSet"></a>

```java
public void resetCharacterSet()
```

##### `resetDbHomeName` <a name="resetDbHomeName" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetDbHomeName"></a>

```java
public void resetDbHomeName()
```

##### `resetDbName` <a name="resetDbName" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetDbName"></a>

```java
public void resetDbName()
```

##### `resetDbUniqueName` <a name="resetDbUniqueName" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetDbUniqueName"></a>

```java
public void resetDbUniqueName()
```

##### `resetGcpOracleZone` <a name="resetGcpOracleZone" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetGcpOracleZone"></a>

```java
public void resetGcpOracleZone()
```

##### `resetNcharacterSet` <a name="resetNcharacterSet" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetNcharacterSet"></a>

```java
public void resetNcharacterSet()
```

##### `resetPluggableDatabaseId` <a name="resetPluggableDatabaseId" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetPluggableDatabaseId"></a>

```java
public void resetPluggableDatabaseId()
```

##### `resetPluggableDatabaseName` <a name="resetPluggableDatabaseName" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetPluggableDatabaseName"></a>

```java
public void resetPluggableDatabaseName()
```

##### `resetProperties` <a name="resetProperties" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetProperties"></a>

```java
public void resetProperties()
```

##### `resetTdeWalletPassword` <a name="resetTdeWalletPassword" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.resetTdeWalletPassword"></a>

```java
public void resetTdeWalletPassword()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.ociUrl">ociUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.opsInsightsStatus">opsInsightsStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference">OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.adminPasswordInput">adminPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.characterSetInput">characterSetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.databaseIdInput">databaseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.dbHomeNameInput">dbHomeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.dbNameInput">dbNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.dbUniqueNameInput">dbUniqueNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.gcpOracleZoneInput">gcpOracleZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.ncharacterSetInput">ncharacterSetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.pluggableDatabaseIdInput">pluggableDatabaseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.pluggableDatabaseNameInput">pluggableDatabaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.propertiesInput">propertiesInput</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties">OracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.tdeWalletPasswordInput">tdeWalletPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.adminPassword">adminPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.characterSet">characterSet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.databaseId">databaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.dbHomeName">dbHomeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.dbName">dbName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.dbUniqueName">dbUniqueName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.gcpOracleZone">gcpOracleZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.ncharacterSet">ncharacterSet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.pluggableDatabaseId">pluggableDatabaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.pluggableDatabaseName">pluggableDatabaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.tdeWalletPassword">tdeWalletPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabase">OracleDatabaseDbSystemPropertiesDbHomeDatabase</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `ociUrl`<sup>Required</sup> <a name="ociUrl" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.ociUrl"></a>

```java
public java.lang.String getOciUrl();
```

- *Type:* java.lang.String

---

##### `opsInsightsStatus`<sup>Required</sup> <a name="opsInsightsStatus" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.opsInsightsStatus"></a>

```java
public java.lang.String getOpsInsightsStatus();
```

- *Type:* java.lang.String

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.properties"></a>

```java
public OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference getProperties();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference">OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference</a>

---

##### `adminPasswordInput`<sup>Optional</sup> <a name="adminPasswordInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.adminPasswordInput"></a>

```java
public java.lang.String getAdminPasswordInput();
```

- *Type:* java.lang.String

---

##### `characterSetInput`<sup>Optional</sup> <a name="characterSetInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.characterSetInput"></a>

```java
public java.lang.String getCharacterSetInput();
```

- *Type:* java.lang.String

---

##### `databaseIdInput`<sup>Optional</sup> <a name="databaseIdInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.databaseIdInput"></a>

```java
public java.lang.String getDatabaseIdInput();
```

- *Type:* java.lang.String

---

##### `dbHomeNameInput`<sup>Optional</sup> <a name="dbHomeNameInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.dbHomeNameInput"></a>

```java
public java.lang.String getDbHomeNameInput();
```

- *Type:* java.lang.String

---

##### `dbNameInput`<sup>Optional</sup> <a name="dbNameInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.dbNameInput"></a>

```java
public java.lang.String getDbNameInput();
```

- *Type:* java.lang.String

---

##### `dbUniqueNameInput`<sup>Optional</sup> <a name="dbUniqueNameInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.dbUniqueNameInput"></a>

```java
public java.lang.String getDbUniqueNameInput();
```

- *Type:* java.lang.String

---

##### `gcpOracleZoneInput`<sup>Optional</sup> <a name="gcpOracleZoneInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.gcpOracleZoneInput"></a>

```java
public java.lang.String getGcpOracleZoneInput();
```

- *Type:* java.lang.String

---

##### `ncharacterSetInput`<sup>Optional</sup> <a name="ncharacterSetInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.ncharacterSetInput"></a>

```java
public java.lang.String getNcharacterSetInput();
```

- *Type:* java.lang.String

---

##### `pluggableDatabaseIdInput`<sup>Optional</sup> <a name="pluggableDatabaseIdInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.pluggableDatabaseIdInput"></a>

```java
public java.lang.String getPluggableDatabaseIdInput();
```

- *Type:* java.lang.String

---

##### `pluggableDatabaseNameInput`<sup>Optional</sup> <a name="pluggableDatabaseNameInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.pluggableDatabaseNameInput"></a>

```java
public java.lang.String getPluggableDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.propertiesInput"></a>

```java
public OracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties getPropertiesInput();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties">OracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties</a>

---

##### `tdeWalletPasswordInput`<sup>Optional</sup> <a name="tdeWalletPasswordInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.tdeWalletPasswordInput"></a>

```java
public java.lang.String getTdeWalletPasswordInput();
```

- *Type:* java.lang.String

---

##### `adminPassword`<sup>Required</sup> <a name="adminPassword" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.adminPassword"></a>

```java
public java.lang.String getAdminPassword();
```

- *Type:* java.lang.String

---

##### `characterSet`<sup>Required</sup> <a name="characterSet" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.characterSet"></a>

```java
public java.lang.String getCharacterSet();
```

- *Type:* java.lang.String

---

##### `databaseId`<sup>Required</sup> <a name="databaseId" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.databaseId"></a>

```java
public java.lang.String getDatabaseId();
```

- *Type:* java.lang.String

---

##### `dbHomeName`<sup>Required</sup> <a name="dbHomeName" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.dbHomeName"></a>

```java
public java.lang.String getDbHomeName();
```

- *Type:* java.lang.String

---

##### `dbName`<sup>Required</sup> <a name="dbName" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.dbName"></a>

```java
public java.lang.String getDbName();
```

- *Type:* java.lang.String

---

##### `dbUniqueName`<sup>Required</sup> <a name="dbUniqueName" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.dbUniqueName"></a>

```java
public java.lang.String getDbUniqueName();
```

- *Type:* java.lang.String

---

##### `gcpOracleZone`<sup>Required</sup> <a name="gcpOracleZone" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.gcpOracleZone"></a>

```java
public java.lang.String getGcpOracleZone();
```

- *Type:* java.lang.String

---

##### `ncharacterSet`<sup>Required</sup> <a name="ncharacterSet" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.ncharacterSet"></a>

```java
public java.lang.String getNcharacterSet();
```

- *Type:* java.lang.String

---

##### `pluggableDatabaseId`<sup>Required</sup> <a name="pluggableDatabaseId" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.pluggableDatabaseId"></a>

```java
public java.lang.String getPluggableDatabaseId();
```

- *Type:* java.lang.String

---

##### `pluggableDatabaseName`<sup>Required</sup> <a name="pluggableDatabaseName" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.pluggableDatabaseName"></a>

```java
public java.lang.String getPluggableDatabaseName();
```

- *Type:* java.lang.String

---

##### `tdeWalletPassword`<sup>Required</sup> <a name="tdeWalletPassword" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.tdeWalletPassword"></a>

```java
public java.lang.String getTdeWalletPassword();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference.property.internalValue"></a>

```java
public OracleDatabaseDbSystemPropertiesDbHomeDatabase getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabase">OracleDatabaseDbSystemPropertiesDbHomeDatabase</a>

---


### OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference <a name="OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_db_system.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference;

new OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.property.managementState">managementState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.property.managementType">managementType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig">OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `managementState`<sup>Required</sup> <a name="managementState" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.property.managementState"></a>

```java
public java.lang.String getManagementState();
```

- *Type:* java.lang.String

---

##### `managementType`<sup>Required</sup> <a name="managementType" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.property.managementType"></a>

```java
public java.lang.String getManagementType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference.property.internalValue"></a>

```java
public OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig">OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig</a>

---


### OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList <a name="OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_db_system.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList;

new OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.get"></a>

```java
public OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails">OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails">OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails</a>>

---


### OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference <a name="OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_db_system.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference;

new OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails">OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsOutputReference.property.internalValue"></a>

```java
public IResolvable|OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails">OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails</a>

---


### OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference <a name="OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_db_system.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference;

new OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.putBackupDestinationDetails">putBackupDestinationDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resetAutoBackupEnabled">resetAutoBackupEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resetAutoFullBackupDay">resetAutoFullBackupDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resetAutoFullBackupWindow">resetAutoFullBackupWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resetAutoIncrementalBackupWindow">resetAutoIncrementalBackupWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resetBackupDeletionPolicy">resetBackupDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resetBackupDestinationDetails">resetBackupDestinationDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resetRetentionPeriodDays">resetRetentionPeriodDays</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBackupDestinationDetails` <a name="putBackupDestinationDetails" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.putBackupDestinationDetails"></a>

```java
public void putBackupDestinationDetails(IResolvable|java.util.List<OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.putBackupDestinationDetails.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails">OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails</a>>

---

##### `resetAutoBackupEnabled` <a name="resetAutoBackupEnabled" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resetAutoBackupEnabled"></a>

```java
public void resetAutoBackupEnabled()
```

##### `resetAutoFullBackupDay` <a name="resetAutoFullBackupDay" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resetAutoFullBackupDay"></a>

```java
public void resetAutoFullBackupDay()
```

##### `resetAutoFullBackupWindow` <a name="resetAutoFullBackupWindow" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resetAutoFullBackupWindow"></a>

```java
public void resetAutoFullBackupWindow()
```

##### `resetAutoIncrementalBackupWindow` <a name="resetAutoIncrementalBackupWindow" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resetAutoIncrementalBackupWindow"></a>

```java
public void resetAutoIncrementalBackupWindow()
```

##### `resetBackupDeletionPolicy` <a name="resetBackupDeletionPolicy" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resetBackupDeletionPolicy"></a>

```java
public void resetBackupDeletionPolicy()
```

##### `resetBackupDestinationDetails` <a name="resetBackupDestinationDetails" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resetBackupDestinationDetails"></a>

```java
public void resetBackupDestinationDetails()
```

##### `resetRetentionPeriodDays` <a name="resetRetentionPeriodDays" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.resetRetentionPeriodDays"></a>

```java
public void resetRetentionPeriodDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.backupDestinationDetails">backupDestinationDetails</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList">OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoBackupEnabledInput">autoBackupEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoFullBackupDayInput">autoFullBackupDayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoFullBackupWindowInput">autoFullBackupWindowInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoIncrementalBackupWindowInput">autoIncrementalBackupWindowInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.backupDeletionPolicyInput">backupDeletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.backupDestinationDetailsInput">backupDestinationDetailsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails">OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.retentionPeriodDaysInput">retentionPeriodDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoBackupEnabled">autoBackupEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoFullBackupDay">autoFullBackupDay</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoFullBackupWindow">autoFullBackupWindow</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoIncrementalBackupWindow">autoIncrementalBackupWindow</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.backupDeletionPolicy">backupDeletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.retentionPeriodDays">retentionPeriodDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig">OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backupDestinationDetails`<sup>Required</sup> <a name="backupDestinationDetails" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.backupDestinationDetails"></a>

```java
public OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList getBackupDestinationDetails();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList">OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetailsList</a>

---

##### `autoBackupEnabledInput`<sup>Optional</sup> <a name="autoBackupEnabledInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoBackupEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getAutoBackupEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `autoFullBackupDayInput`<sup>Optional</sup> <a name="autoFullBackupDayInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoFullBackupDayInput"></a>

```java
public java.lang.String getAutoFullBackupDayInput();
```

- *Type:* java.lang.String

---

##### `autoFullBackupWindowInput`<sup>Optional</sup> <a name="autoFullBackupWindowInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoFullBackupWindowInput"></a>

```java
public java.lang.String getAutoFullBackupWindowInput();
```

- *Type:* java.lang.String

---

##### `autoIncrementalBackupWindowInput`<sup>Optional</sup> <a name="autoIncrementalBackupWindowInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoIncrementalBackupWindowInput"></a>

```java
public java.lang.String getAutoIncrementalBackupWindowInput();
```

- *Type:* java.lang.String

---

##### `backupDeletionPolicyInput`<sup>Optional</sup> <a name="backupDeletionPolicyInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.backupDeletionPolicyInput"></a>

```java
public java.lang.String getBackupDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `backupDestinationDetailsInput`<sup>Optional</sup> <a name="backupDestinationDetailsInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.backupDestinationDetailsInput"></a>

```java
public IResolvable|java.util.List<OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails> getBackupDestinationDetailsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails">OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigBackupDestinationDetails</a>>

---

##### `retentionPeriodDaysInput`<sup>Optional</sup> <a name="retentionPeriodDaysInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.retentionPeriodDaysInput"></a>

```java
public java.lang.Number getRetentionPeriodDaysInput();
```

- *Type:* java.lang.Number

---

##### `autoBackupEnabled`<sup>Required</sup> <a name="autoBackupEnabled" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoBackupEnabled"></a>

```java
public java.lang.Boolean|IResolvable getAutoBackupEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `autoFullBackupDay`<sup>Required</sup> <a name="autoFullBackupDay" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoFullBackupDay"></a>

```java
public java.lang.String getAutoFullBackupDay();
```

- *Type:* java.lang.String

---

##### `autoFullBackupWindow`<sup>Required</sup> <a name="autoFullBackupWindow" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoFullBackupWindow"></a>

```java
public java.lang.String getAutoFullBackupWindow();
```

- *Type:* java.lang.String

---

##### `autoIncrementalBackupWindow`<sup>Required</sup> <a name="autoIncrementalBackupWindow" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.autoIncrementalBackupWindow"></a>

```java
public java.lang.String getAutoIncrementalBackupWindow();
```

- *Type:* java.lang.String

---

##### `backupDeletionPolicy`<sup>Required</sup> <a name="backupDeletionPolicy" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.backupDeletionPolicy"></a>

```java
public java.lang.String getBackupDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `retentionPeriodDays`<sup>Required</sup> <a name="retentionPeriodDays" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.retentionPeriodDays"></a>

```java
public java.lang.Number getRetentionPeriodDays();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference.property.internalValue"></a>

```java
public OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig">OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig</a>

---


### OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference <a name="OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_db_system.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference;

new OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.putDatabaseManagementConfig">putDatabaseManagementConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.putDbBackupConfig">putDbBackupConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.resetDatabaseManagementConfig">resetDatabaseManagementConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.resetDbBackupConfig">resetDbBackupConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDatabaseManagementConfig` <a name="putDatabaseManagementConfig" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.putDatabaseManagementConfig"></a>

```java
public void putDatabaseManagementConfig(OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.putDatabaseManagementConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig">OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig</a>

---

##### `putDbBackupConfig` <a name="putDbBackupConfig" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.putDbBackupConfig"></a>

```java
public void putDbBackupConfig(OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.putDbBackupConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig">OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig</a>

---

##### `resetDatabaseManagementConfig` <a name="resetDatabaseManagementConfig" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.resetDatabaseManagementConfig"></a>

```java
public void resetDatabaseManagementConfig()
```

##### `resetDbBackupConfig` <a name="resetDbBackupConfig" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.resetDbBackupConfig"></a>

```java
public void resetDbBackupConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.databaseManagementConfig">databaseManagementConfig</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference">OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.dbBackupConfig">dbBackupConfig</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference">OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.databaseManagementConfigInput">databaseManagementConfigInput</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig">OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.dbBackupConfigInput">dbBackupConfigInput</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig">OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.dbVersionInput">dbVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.dbVersion">dbVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties">OracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `databaseManagementConfig`<sup>Required</sup> <a name="databaseManagementConfig" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.databaseManagementConfig"></a>

```java
public OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference getDatabaseManagementConfig();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference">OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfigOutputReference</a>

---

##### `dbBackupConfig`<sup>Required</sup> <a name="dbBackupConfig" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.dbBackupConfig"></a>

```java
public OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference getDbBackupConfig();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference">OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `databaseManagementConfigInput`<sup>Optional</sup> <a name="databaseManagementConfigInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.databaseManagementConfigInput"></a>

```java
public OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig getDatabaseManagementConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig">OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDatabaseManagementConfig</a>

---

##### `dbBackupConfigInput`<sup>Optional</sup> <a name="dbBackupConfigInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.dbBackupConfigInput"></a>

```java
public OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig getDbBackupConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig">OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesDbBackupConfig</a>

---

##### `dbVersionInput`<sup>Optional</sup> <a name="dbVersionInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.dbVersionInput"></a>

```java
public java.lang.String getDbVersionInput();
```

- *Type:* java.lang.String

---

##### `dbVersion`<sup>Required</sup> <a name="dbVersion" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.dbVersion"></a>

```java
public java.lang.String getDbVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabasePropertiesOutputReference.property.internalValue"></a>

```java
public OracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties">OracleDatabaseDbSystemPropertiesDbHomeDatabaseProperties</a>

---


### OracleDatabaseDbSystemPropertiesDbHomeOutputReference <a name="OracleDatabaseDbSystemPropertiesDbHomeOutputReference" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_db_system.OracleDatabaseDbSystemPropertiesDbHomeOutputReference;

new OracleDatabaseDbSystemPropertiesDbHomeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.putDatabase">putDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.resetIsUnifiedAuditingEnabled">resetIsUnifiedAuditingEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDatabase` <a name="putDatabase" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.putDatabase"></a>

```java
public void putDatabase(OracleDatabaseDbSystemPropertiesDbHomeDatabase value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.putDatabase.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabase">OracleDatabaseDbSystemPropertiesDbHomeDatabase</a>

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetIsUnifiedAuditingEnabled` <a name="resetIsUnifiedAuditingEnabled" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.resetIsUnifiedAuditingEnabled"></a>

```java
public void resetIsUnifiedAuditingEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.database">database</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference">OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.databaseInput">databaseInput</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabase">OracleDatabaseDbSystemPropertiesDbHomeDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.dbVersionInput">dbVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.isUnifiedAuditingEnabledInput">isUnifiedAuditingEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.dbVersion">dbVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.isUnifiedAuditingEnabled">isUnifiedAuditingEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHome">OracleDatabaseDbSystemPropertiesDbHome</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.database"></a>

```java
public OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference getDatabase();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference">OracleDatabaseDbSystemPropertiesDbHomeDatabaseOutputReference</a>

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.databaseInput"></a>

```java
public OracleDatabaseDbSystemPropertiesDbHomeDatabase getDatabaseInput();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeDatabase">OracleDatabaseDbSystemPropertiesDbHomeDatabase</a>

---

##### `dbVersionInput`<sup>Optional</sup> <a name="dbVersionInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.dbVersionInput"></a>

```java
public java.lang.String getDbVersionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `isUnifiedAuditingEnabledInput`<sup>Optional</sup> <a name="isUnifiedAuditingEnabledInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.isUnifiedAuditingEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getIsUnifiedAuditingEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `dbVersion`<sup>Required</sup> <a name="dbVersion" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.dbVersion"></a>

```java
public java.lang.String getDbVersion();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `isUnifiedAuditingEnabled`<sup>Required</sup> <a name="isUnifiedAuditingEnabled" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.isUnifiedAuditingEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsUnifiedAuditingEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference.property.internalValue"></a>

```java
public OracleDatabaseDbSystemPropertiesDbHome getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHome">OracleDatabaseDbSystemPropertiesDbHome</a>

---


### OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference <a name="OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_db_system.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference;

new OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.resetStorageManagement">resetStorageManagement</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStorageManagement` <a name="resetStorageManagement" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.resetStorageManagement"></a>

```java
public void resetStorageManagement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.property.storageManagementInput">storageManagementInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.property.storageManagement">storageManagement</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptions">OracleDatabaseDbSystemPropertiesDbSystemOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `storageManagementInput`<sup>Optional</sup> <a name="storageManagementInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.property.storageManagementInput"></a>

```java
public java.lang.String getStorageManagementInput();
```

- *Type:* java.lang.String

---

##### `storageManagement`<sup>Required</sup> <a name="storageManagement" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.property.storageManagement"></a>

```java
public java.lang.String getStorageManagement();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference.property.internalValue"></a>

```java
public OracleDatabaseDbSystemPropertiesDbSystemOptions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptions">OracleDatabaseDbSystemPropertiesDbSystemOptions</a>

---


### OracleDatabaseDbSystemPropertiesOutputReference <a name="OracleDatabaseDbSystemPropertiesOutputReference" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_db_system.OracleDatabaseDbSystemPropertiesOutputReference;

new OracleDatabaseDbSystemPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.putDataCollectionOptions">putDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.putDbHome">putDbHome</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.putDbSystemOptions">putDbSystemOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.putTimeZone">putTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.resetComputeModel">resetComputeModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.resetDataCollectionOptions">resetDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.resetDataStorageSizeGb">resetDataStorageSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.resetDbHome">resetDbHome</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.resetDbSystemOptions">resetDbSystemOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.resetDomain">resetDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.resetHostnamePrefix">resetHostnamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.resetMemorySizeGb">resetMemorySizeGb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.resetNodeCount">resetNodeCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.resetPrivateIp">resetPrivateIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.resetRecoStorageSizeGb">resetRecoStorageSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataCollectionOptions` <a name="putDataCollectionOptions" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.putDataCollectionOptions"></a>

```java
public void putDataCollectionOptions(OracleDatabaseDbSystemPropertiesDataCollectionOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.putDataCollectionOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptions">OracleDatabaseDbSystemPropertiesDataCollectionOptions</a>

---

##### `putDbHome` <a name="putDbHome" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.putDbHome"></a>

```java
public void putDbHome(OracleDatabaseDbSystemPropertiesDbHome value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.putDbHome.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHome">OracleDatabaseDbSystemPropertiesDbHome</a>

---

##### `putDbSystemOptions` <a name="putDbSystemOptions" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.putDbSystemOptions"></a>

```java
public void putDbSystemOptions(OracleDatabaseDbSystemPropertiesDbSystemOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.putDbSystemOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptions">OracleDatabaseDbSystemPropertiesDbSystemOptions</a>

---

##### `putTimeZone` <a name="putTimeZone" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.putTimeZone"></a>

```java
public void putTimeZone(OracleDatabaseDbSystemPropertiesTimeZone value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.putTimeZone.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZone">OracleDatabaseDbSystemPropertiesTimeZone</a>

---

##### `resetComputeModel` <a name="resetComputeModel" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.resetComputeModel"></a>

```java
public void resetComputeModel()
```

##### `resetDataCollectionOptions` <a name="resetDataCollectionOptions" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.resetDataCollectionOptions"></a>

```java
public void resetDataCollectionOptions()
```

##### `resetDataStorageSizeGb` <a name="resetDataStorageSizeGb" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.resetDataStorageSizeGb"></a>

```java
public void resetDataStorageSizeGb()
```

##### `resetDbHome` <a name="resetDbHome" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.resetDbHome"></a>

```java
public void resetDbHome()
```

##### `resetDbSystemOptions` <a name="resetDbSystemOptions" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.resetDbSystemOptions"></a>

```java
public void resetDbSystemOptions()
```

##### `resetDomain` <a name="resetDomain" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.resetDomain"></a>

```java
public void resetDomain()
```

##### `resetHostnamePrefix` <a name="resetHostnamePrefix" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.resetHostnamePrefix"></a>

```java
public void resetHostnamePrefix()
```

##### `resetMemorySizeGb` <a name="resetMemorySizeGb" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.resetMemorySizeGb"></a>

```java
public void resetMemorySizeGb()
```

##### `resetNodeCount` <a name="resetNodeCount" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.resetNodeCount"></a>

```java
public void resetNodeCount()
```

##### `resetPrivateIp` <a name="resetPrivateIp" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.resetPrivateIp"></a>

```java
public void resetPrivateIp()
```

##### `resetRecoStorageSizeGb` <a name="resetRecoStorageSizeGb" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.resetRecoStorageSizeGb"></a>

```java
public void resetRecoStorageSizeGb()
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.resetTimeZone"></a>

```java
public void resetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.dataCollectionOptions">dataCollectionOptions</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference">OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.dbHome">dbHome</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference">OracleDatabaseDbSystemPropertiesDbHomeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.dbSystemOptions">dbSystemOptions</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference">OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.lifecycleState">lifecycleState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.timeZone">timeZone</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference">OracleDatabaseDbSystemPropertiesTimeZoneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.computeCountInput">computeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.computeModelInput">computeModelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.databaseEditionInput">databaseEditionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.dataCollectionOptionsInput">dataCollectionOptionsInput</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptions">OracleDatabaseDbSystemPropertiesDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.dataStorageSizeGbInput">dataStorageSizeGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.dbHomeInput">dbHomeInput</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHome">OracleDatabaseDbSystemPropertiesDbHome</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.dbSystemOptionsInput">dbSystemOptionsInput</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptions">OracleDatabaseDbSystemPropertiesDbSystemOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.domainInput">domainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.hostnamePrefixInput">hostnamePrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.initialDataStorageSizeGbInput">initialDataStorageSizeGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.licenseModelInput">licenseModelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.memorySizeGbInput">memorySizeGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.nodeCountInput">nodeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.privateIpInput">privateIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.recoStorageSizeGbInput">recoStorageSizeGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.shapeInput">shapeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.sshPublicKeysInput">sshPublicKeysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZone">OracleDatabaseDbSystemPropertiesTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.computeCount">computeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.computeModel">computeModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.databaseEdition">databaseEdition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.dataStorageSizeGb">dataStorageSizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.hostnamePrefix">hostnamePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.initialDataStorageSizeGb">initialDataStorageSizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.memorySizeGb">memorySizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.privateIp">privateIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.recoStorageSizeGb">recoStorageSizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.shape">shape</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.sshPublicKeys">sshPublicKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties">OracleDatabaseDbSystemProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataCollectionOptions`<sup>Required</sup> <a name="dataCollectionOptions" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.dataCollectionOptions"></a>

```java
public OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference getDataCollectionOptions();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference">OracleDatabaseDbSystemPropertiesDataCollectionOptionsOutputReference</a>

---

##### `dbHome`<sup>Required</sup> <a name="dbHome" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.dbHome"></a>

```java
public OracleDatabaseDbSystemPropertiesDbHomeOutputReference getDbHome();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHomeOutputReference">OracleDatabaseDbSystemPropertiesDbHomeOutputReference</a>

---

##### `dbSystemOptions`<sup>Required</sup> <a name="dbSystemOptions" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.dbSystemOptions"></a>

```java
public OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference getDbSystemOptions();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference">OracleDatabaseDbSystemPropertiesDbSystemOptionsOutputReference</a>

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `lifecycleState`<sup>Required</sup> <a name="lifecycleState" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.lifecycleState"></a>

```java
public java.lang.String getLifecycleState();
```

- *Type:* java.lang.String

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.timeZone"></a>

```java
public OracleDatabaseDbSystemPropertiesTimeZoneOutputReference getTimeZone();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference">OracleDatabaseDbSystemPropertiesTimeZoneOutputReference</a>

---

##### `computeCountInput`<sup>Optional</sup> <a name="computeCountInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.computeCountInput"></a>

```java
public java.lang.Number getComputeCountInput();
```

- *Type:* java.lang.Number

---

##### `computeModelInput`<sup>Optional</sup> <a name="computeModelInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.computeModelInput"></a>

```java
public java.lang.String getComputeModelInput();
```

- *Type:* java.lang.String

---

##### `databaseEditionInput`<sup>Optional</sup> <a name="databaseEditionInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.databaseEditionInput"></a>

```java
public java.lang.String getDatabaseEditionInput();
```

- *Type:* java.lang.String

---

##### `dataCollectionOptionsInput`<sup>Optional</sup> <a name="dataCollectionOptionsInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.dataCollectionOptionsInput"></a>

```java
public OracleDatabaseDbSystemPropertiesDataCollectionOptions getDataCollectionOptionsInput();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDataCollectionOptions">OracleDatabaseDbSystemPropertiesDataCollectionOptions</a>

---

##### `dataStorageSizeGbInput`<sup>Optional</sup> <a name="dataStorageSizeGbInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.dataStorageSizeGbInput"></a>

```java
public java.lang.Number getDataStorageSizeGbInput();
```

- *Type:* java.lang.Number

---

##### `dbHomeInput`<sup>Optional</sup> <a name="dbHomeInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.dbHomeInput"></a>

```java
public OracleDatabaseDbSystemPropertiesDbHome getDbHomeInput();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbHome">OracleDatabaseDbSystemPropertiesDbHome</a>

---

##### `dbSystemOptionsInput`<sup>Optional</sup> <a name="dbSystemOptionsInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.dbSystemOptionsInput"></a>

```java
public OracleDatabaseDbSystemPropertiesDbSystemOptions getDbSystemOptionsInput();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesDbSystemOptions">OracleDatabaseDbSystemPropertiesDbSystemOptions</a>

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.domainInput"></a>

```java
public java.lang.String getDomainInput();
```

- *Type:* java.lang.String

---

##### `hostnamePrefixInput`<sup>Optional</sup> <a name="hostnamePrefixInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.hostnamePrefixInput"></a>

```java
public java.lang.String getHostnamePrefixInput();
```

- *Type:* java.lang.String

---

##### `initialDataStorageSizeGbInput`<sup>Optional</sup> <a name="initialDataStorageSizeGbInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.initialDataStorageSizeGbInput"></a>

```java
public java.lang.Number getInitialDataStorageSizeGbInput();
```

- *Type:* java.lang.Number

---

##### `licenseModelInput`<sup>Optional</sup> <a name="licenseModelInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.licenseModelInput"></a>

```java
public java.lang.String getLicenseModelInput();
```

- *Type:* java.lang.String

---

##### `memorySizeGbInput`<sup>Optional</sup> <a name="memorySizeGbInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.memorySizeGbInput"></a>

```java
public java.lang.Number getMemorySizeGbInput();
```

- *Type:* java.lang.Number

---

##### `nodeCountInput`<sup>Optional</sup> <a name="nodeCountInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.nodeCountInput"></a>

```java
public java.lang.Number getNodeCountInput();
```

- *Type:* java.lang.Number

---

##### `privateIpInput`<sup>Optional</sup> <a name="privateIpInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.privateIpInput"></a>

```java
public java.lang.String getPrivateIpInput();
```

- *Type:* java.lang.String

---

##### `recoStorageSizeGbInput`<sup>Optional</sup> <a name="recoStorageSizeGbInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.recoStorageSizeGbInput"></a>

```java
public java.lang.Number getRecoStorageSizeGbInput();
```

- *Type:* java.lang.Number

---

##### `shapeInput`<sup>Optional</sup> <a name="shapeInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.shapeInput"></a>

```java
public java.lang.String getShapeInput();
```

- *Type:* java.lang.String

---

##### `sshPublicKeysInput`<sup>Optional</sup> <a name="sshPublicKeysInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.sshPublicKeysInput"></a>

```java
public java.util.List<java.lang.String> getSshPublicKeysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.timeZoneInput"></a>

```java
public OracleDatabaseDbSystemPropertiesTimeZone getTimeZoneInput();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZone">OracleDatabaseDbSystemPropertiesTimeZone</a>

---

##### `computeCount`<sup>Required</sup> <a name="computeCount" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.computeCount"></a>

```java
public java.lang.Number getComputeCount();
```

- *Type:* java.lang.Number

---

##### `computeModel`<sup>Required</sup> <a name="computeModel" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.computeModel"></a>

```java
public java.lang.String getComputeModel();
```

- *Type:* java.lang.String

---

##### `databaseEdition`<sup>Required</sup> <a name="databaseEdition" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.databaseEdition"></a>

```java
public java.lang.String getDatabaseEdition();
```

- *Type:* java.lang.String

---

##### `dataStorageSizeGb`<sup>Required</sup> <a name="dataStorageSizeGb" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.dataStorageSizeGb"></a>

```java
public java.lang.Number getDataStorageSizeGb();
```

- *Type:* java.lang.Number

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `hostnamePrefix`<sup>Required</sup> <a name="hostnamePrefix" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.hostnamePrefix"></a>

```java
public java.lang.String getHostnamePrefix();
```

- *Type:* java.lang.String

---

##### `initialDataStorageSizeGb`<sup>Required</sup> <a name="initialDataStorageSizeGb" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.initialDataStorageSizeGb"></a>

```java
public java.lang.Number getInitialDataStorageSizeGb();
```

- *Type:* java.lang.Number

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.licenseModel"></a>

```java
public java.lang.String getLicenseModel();
```

- *Type:* java.lang.String

---

##### `memorySizeGb`<sup>Required</sup> <a name="memorySizeGb" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.memorySizeGb"></a>

```java
public java.lang.Number getMemorySizeGb();
```

- *Type:* java.lang.Number

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.nodeCount"></a>

```java
public java.lang.Number getNodeCount();
```

- *Type:* java.lang.Number

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.privateIp"></a>

```java
public java.lang.String getPrivateIp();
```

- *Type:* java.lang.String

---

##### `recoStorageSizeGb`<sup>Required</sup> <a name="recoStorageSizeGb" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.recoStorageSizeGb"></a>

```java
public java.lang.Number getRecoStorageSizeGb();
```

- *Type:* java.lang.Number

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

---

##### `sshPublicKeys`<sup>Required</sup> <a name="sshPublicKeys" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.sshPublicKeys"></a>

```java
public java.util.List<java.lang.String> getSshPublicKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesOutputReference.property.internalValue"></a>

```java
public OracleDatabaseDbSystemProperties getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemProperties">OracleDatabaseDbSystemProperties</a>

---


### OracleDatabaseDbSystemPropertiesTimeZoneOutputReference <a name="OracleDatabaseDbSystemPropertiesTimeZoneOutputReference" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_db_system.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference;

new OracleDatabaseDbSystemPropertiesTimeZoneOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.resetId">resetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.resetId"></a>

```java
public void resetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZone">OracleDatabaseDbSystemPropertiesTimeZone</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZoneOutputReference.property.internalValue"></a>

```java
public OracleDatabaseDbSystemPropertiesTimeZone getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemPropertiesTimeZone">OracleDatabaseDbSystemPropertiesTimeZone</a>

---


### OracleDatabaseDbSystemTimeoutsOutputReference <a name="OracleDatabaseDbSystemTimeoutsOutputReference" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_db_system.OracleDatabaseDbSystemTimeoutsOutputReference;

new OracleDatabaseDbSystemTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeouts">OracleDatabaseDbSystemTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|OracleDatabaseDbSystemTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.oracleDatabaseDbSystem.OracleDatabaseDbSystemTimeouts">OracleDatabaseDbSystemTimeouts</a>

---



