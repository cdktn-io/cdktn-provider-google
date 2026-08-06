# `oracleDatabaseExadbVmCluster` Submodule <a name="`oracleDatabaseExadbVmCluster` Submodule" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OracleDatabaseExadbVmCluster <a name="OracleDatabaseExadbVmCluster" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster google_oracle_database_exadb_vm_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer"></a>

```python
from cdktn_provider_google import oracle_database_exadb_vm_cluster

oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  backup_odb_subnet: str,
  display_name: str,
  exadb_vm_cluster_id: str,
  location: str,
  odb_subnet: str,
  properties: OracleDatabaseExadbVmClusterProperties,
  deletion_policy: str = None,
  deletion_protection: bool | IResolvable = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  odb_network: str = None,
  project: str = None,
  timeouts: OracleDatabaseExadbVmClusterTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.backupOdbSubnet">backup_odb_subnet</a></code> | <code>str</code> | The name of the backup OdbSubnet associated with the ExadbVmCluster. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The display name for the ExadbVmCluster. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.exadbVmClusterId">exadb_vm_cluster_id</a></code> | <code>str</code> | The ID of the ExadbVmCluster to create. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.odbSubnet">odb_subnet</a></code> | <code>str</code> | The name of the OdbSubnet associated with the ExadbVmCluster for IP allocation. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.properties">properties</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties">OracleDatabaseExadbVmClusterProperties</a></code> | properties block. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.deletionProtection">deletion_protection</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether or not to allow Terraform to destroy the instance. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#id OracleDatabaseExadbVmCluster#id}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels or tags associated with the ExadbVmCluster. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.odbNetwork">odb_network</a></code> | <code>str</code> | The name of the OdbNetwork associated with the ExadbVmCluster. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#project OracleDatabaseExadbVmCluster#project}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeouts">OracleDatabaseExadbVmClusterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `backup_odb_subnet`<sup>Required</sup> <a name="backup_odb_subnet" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.backupOdbSubnet"></a>

- *Type:* str

The name of the backup OdbSubnet associated with the ExadbVmCluster. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#backup_odb_subnet OracleDatabaseExadbVmCluster#backup_odb_subnet}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.displayName"></a>

- *Type:* str

The display name for the ExadbVmCluster.

The name does not have to
be unique within your project. The name must be 1-255 characters long and
can only contain alphanumeric characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#display_name OracleDatabaseExadbVmCluster#display_name}

---

##### `exadb_vm_cluster_id`<sup>Required</sup> <a name="exadb_vm_cluster_id" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.exadbVmClusterId"></a>

- *Type:* str

The ID of the ExadbVmCluster to create.

This value is
restricted to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of
63 characters in length. The value must start with a letter and end with a
letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#exadb_vm_cluster_id OracleDatabaseExadbVmCluster#exadb_vm_cluster_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#location OracleDatabaseExadbVmCluster#location}

---

##### `odb_subnet`<sup>Required</sup> <a name="odb_subnet" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.odbSubnet"></a>

- *Type:* str

The name of the OdbSubnet associated with the ExadbVmCluster for IP allocation. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#odb_subnet OracleDatabaseExadbVmCluster#odb_subnet}

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.properties"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties">OracleDatabaseExadbVmClusterProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#properties OracleDatabaseExadbVmCluster#properties}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#deletion_policy OracleDatabaseExadbVmCluster#deletion_policy}

---

##### `deletion_protection`<sup>Optional</sup> <a name="deletion_protection" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.deletionProtection"></a>

- *Type:* bool | cdktn.IResolvable

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#deletion_protection OracleDatabaseExadbVmCluster#deletion_protection}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#id OracleDatabaseExadbVmCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

The labels or tags associated with the ExadbVmCluster.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#labels OracleDatabaseExadbVmCluster#labels}

---

##### `odb_network`<sup>Optional</sup> <a name="odb_network" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.odbNetwork"></a>

- *Type:* str

The name of the OdbNetwork associated with the ExadbVmCluster.

Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}
It is optional but if specified, this should match the parent ODBNetwork of
the OdbSubnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#odb_network OracleDatabaseExadbVmCluster#odb_network}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#project OracleDatabaseExadbVmCluster#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeouts">OracleDatabaseExadbVmClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#timeouts OracleDatabaseExadbVmCluster#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.putProperties">put_properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.resetDeletionProtection">reset_deletion_protection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.resetOdbNetwork">reset_odb_network</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_properties` <a name="put_properties" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.putProperties"></a>

```python
def put_properties(
  enabled_ecpu_count_per_node: typing.Union[int, float],
  exascale_db_storage_vault: str,
  grid_image_id: str,
  hostname_prefix: str,
  node_count: typing.Union[int, float],
  shape_attribute: str,
  ssh_public_keys: typing.List[str],
  vm_file_system_storage: OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage,
  additional_ecpu_count_per_node: typing.Union[int, float] = None,
  cluster_name: str = None,
  data_collection_options: OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions = None,
  license_model: str = None,
  scan_listener_port_tcp: typing.Union[int, float] = None,
  time_zone: OracleDatabaseExadbVmClusterPropertiesTimeZone = None
) -> None
```

###### `enabled_ecpu_count_per_node`<sup>Required</sup> <a name="enabled_ecpu_count_per_node" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.putProperties.parameter.enabledEcpuCountPerNode"></a>

- *Type:* typing.Union[int, float]

The number of ECPUs enabled per node for an exadata vm cluster on exascale infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#enabled_ecpu_count_per_node OracleDatabaseExadbVmCluster#enabled_ecpu_count_per_node}

---

###### `exascale_db_storage_vault`<sup>Required</sup> <a name="exascale_db_storage_vault" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.putProperties.parameter.exascaleDbStorageVault"></a>

- *Type:* str

The name of ExascaleDbStorageVault associated with the ExadbVmCluster.

