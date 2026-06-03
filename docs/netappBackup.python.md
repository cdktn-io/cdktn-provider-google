# `netappBackup` Submodule <a name="`netappBackup` Submodule" id="@cdktn/provider-google.netappBackup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetappBackup <a name="NetappBackup" id="@cdktn/provider-google.netappBackup.NetappBackup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/netapp_backup google_netapp_backup}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.netappBackup.NetappBackup.Initializer"></a>

```python
from cdktn_provider_google import netapp_backup

netappBackup.NetappBackup(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  name: str,
  vault_name: str,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  ontap_source: NetappBackupOntapSource = None,
  project: str = None,
  source_snapshot: str = None,
  source_volume: str = None,
  timeouts: NetappBackupTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.Initializer.parameter.location">location</a></code> | <code>str</code> | Location of the backup. |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.Initializer.parameter.name">name</a></code> | <code>str</code> | The resource name of the backup. Needs to be unique per location. |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.Initializer.parameter.vaultName">vault_name</a></code> | <code>str</code> | Name of the backup vault to store the backup in. |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.Initializer.parameter.description">description</a></code> | <code>str</code> | A description of the backup with 2048 characters or less. Requests with longer descriptions will be rejected. |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/netapp_backup#id NetappBackup#id}. |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.Initializer.parameter.ontapSource">ontap_source</a></code> | <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupOntapSource">NetappBackupOntapSource</a></code> | ontap_source block. |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/netapp_backup#project NetappBackup#project}. |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.Initializer.parameter.sourceSnapshot">source_snapshot</a></code> | <code>str</code> | If specified, backup will be created from the given snapshot. |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.Initializer.parameter.sourceVolume">source_volume</a></code> | <code>str</code> | ID of volumes this backup belongs to. Format: 'projects/{{projects_id}}/locations/{{location}}/volumes/{{name}}''. |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupTimeouts">NetappBackupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.netappBackup.NetappBackup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.netappBackup.NetappBackup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.netappBackup.NetappBackup.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.netappBackup.NetappBackup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.netappBackup.NetappBackup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.netappBackup.NetappBackup.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.netappBackup.NetappBackup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.netappBackup.NetappBackup.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.netappBackup.NetappBackup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.netappBackup.NetappBackup.Initializer.parameter.location"></a>

- *Type:* str

Location of the backup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/netapp_backup#location NetappBackup#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.netappBackup.NetappBackup.Initializer.parameter.name"></a>

- *Type:* str

The resource name of the backup. Needs to be unique per location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/netapp_backup#name NetappBackup#name}

---

##### `vault_name`<sup>Required</sup> <a name="vault_name" id="@cdktn/provider-google.netappBackup.NetappBackup.Initializer.parameter.vaultName"></a>

- *Type:* str

Name of the backup vault to store the backup in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/netapp_backup#vault_name NetappBackup#vault_name}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.netappBackup.NetappBackup.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/netapp_backup#deletion_policy NetappBackup#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.netappBackup.NetappBackup.Initializer.parameter.description"></a>

- *Type:* str

A description of the backup with 2048 characters or less. Requests with longer descriptions will be rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/netapp_backup#description NetappBackup#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.netappBackup.NetappBackup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/netapp_backup#id NetappBackup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.netappBackup.NetappBackup.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/netapp_backup#labels NetappBackup#labels}

---

##### `ontap_source`<sup>Optional</sup> <a name="ontap_source" id="@cdktn/provider-google.netappBackup.NetappBackup.Initializer.parameter.ontapSource"></a>

- *Type:* <a href="#@cdktn/provider-google.netappBackup.NetappBackupOntapSource">NetappBackupOntapSource</a>

ontap_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/netapp_backup#ontap_source NetappBackup#ontap_source}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.netappBackup.NetappBackup.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/netapp_backup#project NetappBackup#project}.

---

##### `source_snapshot`<sup>Optional</sup> <a name="source_snapshot" id="@cdktn/provider-google.netappBackup.NetappBackup.Initializer.parameter.sourceSnapshot"></a>

- *Type:* str

If specified, backup will be created from the given snapshot.

If not specified,
there will be a new snapshot taken to initiate the backup creation.
Format: 'projects/{{projectId}}/locations/{{location}}/volumes/{{volumename}}/snapshots/{{snapshotname}}''

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/netapp_backup#source_snapshot NetappBackup#source_snapshot}

---

##### `source_volume`<sup>Optional</sup> <a name="source_volume" id="@cdktn/provider-google.netappBackup.NetappBackup.Initializer.parameter.sourceVolume"></a>

- *Type:* str

ID of volumes this backup belongs to. Format: 'projects/{{projects_id}}/locations/{{location}}/volumes/{{name}}''.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/netapp_backup#source_volume NetappBackup#source_volume}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.netappBackup.NetappBackup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.netappBackup.NetappBackupTimeouts">NetappBackupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/netapp_backup#timeouts NetappBackup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.putOntapSource">put_ontap_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.resetOntapSource">reset_ontap_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.resetSourceSnapshot">reset_source_snapshot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.resetSourceVolume">reset_source_volume</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.netappBackup.NetappBackup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.netappBackup.NetappBackup.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.netappBackup.NetappBackup.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.netappBackup.NetappBackup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.netappBackup.NetappBackup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.netappBackup.NetappBackup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.netappBackup.NetappBackup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.netappBackup.NetappBackup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.netappBackup.NetappBackup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.netappBackup.NetappBackup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.netappBackup.NetappBackup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.netappBackup.NetappBackup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.netappBackup.NetappBackup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.netappBackup.NetappBackup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.netappBackup.NetappBackup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.netappBackup.NetappBackup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.netappBackup.NetappBackup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.netappBackup.NetappBackup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.netappBackup.NetappBackup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.netappBackup.NetappBackup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.netappBackup.NetappBackup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.netappBackup.NetappBackup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.netappBackup.NetappBackup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.netappBackup.NetappBackup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.netappBackup.NetappBackup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.netappBackup.NetappBackup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.netappBackup.NetappBackup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.netappBackup.NetappBackup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.netappBackup.NetappBackup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.netappBackup.NetappBackup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.netappBackup.NetappBackup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.netappBackup.NetappBackup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.netappBackup.NetappBackup.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.netappBackup.NetappBackup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.netappBackup.NetappBackup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.netappBackup.NetappBackup.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.netappBackup.NetappBackup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.netappBackup.NetappBackup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.netappBackup.NetappBackup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.netappBackup.NetappBackup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.netappBackup.NetappBackup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.netappBackup.NetappBackup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.netappBackup.NetappBackup.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.netappBackup.NetappBackup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.netappBackup.NetappBackup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_ontap_source` <a name="put_ontap_source" id="@cdktn/provider-google.netappBackup.NetappBackup.putOntapSource"></a>

