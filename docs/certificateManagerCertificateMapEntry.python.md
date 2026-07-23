# `certificateManagerCertificateMapEntry` Submodule <a name="`certificateManagerCertificateMapEntry` Submodule" id="@cdktn/provider-google.certificateManagerCertificateMapEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CertificateManagerCertificateMapEntry <a name="CertificateManagerCertificateMapEntry" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/certificate_manager_certificate_map_entry google_certificate_manager_certificate_map_entry}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer"></a>

```python
from cdktn_provider_google import certificate_manager_certificate_map_entry

certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  certificates: typing.List[str],
  map: str,
  name: str,
  deletion_policy: str = None,
  description: str = None,
  hostname: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  matcher: str = None,
  project: str = None,
  timeouts: CertificateManagerCertificateMapEntryTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.certificates">certificates</a></code> | <code>typing.List[str]</code> | A set of Certificates defines for the given hostname. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.map">map</a></code> | <code>str</code> | A map entry that is inputted into the certificate map. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.name">name</a></code> | <code>str</code> | A user-defined name of the Certificate Map Entry. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.description">description</a></code> | <code>str</code> | A human-readable description of the resource. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.hostname">hostname</a></code> | <code>str</code> | A Hostname (FQDN, e.g. example.com) or a wildcard hostname expression (*.example.com) for a set of hostnames with common suffix. Used as Server Name Indication (SNI) for selecting a proper certificate. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/certificate_manager_certificate_map_entry#id CertificateManagerCertificateMapEntry#id}. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of labels associated with a Certificate Map Entry. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.matcher">matcher</a></code> | <code>str</code> | A predefined matcher for particular cases, other than SNI selection. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/certificate_manager_certificate_map_entry#project CertificateManagerCertificateMapEntry#project}. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeouts">CertificateManagerCertificateMapEntryTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `certificates`<sup>Required</sup> <a name="certificates" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.certificates"></a>

- *Type:* typing.List[str]

A set of Certificates defines for the given hostname.

There can be defined up to fifteen certificates in each Certificate Map Entry.
Each certificate must match pattern projects/* /locations/* /certificates/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/certificate_manager_certificate_map_entry#certificates CertificateManagerCertificateMapEntry#certificates}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `map`<sup>Required</sup> <a name="map" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.map"></a>

- *Type:* str

A map entry that is inputted into the certificate map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/certificate_manager_certificate_map_entry#map CertificateManagerCertificateMapEntry#map}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.name"></a>

- *Type:* str

A user-defined name of the Certificate Map Entry.

Certificate Map Entry
names must be unique globally and match pattern
'projects/* /locations/* /certificateMaps/* /certificateMapEntries/*'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/certificate_manager_certificate_map_entry#name CertificateManagerCertificateMapEntry#name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/certificate_manager_certificate_map_entry#deletion_policy CertificateManagerCertificateMapEntry#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.description"></a>

- *Type:* str

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/certificate_manager_certificate_map_entry#description CertificateManagerCertificateMapEntry#description}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.hostname"></a>

- *Type:* str

A Hostname (FQDN, e.g. example.com) or a wildcard hostname expression (*.example.com) for a set of hostnames with common suffix. Used as Server Name Indication (SNI) for selecting a proper certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/certificate_manager_certificate_map_entry#hostname CertificateManagerCertificateMapEntry#hostname}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/certificate_manager_certificate_map_entry#id CertificateManagerCertificateMapEntry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Set of labels associated with a Certificate Map Entry.

An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/certificate_manager_certificate_map_entry#labels CertificateManagerCertificateMapEntry#labels}

---

##### `matcher`<sup>Optional</sup> <a name="matcher" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.matcher"></a>

- *Type:* str

A predefined matcher for particular cases, other than SNI selection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/certificate_manager_certificate_map_entry#matcher CertificateManagerCertificateMapEntry#matcher}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/certificate_manager_certificate_map_entry#project CertificateManagerCertificateMapEntry#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeouts">CertificateManagerCertificateMapEntryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/certificate_manager_certificate_map_entry#timeouts CertificateManagerCertificateMapEntry#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.resetHostname">reset_hostname</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.resetMatcher">reset_matcher</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/certificate_manager_certificate_map_entry#create CertificateManagerCertificateMapEntry#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/certificate_manager_certificate_map_entry#delete CertificateManagerCertificateMapEntry#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/certificate_manager_certificate_map_entry#update CertificateManagerCertificateMapEntry#update}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_hostname` <a name="reset_hostname" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.resetHostname"></a>

