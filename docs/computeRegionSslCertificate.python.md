# `computeRegionSslCertificate` Submodule <a name="`computeRegionSslCertificate` Submodule" id="@cdktn/provider-google.computeRegionSslCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRegionSslCertificate <a name="ComputeRegionSslCertificate" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_ssl_certificate google_compute_region_ssl_certificate}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer"></a>

```python
from cdktn_provider_google import compute_region_ssl_certificate

computeRegionSslCertificate.ComputeRegionSslCertificate(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  certificate: str,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  name: str = None,
  name_prefix: str = None,
  private_key: str = None,
  private_key_wo: str = None,
  private_key_wo_version: str = None,
  project: str = None,
  region: str = None,
  timeouts: ComputeRegionSslCertificateTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.certificate">certificate</a></code> | <code>str</code> | The certificate in PEM format. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_ssl_certificate#id ComputeRegionSslCertificate#id}. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.namePrefix">name_prefix</a></code> | <code>str</code> | Creates a unique name beginning with the specified prefix. Conflicts with name. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.privateKey">private_key</a></code> | <code>str</code> | The write-only private key in PEM format. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.privateKeyWo">private_key_wo</a></code> | <code>str</code> | The write-only private key in PEM format. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.privateKeyWoVersion">private_key_wo_version</a></code> | <code>str</code> | Triggers update of 'private_key_wo' write-only. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_ssl_certificate#project ComputeRegionSslCertificate#project}. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.region">region</a></code> | <code>str</code> | The Region in which the created regional ssl certificate should reside. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeouts">ComputeRegionSslCertificateTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.certificate"></a>

- *Type:* str

The certificate in PEM format.

The certificate chain must be no greater than 5 certs long.
The chain must include at least one intermediate cert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_ssl_certificate#certificate ComputeRegionSslCertificate#certificate}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_ssl_certificate#deletion_policy ComputeRegionSslCertificate#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.description"></a>

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_ssl_certificate#description ComputeRegionSslCertificate#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_ssl_certificate#id ComputeRegionSslCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

These are in the same namespace as the managed SSL certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_ssl_certificate#name ComputeRegionSslCertificate#name}

---

##### `name_prefix`<sup>Optional</sup> <a name="name_prefix" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.namePrefix"></a>

- *Type:* str

Creates a unique name beginning with the specified prefix. Conflicts with name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_ssl_certificate#name_prefix ComputeRegionSslCertificate#name_prefix}

---

##### `private_key`<sup>Optional</sup> <a name="private_key" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.privateKey"></a>

- *Type:* str

The write-only private key in PEM format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_ssl_certificate#private_key ComputeRegionSslCertificate#private_key}

---

##### `private_key_wo`<sup>Optional</sup> <a name="private_key_wo" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.privateKeyWo"></a>

- *Type:* str

The write-only private key in PEM format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_ssl_certificate#private_key_wo ComputeRegionSslCertificate#private_key_wo}

---

##### `private_key_wo_version`<sup>Optional</sup> <a name="private_key_wo_version" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.privateKeyWoVersion"></a>

- *Type:* str

Triggers update of 'private_key_wo' write-only.

Increment this value when an update to 'private_key_wo' is needed. For more info see [updating write-only arguments](/docs/providers/google/guides/using_write_only_arguments.html#updating-write-only-arguments)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_ssl_certificate#private_key_wo_version ComputeRegionSslCertificate#private_key_wo_version}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_ssl_certificate#project ComputeRegionSslCertificate#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.region"></a>

- *Type:* str

The Region in which the created regional ssl certificate should reside.

If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_ssl_certificate#region ComputeRegionSslCertificate#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeouts">ComputeRegionSslCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_ssl_certificate#timeouts ComputeRegionSslCertificate#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.resetNamePrefix">reset_name_prefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.resetPrivateKey">reset_private_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.resetPrivateKeyWo">reset_private_key_wo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.resetPrivateKeyWoVersion">reset_private_key_wo_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_ssl_certificate#create ComputeRegionSslCertificate#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_ssl_certificate#delete ComputeRegionSslCertificate#delete}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_name_prefix` <a name="reset_name_prefix" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.resetNamePrefix"></a>

```python
def reset_name_prefix() -> None
```