```python
def put_ontap_source(
  storage_pool: str,
  volume_uuid: str,
  snapshot_uuid: str = None
) -> None
```

###### `storage_pool`<sup>Required</sup> <a name="storage_pool" id="@cdktn/provider-google.netappBackup.NetappBackup.putOntapSource.parameter.storagePool"></a>

- *Type:* str

Name of the storage pool. This must be specified for creating backups for ONTAP mode volumes. Format: 'projects/{{project}}/locations/{{location}}/storagePools/{{storage_pool_id}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/netapp_backup#storage_pool NetappBackup#storage_pool}

---

###### `volume_uuid`<sup>Required</sup> <a name="volume_uuid" id="@cdktn/provider-google.netappBackup.NetappBackup.putOntapSource.parameter.volumeUuid"></a>

- *Type:* str

The UUID of the ONTAP source volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/netapp_backup#volume_uuid NetappBackup#volume_uuid}

---

###### `snapshot_uuid`<sup>Optional</sup> <a name="snapshot_uuid" id="@cdktn/provider-google.netappBackup.NetappBackup.putOntapSource.parameter.snapshotUuid"></a>

- *Type:* str

The UUID of the ONTAP source snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/netapp_backup#snapshot_uuid NetappBackup#snapshot_uuid}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.netappBackup.NetappBackup.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.netappBackup.NetappBackup.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/netapp_backup#create NetappBackup#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.netappBackup.NetappBackup.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/netapp_backup#delete NetappBackup#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.netappBackup.NetappBackup.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/netapp_backup#update NetappBackup#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.netappBackup.NetappBackup.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.netappBackup.NetappBackup.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.netappBackup.NetappBackup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google.netappBackup.NetappBackup.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_ontap_source` <a name="reset_ontap_source" id="@cdktn/provider-google.netappBackup.NetappBackup.resetOntapSource"></a>