```python
def reset_hostname() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_matcher` <a name="reset_matcher" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.resetMatcher"></a>

```python
def reset_matcher() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CertificateManagerCertificateMapEntry resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.isConstruct"></a>

```python
from cdktn_provider_google import certificate_manager_certificate_map_entry

certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.isTerraformElement"></a>

```python
from cdktn_provider_google import certificate_manager_certificate_map_entry

certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.isTerraformResource"></a>

```python
from cdktn_provider_google import certificate_manager_certificate_map_entry

certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.generateConfigForImport"></a>

```python
from cdktn_provider_google import certificate_manager_certificate_map_entry

certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CertificateManagerCertificateMapEntry resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CertificateManagerCertificateMapEntry to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CertificateManagerCertificateMapEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/certificate_manager_certificate_map_entry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CertificateManagerCertificateMapEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.effectiveLabels">effective_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.terraformLabels">terraform_labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference">CertificateManagerCertificateMapEntryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.certificatesInput">certificates_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.mapInput">map_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.matcherInput">matcher_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeouts">CertificateManagerCertificateMapEntryTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.certificates">certificates</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.map">map</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.matcher">matcher</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.timeouts"></a>

```python
timeouts: CertificateManagerCertificateMapEntryTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference">CertificateManagerCertificateMapEntryTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `certificates_input`<sup>Optional</sup> <a name="certificates_input" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.certificatesInput"></a>

```python
certificates_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `map_input`<sup>Optional</sup> <a name="map_input" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.mapInput"></a>

```python
map_input: str
```

- *Type:* str

---

##### `matcher_input`<sup>Optional</sup> <a name="matcher_input" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.matcherInput"></a>

```python
matcher_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | CertificateManagerCertificateMapEntryTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeouts">CertificateManagerCertificateMapEntryTimeouts</a>

---

##### `certificates`<sup>Required</sup> <a name="certificates" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.certificates"></a>

```python
certificates: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `map`<sup>Required</sup> <a name="map" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.map"></a>

```python
map: str
```

- *Type:* str

---

##### `matcher`<sup>Required</sup> <a name="matcher" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.matcher"></a>

```python
matcher: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntry.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CertificateManagerCertificateMapEntryConfig <a name="CertificateManagerCertificateMapEntryConfig" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.Initializer"></a>