##### `reset_private_key` <a name="reset_private_key" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.resetPrivateKey"></a>

```python
def reset_private_key() -> None
```

##### `reset_private_key_wo` <a name="reset_private_key_wo" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.resetPrivateKeyWo"></a>

```python
def reset_private_key_wo() -> None
```

##### `reset_private_key_wo_version` <a name="reset_private_key_wo_version" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.resetPrivateKeyWoVersion"></a>

```python
def reset_private_key_wo_version() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ComputeRegionSslCertificate resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.isConstruct"></a>

```python
from cdktn_provider_google import compute_region_ssl_certificate

computeRegionSslCertificate.ComputeRegionSslCertificate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.isTerraformElement"></a>

```python
from cdktn_provider_google import compute_region_ssl_certificate

computeRegionSslCertificate.ComputeRegionSslCertificate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.isTerraformResource"></a>

```python
from cdktn_provider_google import compute_region_ssl_certificate

computeRegionSslCertificate.ComputeRegionSslCertificate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.generateConfigForImport"></a>

```python
from cdktn_provider_google import compute_region_ssl_certificate

computeRegionSslCertificate.ComputeRegionSslCertificate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ComputeRegionSslCertificate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComputeRegionSslCertificate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComputeRegionSslCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_ssl_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ComputeRegionSslCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.certificateId">certificate_id</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.creationTimestamp">creation_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.expireTime">expire_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference">ComputeRegionSslCertificateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.certificateInput">certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.namePrefixInput">name_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.privateKeyInput">private_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.privateKeyWoInput">private_key_wo_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.privateKeyWoVersionInput">private_key_wo_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeouts">ComputeRegionSslCertificateTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.certificate">certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.namePrefix">name_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.privateKey">private_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.privateKeyWo">private_key_wo</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.privateKeyWoVersion">private_key_wo_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.region">region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `certificate_id`<sup>Required</sup> <a name="certificate_id" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.certificateId"></a>

```python
certificate_id: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `creation_timestamp`<sup>Required</sup> <a name="creation_timestamp" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.creationTimestamp"></a>

```python
creation_timestamp: str
```

- *Type:* str

---

##### `expire_time`<sup>Required</sup> <a name="expire_time" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.expireTime"></a>

```python
expire_time: str
```

- *Type:* str

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.timeouts"></a>

```python
timeouts: ComputeRegionSslCertificateTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference">ComputeRegionSslCertificateTimeoutsOutputReference</a>

---

##### `certificate_input`<sup>Optional</sup> <a name="certificate_input" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.certificateInput"></a>

```python
certificate_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name_prefix_input`<sup>Optional</sup> <a name="name_prefix_input" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.namePrefixInput"></a>

```python
name_prefix_input: str
```

- *Type:* str

---

##### `private_key_input`<sup>Optional</sup> <a name="private_key_input" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.privateKeyInput"></a>

```python
private_key_input: str
```

- *Type:* str

---

##### `private_key_wo_input`<sup>Optional</sup> <a name="private_key_wo_input" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.privateKeyWoInput"></a>

```python
private_key_wo_input: str
```

- *Type:* str

---

##### `private_key_wo_version_input`<sup>Optional</sup> <a name="private_key_wo_version_input" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.privateKeyWoVersionInput"></a>

```python
private_key_wo_version_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | ComputeRegionSslCertificateTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeouts">ComputeRegionSslCertificateTimeouts</a>

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_prefix`<sup>Required</sup> <a name="name_prefix" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

---

##### ~~`private_key_wo`~~<sup>Required</sup> <a name="private_key_wo" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.privateKeyWo"></a>

- *Deprecated:* Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.

```python
private_key_wo: str
```

- *Type:* str

---

##### `private_key_wo_version`<sup>Required</sup> <a name="private_key_wo_version" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.privateKeyWoVersion"></a>

```python
private_key_wo_version: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.region"></a>

```python
region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRegionSslCertificateConfig <a name="ComputeRegionSslCertificateConfig" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.Initializer"></a>

```python
from cdktn_provider_google import compute_region_ssl_certificate

