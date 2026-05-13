# `oracleDatabaseExadbVmCluster` Submodule <a name="`oracleDatabaseExadbVmCluster` Submodule" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OracleDatabaseExadbVmCluster <a name="OracleDatabaseExadbVmCluster" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_exadb_vm_cluster google_oracle_database_exadb_vm_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_exadb_vm_cluster.OracleDatabaseExadbVmCluster;

OracleDatabaseExadbVmCluster.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .backupOdbSubnet(java.lang.String)
    .displayName(java.lang.String)
    .exadbVmClusterId(java.lang.String)
    .location(java.lang.String)
    .odbSubnet(java.lang.String)
    .properties(OracleDatabaseExadbVmClusterProperties)
//  .deletionProtection(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .odbNetwork(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(OracleDatabaseExadbVmClusterTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.backupOdbSubnet">backupOdbSubnet</a></code> | <code>java.lang.String</code> | The name of the backup OdbSubnet associated with the ExadbVmCluster. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name for the ExadbVmCluster. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.exadbVmClusterId">exadbVmClusterId</a></code> | <code>java.lang.String</code> | The ID of the ExadbVmCluster to create. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.odbSubnet">odbSubnet</a></code> | <code>java.lang.String</code> | The name of the OdbSubnet associated with the ExadbVmCluster for IP allocation. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.properties">properties</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties">OracleDatabaseExadbVmClusterProperties</a></code> | properties block. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether or not to allow Terraform to destroy the instance. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_exadb_vm_cluster#id OracleDatabaseExadbVmCluster#id}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels or tags associated with the ExadbVmCluster. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.odbNetwork">odbNetwork</a></code> | <code>java.lang.String</code> | The name of the OdbNetwork associated with the ExadbVmCluster. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_exadb_vm_cluster#project OracleDatabaseExadbVmCluster#project}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeouts">OracleDatabaseExadbVmClusterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `backupOdbSubnet`<sup>Required</sup> <a name="backupOdbSubnet" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.backupOdbSubnet"></a>

- *Type:* java.lang.String

The name of the backup OdbSubnet associated with the ExadbVmCluster. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_exadb_vm_cluster#backup_odb_subnet OracleDatabaseExadbVmCluster#backup_odb_subnet}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The display name for the ExadbVmCluster.

The name does not have to
be unique within your project. The name must be 1-255 characters long and
can only contain alphanumeric characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_exadb_vm_cluster#display_name OracleDatabaseExadbVmCluster#display_name}

---

##### `exadbVmClusterId`<sup>Required</sup> <a name="exadbVmClusterId" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.exadbVmClusterId"></a>

- *Type:* java.lang.String

The ID of the ExadbVmCluster to create.

This value is
restricted to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of
63 characters in length. The value must start with a letter and end with a
letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_exadb_vm_cluster#exadb_vm_cluster_id OracleDatabaseExadbVmCluster#exadb_vm_cluster_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_exadb_vm_cluster#location OracleDatabaseExadbVmCluster#location}

---

##### `odbSubnet`<sup>Required</sup> <a name="odbSubnet" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.odbSubnet"></a>

- *Type:* java.lang.String

The name of the OdbSubnet associated with the ExadbVmCluster for IP allocation. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_exadb_vm_cluster#odb_subnet OracleDatabaseExadbVmCluster#odb_subnet}

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.properties"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties">OracleDatabaseExadbVmClusterProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_exadb_vm_cluster#properties OracleDatabaseExadbVmCluster#properties}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.deletionProtection"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_exadb_vm_cluster#deletion_protection OracleDatabaseExadbVmCluster#deletion_protection}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_exadb_vm_cluster#id OracleDatabaseExadbVmCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels or tags associated with the ExadbVmCluster.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_exadb_vm_cluster#labels OracleDatabaseExadbVmCluster#labels}

---

##### `odbNetwork`<sup>Optional</sup> <a name="odbNetwork" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.odbNetwork"></a>

- *Type:* java.lang.String

The name of the OdbNetwork associated with the ExadbVmCluster.

Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}
It is optional but if specified, this should match the parent ODBNetwork of
the OdbSubnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_exadb_vm_cluster#odb_network OracleDatabaseExadbVmCluster#odb_network}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_exadb_vm_cluster#project OracleDatabaseExadbVmCluster#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeouts">OracleDatabaseExadbVmClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_exadb_vm_cluster#timeouts OracleDatabaseExadbVmCluster#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.putProperties">putProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.resetOdbNetwork">resetOdbNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putProperties` <a name="putProperties" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.putProperties"></a>