It can refer to an existing ExascaleDbStorageVault. Or a new one can be
created during the ExadbVmCluster creation (requires
storage_vault_properties to be set).
Format:
projects/{project}/locations/{location}/exascaleDbStorageVaults/{exascale_db_storage_vault}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#exascale_db_storage_vault OracleDatabaseExadbVmCluster#exascale_db_storage_vault}

---

###### `grid_image_id`<sup>Required</sup> <a name="grid_image_id" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.putProperties.parameter.gridImageId"></a>

- *Type:* str

Grid Infrastructure Version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#grid_image_id OracleDatabaseExadbVmCluster#grid_image_id}

---

###### `hostname_prefix`<sup>Required</sup> <a name="hostname_prefix" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.putProperties.parameter.hostnamePrefix"></a>

- *Type:* str

Prefix for VM cluster host names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#hostname_prefix OracleDatabaseExadbVmCluster#hostname_prefix}

---

###### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.putProperties.parameter.nodeCount"></a>

- *Type:* typing.Union[int, float]

The number of nodes/VMs in the ExadbVmCluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#node_count OracleDatabaseExadbVmCluster#node_count}

---

###### `shape_attribute`<sup>Required</sup> <a name="shape_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.putProperties.parameter.shapeAttribute"></a>

- *Type:* str

The shape attribute of the VM cluster.

The type of Exascale storage used
for Exadata VM cluster. The default is SMART_STORAGE which supports Oracle
Database 23ai and later
Possible values:
SMART_STORAGE
BLOCK_STORAGE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#shape_attribute OracleDatabaseExadbVmCluster#shape_attribute}

---

###### `ssh_public_keys`<sup>Required</sup> <a name="ssh_public_keys" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.putProperties.parameter.sshPublicKeys"></a>

- *Type:* typing.List[str]

The SSH public keys for the ExadbVmCluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#ssh_public_keys OracleDatabaseExadbVmCluster#ssh_public_keys}

---

###### `vm_file_system_storage`<sup>Required</sup> <a name="vm_file_system_storage" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.putProperties.parameter.vmFileSystemStorage"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage">OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage</a>

vm_file_system_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#vm_file_system_storage OracleDatabaseExadbVmCluster#vm_file_system_storage}

---

###### `additional_ecpu_count_per_node`<sup>Optional</sup> <a name="additional_ecpu_count_per_node" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.putProperties.parameter.additionalEcpuCountPerNode"></a>

- *Type:* typing.Union[int, float]

The number of additional ECPUs per node for an Exadata VM cluster on exascale infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#additional_ecpu_count_per_node OracleDatabaseExadbVmCluster#additional_ecpu_count_per_node}

---

###### `cluster_name`<sup>Optional</sup> <a name="cluster_name" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.putProperties.parameter.clusterName"></a>

- *Type:* str

The cluster name for Exascale vm cluster.

The cluster name must begin with
an alphabetic character and may contain hyphens(-) but can not contain
underscores(_). It should be not more than 11 characters and is not case
sensitive.
OCI Cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#cluster_name OracleDatabaseExadbVmCluster#cluster_name}

---

###### `data_collection_options`<sup>Optional</sup> <a name="data_collection_options" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.putProperties.parameter.dataCollectionOptions"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions">OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions</a>

data_collection_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#data_collection_options OracleDatabaseExadbVmCluster#data_collection_options}

---

###### `license_model`<sup>Optional</sup> <a name="license_model" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.putProperties.parameter.licenseModel"></a>

- *Type:* str

The license type of the ExadbVmCluster. Possible values: LICENSE_INCLUDED BRING_YOUR_OWN_LICENSE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#license_model OracleDatabaseExadbVmCluster#license_model}

---

###### `scan_listener_port_tcp`<sup>Optional</sup> <a name="scan_listener_port_tcp" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.putProperties.parameter.scanListenerPortTcp"></a>

- *Type:* typing.Union[int, float]

SCAN listener port - TCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#scan_listener_port_tcp OracleDatabaseExadbVmCluster#scan_listener_port_tcp}

---

###### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.putProperties.parameter.timeZone"></a>

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZone">OracleDatabaseExadbVmClusterPropertiesTimeZone</a>

time_zone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#time_zone OracleDatabaseExadbVmCluster#time_zone}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#create OracleDatabaseExadbVmCluster#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#delete OracleDatabaseExadbVmCluster#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#update OracleDatabaseExadbVmCluster#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_deletion_protection` <a name="reset_deletion_protection" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.resetDeletionProtection"></a>

```python
def reset_deletion_protection() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_odb_network` <a name="reset_odb_network" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.resetOdbNetwork"></a>

```python
def reset_odb_network() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a OracleDatabaseExadbVmCluster resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.isConstruct"></a>

```python
from cdktn_provider_google import oracle_database_exadb_vm_cluster

oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.isTerraformElement"></a>

```python
from cdktn_provider_google import oracle_database_exadb_vm_cluster

oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.isTerraformResource"></a>

```python
from cdktn_provider_google import oracle_database_exadb_vm_cluster

oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.generateConfigForImport"></a>

```python
from cdktn_provider_google import oracle_database_exadb_vm_cluster

oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a OracleDatabaseExadbVmCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OracleDatabaseExadbVmCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OracleDatabaseExadbVmCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the OracleDatabaseExadbVmCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.entitlementId">entitlement_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.gcpOracleZone">gcp_oracle_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference">OracleDatabaseExadbVmClusterPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference">OracleDatabaseExadbVmClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.backupOdbSubnetInput">backup_odb_subnet_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.deletionProtectionInput">deletion_protection_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.exadbVmClusterIdInput">exadb_vm_cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.odbNetworkInput">odb_network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.odbSubnetInput">odb_subnet_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.propertiesInput">properties_input</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties">OracleDatabaseExadbVmClusterProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeouts">OracleDatabaseExadbVmClusterTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.backupOdbSubnet">backup_odb_subnet</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.deletionProtection">deletion_protection</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.exadbVmClusterId">exadb_vm_cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.odbNetwork">odb_network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.odbSubnet">odb_subnet</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `entitlement_id`<sup>Required</sup> <a name="entitlement_id" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.entitlementId"></a>

```python
entitlement_id: str
```

- *Type:* str

---

##### `gcp_oracle_zone`<sup>Required</sup> <a name="gcp_oracle_zone" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.gcpOracleZone"></a>

```python
gcp_oracle_zone: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.properties"></a>

