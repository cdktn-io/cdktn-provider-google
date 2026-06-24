# `migrationCenterDiscoveryClient` Submodule <a name="`migrationCenterDiscoveryClient` Submodule" id="@cdktn/provider-google.migrationCenterDiscoveryClient"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MigrationCenterDiscoveryClient <a name="MigrationCenterDiscoveryClient" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/migration_center_discovery_client google_migration_center_discovery_client}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer"></a>

```python
from cdktn_provider_google import migration_center_discovery_client

migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  discovery_client_id: str,
  location: str,
  service_account: str,
  source: str,
  deletion_policy: str = None,
  description: str = None,
  display_name: str = None,
  expire_time: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: MigrationCenterDiscoveryClientTimeouts = None,
  ttl: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.discoveryClientId">discovery_client_id</a></code> | <code>str</code> | User specified ID for the discovery client. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.serviceAccount">service_account</a></code> | <code>str</code> | Service account used by the discovery client for various operation. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.source">source</a></code> | <code>str</code> | Full name of the source object associated with this discovery client. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.description">description</a></code> | <code>str</code> | Free text description. Maximum length is 1000 characters. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Free text display name. Maximum length is 63 characters. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.expireTime">expire_time</a></code> | <code>str</code> | Client expiration time in UTC. If specified, the backend will not accept new frames after this time. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/migration_center_discovery_client#id MigrationCenterDiscoveryClient#id}. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/migration_center_discovery_client#project MigrationCenterDiscoveryClient#project}. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeouts">MigrationCenterDiscoveryClientTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.ttl">ttl</a></code> | <code>str</code> | Input only. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `discovery_client_id`<sup>Required</sup> <a name="discovery_client_id" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.discoveryClientId"></a>

- *Type:* str

User specified ID for the discovery client.

It will become the last
component of the discovery client name. The ID must be unique within the
project, is restricted to lower-cased letters and has a maximum length of
63 characters. The ID must match the regular expression:
'[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/migration_center_discovery_client#discovery_client_id MigrationCenterDiscoveryClient#discovery_client_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/migration_center_discovery_client#location MigrationCenterDiscoveryClient#location}

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.serviceAccount"></a>

- *Type:* str

Service account used by the discovery client for various operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/migration_center_discovery_client#service_account MigrationCenterDiscoveryClient#service_account}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.source"></a>

- *Type:* str

Full name of the source object associated with this discovery client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/migration_center_discovery_client#source MigrationCenterDiscoveryClient#source}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/migration_center_discovery_client#deletion_policy MigrationCenterDiscoveryClient#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.description"></a>

- *Type:* str

Free text description. Maximum length is 1000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/migration_center_discovery_client#description MigrationCenterDiscoveryClient#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.displayName"></a>

- *Type:* str

Free text display name. Maximum length is 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/migration_center_discovery_client#display_name MigrationCenterDiscoveryClient#display_name}

---

##### `expire_time`<sup>Optional</sup> <a name="expire_time" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.expireTime"></a>

- *Type:* str

Client expiration time in UTC. If specified, the backend will not accept new frames after this time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/migration_center_discovery_client#expire_time MigrationCenterDiscoveryClient#expire_time}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/migration_center_discovery_client#id MigrationCenterDiscoveryClient#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/migration_center_discovery_client#labels MigrationCenterDiscoveryClient#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/migration_center_discovery_client#project MigrationCenterDiscoveryClient#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeouts">MigrationCenterDiscoveryClientTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/migration_center_discovery_client#timeouts MigrationCenterDiscoveryClient#timeouts}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.ttl"></a>

- *Type:* str

Input only.

Client time-to-live. If specified, the backend will not accept new
frames after this time.
This field is input only. The derived expiration time is provided as
output through the 'expire_time' field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/migration_center_discovery_client#ttl MigrationCenterDiscoveryClient#ttl}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.resetExpireTime">reset_expire_time</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.resetTtl">reset_ttl</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/migration_center_discovery_client#create MigrationCenterDiscoveryClient#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/migration_center_discovery_client#delete MigrationCenterDiscoveryClient#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/migration_center_discovery_client#update MigrationCenterDiscoveryClient#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_expire_time` <a name="reset_expire_time" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.resetExpireTime"></a>

```python
def reset_expire_time() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_ttl` <a name="reset_ttl" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.resetTtl"></a>

```python
def reset_ttl() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a MigrationCenterDiscoveryClient resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.isConstruct"></a>

```python
from cdktn_provider_google import migration_center_discovery_client

migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.isTerraformElement"></a>

```python
from cdktn_provider_google import migration_center_discovery_client

migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.isTerraformResource"></a>

```python
from cdktn_provider_google import migration_center_discovery_client

migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.generateConfigForImport"></a>

```python
from cdktn_provider_google import migration_center_discovery_client

migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a MigrationCenterDiscoveryClient resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MigrationCenterDiscoveryClient to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MigrationCenterDiscoveryClient that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/migration_center_discovery_client#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MigrationCenterDiscoveryClient to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.errors">errors</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList">MigrationCenterDiscoveryClientErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.heartbeatTime">heartbeat_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.signalsEndpoint">signals_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference">MigrationCenterDiscoveryClientTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.discoveryClientIdInput">discovery_client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.expireTimeInput">expire_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.serviceAccountInput">service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeouts">MigrationCenterDiscoveryClientTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.ttlInput">ttl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.discoveryClientId">discovery_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.expireTime">expire_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.serviceAccount">service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.ttl">ttl</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `errors`<sup>Required</sup> <a name="errors" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.errors"></a>

```python
errors: MigrationCenterDiscoveryClientErrorsList
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList">MigrationCenterDiscoveryClientErrorsList</a>

---

##### `heartbeat_time`<sup>Required</sup> <a name="heartbeat_time" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.heartbeatTime"></a>

```python
heartbeat_time: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `signals_endpoint`<sup>Required</sup> <a name="signals_endpoint" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.signalsEndpoint"></a>

```python
signals_endpoint: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.timeouts"></a>

```python
timeouts: MigrationCenterDiscoveryClientTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference">MigrationCenterDiscoveryClientTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `discovery_client_id_input`<sup>Optional</sup> <a name="discovery_client_id_input" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.discoveryClientIdInput"></a>

```python
discovery_client_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `expire_time_input`<sup>Optional</sup> <a name="expire_time_input" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.expireTimeInput"></a>

```python
expire_time_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `service_account_input`<sup>Optional</sup> <a name="service_account_input" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.serviceAccountInput"></a>

```python
service_account_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | MigrationCenterDiscoveryClientTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeouts">MigrationCenterDiscoveryClientTimeouts</a>

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.ttlInput"></a>

```python
ttl_input: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `discovery_client_id`<sup>Required</sup> <a name="discovery_client_id" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.discoveryClientId"></a>

```python
discovery_client_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `expire_time`<sup>Required</sup> <a name="expire_time" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.expireTime"></a>

```python
expire_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.ttl"></a>

```python
ttl: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MigrationCenterDiscoveryClientConfig <a name="MigrationCenterDiscoveryClientConfig" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.Initializer"></a>

```python
from cdktn_provider_google import migration_center_discovery_client

migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  discovery_client_id: str,
  location: str,
  service_account: str,
  source: str,
  deletion_policy: str = None,
  description: str = None,
  display_name: str = None,
  expire_time: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: MigrationCenterDiscoveryClientTimeouts = None,
  ttl: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.discoveryClientId">discovery_client_id</a></code> | <code>str</code> | User specified ID for the discovery client. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.serviceAccount">service_account</a></code> | <code>str</code> | Service account used by the discovery client for various operation. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.source">source</a></code> | <code>str</code> | Full name of the source object associated with this discovery client. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.description">description</a></code> | <code>str</code> | Free text description. Maximum length is 1000 characters. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.displayName">display_name</a></code> | <code>str</code> | Free text display name. Maximum length is 63 characters. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.expireTime">expire_time</a></code> | <code>str</code> | Client expiration time in UTC. If specified, the backend will not accept new frames after this time. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/migration_center_discovery_client#id MigrationCenterDiscoveryClient#id}. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/migration_center_discovery_client#project MigrationCenterDiscoveryClient#project}. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeouts">MigrationCenterDiscoveryClientTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.ttl">ttl</a></code> | <code>str</code> | Input only. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `discovery_client_id`<sup>Required</sup> <a name="discovery_client_id" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.discoveryClientId"></a>

```python
discovery_client_id: str
```

- *Type:* str

User specified ID for the discovery client.

It will become the last
component of the discovery client name. The ID must be unique within the
project, is restricted to lower-cased letters and has a maximum length of
63 characters. The ID must match the regular expression:
'[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/migration_center_discovery_client#discovery_client_id MigrationCenterDiscoveryClient#discovery_client_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/migration_center_discovery_client#location MigrationCenterDiscoveryClient#location}

---

##### `service_account`<sup>Required</sup> <a name="service_account" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.serviceAccount"></a>

```python
service_account: str
```

- *Type:* str

Service account used by the discovery client for various operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/migration_center_discovery_client#service_account MigrationCenterDiscoveryClient#service_account}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.source"></a>

```python
source: str
```

- *Type:* str

Full name of the source object associated with this discovery client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/migration_center_discovery_client#source MigrationCenterDiscoveryClient#source}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/migration_center_discovery_client#deletion_policy MigrationCenterDiscoveryClient#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Free text description. Maximum length is 1000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/migration_center_discovery_client#description MigrationCenterDiscoveryClient#description}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Free text display name. Maximum length is 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/migration_center_discovery_client#display_name MigrationCenterDiscoveryClient#display_name}

---

##### `expire_time`<sup>Optional</sup> <a name="expire_time" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.expireTime"></a>

```python
expire_time: str
```

- *Type:* str

Client expiration time in UTC. If specified, the backend will not accept new frames after this time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/migration_center_discovery_client#expire_time MigrationCenterDiscoveryClient#expire_time}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/migration_center_discovery_client#id MigrationCenterDiscoveryClient#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/migration_center_discovery_client#labels MigrationCenterDiscoveryClient#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/migration_center_discovery_client#project MigrationCenterDiscoveryClient#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.timeouts"></a>

```python
timeouts: MigrationCenterDiscoveryClientTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeouts">MigrationCenterDiscoveryClientTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/migration_center_discovery_client#timeouts MigrationCenterDiscoveryClient#timeouts}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.ttl"></a>