```java
public void putProperties(OracleDatabaseExadbVmClusterProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties">OracleDatabaseExadbVmClusterProperties</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.putTimeouts"></a>

```java
public void putTimeouts(OracleDatabaseExadbVmClusterTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeouts">OracleDatabaseExadbVmClusterTimeouts</a>

---

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.resetDeletionProtection"></a>

```java
public void resetDeletionProtection()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetOdbNetwork` <a name="resetOdbNetwork" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.resetOdbNetwork"></a>

```java
public void resetOdbNetwork()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OracleDatabaseExadbVmCluster resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.isConstruct"></a>

```java
import io.cdktn.providers.google.oracle_database_exadb_vm_cluster.OracleDatabaseExadbVmCluster;

OracleDatabaseExadbVmCluster.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.isTerraformElement"></a>

```java
import io.cdktn.providers.google.oracle_database_exadb_vm_cluster.OracleDatabaseExadbVmCluster;

OracleDatabaseExadbVmCluster.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.isTerraformResource"></a>

```java
import io.cdktn.providers.google.oracle_database_exadb_vm_cluster.OracleDatabaseExadbVmCluster;

OracleDatabaseExadbVmCluster.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.oracle_database_exadb_vm_cluster.OracleDatabaseExadbVmCluster;

OracleDatabaseExadbVmCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OracleDatabaseExadbVmCluster.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a OracleDatabaseExadbVmCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OracleDatabaseExadbVmCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OracleDatabaseExadbVmCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_exadb_vm_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the OracleDatabaseExadbVmCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.entitlementId">entitlementId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.gcpOracleZone">gcpOracleZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference">OracleDatabaseExadbVmClusterPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference">OracleDatabaseExadbVmClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.backupOdbSubnetInput">backupOdbSubnetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.exadbVmClusterIdInput">exadbVmClusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.odbNetworkInput">odbNetworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.odbSubnetInput">odbSubnetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.propertiesInput">propertiesInput</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties">OracleDatabaseExadbVmClusterProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeouts">OracleDatabaseExadbVmClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.backupOdbSubnet">backupOdbSubnet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.exadbVmClusterId">exadbVmClusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.odbNetwork">odbNetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.odbSubnet">odbSubnet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `entitlementId`<sup>Required</sup> <a name="entitlementId" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.entitlementId"></a>

```java
public java.lang.String getEntitlementId();
```

- *Type:* java.lang.String

---

##### `gcpOracleZone`<sup>Required</sup> <a name="gcpOracleZone" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.gcpOracleZone"></a>

```java
public java.lang.String getGcpOracleZone();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.properties"></a>

```java
public OracleDatabaseExadbVmClusterPropertiesOutputReference getProperties();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference">OracleDatabaseExadbVmClusterPropertiesOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.timeouts"></a>

```java
public OracleDatabaseExadbVmClusterTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference">OracleDatabaseExadbVmClusterTimeoutsOutputReference</a>

---

##### `backupOdbSubnetInput`<sup>Optional</sup> <a name="backupOdbSubnetInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.backupOdbSubnetInput"></a>

```java
public java.lang.String getBackupOdbSubnetInput();
```

- *Type:* java.lang.String

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.deletionProtectionInput"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtectionInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `exadbVmClusterIdInput`<sup>Optional</sup> <a name="exadbVmClusterIdInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.exadbVmClusterIdInput"></a>

```java
public java.lang.String getExadbVmClusterIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `odbNetworkInput`<sup>Optional</sup> <a name="odbNetworkInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.odbNetworkInput"></a>

```java
public java.lang.String getOdbNetworkInput();
```

- *Type:* java.lang.String

---

##### `odbSubnetInput`<sup>Optional</sup> <a name="odbSubnetInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.odbSubnetInput"></a>

```java
public java.lang.String getOdbSubnetInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.propertiesInput"></a>

```java
public OracleDatabaseExadbVmClusterProperties getPropertiesInput();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties">OracleDatabaseExadbVmClusterProperties</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.timeoutsInput"></a>

```java
public IResolvable|OracleDatabaseExadbVmClusterTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeouts">OracleDatabaseExadbVmClusterTimeouts</a>

---

##### `backupOdbSubnet`<sup>Required</sup> <a name="backupOdbSubnet" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.backupOdbSubnet"></a>

```java
public java.lang.String getBackupOdbSubnet();
```

- *Type:* java.lang.String

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.deletionProtection"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtection();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `exadbVmClusterId`<sup>Required</sup> <a name="exadbVmClusterId" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.exadbVmClusterId"></a>

```java
public java.lang.String getExadbVmClusterId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `odbNetwork`<sup>Required</sup> <a name="odbNetwork" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.odbNetwork"></a>

```java
public java.lang.String getOdbNetwork();
```

- *Type:* java.lang.String

---

##### `odbSubnet`<sup>Required</sup> <a name="odbSubnet" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.odbSubnet"></a>

```java
public java.lang.String getOdbSubnet();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OracleDatabaseExadbVmClusterConfig <a name="OracleDatabaseExadbVmClusterConfig" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_exadb_vm_cluster.OracleDatabaseExadbVmClusterConfig;

OracleDatabaseExadbVmClusterConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .backupOdbSubnet(java.lang.String)
    .displayName(java.lang.String)
    .exadbVmClusterId(java.lang.String)
    .location(java.lang.String)
    .odbSubnet(java.lang.String)
    .properties(OracleDatabaseExadbVmClusterProperties)
//  .deletionProtection(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .odbNetwork(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(OracleDatabaseExadbVmClusterTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.backupOdbSubnet">backupOdbSubnet</a></code> | <code>java.lang.String</code> | The name of the backup OdbSubnet associated with the ExadbVmCluster. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The display name for the ExadbVmCluster. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.exadbVmClusterId">exadbVmClusterId</a></code> | <code>java.lang.String</code> | The ID of the ExadbVmCluster to create. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.odbSubnet">odbSubnet</a></code> | <code>java.lang.String</code> | The name of the OdbSubnet associated with the ExadbVmCluster for IP allocation. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties">OracleDatabaseExadbVmClusterProperties</a></code> | properties block. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether or not to allow Terraform to destroy the instance. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_exadb_vm_cluster#id OracleDatabaseExadbVmCluster#id}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels or tags associated with the ExadbVmCluster. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.odbNetwork">odbNetwork</a></code> | <code>java.lang.String</code> | The name of the OdbNetwork associated with the ExadbVmCluster. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_exadb_vm_cluster#project OracleDatabaseExadbVmCluster#project}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeouts">OracleDatabaseExadbVmClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `backupOdbSubnet`<sup>Required</sup> <a name="backupOdbSubnet" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.backupOdbSubnet"></a>

```java
public java.lang.String getBackupOdbSubnet();
```

- *Type:* java.lang.String

The name of the backup OdbSubnet associated with the ExadbVmCluster. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_exadb_vm_cluster#backup_odb_subnet OracleDatabaseExadbVmCluster#backup_odb_subnet}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The display name for the ExadbVmCluster.

The name does not have to
be unique within your project. The name must be 1-255 characters long and
can only contain alphanumeric characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_exadb_vm_cluster#display_name OracleDatabaseExadbVmCluster#display_name}

---

##### `exadbVmClusterId`<sup>Required</sup> <a name="exadbVmClusterId" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.exadbVmClusterId"></a>

```java
public java.lang.String getExadbVmClusterId();
```

- *Type:* java.lang.String

The ID of the ExadbVmCluster to create.

This value is
restricted to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of
63 characters in length. The value must start with a letter and end with a
letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_exadb_vm_cluster#exadb_vm_cluster_id OracleDatabaseExadbVmCluster#exadb_vm_cluster_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_exadb_vm_cluster#location OracleDatabaseExadbVmCluster#location}

---

##### `odbSubnet`<sup>Required</sup> <a name="odbSubnet" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.odbSubnet"></a>

```java
public java.lang.String getOdbSubnet();
```

- *Type:* java.lang.String

The name of the OdbSubnet associated with the ExadbVmCluster for IP allocation. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_exadb_vm_cluster#odb_subnet OracleDatabaseExadbVmCluster#odb_subnet}

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.properties"></a>

```java
public OracleDatabaseExadbVmClusterProperties getProperties();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties">OracleDatabaseExadbVmClusterProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_exadb_vm_cluster#properties OracleDatabaseExadbVmCluster#properties}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.deletionProtection"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtection();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_exadb_vm_cluster#deletion_protection OracleDatabaseExadbVmCluster#deletion_protection}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_exadb_vm_cluster#id OracleDatabaseExadbVmCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels or tags associated with the ExadbVmCluster.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_exadb_vm_cluster#labels OracleDatabaseExadbVmCluster#labels}

---

##### `odbNetwork`<sup>Optional</sup> <a name="odbNetwork" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.odbNetwork"></a>

```java
public java.lang.String getOdbNetwork();
```

- *Type:* java.lang.String

The name of the OdbNetwork associated with the ExadbVmCluster.

Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}
It is optional but if specified, this should match the parent ODBNetwork of
the OdbSubnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_exadb_vm_cluster#odb_network OracleDatabaseExadbVmCluster#odb_network}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_exadb_vm_cluster#project OracleDatabaseExadbVmCluster#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.timeouts"></a>