```python
def reset_ontap_source() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.netappBackup.NetappBackup.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_source_snapshot` <a name="reset_source_snapshot" id="@cdktn/provider-google.netappBackup.NetappBackup.resetSourceSnapshot"></a>

```python
def reset_source_snapshot() -> None
```

##### `reset_source_volume` <a name="reset_source_volume" id="@cdktn/provider-google.netappBackup.NetappBackup.resetSourceVolume"></a>

```python
def reset_source_volume() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.netappBackup.NetappBackup.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a NetappBackup resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.netappBackup.NetappBackup.isConstruct"></a>

```python
from cdktn_provider_google import netapp_backup

netappBackup.NetappBackup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.netappBackup.NetappBackup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.netappBackup.NetappBackup.isTerraformElement"></a>

```python
from cdktn_provider_google import netapp_backup

netappBackup.NetappBackup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.netappBackup.NetappBackup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.netappBackup.NetappBackup.isTerraformResource"></a>

```python
from cdktn_provider_google import netapp_backup

netappBackup.NetappBackup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.netappBackup.NetappBackup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.netappBackup.NetappBackup.generateConfigForImport"></a>

```python
from cdktn_provider_google import netapp_backup

netappBackup.NetappBackup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a NetappBackup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.netappBackup.NetappBackup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.netappBackup.NetappBackup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetappBackup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.netappBackup.NetappBackup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetappBackup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/netapp_backup#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.netappBackup.NetappBackup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetappBackup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.property.backupRegion">backup_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.property.backupType">backup_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.property.chainStorageBytes">chain_storage_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.property.ontapSource">ontap_source</a></code> | <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupOntapSourceOutputReference">NetappBackupOntapSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupTimeoutsOutputReference">NetappBackupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.property.volumeRegion">volume_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.property.volumeUsageBytes">volume_usage_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.property.ontapSourceInput">ontap_source_input</a></code> | <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupOntapSource">NetappBackupOntapSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.property.sourceSnapshotInput">source_snapshot_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.property.sourceVolumeInput">source_volume_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.netappBackup.NetappBackupTimeouts">NetappBackupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.property.vaultNameInput">vault_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.property.sourceSnapshot">source_snapshot</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.property.sourceVolume">source_volume</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.property.vaultName">vault_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.netappBackup.NetappBackup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.netappBackup.NetappBackup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.netappBackup.NetappBackup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.netappBackup.NetappBackup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.netappBackup.NetappBackup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.netappBackup.NetappBackup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.netappBackup.NetappBackup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.netappBackup.NetappBackup.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.netappBackup.NetappBackup.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.netappBackup.NetappBackup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.netappBackup.NetappBackup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.netappBackup.NetappBackup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.netappBackup.NetappBackup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.netappBackup.NetappBackup.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `backup_region`<sup>Required</sup> <a name="backup_region" id="@cdktn/provider-google.netappBackup.NetappBackup.property.backupRegion"></a>

```python
backup_region: str
```

- *Type:* str

---

##### `backup_type`<sup>Required</sup> <a name="backup_type" id="@cdktn/provider-google.netappBackup.NetappBackup.property.backupType"></a>

```python
backup_type: str
```

- *Type:* str

---

##### `chain_storage_bytes`<sup>Required</sup> <a name="chain_storage_bytes" id="@cdktn/provider-google.netappBackup.NetappBackup.property.chainStorageBytes"></a>

```python
chain_storage_bytes: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.netappBackup.NetappBackup.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google.netappBackup.NetappBackup.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `ontap_source`<sup>Required</sup> <a name="ontap_source" id="@cdktn/provider-google.netappBackup.NetappBackup.property.ontapSource"></a>

```python
ontap_source: NetappBackupOntapSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.netappBackup.NetappBackupOntapSourceOutputReference">NetappBackupOntapSourceOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.netappBackup.NetappBackup.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google.netappBackup.NetappBackup.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.netappBackup.NetappBackup.property.timeouts"></a>

```python
timeouts: NetappBackupTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.netappBackup.NetappBackupTimeoutsOutputReference">NetappBackupTimeoutsOutputReference</a>