```python
from cdktn_provider_google import certificate_manager_certificate_map_entry

certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  certificates: typing.List[str],
  map: str,
  name: str,
  deletion_policy: str = None,
  description: str = None,
  hostname: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  matcher: str = None,
  project: str = None,
  timeouts: CertificateManagerCertificateMapEntryTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.certificates">certificates</a></code> | <code>typing.List[str]</code> | A set of Certificates defines for the given hostname. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.map">map</a></code> | <code>str</code> | A map entry that is inputted into the certificate map. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.name">name</a></code> | <code>str</code> | A user-defined name of the Certificate Map Entry. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.description">description</a></code> | <code>str</code> | A human-readable description of the resource. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.hostname">hostname</a></code> | <code>str</code> | A Hostname (FQDN, e.g. example.com) or a wildcard hostname expression (*.example.com) for a set of hostnames with common suffix. Used as Server Name Indication (SNI) for selecting a proper certificate. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/certificate_manager_certificate_map_entry#id CertificateManagerCertificateMapEntry#id}. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of labels associated with a Certificate Map Entry. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.matcher">matcher</a></code> | <code>str</code> | A predefined matcher for particular cases, other than SNI selection. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/certificate_manager_certificate_map_entry#project CertificateManagerCertificateMapEntry#project}. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeouts">CertificateManagerCertificateMapEntryTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `certificates`<sup>Required</sup> <a name="certificates" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.certificates"></a>

```python
certificates: typing.List[str]
```

- *Type:* typing.List[str]

A set of Certificates defines for the given hostname.

There can be defined up to fifteen certificates in each Certificate Map Entry.
Each certificate must match pattern projects/* /locations/* /certificates/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/certificate_manager_certificate_map_entry#certificates CertificateManagerCertificateMapEntry#certificates}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `map`<sup>Required</sup> <a name="map" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.map"></a>

```python
map: str
```

- *Type:* str

A map entry that is inputted into the certificate map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/certificate_manager_certificate_map_entry#map CertificateManagerCertificateMapEntry#map}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A user-defined name of the Certificate Map Entry.

Certificate Map Entry
names must be unique globally and match pattern
'projects/* /locations/* /certificateMaps/* /certificateMapEntries/*'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/certificate_manager_certificate_map_entry#name CertificateManagerCertificateMapEntry#name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/certificate_manager_certificate_map_entry#deletion_policy CertificateManagerCertificateMapEntry#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/certificate_manager_certificate_map_entry#description CertificateManagerCertificateMapEntry#description}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

A Hostname (FQDN, e.g. example.com) or a wildcard hostname expression (*.example.com) for a set of hostnames with common suffix. Used as Server Name Indication (SNI) for selecting a proper certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/certificate_manager_certificate_map_entry#hostname CertificateManagerCertificateMapEntry#hostname}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/certificate_manager_certificate_map_entry#id CertificateManagerCertificateMapEntry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Set of labels associated with a Certificate Map Entry.

An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/certificate_manager_certificate_map_entry#labels CertificateManagerCertificateMapEntry#labels}

---

##### `matcher`<sup>Optional</sup> <a name="matcher" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.matcher"></a>

```python
matcher: str
```

- *Type:* str

A predefined matcher for particular cases, other than SNI selection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/certificate_manager_certificate_map_entry#matcher CertificateManagerCertificateMapEntry#matcher}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/certificate_manager_certificate_map_entry#project CertificateManagerCertificateMapEntry#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryConfig.property.timeouts"></a>

```python
timeouts: CertificateManagerCertificateMapEntryTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeouts">CertificateManagerCertificateMapEntryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/certificate_manager_certificate_map_entry#timeouts CertificateManagerCertificateMapEntry#timeouts}

---

### CertificateManagerCertificateMapEntryTimeouts <a name="CertificateManagerCertificateMapEntryTimeouts" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeouts.Initializer"></a>

```python
from cdktn_provider_google import certificate_manager_certificate_map_entry

certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/certificate_manager_certificate_map_entry#create CertificateManagerCertificateMapEntry#create}. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/certificate_manager_certificate_map_entry#delete CertificateManagerCertificateMapEntry#delete}. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/certificate_manager_certificate_map_entry#update CertificateManagerCertificateMapEntry#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/certificate_manager_certificate_map_entry#create CertificateManagerCertificateMapEntry#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/certificate_manager_certificate_map_entry#delete CertificateManagerCertificateMapEntry#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/certificate_manager_certificate_map_entry#update CertificateManagerCertificateMapEntry#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CertificateManagerCertificateMapEntryTimeoutsOutputReference <a name="CertificateManagerCertificateMapEntryTimeoutsOutputReference" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import certificate_manager_certificate_map_entry

certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeouts">CertificateManagerCertificateMapEntryTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CertificateManagerCertificateMapEntryTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.certificateManagerCertificateMapEntry.CertificateManagerCertificateMapEntryTimeouts">CertificateManagerCertificateMapEntryTimeouts</a>

---