```java
public OracleDatabaseExadbVmClusterTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeouts">OracleDatabaseExadbVmClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_exadb_vm_cluster#timeouts OracleDatabaseExadbVmCluster#timeouts}

---

### OracleDatabaseExadbVmClusterProperties <a name="OracleDatabaseExadbVmClusterProperties" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_exadb_vm_cluster.OracleDatabaseExadbVmClusterProperties;

OracleDatabaseExadbVmClusterProperties.builder()
    .enabledEcpuCountPerNode(java.lang.Number)
    .exascaleDbStorageVault(java.lang.String)
    .gridImageId(java.lang.String)
    .hostnamePrefix(java.lang.String)
    .nodeCount(java.lang.Number)
    .shapeAttribute(java.lang.String)
    .sshPublicKeys(java.util.List<java.lang.String>)
    .vmFileSystemStorage(OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage)
//  .additionalEcpuCountPerNode(java.lang.Number)
//  .clusterName(java.lang.String)
//  .dataCollectionOptions(OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions)
//  .licenseModel(java.lang.String)
//  .scanListenerPortTcp(java.lang.Number)
//  .timeZone(OracleDatabaseExadbVmClusterPropertiesTimeZone)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.enabledEcpuCountPerNode">enabledEcpuCountPerNode</a></code> | <code>java.lang.Number</code> | The number of ECPUs enabled per node for an exadata vm cluster on exascale infrastructure. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.exascaleDbStorageVault">exascaleDbStorageVault</a></code> | <code>java.lang.String</code> | The name of ExascaleDbStorageVault associated with the ExadbVmCluster. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.gridImageId">gridImageId</a></code> | <code>java.lang.String</code> | Grid Infrastructure Version. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.hostnamePrefix">hostnamePrefix</a></code> | <code>java.lang.String</code> | Prefix for VM cluster host names. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | The number of nodes/VMs in the ExadbVmCluster. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.shapeAttribute">shapeAttribute</a></code> | <code>java.lang.String</code> | The shape attribute of the VM cluster. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.sshPublicKeys">sshPublicKeys</a></code> | <code>java.util.List<java.lang.String></code> | The SSH public keys for the ExadbVmCluster. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.vmFileSystemStorage">vmFileSystemStorage</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage">OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage</a></code> | vm_file_system_storage block. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.additionalEcpuCountPerNode">additionalEcpuCountPerNode</a></code> | <code>java.lang.Number</code> | The number of additional ECPUs per node for an Exadata VM cluster on exascale infrastructure. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | The cluster name for Exascale vm cluster. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.dataCollectionOptions">dataCollectionOptions</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions">OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions</a></code> | data_collection_options block. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | The license type of the ExadbVmCluster. Possible values: LICENSE_INCLUDED BRING_YOUR_OWN_LICENSE. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.scanListenerPortTcp">scanListenerPortTcp</a></code> | <code>java.lang.Number</code> | SCAN listener port - TCP. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.timeZone">timeZone</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZone">OracleDatabaseExadbVmClusterPropertiesTimeZone</a></code> | time_zone block. |

---

##### `enabledEcpuCountPerNode`<sup>Required</sup> <a name="enabledEcpuCountPerNode" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.enabledEcpuCountPerNode"></a>

```java
public java.lang.Number getEnabledEcpuCountPerNode();
```

- *Type:* java.lang.Number

The number of ECPUs enabled per node for an exadata vm cluster on exascale infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_exadb_vm_cluster#enabled_ecpu_count_per_node OracleDatabaseExadbVmCluster#enabled_ecpu_count_per_node}

---

##### `exascaleDbStorageVault`<sup>Required</sup> <a name="exascaleDbStorageVault" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.exascaleDbStorageVault"></a>

```java
public java.lang.String getExascaleDbStorageVault();
```

- *Type:* java.lang.String

The name of ExascaleDbStorageVault associated with the ExadbVmCluster.

It can refer to an existing ExascaleDbStorageVault. Or a new one can be
created during the ExadbVmCluster creation (requires
storage_vault_properties to be set).
Format:
projects/{project}/locations/{location}/exascaleDbStorageVaults/{exascale_db_storage_vault}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_exadb_vm_cluster#exascale_db_storage_vault OracleDatabaseExadbVmCluster#exascale_db_storage_vault}

---

##### `gridImageId`<sup>Required</sup> <a name="gridImageId" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.gridImageId"></a>

```java
public java.lang.String getGridImageId();
```

- *Type:* java.lang.String

Grid Infrastructure Version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_exadb_vm_cluster#grid_image_id OracleDatabaseExadbVmCluster#grid_image_id}

---

##### `hostnamePrefix`<sup>Required</sup> <a name="hostnamePrefix" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.hostnamePrefix"></a>

```java
public java.lang.String getHostnamePrefix();
```

- *Type:* java.lang.String

Prefix for VM cluster host names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_exadb_vm_cluster#hostname_prefix OracleDatabaseExadbVmCluster#hostname_prefix}

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.nodeCount"></a>

```java
public java.lang.Number getNodeCount();
```

- *Type:* java.lang.Number

The number of nodes/VMs in the ExadbVmCluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_exadb_vm_cluster#node_count OracleDatabaseExadbVmCluster#node_count}

---

##### `shapeAttribute`<sup>Required</sup> <a name="shapeAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.shapeAttribute"></a>

```java
public java.lang.String getShapeAttribute();
```

- *Type:* java.lang.String

The shape attribute of the VM cluster.

The type of Exascale storage used
for Exadata VM cluster. The default is SMART_STORAGE which supports Oracle
Database 23ai and later
Possible values:
SMART_STORAGE
BLOCK_STORAGE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_exadb_vm_cluster#shape_attribute OracleDatabaseExadbVmCluster#shape_attribute}

---

##### `sshPublicKeys`<sup>Required</sup> <a name="sshPublicKeys" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.sshPublicKeys"></a>

```java
public java.util.List<java.lang.String> getSshPublicKeys();
```

- *Type:* java.util.List<java.lang.String>

The SSH public keys for the ExadbVmCluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_exadb_vm_cluster#ssh_public_keys OracleDatabaseExadbVmCluster#ssh_public_keys}

---

##### `vmFileSystemStorage`<sup>Required</sup> <a name="vmFileSystemStorage" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.vmFileSystemStorage"></a>

```java
public OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage getVmFileSystemStorage();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage">OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage</a>