---

##### `volume_region`<sup>Required</sup> <a name="volume_region" id="@cdktn/provider-google.netappBackup.NetappBackup.property.volumeRegion"></a>

```python
volume_region: str
```

- *Type:* str

---

##### `volume_usage_bytes`<sup>Required</sup> <a name="volume_usage_bytes" id="@cdktn/provider-google.netappBackup.NetappBackup.property.volumeUsageBytes"></a>

```python
volume_usage_bytes: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.netappBackup.NetappBackup.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.netappBackup.NetappBackup.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.netappBackup.NetappBackup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google.netappBackup.NetappBackup.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.netappBackup.NetappBackup.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.netappBackup.NetappBackup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `ontap_source_input`<sup>Optional</sup> <a name="ontap_source_input" id="@cdktn/provider-google.netappBackup.NetappBackup.property.ontapSourceInput"></a>

```python
ontap_source_input: NetappBackupOntapSource
```

- *Type:* <a href="#@cdktn/provider-google.netappBackup.NetappBackupOntapSource">NetappBackupOntapSource</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.netappBackup.NetappBackup.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `source_snapshot_input`<sup>Optional</sup> <a name="source_snapshot_input" id="@cdktn/provider-google.netappBackup.NetappBackup.property.sourceSnapshotInput"></a>

```python
source_snapshot_input: str
```

- *Type:* str

---

##### `source_volume_input`<sup>Optional</sup> <a name="source_volume_input" id="@cdktn/provider-google.netappBackup.NetappBackup.property.sourceVolumeInput"></a>

```python
source_volume_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.netappBackup.NetappBackup.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | NetappBackupTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.netappBackup.NetappBackupTimeouts">NetappBackupTimeouts</a>

---

##### `vault_name_input`<sup>Optional</sup> <a name="vault_name_input" id="@cdktn/provider-google.netappBackup.NetappBackup.property.vaultNameInput"></a>

```python
vault_name_input: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.netappBackup.NetappBackup.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.netappBackup.NetappBackup.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.netappBackup.NetappBackup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.netappBackup.NetappBackup.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.netappBackup.NetappBackup.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.netappBackup.NetappBackup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.netappBackup.NetappBackup.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `source_snapshot`<sup>Required</sup> <a name="source_snapshot" id="@cdktn/provider-google.netappBackup.NetappBackup.property.sourceSnapshot"></a>

```python
source_snapshot: str
```

- *Type:* str

---

##### `source_volume`<sup>Required</sup> <a name="source_volume" id="@cdktn/provider-google.netappBackup.NetappBackup.property.sourceVolume"></a>

```python
source_volume: str
```

- *Type:* str

---

##### `vault_name`<sup>Required</sup> <a name="vault_name" id="@cdktn/provider-google.netappBackup.NetappBackup.property.vaultName"></a>

```python
vault_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.netappBackup.NetappBackup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetappBackupConfig <a name="NetappBackupConfig" id="@cdktn/provider-google.netappBackup.NetappBackupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.netappBackup.NetappBackupConfig.Initializer"></a>