```python
properties: OracleDatabaseExadbVmClusterPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference">OracleDatabaseExadbVmClusterPropertiesOutputReference</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.timeouts"></a>

```python
timeouts: OracleDatabaseExadbVmClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference">OracleDatabaseExadbVmClusterTimeoutsOutputReference</a>

---

##### `backup_odb_subnet_input`<sup>Optional</sup> <a name="backup_odb_subnet_input" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.backupOdbSubnetInput"></a>

```python
backup_odb_subnet_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `deletion_protection_input`<sup>Optional</sup> <a name="deletion_protection_input" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.deletionProtectionInput"></a>

```python
deletion_protection_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `exadb_vm_cluster_id_input`<sup>Optional</sup> <a name="exadb_vm_cluster_id_input" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.exadbVmClusterIdInput"></a>

```python
exadb_vm_cluster_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `odb_network_input`<sup>Optional</sup> <a name="odb_network_input" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.odbNetworkInput"></a>

```python
odb_network_input: str
```

- *Type:* str

---

##### `odb_subnet_input`<sup>Optional</sup> <a name="odb_subnet_input" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.odbSubnetInput"></a>

```python
odb_subnet_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `properties_input`<sup>Optional</sup> <a name="properties_input" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.propertiesInput"></a>

```python
properties_input: OracleDatabaseExadbVmClusterProperties
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties">OracleDatabaseExadbVmClusterProperties</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | OracleDatabaseExadbVmClusterTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeouts">OracleDatabaseExadbVmClusterTimeouts</a>

---

##### `backup_odb_subnet`<sup>Required</sup> <a name="backup_odb_subnet" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.backupOdbSubnet"></a>

```python
backup_odb_subnet: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `deletion_protection`<sup>Required</sup> <a name="deletion_protection" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.deletionProtection"></a>

```python
deletion_protection: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `exadb_vm_cluster_id`<sup>Required</sup> <a name="exadb_vm_cluster_id" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.exadbVmClusterId"></a>

```python
exadb_vm_cluster_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `odb_network`<sup>Required</sup> <a name="odb_network" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.odbNetwork"></a>

```python
odb_network: str
```

- *Type:* str

---

##### `odb_subnet`<sup>Required</sup> <a name="odb_subnet" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.odbSubnet"></a>

```python
odb_subnet: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OracleDatabaseExadbVmClusterConfig <a name="OracleDatabaseExadbVmClusterConfig" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.Initializer"></a>

```python
from cdktn_provider_google import oracle_database_exadb_vm_cluster

oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  backup_odb_subnet: str,
  display_name: str,
  exadb_vm_cluster_id: str,
  location: str,
  odb_subnet: str,
  properties: OracleDatabaseExadbVmClusterProperties,
  deletion_policy: str = None,
  deletion_protection: bool | IResolvable = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  odb_network: str = None,
  project: str = None,
  timeouts: OracleDatabaseExadbVmClusterTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.backupOdbSubnet">backup_odb_subnet</a></code> | <code>str</code> | The name of the backup OdbSubnet associated with the ExadbVmCluster. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name for the ExadbVmCluster. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.exadbVmClusterId">exadb_vm_cluster_id</a></code> | <code>str</code> | The ID of the ExadbVmCluster to create. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.odbSubnet">odb_subnet</a></code> | <code>str</code> | The name of the OdbSubnet associated with the ExadbVmCluster for IP allocation. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.properties">properties</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties">OracleDatabaseExadbVmClusterProperties</a></code> | properties block. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.deletionProtection">deletion_protection</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether or not to allow Terraform to destroy the instance. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#id OracleDatabaseExadbVmCluster#id}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | The labels or tags associated with the ExadbVmCluster. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.odbNetwork">odb_network</a></code> | <code>str</code> | The name of the OdbNetwork associated with the ExadbVmCluster. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#project OracleDatabaseExadbVmCluster#project}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeouts">OracleDatabaseExadbVmClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `backup_odb_subnet`<sup>Required</sup> <a name="backup_odb_subnet" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.backupOdbSubnet"></a>

```python
backup_odb_subnet: str
```

- *Type:* str

The name of the backup OdbSubnet associated with the ExadbVmCluster. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#backup_odb_subnet OracleDatabaseExadbVmCluster#backup_odb_subnet}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name for the ExadbVmCluster.

The name does not have to
be unique within your project. The name must be 1-255 characters long and
can only contain alphanumeric characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#display_name OracleDatabaseExadbVmCluster#display_name}

---

##### `exadb_vm_cluster_id`<sup>Required</sup> <a name="exadb_vm_cluster_id" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.exadbVmClusterId"></a>

```python
exadb_vm_cluster_id: str
```

- *Type:* str

The ID of the ExadbVmCluster to create.