vm_file_system_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_exadb_vm_cluster#vm_file_system_storage OracleDatabaseExadbVmCluster#vm_file_system_storage}

---

##### `additionalEcpuCountPerNode`<sup>Optional</sup> <a name="additionalEcpuCountPerNode" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.additionalEcpuCountPerNode"></a>

```java
public java.lang.Number getAdditionalEcpuCountPerNode();
```

- *Type:* java.lang.Number

The number of additional ECPUs per node for an Exadata VM cluster on exascale infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_exadb_vm_cluster#additional_ecpu_count_per_node OracleDatabaseExadbVmCluster#additional_ecpu_count_per_node}

---

##### `clusterName`<sup>Optional</sup> <a name="clusterName" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

The cluster name for Exascale vm cluster.

The cluster name must begin with
an alphabetic character and may contain hyphens(-) but can not contain
underscores(_). It should be not more than 11 characters and is not case
sensitive.
OCI Cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_exadb_vm_cluster#cluster_name OracleDatabaseExadbVmCluster#cluster_name}

---

##### `dataCollectionOptions`<sup>Optional</sup> <a name="dataCollectionOptions" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.dataCollectionOptions"></a>

```java
public OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions getDataCollectionOptions();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions">OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions</a>

data_collection_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_exadb_vm_cluster#data_collection_options OracleDatabaseExadbVmCluster#data_collection_options}

---

##### `licenseModel`<sup>Optional</sup> <a name="licenseModel" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.licenseModel"></a>

```java
public java.lang.String getLicenseModel();
```

- *Type:* java.lang.String

The license type of the ExadbVmCluster. Possible values: LICENSE_INCLUDED BRING_YOUR_OWN_LICENSE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_exadb_vm_cluster#license_model OracleDatabaseExadbVmCluster#license_model}

---

##### `scanListenerPortTcp`<sup>Optional</sup> <a name="scanListenerPortTcp" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.scanListenerPortTcp"></a>

```java
public java.lang.Number getScanListenerPortTcp();
```

- *Type:* java.lang.Number

SCAN listener port - TCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_exadb_vm_cluster#scan_listener_port_tcp OracleDatabaseExadbVmCluster#scan_listener_port_tcp}

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.timeZone"></a>

```java
public OracleDatabaseExadbVmClusterPropertiesTimeZone getTimeZone();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZone">OracleDatabaseExadbVmClusterPropertiesTimeZone</a>