```python
from cdktn_provider_google import netapp_backup

netappBackup.NetappBackupConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  name: str,
  vault_name: str,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  ontap_source: NetappBackupOntapSource = None,
  project: str = None,
  source_snapshot: str = None,
  source_volume: str = None,
  timeouts: NetappBackupTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupConfig.property.location">location</a></code> | <code>str</code> | Location of the backup. |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupConfig.property.name">name</a></code> | <code>str</code> | The resource name of the backup. Needs to be unique per location. |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupConfig.property.vaultName">vault_name</a></code> | <code>str</code> | Name of the backup vault to store the backup in. |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupConfig.property.description">description</a></code> | <code>str</code> | A description of the backup with 2048 characters or less. Requests with longer descriptions will be rejected. |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/netapp_backup#id NetappBackup#id}. |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupConfig.property.ontapSource">ontap_source</a></code> | <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupOntapSource">NetappBackupOntapSource</a></code> | ontap_source block. |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/netapp_backup#project NetappBackup#project}. |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupConfig.property.sourceSnapshot">source_snapshot</a></code> | <code>str</code> | If specified, backup will be created from the given snapshot. |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupConfig.property.sourceVolume">source_volume</a></code> | <code>str</code> | ID of volumes this backup belongs to. Format: 'projects/{{projects_id}}/locations/{{location}}/volumes/{{name}}''. |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupTimeouts">NetappBackupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.netappBackup.NetappBackupConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.netappBackup.NetappBackupConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.netappBackup.NetappBackupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.netappBackup.NetappBackupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.netappBackup.NetappBackupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.netappBackup.NetappBackupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.netappBackup.NetappBackupConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.netappBackup.NetappBackupConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Location of the backup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/netapp_backup#location NetappBackup#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.netappBackup.NetappBackupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The resource name of the backup. Needs to be unique per location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/netapp_backup#name NetappBackup#name}

---

##### `vault_name`<sup>Required</sup> <a name="vault_name" id="@cdktn/provider-google.netappBackup.NetappBackupConfig.property.vaultName"></a>

```python
vault_name: str
```

- *Type:* str

Name of the backup vault to store the backup in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/netapp_backup#vault_name NetappBackup#vault_name}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.netappBackup.NetappBackupConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/netapp_backup#deletion_policy NetappBackup#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.netappBackup.NetappBackupConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A description of the backup with 2048 characters or less. Requests with longer descriptions will be rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/netapp_backup#description NetappBackup#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.netappBackup.NetappBackupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/netapp_backup#id NetappBackup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.netappBackup.NetappBackupConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/netapp_backup#labels NetappBackup#labels}

---

##### `ontap_source`<sup>Optional</sup> <a name="ontap_source" id="@cdktn/provider-google.netappBackup.NetappBackupConfig.property.ontapSource"></a>

```python
ontap_source: NetappBackupOntapSource
```

- *Type:* <a href="#@cdktn/provider-google.netappBackup.NetappBackupOntapSource">NetappBackupOntapSource</a>

ontap_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/netapp_backup#ontap_source NetappBackup#ontap_source}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.netappBackup.NetappBackupConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/netapp_backup#project NetappBackup#project}.

---

##### `source_snapshot`<sup>Optional</sup> <a name="source_snapshot" id="@cdktn/provider-google.netappBackup.NetappBackupConfig.property.sourceSnapshot"></a>

```python
source_snapshot: str
```

- *Type:* str

If specified, backup will be created from the given snapshot.

If not specified,
there will be a new snapshot taken to initiate the backup creation.
Format: 'projects/{{projectId}}/locations/{{location}}/volumes/{{volumename}}/snapshots/{{snapshotname}}''

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/netapp_backup#source_snapshot NetappBackup#source_snapshot}

---

##### `source_volume`<sup>Optional</sup> <a name="source_volume" id="@cdktn/provider-google.netappBackup.NetappBackupConfig.property.sourceVolume"></a>

```python
source_volume: str
```

- *Type:* str

ID of volumes this backup belongs to. Format: 'projects/{{projects_id}}/locations/{{location}}/volumes/{{name}}''.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/netapp_backup#source_volume NetappBackup#source_volume}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.netappBackup.NetappBackupConfig.property.timeouts"></a>

```python
timeouts: NetappBackupTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.netappBackup.NetappBackupTimeouts">NetappBackupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/netapp_backup#timeouts NetappBackup#timeouts}

---

### NetappBackupOntapSource <a name="NetappBackupOntapSource" id="@cdktn/provider-google.netappBackup.NetappBackupOntapSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.netappBackup.NetappBackupOntapSource.Initializer"></a>