```python
ttl: str
```

- *Type:* str

Input only.

Client time-to-live. If specified, the backend will not accept new
frames after this time.
This field is input only. The derived expiration time is provided as
output through the 'expire_time' field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/migration_center_discovery_client#ttl MigrationCenterDiscoveryClient#ttl}

---

### MigrationCenterDiscoveryClientErrors <a name="MigrationCenterDiscoveryClientErrors" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrors.Initializer"></a>

```python
from cdktn_provider_google import migration_center_discovery_client

migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrors()
```


### MigrationCenterDiscoveryClientErrorsDetails <a name="MigrationCenterDiscoveryClientErrorsDetails" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetails.Initializer"></a>

```python
from cdktn_provider_google import migration_center_discovery_client

migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetails()
```


### MigrationCenterDiscoveryClientTimeouts <a name="MigrationCenterDiscoveryClientTimeouts" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeouts.Initializer"></a>

```python
from cdktn_provider_google import migration_center_discovery_client

migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/migration_center_discovery_client#create MigrationCenterDiscoveryClient#create}. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/migration_center_discovery_client#delete MigrationCenterDiscoveryClient#delete}. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/migration_center_discovery_client#update MigrationCenterDiscoveryClient#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/migration_center_discovery_client#create MigrationCenterDiscoveryClient#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/migration_center_discovery_client#delete MigrationCenterDiscoveryClient#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/migration_center_discovery_client#update MigrationCenterDiscoveryClient#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MigrationCenterDiscoveryClientErrorsDetailsList <a name="MigrationCenterDiscoveryClientErrorsDetailsList" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.Initializer"></a>

```python
from cdktn_provider_google import migration_center_discovery_client

migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MigrationCenterDiscoveryClientErrorsDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### MigrationCenterDiscoveryClientErrorsDetailsOutputReference <a name="MigrationCenterDiscoveryClientErrorsDetailsOutputReference" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import migration_center_discovery_client

migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetails">MigrationCenterDiscoveryClientErrorsDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.property.internalValue"></a>

```python
internal_value: MigrationCenterDiscoveryClientErrorsDetails
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetails">MigrationCenterDiscoveryClientErrorsDetails</a>

---


### MigrationCenterDiscoveryClientErrorsList <a name="MigrationCenterDiscoveryClientErrorsList" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.Initializer"></a>

```python
from cdktn_provider_google import migration_center_discovery_client

migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MigrationCenterDiscoveryClientErrorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### MigrationCenterDiscoveryClientErrorsOutputReference <a name="MigrationCenterDiscoveryClientErrorsOutputReference" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import migration_center_discovery_client

migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.property.code">code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.property.details">details</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList">MigrationCenterDiscoveryClientErrorsDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrors">MigrationCenterDiscoveryClientErrors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.property.details"></a>

```python
details: MigrationCenterDiscoveryClientErrorsDetailsList
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList">MigrationCenterDiscoveryClientErrorsDetailsList</a>

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.property.internalValue"></a>

```python
internal_value: MigrationCenterDiscoveryClientErrors
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrors">MigrationCenterDiscoveryClientErrors</a>

---


### MigrationCenterDiscoveryClientTimeoutsOutputReference <a name="MigrationCenterDiscoveryClientTimeoutsOutputReference" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import migration_center_discovery_client

migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeouts">MigrationCenterDiscoveryClientTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | MigrationCenterDiscoveryClientTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeouts">MigrationCenterDiscoveryClientTimeouts</a>

---



