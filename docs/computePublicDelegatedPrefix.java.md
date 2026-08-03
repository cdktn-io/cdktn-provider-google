# `computePublicDelegatedPrefix` Submodule <a name="`computePublicDelegatedPrefix` Submodule" id="@cdktn/provider-google.computePublicDelegatedPrefix"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputePublicDelegatedPrefix <a name="ComputePublicDelegatedPrefix" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_public_delegated_prefix google_compute_public_delegated_prefix}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.Initializer"></a>

```java
import io.cdktn.providers.google.compute_public_delegated_prefix.ComputePublicDelegatedPrefix;

ComputePublicDelegatedPrefix.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .ipCidrRange(java.lang.String)
    .name(java.lang.String)
    .parentPrefix(java.lang.String)
    .region(java.lang.String)
//  .allocatablePrefixLength(java.lang.Number)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .isLiveMigration(java.lang.Boolean|IResolvable)
//  .mode(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(ComputePublicDelegatedPrefixTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.Initializer.parameter.ipCidrRange">ipCidrRange</a></code> | <code>java.lang.String</code> | The IP address range, in CIDR format, represented by this public delegated prefix. |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.Initializer.parameter.parentPrefix">parentPrefix</a></code> | <code>java.lang.String</code> | The URL of parent prefix. Either PublicAdvertisedPrefix or PublicDelegatedPrefix. |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | A region where the prefix will reside. |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.Initializer.parameter.allocatablePrefixLength">allocatablePrefixLength</a></code> | <code>java.lang.Number</code> | The allocatable prefix length supported by this public delegated prefix. |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_public_delegated_prefix#id ComputePublicDelegatedPrefix#id}. |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.Initializer.parameter.isLiveMigration">isLiveMigration</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, the prefix will be live migrated. |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.Initializer.parameter.mode">mode</a></code> | <code>java.lang.String</code> | Specifies the mode of this IPv6 PDP. |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_public_delegated_prefix#project ComputePublicDelegatedPrefix#project}. |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeouts">ComputePublicDelegatedPrefixTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `ipCidrRange`<sup>Required</sup> <a name="ipCidrRange" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.Initializer.parameter.ipCidrRange"></a>

- *Type:* java.lang.String

The IP address range, in CIDR format, represented by this public delegated prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_public_delegated_prefix#ip_cidr_range ComputePublicDelegatedPrefix#ip_cidr_range}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the resource.

The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?'
which means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_public_delegated_prefix#name ComputePublicDelegatedPrefix#name}

---

##### `parentPrefix`<sup>Required</sup> <a name="parentPrefix" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.Initializer.parameter.parentPrefix"></a>

- *Type:* java.lang.String

The URL of parent prefix. Either PublicAdvertisedPrefix or PublicDelegatedPrefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_public_delegated_prefix#parent_prefix ComputePublicDelegatedPrefix#parent_prefix}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.Initializer.parameter.region"></a>

- *Type:* java.lang.String

A region where the prefix will reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_public_delegated_prefix#region ComputePublicDelegatedPrefix#region}

---

##### `allocatablePrefixLength`<sup>Optional</sup> <a name="allocatablePrefixLength" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.Initializer.parameter.allocatablePrefixLength"></a>

- *Type:* java.lang.Number

The allocatable prefix length supported by this public delegated prefix.

This field is optional and cannot be set for prefixes in DELEGATION mode. It cannot be set for IPv4 prefixes either, and it always defaults to 32.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_public_delegated_prefix#allocatable_prefix_length ComputePublicDelegatedPrefix#allocatable_prefix_length}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_public_delegated_prefix#deletion_policy ComputePublicDelegatedPrefix#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_public_delegated_prefix#description ComputePublicDelegatedPrefix#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_public_delegated_prefix#id ComputePublicDelegatedPrefix#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isLiveMigration`<sup>Optional</sup> <a name="isLiveMigration" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.Initializer.parameter.isLiveMigration"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, the prefix will be live migrated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_public_delegated_prefix#is_live_migration ComputePublicDelegatedPrefix#is_live_migration}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.Initializer.parameter.mode"></a>

- *Type:* java.lang.String

Specifies the mode of this IPv6 PDP.

MODE must be one of:

* DELEGATION
* EXTERNAL_IPV6_FORWARDING_RULE_CREATION
* EXTERNAL_IPV6_SUBNETWORK_CREATION
* INTERNAL_IPV6_SUBNETWORK_CREATION Possible values: ["DELEGATION", "EXTERNAL_IPV6_FORWARDING_RULE_CREATION", "EXTERNAL_IPV6_SUBNETWORK_CREATION", "INTERNAL_IPV6_SUBNETWORK_CREATION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_public_delegated_prefix#mode ComputePublicDelegatedPrefix#mode}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_public_delegated_prefix#project ComputePublicDelegatedPrefix#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeouts">ComputePublicDelegatedPrefixTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_public_delegated_prefix#timeouts ComputePublicDelegatedPrefix#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.resetAllocatablePrefixLength">resetAllocatablePrefixLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.resetIsLiveMigration">resetIsLiveMigration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.putTimeouts"></a>

```java
public void putTimeouts(ComputePublicDelegatedPrefixTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeouts">ComputePublicDelegatedPrefixTimeouts</a>

---

##### `resetAllocatablePrefixLength` <a name="resetAllocatablePrefixLength" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.resetAllocatablePrefixLength"></a>

```java
public void resetAllocatablePrefixLength()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.resetId"></a>

```java
public void resetId()
```

##### `resetIsLiveMigration` <a name="resetIsLiveMigration" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.resetIsLiveMigration"></a>

```java
public void resetIsLiveMigration()
```

##### `resetMode` <a name="resetMode" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.resetMode"></a>

```java
public void resetMode()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ComputePublicDelegatedPrefix resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.isConstruct"></a>

```java
import io.cdktn.providers.google.compute_public_delegated_prefix.ComputePublicDelegatedPrefix;

ComputePublicDelegatedPrefix.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.isTerraformElement"></a>

```java
import io.cdktn.providers.google.compute_public_delegated_prefix.ComputePublicDelegatedPrefix;

ComputePublicDelegatedPrefix.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.isTerraformResource"></a>

```java
import io.cdktn.providers.google.compute_public_delegated_prefix.ComputePublicDelegatedPrefix;

ComputePublicDelegatedPrefix.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.compute_public_delegated_prefix.ComputePublicDelegatedPrefix;

ComputePublicDelegatedPrefix.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ComputePublicDelegatedPrefix.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ComputePublicDelegatedPrefix resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ComputePublicDelegatedPrefix to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ComputePublicDelegatedPrefix that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_public_delegated_prefix#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ComputePublicDelegatedPrefix to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.enableEnhancedIpv4Allocation">enableEnhancedIpv4Allocation</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.ipv6AccessType">ipv6AccessType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.publicDelegatedSubPrefixs">publicDelegatedSubPrefixs</a></code> | <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsList">ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference">ComputePublicDelegatedPrefixTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.allocatablePrefixLengthInput">allocatablePrefixLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.ipCidrRangeInput">ipCidrRangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.isLiveMigrationInput">isLiveMigrationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.parentPrefixInput">parentPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeouts">ComputePublicDelegatedPrefixTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.allocatablePrefixLength">allocatablePrefixLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.ipCidrRange">ipCidrRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.isLiveMigration">isLiveMigration</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.parentPrefix">parentPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `enableEnhancedIpv4Allocation`<sup>Required</sup> <a name="enableEnhancedIpv4Allocation" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.enableEnhancedIpv4Allocation"></a>

```java
public IResolvable getEnableEnhancedIpv4Allocation();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `ipv6AccessType`<sup>Required</sup> <a name="ipv6AccessType" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.ipv6AccessType"></a>

```java
public java.lang.String getIpv6AccessType();
```

- *Type:* java.lang.String

---

##### `publicDelegatedSubPrefixs`<sup>Required</sup> <a name="publicDelegatedSubPrefixs" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.publicDelegatedSubPrefixs"></a>

```java
public ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsList getPublicDelegatedSubPrefixs();
```

- *Type:* <a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsList">ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsList</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.timeouts"></a>

```java
public ComputePublicDelegatedPrefixTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference">ComputePublicDelegatedPrefixTimeoutsOutputReference</a>

---

##### `allocatablePrefixLengthInput`<sup>Optional</sup> <a name="allocatablePrefixLengthInput" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.allocatablePrefixLengthInput"></a>

```java
public java.lang.Number getAllocatablePrefixLengthInput();
```

- *Type:* java.lang.Number

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipCidrRangeInput`<sup>Optional</sup> <a name="ipCidrRangeInput" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.ipCidrRangeInput"></a>

```java
public java.lang.String getIpCidrRangeInput();
```

- *Type:* java.lang.String

---

##### `isLiveMigrationInput`<sup>Optional</sup> <a name="isLiveMigrationInput" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.isLiveMigrationInput"></a>

```java
public java.lang.Boolean|IResolvable getIsLiveMigrationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parentPrefixInput`<sup>Optional</sup> <a name="parentPrefixInput" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.parentPrefixInput"></a>

```java
public java.lang.String getParentPrefixInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.timeoutsInput"></a>

```java
public IResolvable|ComputePublicDelegatedPrefixTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeouts">ComputePublicDelegatedPrefixTimeouts</a>

---

##### `allocatablePrefixLength`<sup>Required</sup> <a name="allocatablePrefixLength" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.allocatablePrefixLength"></a>

```java
public java.lang.Number getAllocatablePrefixLength();
```

- *Type:* java.lang.Number

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipCidrRange`<sup>Required</sup> <a name="ipCidrRange" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.ipCidrRange"></a>

```java
public java.lang.String getIpCidrRange();
```

- *Type:* java.lang.String

---

##### `isLiveMigration`<sup>Required</sup> <a name="isLiveMigration" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.isLiveMigration"></a>

```java
public java.lang.Boolean|IResolvable getIsLiveMigration();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parentPrefix`<sup>Required</sup> <a name="parentPrefix" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.parentPrefix"></a>

```java
public java.lang.String getParentPrefix();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefix.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ComputePublicDelegatedPrefixConfig <a name="ComputePublicDelegatedPrefixConfig" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.Initializer"></a>

```java
import io.cdktn.providers.google.compute_public_delegated_prefix.ComputePublicDelegatedPrefixConfig;

ComputePublicDelegatedPrefixConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .ipCidrRange(java.lang.String)
    .name(java.lang.String)
    .parentPrefix(java.lang.String)
    .region(java.lang.String)
//  .allocatablePrefixLength(java.lang.Number)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .isLiveMigration(java.lang.Boolean|IResolvable)
//  .mode(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(ComputePublicDelegatedPrefixTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.ipCidrRange">ipCidrRange</a></code> | <code>java.lang.String</code> | The IP address range, in CIDR format, represented by this public delegated prefix. |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.parentPrefix">parentPrefix</a></code> | <code>java.lang.String</code> | The URL of parent prefix. Either PublicAdvertisedPrefix or PublicDelegatedPrefix. |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.region">region</a></code> | <code>java.lang.String</code> | A region where the prefix will reside. |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.allocatablePrefixLength">allocatablePrefixLength</a></code> | <code>java.lang.Number</code> | The allocatable prefix length supported by this public delegated prefix. |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_public_delegated_prefix#id ComputePublicDelegatedPrefix#id}. |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.isLiveMigration">isLiveMigration</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, the prefix will be live migrated. |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.mode">mode</a></code> | <code>java.lang.String</code> | Specifies the mode of this IPv6 PDP. |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_public_delegated_prefix#project ComputePublicDelegatedPrefix#project}. |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeouts">ComputePublicDelegatedPrefixTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `ipCidrRange`<sup>Required</sup> <a name="ipCidrRange" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.ipCidrRange"></a>

```java
public java.lang.String getIpCidrRange();
```

- *Type:* java.lang.String

The IP address range, in CIDR format, represented by this public delegated prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_public_delegated_prefix#ip_cidr_range ComputePublicDelegatedPrefix#ip_cidr_range}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the resource.

The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?'
which means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_public_delegated_prefix#name ComputePublicDelegatedPrefix#name}

---

##### `parentPrefix`<sup>Required</sup> <a name="parentPrefix" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.parentPrefix"></a>

```java
public java.lang.String getParentPrefix();
```

- *Type:* java.lang.String

The URL of parent prefix. Either PublicAdvertisedPrefix or PublicDelegatedPrefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_public_delegated_prefix#parent_prefix ComputePublicDelegatedPrefix#parent_prefix}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

A region where the prefix will reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_public_delegated_prefix#region ComputePublicDelegatedPrefix#region}

---

##### `allocatablePrefixLength`<sup>Optional</sup> <a name="allocatablePrefixLength" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.allocatablePrefixLength"></a>

```java
public java.lang.Number getAllocatablePrefixLength();
```

- *Type:* java.lang.Number

The allocatable prefix length supported by this public delegated prefix.

This field is optional and cannot be set for prefixes in DELEGATION mode. It cannot be set for IPv4 prefixes either, and it always defaults to 32.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_public_delegated_prefix#allocatable_prefix_length ComputePublicDelegatedPrefix#allocatable_prefix_length}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_public_delegated_prefix#deletion_policy ComputePublicDelegatedPrefix#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_public_delegated_prefix#description ComputePublicDelegatedPrefix#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_public_delegated_prefix#id ComputePublicDelegatedPrefix#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isLiveMigration`<sup>Optional</sup> <a name="isLiveMigration" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.isLiveMigration"></a>

```java
public java.lang.Boolean|IResolvable getIsLiveMigration();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, the prefix will be live migrated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_public_delegated_prefix#is_live_migration ComputePublicDelegatedPrefix#is_live_migration}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Specifies the mode of this IPv6 PDP.

MODE must be one of:

* DELEGATION
* EXTERNAL_IPV6_FORWARDING_RULE_CREATION
* EXTERNAL_IPV6_SUBNETWORK_CREATION
* INTERNAL_IPV6_SUBNETWORK_CREATION Possible values: ["DELEGATION", "EXTERNAL_IPV6_FORWARDING_RULE_CREATION", "EXTERNAL_IPV6_SUBNETWORK_CREATION", "INTERNAL_IPV6_SUBNETWORK_CREATION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_public_delegated_prefix#mode ComputePublicDelegatedPrefix#mode}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_public_delegated_prefix#project ComputePublicDelegatedPrefix#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixConfig.property.timeouts"></a>

```java
public ComputePublicDelegatedPrefixTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeouts">ComputePublicDelegatedPrefixTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_public_delegated_prefix#timeouts ComputePublicDelegatedPrefix#timeouts}

---

### ComputePublicDelegatedPrefixPublicDelegatedSubPrefixs <a name="ComputePublicDelegatedPrefixPublicDelegatedSubPrefixs" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixs.Initializer"></a>

```java
import io.cdktn.providers.google.compute_public_delegated_prefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixs;

ComputePublicDelegatedPrefixPublicDelegatedSubPrefixs.builder()
    .build();
```


### ComputePublicDelegatedPrefixTimeouts <a name="ComputePublicDelegatedPrefixTimeouts" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.compute_public_delegated_prefix.ComputePublicDelegatedPrefixTimeouts;

ComputePublicDelegatedPrefixTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_public_delegated_prefix#create ComputePublicDelegatedPrefix#create}. |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_public_delegated_prefix#delete ComputePublicDelegatedPrefix#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_public_delegated_prefix#create ComputePublicDelegatedPrefix#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/compute_public_delegated_prefix#delete ComputePublicDelegatedPrefix#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsList <a name="ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsList" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsList.Initializer"></a>

```java
import io.cdktn.providers.google.compute_public_delegated_prefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsList;

new ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsList.get"></a>

```java
public ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference <a name="ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_public_delegated_prefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference;

new ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.property.allocatablePrefixLength">allocatablePrefixLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.property.delegateeProject">delegateeProject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.property.enableEnhancedIpv4Allocation">enableEnhancedIpv4Allocation</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.property.ipCidrRange">ipCidrRange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.property.ipv6AccessType">ipv6AccessType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.property.isAddress">isAddress</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixs">ComputePublicDelegatedPrefixPublicDelegatedSubPrefixs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allocatablePrefixLength`<sup>Required</sup> <a name="allocatablePrefixLength" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.property.allocatablePrefixLength"></a>

```java
public java.lang.Number getAllocatablePrefixLength();
```

- *Type:* java.lang.Number

---

##### `delegateeProject`<sup>Required</sup> <a name="delegateeProject" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.property.delegateeProject"></a>

```java
public java.lang.String getDelegateeProject();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `enableEnhancedIpv4Allocation`<sup>Required</sup> <a name="enableEnhancedIpv4Allocation" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.property.enableEnhancedIpv4Allocation"></a>

```java
public IResolvable getEnableEnhancedIpv4Allocation();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `ipCidrRange`<sup>Required</sup> <a name="ipCidrRange" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.property.ipCidrRange"></a>

```java
public java.lang.String getIpCidrRange();
```

- *Type:* java.lang.String

---

##### `ipv6AccessType`<sup>Required</sup> <a name="ipv6AccessType" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.property.ipv6AccessType"></a>

```java
public java.lang.String getIpv6AccessType();
```

- *Type:* java.lang.String

---

##### `isAddress`<sup>Required</sup> <a name="isAddress" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.property.isAddress"></a>

```java
public IResolvable getIsAddress();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixsOutputReference.property.internalValue"></a>

```java
public ComputePublicDelegatedPrefixPublicDelegatedSubPrefixs getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixPublicDelegatedSubPrefixs">ComputePublicDelegatedPrefixPublicDelegatedSubPrefixs</a>

---


### ComputePublicDelegatedPrefixTimeoutsOutputReference <a name="ComputePublicDelegatedPrefixTimeoutsOutputReference" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_public_delegated_prefix.ComputePublicDelegatedPrefixTimeoutsOutputReference;

new ComputePublicDelegatedPrefixTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeouts">ComputePublicDelegatedPrefixTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ComputePublicDelegatedPrefixTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.computePublicDelegatedPrefix.ComputePublicDelegatedPrefixTimeouts">ComputePublicDelegatedPrefixTimeouts</a>

---