time_zone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_exadb_vm_cluster#time_zone OracleDatabaseExadbVmCluster#time_zone}

---

### OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions <a name="OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_exadb_vm_cluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions;

OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions.builder()
//  .isDiagnosticsEventsEnabled(java.lang.Boolean|IResolvable)
//  .isHealthMonitoringEnabled(java.lang.Boolean|IResolvable)
//  .isIncidentLogsEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions.property.isDiagnosticsEventsEnabled">isDiagnosticsEventsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether to enable data collection for diagnostics. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions.property.isHealthMonitoringEnabled">isHealthMonitoringEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether to enable health monitoring. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions.property.isIncidentLogsEnabled">isIncidentLogsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether to enable incident logs and trace collection. |

---

##### `isDiagnosticsEventsEnabled`<sup>Optional</sup> <a name="isDiagnosticsEventsEnabled" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions.property.isDiagnosticsEventsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsDiagnosticsEventsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether to enable data collection for diagnostics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_exadb_vm_cluster#is_diagnostics_events_enabled OracleDatabaseExadbVmCluster#is_diagnostics_events_enabled}

---

##### `isHealthMonitoringEnabled`<sup>Optional</sup> <a name="isHealthMonitoringEnabled" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions.property.isHealthMonitoringEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsHealthMonitoringEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether to enable health monitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_exadb_vm_cluster#is_health_monitoring_enabled OracleDatabaseExadbVmCluster#is_health_monitoring_enabled}

---

##### `isIncidentLogsEnabled`<sup>Optional</sup> <a name="isIncidentLogsEnabled" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions.property.isIncidentLogsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsIncidentLogsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether to enable incident logs and trace collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_exadb_vm_cluster#is_incident_logs_enabled OracleDatabaseExadbVmCluster#is_incident_logs_enabled}

---

### OracleDatabaseExadbVmClusterPropertiesTimeZone <a name="OracleDatabaseExadbVmClusterPropertiesTimeZone" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZone"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZone.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_exadb_vm_cluster.OracleDatabaseExadbVmClusterPropertiesTimeZone;

OracleDatabaseExadbVmClusterPropertiesTimeZone.builder()
//  .id(java.lang.String)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZone.property.id">id</a></code> | <code>java.lang.String</code> | IANA Time Zone Database time zone. For example "America/New_York". |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZone.property.version">version</a></code> | <code>java.lang.String</code> | IANA Time Zone Database version number. For example "2019a". |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZone.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

IANA Time Zone Database time zone. For example "America/New_York".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_exadb_vm_cluster#id OracleDatabaseExadbVmCluster#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZone.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

IANA Time Zone Database version number. For example "2019a".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_exadb_vm_cluster#version OracleDatabaseExadbVmCluster#version}

---

### OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage <a name="OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_exadb_vm_cluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage;

OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage.builder()
    .sizeInGbsPerNode(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage.property.sizeInGbsPerNode">sizeInGbsPerNode</a></code> | <code>java.lang.Number</code> | The storage allocation for the exadbvmcluster per node, in gigabytes (GB). |

---

##### `sizeInGbsPerNode`<sup>Required</sup> <a name="sizeInGbsPerNode" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage.property.sizeInGbsPerNode"></a>

```java
public java.lang.Number getSizeInGbsPerNode();
```

- *Type:* java.lang.Number

The storage allocation for the exadbvmcluster per node, in gigabytes (GB).

This field is used to calculate the total storage allocation for the
exadbvmcluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_exadb_vm_cluster#size_in_gbs_per_node OracleDatabaseExadbVmCluster#size_in_gbs_per_node}

---

### OracleDatabaseExadbVmClusterTimeouts <a name="OracleDatabaseExadbVmClusterTimeouts" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_exadb_vm_cluster.OracleDatabaseExadbVmClusterTimeouts;

OracleDatabaseExadbVmClusterTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_exadb_vm_cluster#create OracleDatabaseExadbVmCluster#create}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_exadb_vm_cluster#delete OracleDatabaseExadbVmCluster#delete}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_exadb_vm_cluster#update OracleDatabaseExadbVmCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_exadb_vm_cluster#create OracleDatabaseExadbVmCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_exadb_vm_cluster#delete OracleDatabaseExadbVmCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/oracle_database_exadb_vm_cluster#update OracleDatabaseExadbVmCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference <a name="OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_exadb_vm_cluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference;

new OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.resetIsDiagnosticsEventsEnabled">resetIsDiagnosticsEventsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.resetIsHealthMonitoringEnabled">resetIsHealthMonitoringEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.resetIsIncidentLogsEnabled">resetIsIncidentLogsEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsDiagnosticsEventsEnabled` <a name="resetIsDiagnosticsEventsEnabled" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.resetIsDiagnosticsEventsEnabled"></a>

```java
public void resetIsDiagnosticsEventsEnabled()
```

##### `resetIsHealthMonitoringEnabled` <a name="resetIsHealthMonitoringEnabled" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.resetIsHealthMonitoringEnabled"></a>

```java
public void resetIsHealthMonitoringEnabled()
```

##### `resetIsIncidentLogsEnabled` <a name="resetIsIncidentLogsEnabled" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.resetIsIncidentLogsEnabled"></a>

```java
public void resetIsIncidentLogsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabledInput">isDiagnosticsEventsEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabledInput">isHealthMonitoringEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isIncidentLogsEnabledInput">isIncidentLogsEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled">isDiagnosticsEventsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled">isHealthMonitoringEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled">isIncidentLogsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions">OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isDiagnosticsEventsEnabledInput`<sup>Optional</sup> <a name="isDiagnosticsEventsEnabledInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getIsDiagnosticsEventsEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isHealthMonitoringEnabledInput`<sup>Optional</sup> <a name="isHealthMonitoringEnabledInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getIsHealthMonitoringEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isIncidentLogsEnabledInput`<sup>Optional</sup> <a name="isIncidentLogsEnabledInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isIncidentLogsEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getIsIncidentLogsEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isDiagnosticsEventsEnabled`<sup>Required</sup> <a name="isDiagnosticsEventsEnabled" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsDiagnosticsEventsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isHealthMonitoringEnabled`<sup>Required</sup> <a name="isHealthMonitoringEnabled" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsHealthMonitoringEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isIncidentLogsEnabled`<sup>Required</sup> <a name="isIncidentLogsEnabled" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsIncidentLogsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.internalValue"></a>

```java
public OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions">OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions</a>

---


### OracleDatabaseExadbVmClusterPropertiesOutputReference <a name="OracleDatabaseExadbVmClusterPropertiesOutputReference" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_exadb_vm_cluster.OracleDatabaseExadbVmClusterPropertiesOutputReference;

new OracleDatabaseExadbVmClusterPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.putDataCollectionOptions">putDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.putTimeZone">putTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.putVmFileSystemStorage">putVmFileSystemStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.resetAdditionalEcpuCountPerNode">resetAdditionalEcpuCountPerNode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.resetClusterName">resetClusterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.resetDataCollectionOptions">resetDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.resetLicenseModel">resetLicenseModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.resetScanListenerPortTcp">resetScanListenerPortTcp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataCollectionOptions` <a name="putDataCollectionOptions" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.putDataCollectionOptions"></a>

```java
public void putDataCollectionOptions(OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.putDataCollectionOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions">OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions</a>

---

##### `putTimeZone` <a name="putTimeZone" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.putTimeZone"></a>

```java
public void putTimeZone(OracleDatabaseExadbVmClusterPropertiesTimeZone value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.putTimeZone.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZone">OracleDatabaseExadbVmClusterPropertiesTimeZone</a>

---

##### `putVmFileSystemStorage` <a name="putVmFileSystemStorage" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.putVmFileSystemStorage"></a>

```java
public void putVmFileSystemStorage(OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.putVmFileSystemStorage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage">OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage</a>

---

##### `resetAdditionalEcpuCountPerNode` <a name="resetAdditionalEcpuCountPerNode" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.resetAdditionalEcpuCountPerNode"></a>

```java
public void resetAdditionalEcpuCountPerNode()
```

##### `resetClusterName` <a name="resetClusterName" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.resetClusterName"></a>

```java
public void resetClusterName()
```

##### `resetDataCollectionOptions` <a name="resetDataCollectionOptions" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.resetDataCollectionOptions"></a>

```java
public void resetDataCollectionOptions()
```

##### `resetLicenseModel` <a name="resetLicenseModel" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.resetLicenseModel"></a>

```java
public void resetLicenseModel()
```

##### `resetScanListenerPortTcp` <a name="resetScanListenerPortTcp" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.resetScanListenerPortTcp"></a>

```java
public void resetScanListenerPortTcp()
```

##### `resetTimeZone` <a name="resetTimeZone" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.resetTimeZone"></a>

```java
public void resetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.dataCollectionOptions">dataCollectionOptions</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference">OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.giVersion">giVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.lifecycleState">lifecycleState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.memorySizeGb">memorySizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.ociUri">ociUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.timeZone">timeZone</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference">OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.vmFileSystemStorage">vmFileSystemStorage</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference">OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.additionalEcpuCountPerNodeInput">additionalEcpuCountPerNodeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.clusterNameInput">clusterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.dataCollectionOptionsInput">dataCollectionOptionsInput</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions">OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.enabledEcpuCountPerNodeInput">enabledEcpuCountPerNodeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.exascaleDbStorageVaultInput">exascaleDbStorageVaultInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.gridImageIdInput">gridImageIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.hostnamePrefixInput">hostnamePrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.licenseModelInput">licenseModelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.nodeCountInput">nodeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.scanListenerPortTcpInput">scanListenerPortTcpInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.shapeAttributeInput">shapeAttributeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.sshPublicKeysInput">sshPublicKeysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZone">OracleDatabaseExadbVmClusterPropertiesTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.vmFileSystemStorageInput">vmFileSystemStorageInput</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage">OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.additionalEcpuCountPerNode">additionalEcpuCountPerNode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.enabledEcpuCountPerNode">enabledEcpuCountPerNode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.exascaleDbStorageVault">exascaleDbStorageVault</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.gridImageId">gridImageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.hostnamePrefix">hostnamePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.scanListenerPortTcp">scanListenerPortTcp</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.shapeAttribute">shapeAttribute</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.sshPublicKeys">sshPublicKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties">OracleDatabaseExadbVmClusterProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataCollectionOptions`<sup>Required</sup> <a name="dataCollectionOptions" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.dataCollectionOptions"></a>

```java
public OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference getDataCollectionOptions();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference">OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference</a>

---

##### `giVersion`<sup>Required</sup> <a name="giVersion" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.giVersion"></a>

```java
public java.lang.String getGiVersion();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `lifecycleState`<sup>Required</sup> <a name="lifecycleState" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.lifecycleState"></a>

```java
public java.lang.String getLifecycleState();
```

- *Type:* java.lang.String

---

##### `memorySizeGb`<sup>Required</sup> <a name="memorySizeGb" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.memorySizeGb"></a>

```java
public java.lang.Number getMemorySizeGb();
```

- *Type:* java.lang.Number

---

##### `ociUri`<sup>Required</sup> <a name="ociUri" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.ociUri"></a>

```java
public java.lang.String getOciUri();
```

- *Type:* java.lang.String

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.timeZone"></a>

```java
public OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference getTimeZone();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference">OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference</a>

---

##### `vmFileSystemStorage`<sup>Required</sup> <a name="vmFileSystemStorage" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.vmFileSystemStorage"></a>

```java
public OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference getVmFileSystemStorage();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference">OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference</a>

---

##### `additionalEcpuCountPerNodeInput`<sup>Optional</sup> <a name="additionalEcpuCountPerNodeInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.additionalEcpuCountPerNodeInput"></a>

```java
public java.lang.Number getAdditionalEcpuCountPerNodeInput();
```

- *Type:* java.lang.Number

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.clusterNameInput"></a>

```java
public java.lang.String getClusterNameInput();
```

- *Type:* java.lang.String

---

##### `dataCollectionOptionsInput`<sup>Optional</sup> <a name="dataCollectionOptionsInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.dataCollectionOptionsInput"></a>

```java
public OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions getDataCollectionOptionsInput();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions">OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions</a>

---

##### `enabledEcpuCountPerNodeInput`<sup>Optional</sup> <a name="enabledEcpuCountPerNodeInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.enabledEcpuCountPerNodeInput"></a>

```java
public java.lang.Number getEnabledEcpuCountPerNodeInput();
```

- *Type:* java.lang.Number

---

##### `exascaleDbStorageVaultInput`<sup>Optional</sup> <a name="exascaleDbStorageVaultInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.exascaleDbStorageVaultInput"></a>

```java
public java.lang.String getExascaleDbStorageVaultInput();
```

- *Type:* java.lang.String

---

##### `gridImageIdInput`<sup>Optional</sup> <a name="gridImageIdInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.gridImageIdInput"></a>

```java
public java.lang.String getGridImageIdInput();
```

- *Type:* java.lang.String

---

##### `hostnamePrefixInput`<sup>Optional</sup> <a name="hostnamePrefixInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.hostnamePrefixInput"></a>

```java
public java.lang.String getHostnamePrefixInput();
```

- *Type:* java.lang.String

---

##### `licenseModelInput`<sup>Optional</sup> <a name="licenseModelInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.licenseModelInput"></a>

```java
public java.lang.String getLicenseModelInput();
```

- *Type:* java.lang.String

---

##### `nodeCountInput`<sup>Optional</sup> <a name="nodeCountInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.nodeCountInput"></a>

```java
public java.lang.Number getNodeCountInput();
```

- *Type:* java.lang.Number

---

##### `scanListenerPortTcpInput`<sup>Optional</sup> <a name="scanListenerPortTcpInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.scanListenerPortTcpInput"></a>

```java
public java.lang.Number getScanListenerPortTcpInput();
```

- *Type:* java.lang.Number

---

##### `shapeAttributeInput`<sup>Optional</sup> <a name="shapeAttributeInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.shapeAttributeInput"></a>

```java
public java.lang.String getShapeAttributeInput();
```

- *Type:* java.lang.String

---

##### `sshPublicKeysInput`<sup>Optional</sup> <a name="sshPublicKeysInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.sshPublicKeysInput"></a>

```java
public java.util.List<java.lang.String> getSshPublicKeysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.timeZoneInput"></a>

```java
public OracleDatabaseExadbVmClusterPropertiesTimeZone getTimeZoneInput();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZone">OracleDatabaseExadbVmClusterPropertiesTimeZone</a>

---

##### `vmFileSystemStorageInput`<sup>Optional</sup> <a name="vmFileSystemStorageInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.vmFileSystemStorageInput"></a>

```java
public OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage getVmFileSystemStorageInput();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage">OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage</a>

---

##### `additionalEcpuCountPerNode`<sup>Required</sup> <a name="additionalEcpuCountPerNode" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.additionalEcpuCountPerNode"></a>

```java
public java.lang.Number getAdditionalEcpuCountPerNode();
```

- *Type:* java.lang.Number

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

---

##### `enabledEcpuCountPerNode`<sup>Required</sup> <a name="enabledEcpuCountPerNode" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.enabledEcpuCountPerNode"></a>

```java
public java.lang.Number getEnabledEcpuCountPerNode();
```

- *Type:* java.lang.Number

---

##### `exascaleDbStorageVault`<sup>Required</sup> <a name="exascaleDbStorageVault" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.exascaleDbStorageVault"></a>

```java
public java.lang.String getExascaleDbStorageVault();
```

- *Type:* java.lang.String

---

##### `gridImageId`<sup>Required</sup> <a name="gridImageId" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.gridImageId"></a>

```java
public java.lang.String getGridImageId();
```

- *Type:* java.lang.String

---

##### `hostnamePrefix`<sup>Required</sup> <a name="hostnamePrefix" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.hostnamePrefix"></a>

```java
public java.lang.String getHostnamePrefix();
```

- *Type:* java.lang.String

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.licenseModel"></a>

```java
public java.lang.String getLicenseModel();
```

- *Type:* java.lang.String

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.nodeCount"></a>

```java
public java.lang.Number getNodeCount();
```

- *Type:* java.lang.Number

---

##### `scanListenerPortTcp`<sup>Required</sup> <a name="scanListenerPortTcp" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.scanListenerPortTcp"></a>

```java
public java.lang.Number getScanListenerPortTcp();
```

- *Type:* java.lang.Number

---

##### `shapeAttribute`<sup>Required</sup> <a name="shapeAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.shapeAttribute"></a>

```java
public java.lang.String getShapeAttribute();
```

- *Type:* java.lang.String

---

##### `sshPublicKeys`<sup>Required</sup> <a name="sshPublicKeys" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.sshPublicKeys"></a>

```java
public java.util.List<java.lang.String> getSshPublicKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.internalValue"></a>

```java
public OracleDatabaseExadbVmClusterProperties getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties">OracleDatabaseExadbVmClusterProperties</a>

---


### OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference <a name="OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_exadb_vm_cluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference;

new OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZone">OracleDatabaseExadbVmClusterPropertiesTimeZone</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.internalValue"></a>

```java
public OracleDatabaseExadbVmClusterPropertiesTimeZone getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZone">OracleDatabaseExadbVmClusterPropertiesTimeZone</a>

---


### OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference <a name="OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_exadb_vm_cluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference;

new OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.property.sizeInGbsPerNodeInput">sizeInGbsPerNodeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.property.sizeInGbsPerNode">sizeInGbsPerNode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage">OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sizeInGbsPerNodeInput`<sup>Optional</sup> <a name="sizeInGbsPerNodeInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.property.sizeInGbsPerNodeInput"></a>

```java
public java.lang.Number getSizeInGbsPerNodeInput();
```

- *Type:* java.lang.Number

---

##### `sizeInGbsPerNode`<sup>Required</sup> <a name="sizeInGbsPerNode" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.property.sizeInGbsPerNode"></a>

```java
public java.lang.Number getSizeInGbsPerNode();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.property.internalValue"></a>

```java
public OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage">OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage</a>

---


### OracleDatabaseExadbVmClusterTimeoutsOutputReference <a name="OracleDatabaseExadbVmClusterTimeoutsOutputReference" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.oracle_database_exadb_vm_cluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference;

new OracleDatabaseExadbVmClusterTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeouts">OracleDatabaseExadbVmClusterTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|OracleDatabaseExadbVmClusterTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeouts">OracleDatabaseExadbVmClusterTimeouts</a>

---