This value is
restricted to (^[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?$) and must be a maximum of
63 characters in length. The value must start with a letter and end with a
letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#exadb_vm_cluster_id OracleDatabaseExadbVmCluster#exadb_vm_cluster_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#location OracleDatabaseExadbVmCluster#location}

---

##### `odb_subnet`<sup>Required</sup> <a name="odb_subnet" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.odbSubnet"></a>

```python
odb_subnet: str
```

- *Type:* str

The name of the OdbSubnet associated with the ExadbVmCluster for IP allocation. Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#odb_subnet OracleDatabaseExadbVmCluster#odb_subnet}

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.properties"></a>

```python
properties: OracleDatabaseExadbVmClusterProperties
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties">OracleDatabaseExadbVmClusterProperties</a>

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#properties OracleDatabaseExadbVmCluster#properties}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#deletion_policy OracleDatabaseExadbVmCluster#deletion_policy}

---

##### `deletion_protection`<sup>Optional</sup> <a name="deletion_protection" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.deletionProtection"></a>

```python
deletion_protection: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether or not to allow Terraform to destroy the instance.

Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#deletion_protection OracleDatabaseExadbVmCluster#deletion_protection}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#id OracleDatabaseExadbVmCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The labels or tags associated with the ExadbVmCluster.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#labels OracleDatabaseExadbVmCluster#labels}

---

##### `odb_network`<sup>Optional</sup> <a name="odb_network" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.odbNetwork"></a>

```python
odb_network: str
```

- *Type:* str

The name of the OdbNetwork associated with the ExadbVmCluster.

Format: projects/{project}/locations/{location}/odbNetworks/{odb_network}
It is optional but if specified, this should match the parent ODBNetwork of
the OdbSubnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#odb_network OracleDatabaseExadbVmCluster#odb_network}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#project OracleDatabaseExadbVmCluster#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterConfig.property.timeouts"></a>

```python
timeouts: OracleDatabaseExadbVmClusterTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeouts">OracleDatabaseExadbVmClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#timeouts OracleDatabaseExadbVmCluster#timeouts}

---

### OracleDatabaseExadbVmClusterProperties <a name="OracleDatabaseExadbVmClusterProperties" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.Initializer"></a>

```python
from cdktn_provider_google import oracle_database_exadb_vm_cluster

oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties(
  enabled_ecpu_count_per_node: typing.Union[int, float],
  exascale_db_storage_vault: str,
  grid_image_id: str,
  hostname_prefix: str,
  node_count: typing.Union[int, float],
  shape_attribute: str,
  ssh_public_keys: typing.List[str],
  vm_file_system_storage: OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage,
  additional_ecpu_count_per_node: typing.Union[int, float] = None,
  cluster_name: str = None,
  data_collection_options: OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions = None,
  license_model: str = None,
  scan_listener_port_tcp: typing.Union[int, float] = None,
  time_zone: OracleDatabaseExadbVmClusterPropertiesTimeZone = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.enabledEcpuCountPerNode">enabled_ecpu_count_per_node</a></code> | <code>typing.Union[int, float]</code> | The number of ECPUs enabled per node for an exadata vm cluster on exascale infrastructure. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.exascaleDbStorageVault">exascale_db_storage_vault</a></code> | <code>str</code> | The name of ExascaleDbStorageVault associated with the ExadbVmCluster. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.gridImageId">grid_image_id</a></code> | <code>str</code> | Grid Infrastructure Version. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.hostnamePrefix">hostname_prefix</a></code> | <code>str</code> | Prefix for VM cluster host names. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | The number of nodes/VMs in the ExadbVmCluster. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.shapeAttribute">shape_attribute</a></code> | <code>str</code> | The shape attribute of the VM cluster. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.sshPublicKeys">ssh_public_keys</a></code> | <code>typing.List[str]</code> | The SSH public keys for the ExadbVmCluster. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.vmFileSystemStorage">vm_file_system_storage</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage">OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage</a></code> | vm_file_system_storage block. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.additionalEcpuCountPerNode">additional_ecpu_count_per_node</a></code> | <code>typing.Union[int, float]</code> | The number of additional ECPUs per node for an Exadata VM cluster on exascale infrastructure. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.clusterName">cluster_name</a></code> | <code>str</code> | The cluster name for Exascale vm cluster. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.dataCollectionOptions">data_collection_options</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions">OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions</a></code> | data_collection_options block. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.licenseModel">license_model</a></code> | <code>str</code> | The license type of the ExadbVmCluster. Possible values: LICENSE_INCLUDED BRING_YOUR_OWN_LICENSE. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.scanListenerPortTcp">scan_listener_port_tcp</a></code> | <code>typing.Union[int, float]</code> | SCAN listener port - TCP. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.timeZone">time_zone</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZone">OracleDatabaseExadbVmClusterPropertiesTimeZone</a></code> | time_zone block. |

---

##### `enabled_ecpu_count_per_node`<sup>Required</sup> <a name="enabled_ecpu_count_per_node" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.enabledEcpuCountPerNode"></a>

```python
enabled_ecpu_count_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of ECPUs enabled per node for an exadata vm cluster on exascale infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#enabled_ecpu_count_per_node OracleDatabaseExadbVmCluster#enabled_ecpu_count_per_node}

---

##### `exascale_db_storage_vault`<sup>Required</sup> <a name="exascale_db_storage_vault" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.exascaleDbStorageVault"></a>

```python
exascale_db_storage_vault: str
```

- *Type:* str

The name of ExascaleDbStorageVault associated with the ExadbVmCluster.

It can refer to an existing ExascaleDbStorageVault. Or a new one can be
created during the ExadbVmCluster creation (requires
storage_vault_properties to be set).
Format:
projects/{project}/locations/{location}/exascaleDbStorageVaults/{exascale_db_storage_vault}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#exascale_db_storage_vault OracleDatabaseExadbVmCluster#exascale_db_storage_vault}

---

##### `grid_image_id`<sup>Required</sup> <a name="grid_image_id" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.gridImageId"></a>

```python
grid_image_id: str
```

- *Type:* str

Grid Infrastructure Version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#grid_image_id OracleDatabaseExadbVmCluster#grid_image_id}

---

##### `hostname_prefix`<sup>Required</sup> <a name="hostname_prefix" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.hostnamePrefix"></a>

```python
hostname_prefix: str
```

- *Type:* str

Prefix for VM cluster host names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#hostname_prefix OracleDatabaseExadbVmCluster#hostname_prefix}

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of nodes/VMs in the ExadbVmCluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#node_count OracleDatabaseExadbVmCluster#node_count}

---

##### `shape_attribute`<sup>Required</sup> <a name="shape_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.shapeAttribute"></a>

```python
shape_attribute: str
```

- *Type:* str

The shape attribute of the VM cluster.

The type of Exascale storage used
for Exadata VM cluster. The default is SMART_STORAGE which supports Oracle
Database 23ai and later
Possible values:
SMART_STORAGE
BLOCK_STORAGE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#shape_attribute OracleDatabaseExadbVmCluster#shape_attribute}

---

##### `ssh_public_keys`<sup>Required</sup> <a name="ssh_public_keys" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.sshPublicKeys"></a>

```python
ssh_public_keys: typing.List[str]
```

- *Type:* typing.List[str]

The SSH public keys for the ExadbVmCluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#ssh_public_keys OracleDatabaseExadbVmCluster#ssh_public_keys}

---

##### `vm_file_system_storage`<sup>Required</sup> <a name="vm_file_system_storage" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.vmFileSystemStorage"></a>

```python
vm_file_system_storage: OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage">OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage</a>

vm_file_system_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#vm_file_system_storage OracleDatabaseExadbVmCluster#vm_file_system_storage}

---

##### `additional_ecpu_count_per_node`<sup>Optional</sup> <a name="additional_ecpu_count_per_node" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.additionalEcpuCountPerNode"></a>

```python
additional_ecpu_count_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of additional ECPUs per node for an Exadata VM cluster on exascale infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#additional_ecpu_count_per_node OracleDatabaseExadbVmCluster#additional_ecpu_count_per_node}

---

##### `cluster_name`<sup>Optional</sup> <a name="cluster_name" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

The cluster name for Exascale vm cluster.

The cluster name must begin with
an alphabetic character and may contain hyphens(-) but can not contain
underscores(_). It should be not more than 11 characters and is not case
sensitive.
OCI Cluster name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#cluster_name OracleDatabaseExadbVmCluster#cluster_name}

---

##### `data_collection_options`<sup>Optional</sup> <a name="data_collection_options" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.dataCollectionOptions"></a>

```python
data_collection_options: OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions">OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions</a>

data_collection_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#data_collection_options OracleDatabaseExadbVmCluster#data_collection_options}

---

##### `license_model`<sup>Optional</sup> <a name="license_model" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

The license type of the ExadbVmCluster. Possible values: LICENSE_INCLUDED BRING_YOUR_OWN_LICENSE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#license_model OracleDatabaseExadbVmCluster#license_model}

---

##### `scan_listener_port_tcp`<sup>Optional</sup> <a name="scan_listener_port_tcp" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.scanListenerPortTcp"></a>

```python
scan_listener_port_tcp: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

SCAN listener port - TCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#scan_listener_port_tcp OracleDatabaseExadbVmCluster#scan_listener_port_tcp}

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties.property.timeZone"></a>

```python
time_zone: OracleDatabaseExadbVmClusterPropertiesTimeZone
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZone">OracleDatabaseExadbVmClusterPropertiesTimeZone</a>

time_zone block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#time_zone OracleDatabaseExadbVmCluster#time_zone}

---

### OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions <a name="OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions.Initializer"></a>

```python
from cdktn_provider_google import oracle_database_exadb_vm_cluster

oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions(
  is_diagnostics_events_enabled: bool | IResolvable = None,
  is_health_monitoring_enabled: bool | IResolvable = None,
  is_incident_logs_enabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions.property.isDiagnosticsEventsEnabled">is_diagnostics_events_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether to enable data collection for diagnostics. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions.property.isHealthMonitoringEnabled">is_health_monitoring_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether to enable health monitoring. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions.property.isIncidentLogsEnabled">is_incident_logs_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether to enable incident logs and trace collection. |

---

##### `is_diagnostics_events_enabled`<sup>Optional</sup> <a name="is_diagnostics_events_enabled" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions.property.isDiagnosticsEventsEnabled"></a>

```python
is_diagnostics_events_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether to enable data collection for diagnostics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#is_diagnostics_events_enabled OracleDatabaseExadbVmCluster#is_diagnostics_events_enabled}

---

##### `is_health_monitoring_enabled`<sup>Optional</sup> <a name="is_health_monitoring_enabled" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions.property.isHealthMonitoringEnabled"></a>

```python
is_health_monitoring_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether to enable health monitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#is_health_monitoring_enabled OracleDatabaseExadbVmCluster#is_health_monitoring_enabled}

---

##### `is_incident_logs_enabled`<sup>Optional</sup> <a name="is_incident_logs_enabled" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions.property.isIncidentLogsEnabled"></a>

```python
is_incident_logs_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether to enable incident logs and trace collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#is_incident_logs_enabled OracleDatabaseExadbVmCluster#is_incident_logs_enabled}

---

### OracleDatabaseExadbVmClusterPropertiesTimeZone <a name="OracleDatabaseExadbVmClusterPropertiesTimeZone" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZone"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZone.Initializer"></a>

```python
from cdktn_provider_google import oracle_database_exadb_vm_cluster

oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZone(
  id: str = None,
  version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZone.property.id">id</a></code> | <code>str</code> | IANA Time Zone Database time zone. For example "America/New_York". |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZone.property.version">version</a></code> | <code>str</code> | IANA Time Zone Database version number. For example "2019a". |

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZone.property.id"></a>

```python
id: str
```

- *Type:* str

IANA Time Zone Database time zone. For example "America/New_York".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#id OracleDatabaseExadbVmCluster#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZone.property.version"></a>

```python
version: str
```

- *Type:* str

IANA Time Zone Database version number. For example "2019a".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#version OracleDatabaseExadbVmCluster#version}

---

### OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage <a name="OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage.Initializer"></a>

```python
from cdktn_provider_google import oracle_database_exadb_vm_cluster

oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage(
  size_in_gbs_per_node: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage.property.sizeInGbsPerNode">size_in_gbs_per_node</a></code> | <code>typing.Union[int, float]</code> | The storage allocation for the exadbvmcluster per node, in gigabytes (GB). |

---

##### `size_in_gbs_per_node`<sup>Required</sup> <a name="size_in_gbs_per_node" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage.property.sizeInGbsPerNode"></a>

```python
size_in_gbs_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The storage allocation for the exadbvmcluster per node, in gigabytes (GB).

This field is used to calculate the total storage allocation for the
exadbvmcluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#size_in_gbs_per_node OracleDatabaseExadbVmCluster#size_in_gbs_per_node}

---

### OracleDatabaseExadbVmClusterTimeouts <a name="OracleDatabaseExadbVmClusterTimeouts" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeouts.Initializer"></a>

```python
from cdktn_provider_google import oracle_database_exadb_vm_cluster

oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#create OracleDatabaseExadbVmCluster#create}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#delete OracleDatabaseExadbVmCluster#delete}. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#update OracleDatabaseExadbVmCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#create OracleDatabaseExadbVmCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#delete OracleDatabaseExadbVmCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#update OracleDatabaseExadbVmCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference <a name="OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import oracle_database_exadb_vm_cluster

oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.resetIsDiagnosticsEventsEnabled">reset_is_diagnostics_events_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.resetIsHealthMonitoringEnabled">reset_is_health_monitoring_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.resetIsIncidentLogsEnabled">reset_is_incident_logs_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_diagnostics_events_enabled` <a name="reset_is_diagnostics_events_enabled" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.resetIsDiagnosticsEventsEnabled"></a>

```python
def reset_is_diagnostics_events_enabled() -> None
```

##### `reset_is_health_monitoring_enabled` <a name="reset_is_health_monitoring_enabled" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.resetIsHealthMonitoringEnabled"></a>

```python
def reset_is_health_monitoring_enabled() -> None
```

##### `reset_is_incident_logs_enabled` <a name="reset_is_incident_logs_enabled" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.resetIsIncidentLogsEnabled"></a>

```python
def reset_is_incident_logs_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabledInput">is_diagnostics_events_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabledInput">is_health_monitoring_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isIncidentLogsEnabledInput">is_incident_logs_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled">is_diagnostics_events_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled">is_health_monitoring_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled">is_incident_logs_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions">OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_diagnostics_events_enabled_input`<sup>Optional</sup> <a name="is_diagnostics_events_enabled_input" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabledInput"></a>

```python
is_diagnostics_events_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_health_monitoring_enabled_input`<sup>Optional</sup> <a name="is_health_monitoring_enabled_input" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabledInput"></a>

```python
is_health_monitoring_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_incident_logs_enabled_input`<sup>Optional</sup> <a name="is_incident_logs_enabled_input" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isIncidentLogsEnabledInput"></a>

```python
is_incident_logs_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_diagnostics_events_enabled`<sup>Required</sup> <a name="is_diagnostics_events_enabled" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isDiagnosticsEventsEnabled"></a>

```python
is_diagnostics_events_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_health_monitoring_enabled`<sup>Required</sup> <a name="is_health_monitoring_enabled" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isHealthMonitoringEnabled"></a>

```python
is_health_monitoring_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `is_incident_logs_enabled`<sup>Required</sup> <a name="is_incident_logs_enabled" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.isIncidentLogsEnabled"></a>

```python
is_incident_logs_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference.property.internalValue"></a>

```python
internal_value: OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions">OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions</a>

---


### OracleDatabaseExadbVmClusterPropertiesOutputReference <a name="OracleDatabaseExadbVmClusterPropertiesOutputReference" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import oracle_database_exadb_vm_cluster

oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.putDataCollectionOptions">put_data_collection_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.putTimeZone">put_time_zone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.putVmFileSystemStorage">put_vm_file_system_storage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.resetAdditionalEcpuCountPerNode">reset_additional_ecpu_count_per_node</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.resetClusterName">reset_cluster_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.resetDataCollectionOptions">reset_data_collection_options</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.resetLicenseModel">reset_license_model</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.resetScanListenerPortTcp">reset_scan_listener_port_tcp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.resetTimeZone">reset_time_zone</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_data_collection_options` <a name="put_data_collection_options" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.putDataCollectionOptions"></a>

```python
def put_data_collection_options(
  is_diagnostics_events_enabled: bool | IResolvable = None,
  is_health_monitoring_enabled: bool | IResolvable = None,
  is_incident_logs_enabled: bool | IResolvable = None
) -> None
```

###### `is_diagnostics_events_enabled`<sup>Optional</sup> <a name="is_diagnostics_events_enabled" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.putDataCollectionOptions.parameter.isDiagnosticsEventsEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether to enable data collection for diagnostics.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#is_diagnostics_events_enabled OracleDatabaseExadbVmCluster#is_diagnostics_events_enabled}

---

###### `is_health_monitoring_enabled`<sup>Optional</sup> <a name="is_health_monitoring_enabled" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.putDataCollectionOptions.parameter.isHealthMonitoringEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether to enable health monitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#is_health_monitoring_enabled OracleDatabaseExadbVmCluster#is_health_monitoring_enabled}

---

###### `is_incident_logs_enabled`<sup>Optional</sup> <a name="is_incident_logs_enabled" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.putDataCollectionOptions.parameter.isIncidentLogsEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether to enable incident logs and trace collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#is_incident_logs_enabled OracleDatabaseExadbVmCluster#is_incident_logs_enabled}

---

##### `put_time_zone` <a name="put_time_zone" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.putTimeZone"></a>

```python
def put_time_zone(
  id: str = None,
  version: str = None
) -> None
```

###### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.putTimeZone.parameter.id"></a>

- *Type:* str

IANA Time Zone Database time zone. For example "America/New_York".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#id OracleDatabaseExadbVmCluster#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

###### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.putTimeZone.parameter.version"></a>

- *Type:* str

IANA Time Zone Database version number. For example "2019a".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#version OracleDatabaseExadbVmCluster#version}

---

##### `put_vm_file_system_storage` <a name="put_vm_file_system_storage" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.putVmFileSystemStorage"></a>

```python
def put_vm_file_system_storage(
  size_in_gbs_per_node: typing.Union[int, float]
) -> None
```

###### `size_in_gbs_per_node`<sup>Required</sup> <a name="size_in_gbs_per_node" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.putVmFileSystemStorage.parameter.sizeInGbsPerNode"></a>

- *Type:* typing.Union[int, float]

The storage allocation for the exadbvmcluster per node, in gigabytes (GB).

This field is used to calculate the total storage allocation for the
exadbvmcluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/oracle_database_exadb_vm_cluster#size_in_gbs_per_node OracleDatabaseExadbVmCluster#size_in_gbs_per_node}

---

##### `reset_additional_ecpu_count_per_node` <a name="reset_additional_ecpu_count_per_node" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.resetAdditionalEcpuCountPerNode"></a>

```python
def reset_additional_ecpu_count_per_node() -> None
```

##### `reset_cluster_name` <a name="reset_cluster_name" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.resetClusterName"></a>

```python
def reset_cluster_name() -> None
```

##### `reset_data_collection_options` <a name="reset_data_collection_options" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.resetDataCollectionOptions"></a>

```python
def reset_data_collection_options() -> None
```

##### `reset_license_model` <a name="reset_license_model" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.resetLicenseModel"></a>

```python
def reset_license_model() -> None
```

##### `reset_scan_listener_port_tcp` <a name="reset_scan_listener_port_tcp" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.resetScanListenerPortTcp"></a>

```python
def reset_scan_listener_port_tcp() -> None
```

##### `reset_time_zone` <a name="reset_time_zone" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.resetTimeZone"></a>

```python
def reset_time_zone() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.dataCollectionOptions">data_collection_options</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference">OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.giVersion">gi_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.lifecycleState">lifecycle_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.memorySizeGb">memory_size_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.ociUri">oci_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.timeZone">time_zone</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference">OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.vmFileSystemStorage">vm_file_system_storage</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference">OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.additionalEcpuCountPerNodeInput">additional_ecpu_count_per_node_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.clusterNameInput">cluster_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.dataCollectionOptionsInput">data_collection_options_input</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions">OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.enabledEcpuCountPerNodeInput">enabled_ecpu_count_per_node_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.exascaleDbStorageVaultInput">exascale_db_storage_vault_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.gridImageIdInput">grid_image_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.hostnamePrefixInput">hostname_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.licenseModelInput">license_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.nodeCountInput">node_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.scanListenerPortTcpInput">scan_listener_port_tcp_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.shapeAttributeInput">shape_attribute_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.sshPublicKeysInput">ssh_public_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.timeZoneInput">time_zone_input</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZone">OracleDatabaseExadbVmClusterPropertiesTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.vmFileSystemStorageInput">vm_file_system_storage_input</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage">OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.additionalEcpuCountPerNode">additional_ecpu_count_per_node</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.clusterName">cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.enabledEcpuCountPerNode">enabled_ecpu_count_per_node</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.exascaleDbStorageVault">exascale_db_storage_vault</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.gridImageId">grid_image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.hostnamePrefix">hostname_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.licenseModel">license_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.scanListenerPortTcp">scan_listener_port_tcp</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.shapeAttribute">shape_attribute</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.sshPublicKeys">ssh_public_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties">OracleDatabaseExadbVmClusterProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_collection_options`<sup>Required</sup> <a name="data_collection_options" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.dataCollectionOptions"></a>

```python
data_collection_options: OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference">OracleDatabaseExadbVmClusterPropertiesDataCollectionOptionsOutputReference</a>

---

##### `gi_version`<sup>Required</sup> <a name="gi_version" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.giVersion"></a>

```python
gi_version: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `lifecycle_state`<sup>Required</sup> <a name="lifecycle_state" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.lifecycleState"></a>

```python
lifecycle_state: str
```

- *Type:* str

---

##### `memory_size_gb`<sup>Required</sup> <a name="memory_size_gb" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.memorySizeGb"></a>

```python
memory_size_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `oci_uri`<sup>Required</sup> <a name="oci_uri" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.ociUri"></a>

```python
oci_uri: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.timeZone"></a>

```python
time_zone: OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference">OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference</a>

---

##### `vm_file_system_storage`<sup>Required</sup> <a name="vm_file_system_storage" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.vmFileSystemStorage"></a>

```python
vm_file_system_storage: OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference">OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference</a>

---

##### `additional_ecpu_count_per_node_input`<sup>Optional</sup> <a name="additional_ecpu_count_per_node_input" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.additionalEcpuCountPerNodeInput"></a>

```python
additional_ecpu_count_per_node_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cluster_name_input`<sup>Optional</sup> <a name="cluster_name_input" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.clusterNameInput"></a>

```python
cluster_name_input: str
```

- *Type:* str

---

##### `data_collection_options_input`<sup>Optional</sup> <a name="data_collection_options_input" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.dataCollectionOptionsInput"></a>

```python
data_collection_options_input: OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions">OracleDatabaseExadbVmClusterPropertiesDataCollectionOptions</a>

---

##### `enabled_ecpu_count_per_node_input`<sup>Optional</sup> <a name="enabled_ecpu_count_per_node_input" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.enabledEcpuCountPerNodeInput"></a>

```python
enabled_ecpu_count_per_node_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `exascale_db_storage_vault_input`<sup>Optional</sup> <a name="exascale_db_storage_vault_input" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.exascaleDbStorageVaultInput"></a>

```python
exascale_db_storage_vault_input: str
```

- *Type:* str

---

##### `grid_image_id_input`<sup>Optional</sup> <a name="grid_image_id_input" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.gridImageIdInput"></a>

```python
grid_image_id_input: str
```

- *Type:* str

---

##### `hostname_prefix_input`<sup>Optional</sup> <a name="hostname_prefix_input" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.hostnamePrefixInput"></a>

```python
hostname_prefix_input: str
```

- *Type:* str

---

##### `license_model_input`<sup>Optional</sup> <a name="license_model_input" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.licenseModelInput"></a>

```python
license_model_input: str
```

- *Type:* str

---

##### `node_count_input`<sup>Optional</sup> <a name="node_count_input" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.nodeCountInput"></a>

```python
node_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scan_listener_port_tcp_input`<sup>Optional</sup> <a name="scan_listener_port_tcp_input" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.scanListenerPortTcpInput"></a>

```python
scan_listener_port_tcp_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shape_attribute_input`<sup>Optional</sup> <a name="shape_attribute_input" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.shapeAttributeInput"></a>

```python
shape_attribute_input: str
```

- *Type:* str

---

##### `ssh_public_keys_input`<sup>Optional</sup> <a name="ssh_public_keys_input" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.sshPublicKeysInput"></a>

```python
ssh_public_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `time_zone_input`<sup>Optional</sup> <a name="time_zone_input" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.timeZoneInput"></a>

```python
time_zone_input: OracleDatabaseExadbVmClusterPropertiesTimeZone
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZone">OracleDatabaseExadbVmClusterPropertiesTimeZone</a>

---

##### `vm_file_system_storage_input`<sup>Optional</sup> <a name="vm_file_system_storage_input" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.vmFileSystemStorageInput"></a>

```python
vm_file_system_storage_input: OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage">OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage</a>

---

##### `additional_ecpu_count_per_node`<sup>Required</sup> <a name="additional_ecpu_count_per_node" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.additionalEcpuCountPerNode"></a>

```python
additional_ecpu_count_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

---

##### `enabled_ecpu_count_per_node`<sup>Required</sup> <a name="enabled_ecpu_count_per_node" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.enabledEcpuCountPerNode"></a>

```python
enabled_ecpu_count_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `exascale_db_storage_vault`<sup>Required</sup> <a name="exascale_db_storage_vault" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.exascaleDbStorageVault"></a>

```python
exascale_db_storage_vault: str
```

- *Type:* str

---

##### `grid_image_id`<sup>Required</sup> <a name="grid_image_id" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.gridImageId"></a>

```python
grid_image_id: str
```

- *Type:* str

---

##### `hostname_prefix`<sup>Required</sup> <a name="hostname_prefix" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.hostnamePrefix"></a>

```python
hostname_prefix: str
```

- *Type:* str

---

##### `license_model`<sup>Required</sup> <a name="license_model" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scan_listener_port_tcp`<sup>Required</sup> <a name="scan_listener_port_tcp" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.scanListenerPortTcp"></a>

```python
scan_listener_port_tcp: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `shape_attribute`<sup>Required</sup> <a name="shape_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.shapeAttribute"></a>

```python
shape_attribute: str
```

- *Type:* str

---

##### `ssh_public_keys`<sup>Required</sup> <a name="ssh_public_keys" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.sshPublicKeys"></a>

```python
ssh_public_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: OracleDatabaseExadbVmClusterProperties
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterProperties">OracleDatabaseExadbVmClusterProperties</a>

---


### OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference <a name="OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.Initializer"></a>

```python
from cdktn_provider_google import oracle_database_exadb_vm_cluster

oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.resetVersion">reset_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_version` <a name="reset_version" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.resetVersion"></a>

```python
def reset_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZone">OracleDatabaseExadbVmClusterPropertiesTimeZone</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZoneOutputReference.property.internalValue"></a>

```python
internal_value: OracleDatabaseExadbVmClusterPropertiesTimeZone
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesTimeZone">OracleDatabaseExadbVmClusterPropertiesTimeZone</a>

---


### OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference <a name="OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.Initializer"></a>

```python
from cdktn_provider_google import oracle_database_exadb_vm_cluster

oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.property.sizeInGbsPerNodeInput">size_in_gbs_per_node_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.property.sizeInGbsPerNode">size_in_gbs_per_node</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage">OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `size_in_gbs_per_node_input`<sup>Optional</sup> <a name="size_in_gbs_per_node_input" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.property.sizeInGbsPerNodeInput"></a>

```python
size_in_gbs_per_node_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `size_in_gbs_per_node`<sup>Required</sup> <a name="size_in_gbs_per_node" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.property.sizeInGbsPerNode"></a>

```python
size_in_gbs_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorageOutputReference.property.internalValue"></a>

```python
internal_value: OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage
```

- *Type:* <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage">OracleDatabaseExadbVmClusterPropertiesVmFileSystemStorage</a>

---


### OracleDatabaseExadbVmClusterTimeoutsOutputReference <a name="OracleDatabaseExadbVmClusterTimeoutsOutputReference" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import oracle_database_exadb_vm_cluster

oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeouts">OracleDatabaseExadbVmClusterTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | OracleDatabaseExadbVmClusterTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.oracleDatabaseExadbVmCluster.OracleDatabaseExadbVmClusterTimeouts">OracleDatabaseExadbVmClusterTimeouts</a>

---