```python
from cdktn_provider_google import netapp_backup

netappBackup.NetappBackupOntapSource(
  storage_pool: str,
  volume_uuid: str,
  snapshot_uuid: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupOntapSource.property.storagePool">storage_pool</a></code> | <code>str</code> | Name of the storage pool. This must be specified for creating backups for ONTAP mode volumes. Format: 'projects/{{project}}/locations/{{location}}/storagePools/{{storage_pool_id}}'. |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupOntapSource.property.volumeUuid">volume_uuid</a></code> | <code>str</code> | The UUID of the ONTAP source volume. |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupOntapSource.property.snapshotUuid">snapshot_uuid</a></code> | <code>str</code> | The UUID of the ONTAP source snapshot. |

---

##### `storage_pool`<sup>Required</sup> <a name="storage_pool" id="@cdktn/provider-google.netappBackup.NetappBackupOntapSource.property.storagePool"></a>

```python
storage_pool: str
```

- *Type:* str

Name of the storage pool. This must be specified for creating backups for ONTAP mode volumes. Format: 'projects/{{project}}/locations/{{location}}/storagePools/{{storage_pool_id}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/netapp_backup#storage_pool NetappBackup#storage_pool}

---

##### `volume_uuid`<sup>Required</sup> <a name="volume_uuid" id="@cdktn/provider-google.netappBackup.NetappBackupOntapSource.property.volumeUuid"></a>

```python
volume_uuid: str
```

- *Type:* str

The UUID of the ONTAP source volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/netapp_backup#volume_uuid NetappBackup#volume_uuid}

---

##### `snapshot_uuid`<sup>Optional</sup> <a name="snapshot_uuid" id="@cdktn/provider-google.netappBackup.NetappBackupOntapSource.property.snapshotUuid"></a>

```python
snapshot_uuid: str
```

- *Type:* str

The UUID of the ONTAP source snapshot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/netapp_backup#snapshot_uuid NetappBackup#snapshot_uuid}

---

### NetappBackupTimeouts <a name="NetappBackupTimeouts" id="@cdktn/provider-google.netappBackup.NetappBackupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.netappBackup.NetappBackupTimeouts.Initializer"></a>

```python
from cdktn_provider_google import netapp_backup

netappBackup.NetappBackupTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/netapp_backup#create NetappBackup#create}. |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/netapp_backup#delete NetappBackup#delete}. |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/netapp_backup#update NetappBackup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.netappBackup.NetappBackupTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/netapp_backup#create NetappBackup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.netappBackup.NetappBackupTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/netapp_backup#delete NetappBackup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.netappBackup.NetappBackupTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/netapp_backup#update NetappBackup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetappBackupOntapSourceOutputReference <a name="NetappBackupOntapSourceOutputReference" id="@cdktn/provider-google.netappBackup.NetappBackupOntapSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.netappBackup.NetappBackupOntapSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_google import netapp_backup

netappBackup.NetappBackupOntapSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupOntapSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupOntapSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.netappBackup.NetappBackupOntapSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.netappBackup.NetappBackupOntapSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupOntapSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupOntapSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupOntapSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupOntapSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupOntapSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupOntapSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupOntapSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupOntapSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupOntapSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupOntapSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupOntapSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupOntapSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupOntapSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupOntapSourceOutputReference.resetSnapshotUuid">reset_snapshot_uuid</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.netappBackup.NetappBackupOntapSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.netappBackup.NetappBackupOntapSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.netappBackup.NetappBackupOntapSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.netappBackup.NetappBackupOntapSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.netappBackup.NetappBackupOntapSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.netappBackup.NetappBackupOntapSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.netappBackup.NetappBackupOntapSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.netappBackup.NetappBackupOntapSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.netappBackup.NetappBackupOntapSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.netappBackup.NetappBackupOntapSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.netappBackup.NetappBackupOntapSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.netappBackup.NetappBackupOntapSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.netappBackup.NetappBackupOntapSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.netappBackup.NetappBackupOntapSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.netappBackup.NetappBackupOntapSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.netappBackup.NetappBackupOntapSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.netappBackup.NetappBackupOntapSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.netappBackup.NetappBackupOntapSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.netappBackup.NetappBackupOntapSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.netappBackup.NetappBackupOntapSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.netappBackup.NetappBackupOntapSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.netappBackup.NetappBackupOntapSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.netappBackup.NetappBackupOntapSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.netappBackup.NetappBackupOntapSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_snapshot_uuid` <a name="reset_snapshot_uuid" id="@cdktn/provider-google.netappBackup.NetappBackupOntapSourceOutputReference.resetSnapshotUuid"></a>