computeRegionSslCertificate.ComputeRegionSslCertificateConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  certificate: str,
  deletion_policy: str = None,
  description: str = None,
  id: str = None,
  name: str = None,
  name_prefix: str = None,
  private_key: str = None,
  private_key_wo: str = None,
  private_key_wo_version: str = None,
  project: str = None,
  region: str = None,
  timeouts: ComputeRegionSslCertificateTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.certificate">certificate</a></code> | <code>str</code> | The certificate in PEM format. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.description">description</a></code> | <code>str</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_ssl_certificate#id ComputeRegionSslCertificate#id}. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.name">name</a></code> | <code>str</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.namePrefix">name_prefix</a></code> | <code>str</code> | Creates a unique name beginning with the specified prefix. Conflicts with name. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.privateKey">private_key</a></code> | <code>str</code> | The write-only private key in PEM format. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.privateKeyWo">private_key_wo</a></code> | <code>str</code> | The write-only private key in PEM format. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.privateKeyWoVersion">private_key_wo_version</a></code> | <code>str</code> | Triggers update of 'private_key_wo' write-only. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_ssl_certificate#project ComputeRegionSslCertificate#project}. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.region">region</a></code> | <code>str</code> | The Region in which the created regional ssl certificate should reside. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeouts">ComputeRegionSslCertificateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

The certificate in PEM format.

The certificate chain must be no greater than 5 certs long.
The chain must include at least one intermediate cert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_ssl_certificate#certificate ComputeRegionSslCertificate#certificate}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_ssl_certificate#deletion_policy ComputeRegionSslCertificate#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_ssl_certificate#description ComputeRegionSslCertificate#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_ssl_certificate#id ComputeRegionSslCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

These are in the same namespace as the managed SSL certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_ssl_certificate#name ComputeRegionSslCertificate#name}

---

##### `name_prefix`<sup>Optional</sup> <a name="name_prefix" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

Creates a unique name beginning with the specified prefix. Conflicts with name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_ssl_certificate#name_prefix ComputeRegionSslCertificate#name_prefix}

---

##### `private_key`<sup>Optional</sup> <a name="private_key" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

The write-only private key in PEM format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_ssl_certificate#private_key ComputeRegionSslCertificate#private_key}

---

##### `private_key_wo`<sup>Optional</sup> <a name="private_key_wo" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.privateKeyWo"></a>

```python
private_key_wo: str
```

- *Type:* str

The write-only private key in PEM format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_ssl_certificate#private_key_wo ComputeRegionSslCertificate#private_key_wo}

---

##### `private_key_wo_version`<sup>Optional</sup> <a name="private_key_wo_version" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.privateKeyWoVersion"></a>

```python
private_key_wo_version: str
```

- *Type:* str

Triggers update of 'private_key_wo' write-only.

Increment this value when an update to 'private_key_wo' is needed. For more info see [updating write-only arguments](/docs/providers/google/guides/using_write_only_arguments.html#updating-write-only-arguments)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_ssl_certificate#private_key_wo_version ComputeRegionSslCertificate#private_key_wo_version}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_ssl_certificate#project ComputeRegionSslCertificate#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.region"></a>

```python
region: str
```

- *Type:* str

The Region in which the created regional ssl certificate should reside.

If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_ssl_certificate#region ComputeRegionSslCertificate#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.timeouts"></a>

```python
timeouts: ComputeRegionSslCertificateTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeouts">ComputeRegionSslCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_ssl_certificate#timeouts ComputeRegionSslCertificate#timeouts}

---

### ComputeRegionSslCertificateTimeouts <a name="ComputeRegionSslCertificateTimeouts" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeouts.Initializer"></a>

```python
from cdktn_provider_google import compute_region_ssl_certificate

computeRegionSslCertificate.ComputeRegionSslCertificateTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_ssl_certificate#create ComputeRegionSslCertificate#create}. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_ssl_certificate#delete ComputeRegionSslCertificate#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_ssl_certificate#create ComputeRegionSslCertificate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_ssl_certificate#delete ComputeRegionSslCertificate#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRegionSslCertificateTimeoutsOutputReference <a name="ComputeRegionSslCertificateTimeoutsOutputReference" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import compute_region_ssl_certificate

computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeouts">ComputeRegionSslCertificateTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ComputeRegionSslCertificateTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeouts">ComputeRegionSslCertificateTimeouts</a>

---