```python
def reset_snapshot_uuid() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupOntapSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupOntapSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupOntapSourceOutputReference.property.snapshotUuidInput">snapshot_uuid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupOntapSourceOutputReference.property.storagePoolInput">storage_pool_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupOntapSourceOutputReference.property.volumeUuidInput">volume_uuid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupOntapSourceOutputReference.property.snapshotUuid">snapshot_uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupOntapSourceOutputReference.property.storagePool">storage_pool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupOntapSourceOutputReference.property.volumeUuid">volume_uuid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupOntapSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupOntapSource">NetappBackupOntapSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.netappBackup.NetappBackupOntapSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.netappBackup.NetappBackupOntapSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `snapshot_uuid_input`<sup>Optional</sup> <a name="snapshot_uuid_input" id="@cdktn/provider-google.netappBackup.NetappBackupOntapSourceOutputReference.property.snapshotUuidInput"></a>

```python
snapshot_uuid_input: str
```

- *Type:* str

---

##### `storage_pool_input`<sup>Optional</sup> <a name="storage_pool_input" id="@cdktn/provider-google.netappBackup.NetappBackupOntapSourceOutputReference.property.storagePoolInput"></a>

```python
storage_pool_input: str
```

- *Type:* str

---

##### `volume_uuid_input`<sup>Optional</sup> <a name="volume_uuid_input" id="@cdktn/provider-google.netappBackup.NetappBackupOntapSourceOutputReference.property.volumeUuidInput"></a>

```python
volume_uuid_input: str
```

- *Type:* str

---

##### `snapshot_uuid`<sup>Required</sup> <a name="snapshot_uuid" id="@cdktn/provider-google.netappBackup.NetappBackupOntapSourceOutputReference.property.snapshotUuid"></a>

```python
snapshot_uuid: str
```

- *Type:* str

---

##### `storage_pool`<sup>Required</sup> <a name="storage_pool" id="@cdktn/provider-google.netappBackup.NetappBackupOntapSourceOutputReference.property.storagePool"></a>

```python
storage_pool: str
```

- *Type:* str

---

##### `volume_uuid`<sup>Required</sup> <a name="volume_uuid" id="@cdktn/provider-google.netappBackup.NetappBackupOntapSourceOutputReference.property.volumeUuid"></a>

```python
volume_uuid: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.netappBackup.NetappBackupOntapSourceOutputReference.property.internalValue"></a>

```python
internal_value: NetappBackupOntapSource
```

- *Type:* <a href="#@cdktn/provider-google.netappBackup.NetappBackupOntapSource">NetappBackupOntapSource</a>

---


### NetappBackupTimeoutsOutputReference <a name="NetappBackupTimeoutsOutputReference" id="@cdktn/provider-google.netappBackup.NetappBackupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.netappBackup.NetappBackupTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import netapp_backup

netappBackup.NetappBackupTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.netappBackup.NetappBackupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.netappBackup.NetappBackupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.netappBackup.NetappBackupTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.netappBackup.NetappBackupTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.netappBackup.NetappBackupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.netappBackup.NetappBackupTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.netappBackup.NetappBackupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.netappBackup.NetappBackupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.netappBackup.NetappBackupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.netappBackup.NetappBackupTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.netappBackup.NetappBackupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.netappBackup.NetappBackupTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.netappBackup.NetappBackupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.netappBackup.NetappBackupTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.netappBackup.NetappBackupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.netappBackup.NetappBackupTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.netappBackup.NetappBackupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.netappBackup.NetappBackupTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.netappBackup.NetappBackupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.netappBackup.NetappBackupTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.netappBackup.NetappBackupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.netappBackup.NetappBackupTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.netappBackup.NetappBackupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.netappBackup.NetappBackupTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.netappBackup.NetappBackupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.netappBackup.NetappBackupTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.netappBackup.NetappBackupTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.netappBackup.NetappBackupTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.netappBackup.NetappBackupTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.netappBackup.NetappBackupTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.netappBackup.NetappBackupTimeouts">NetappBackupTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.netappBackup.NetappBackupTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.netappBackup.NetappBackupTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.netappBackup.NetappBackupTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.netappBackup.NetappBackupTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.netappBackup.NetappBackupTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.netappBackup.NetappBackupTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.netappBackup.NetappBackupTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.netappBackup.NetappBackupTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.netappBackup.NetappBackupTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetappBackupTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.netappBackup.NetappBackupTimeouts">NetappBackupTimeouts</a>

---



