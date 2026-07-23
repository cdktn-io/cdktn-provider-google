# `computeWireGroup` Submodule <a name="`computeWireGroup` Submodule" id="@cdktn/provider-google.computeWireGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeWireGroup <a name="ComputeWireGroup" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group google_compute_wire_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.Initializer"></a>

```java
import io.cdktn.providers.google.compute_wire_group.ComputeWireGroup;

ComputeWireGroup.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .crossSiteNetwork(java.lang.String)
    .name(java.lang.String)
//  .adminEnabled(java.lang.Boolean|IResolvable)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .endpoints(IResolvable|java.util.List<ComputeWireGroupEndpoints>)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(ComputeWireGroupTimeouts)
//  .wireProperties(ComputeWireGroupWireProperties)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.Initializer.parameter.crossSiteNetwork">crossSiteNetwork</a></code> | <code>java.lang.String</code> | Required cross site network to which wire group belongs. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.Initializer.parameter.adminEnabled">adminEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether the wire group is administratively enabled. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.Initializer.parameter.endpoints">endpoints</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpoints">ComputeWireGroupEndpoints</a>></code> | endpoints block. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#id ComputeWireGroup#id}. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#project ComputeWireGroup#project}. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeouts">ComputeWireGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.Initializer.parameter.wireProperties">wireProperties</a></code> | <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWireProperties">ComputeWireGroupWireProperties</a></code> | wire_properties block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `crossSiteNetwork`<sup>Required</sup> <a name="crossSiteNetwork" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.Initializer.parameter.crossSiteNetwork"></a>

- *Type:* java.lang.String

Required cross site network to which wire group belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#cross_site_network ComputeWireGroup#cross_site_network}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the resource.

Provided by the client when the resource is created. The name must be
1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the first
character must be a lowercase letter, and all following characters must be a dash,
lowercase letter, or digit, except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#name ComputeWireGroup#name}

---

##### `adminEnabled`<sup>Optional</sup> <a name="adminEnabled" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.Initializer.parameter.adminEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether the wire group is administratively enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#admin_enabled ComputeWireGroup#admin_enabled}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#deletion_policy ComputeWireGroup#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#description ComputeWireGroup#description}

---

##### `endpoints`<sup>Optional</sup> <a name="endpoints" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.Initializer.parameter.endpoints"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpoints">ComputeWireGroupEndpoints</a>>

endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#endpoints ComputeWireGroup#endpoints}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#id ComputeWireGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#project ComputeWireGroup#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeouts">ComputeWireGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#timeouts ComputeWireGroup#timeouts}

---

##### `wireProperties`<sup>Optional</sup> <a name="wireProperties" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.Initializer.parameter.wireProperties"></a>

- *Type:* <a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWireProperties">ComputeWireGroupWireProperties</a>

wire_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#wire_properties ComputeWireGroup#wire_properties}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.putEndpoints">putEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.putWireProperties">putWireProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.resetAdminEnabled">resetAdminEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.resetEndpoints">resetEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.resetWireProperties">resetWireProperties</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEndpoints` <a name="putEndpoints" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.putEndpoints"></a>

```java
public void putEndpoints(IResolvable|java.util.List<ComputeWireGroupEndpoints> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.putEndpoints.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpoints">ComputeWireGroupEndpoints</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.putTimeouts"></a>

```java
public void putTimeouts(ComputeWireGroupTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeouts">ComputeWireGroupTimeouts</a>

---

##### `putWireProperties` <a name="putWireProperties" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.putWireProperties"></a>

```java
public void putWireProperties(ComputeWireGroupWireProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.putWireProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWireProperties">ComputeWireGroupWireProperties</a>

---

##### `resetAdminEnabled` <a name="resetAdminEnabled" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.resetAdminEnabled"></a>

```java
public void resetAdminEnabled()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEndpoints` <a name="resetEndpoints" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.resetEndpoints"></a>

```java
public void resetEndpoints()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetWireProperties` <a name="resetWireProperties" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.resetWireProperties"></a>

```java
public void resetWireProperties()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ComputeWireGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.isConstruct"></a>

```java
import io.cdktn.providers.google.compute_wire_group.ComputeWireGroup;

ComputeWireGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.isTerraformElement"></a>

```java
import io.cdktn.providers.google.compute_wire_group.ComputeWireGroup;

ComputeWireGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.isTerraformResource"></a>

```java
import io.cdktn.providers.google.compute_wire_group.ComputeWireGroup;

ComputeWireGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.compute_wire_group.ComputeWireGroup;

ComputeWireGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ComputeWireGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ComputeWireGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ComputeWireGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ComputeWireGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ComputeWireGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.creationTimestamp">creationTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.endpoints">endpoints</a></code> | <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsList">ComputeWireGroupEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference">ComputeWireGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.topology">topology</a></code> | <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyList">ComputeWireGroupTopologyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.wireProperties">wireProperties</a></code> | <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference">ComputeWireGroupWirePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.wires">wires</a></code> | <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresList">ComputeWireGroupWiresList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.adminEnabledInput">adminEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.crossSiteNetworkInput">crossSiteNetworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.endpointsInput">endpointsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpoints">ComputeWireGroupEndpoints</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeouts">ComputeWireGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.wirePropertiesInput">wirePropertiesInput</a></code> | <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWireProperties">ComputeWireGroupWireProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.adminEnabled">adminEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.crossSiteNetwork">crossSiteNetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.creationTimestamp"></a>

```java
public java.lang.String getCreationTimestamp();
```

- *Type:* java.lang.String

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.endpoints"></a>

```java
public ComputeWireGroupEndpointsList getEndpoints();
```

- *Type:* <a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsList">ComputeWireGroupEndpointsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.timeouts"></a>

```java
public ComputeWireGroupTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference">ComputeWireGroupTimeoutsOutputReference</a>

---

##### `topology`<sup>Required</sup> <a name="topology" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.topology"></a>

```java
public ComputeWireGroupTopologyList getTopology();
```

- *Type:* <a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyList">ComputeWireGroupTopologyList</a>

---

##### `wireProperties`<sup>Required</sup> <a name="wireProperties" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.wireProperties"></a>

```java
public ComputeWireGroupWirePropertiesOutputReference getWireProperties();
```

- *Type:* <a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference">ComputeWireGroupWirePropertiesOutputReference</a>

---

##### `wires`<sup>Required</sup> <a name="wires" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.wires"></a>

```java
public ComputeWireGroupWiresList getWires();
```

- *Type:* <a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresList">ComputeWireGroupWiresList</a>

---

##### `adminEnabledInput`<sup>Optional</sup> <a name="adminEnabledInput" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.adminEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getAdminEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `crossSiteNetworkInput`<sup>Optional</sup> <a name="crossSiteNetworkInput" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.crossSiteNetworkInput"></a>

```java
public java.lang.String getCrossSiteNetworkInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `endpointsInput`<sup>Optional</sup> <a name="endpointsInput" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.endpointsInput"></a>

```java
public IResolvable|java.util.List<ComputeWireGroupEndpoints> getEndpointsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpoints">ComputeWireGroupEndpoints</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.timeoutsInput"></a>

```java
public IResolvable|ComputeWireGroupTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeouts">ComputeWireGroupTimeouts</a>

---

##### `wirePropertiesInput`<sup>Optional</sup> <a name="wirePropertiesInput" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.wirePropertiesInput"></a>

```java
public ComputeWireGroupWireProperties getWirePropertiesInput();
```

- *Type:* <a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWireProperties">ComputeWireGroupWireProperties</a>

---

##### `adminEnabled`<sup>Required</sup> <a name="adminEnabled" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.adminEnabled"></a>

```java
public java.lang.Boolean|IResolvable getAdminEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `crossSiteNetwork`<sup>Required</sup> <a name="crossSiteNetwork" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.crossSiteNetwork"></a>

```java
public java.lang.String getCrossSiteNetwork();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeWireGroupConfig <a name="ComputeWireGroupConfig" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig.Initializer"></a>

```java
import io.cdktn.providers.google.compute_wire_group.ComputeWireGroupConfig;

ComputeWireGroupConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .crossSiteNetwork(java.lang.String)
    .name(java.lang.String)
//  .adminEnabled(java.lang.Boolean|IResolvable)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .endpoints(IResolvable|java.util.List<ComputeWireGroupEndpoints>)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(ComputeWireGroupTimeouts)
//  .wireProperties(ComputeWireGroupWireProperties)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig.property.crossSiteNetwork">crossSiteNetwork</a></code> | <code>java.lang.String</code> | Required cross site network to which wire group belongs. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig.property.adminEnabled">adminEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether the wire group is administratively enabled. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig.property.endpoints">endpoints</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpoints">ComputeWireGroupEndpoints</a>></code> | endpoints block. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#id ComputeWireGroup#id}. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#project ComputeWireGroup#project}. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeouts">ComputeWireGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig.property.wireProperties">wireProperties</a></code> | <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWireProperties">ComputeWireGroupWireProperties</a></code> | wire_properties block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `crossSiteNetwork`<sup>Required</sup> <a name="crossSiteNetwork" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig.property.crossSiteNetwork"></a>

```java
public java.lang.String getCrossSiteNetwork();
```

- *Type:* java.lang.String

Required cross site network to which wire group belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#cross_site_network ComputeWireGroup#cross_site_network}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the resource.

Provided by the client when the resource is created. The name must be
1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the first
character must be a lowercase letter, and all following characters must be a dash,
lowercase letter, or digit, except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#name ComputeWireGroup#name}

---

##### `adminEnabled`<sup>Optional</sup> <a name="adminEnabled" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig.property.adminEnabled"></a>

```java
public java.lang.Boolean|IResolvable getAdminEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether the wire group is administratively enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#admin_enabled ComputeWireGroup#admin_enabled}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#deletion_policy ComputeWireGroup#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#description ComputeWireGroup#description}

---

##### `endpoints`<sup>Optional</sup> <a name="endpoints" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig.property.endpoints"></a>

```java
public IResolvable|java.util.List<ComputeWireGroupEndpoints> getEndpoints();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpoints">ComputeWireGroupEndpoints</a>>

endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#endpoints ComputeWireGroup#endpoints}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#id ComputeWireGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#project ComputeWireGroup#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig.property.timeouts"></a>

```java
public ComputeWireGroupTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeouts">ComputeWireGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#timeouts ComputeWireGroup#timeouts}

---

##### `wireProperties`<sup>Optional</sup> <a name="wireProperties" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupConfig.property.wireProperties"></a>

```java
public ComputeWireGroupWireProperties getWireProperties();
```

- *Type:* <a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWireProperties">ComputeWireGroupWireProperties</a>

wire_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#wire_properties ComputeWireGroup#wire_properties}

---

### ComputeWireGroupEndpoints <a name="ComputeWireGroupEndpoints" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpoints.Initializer"></a>

```java
import io.cdktn.providers.google.compute_wire_group.ComputeWireGroupEndpoints;

ComputeWireGroupEndpoints.builder()
    .endpoint(java.lang.String)
//  .interconnects(IResolvable|java.util.List<ComputeWireGroupEndpointsInterconnects>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpoints.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#endpoint ComputeWireGroup#endpoint}. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpoints.property.interconnects">interconnects</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnects">ComputeWireGroupEndpointsInterconnects</a>></code> | interconnects block. |

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpoints.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#endpoint ComputeWireGroup#endpoint}.

---

##### `interconnects`<sup>Optional</sup> <a name="interconnects" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpoints.property.interconnects"></a>

```java
public IResolvable|java.util.List<ComputeWireGroupEndpointsInterconnects> getInterconnects();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnects">ComputeWireGroupEndpointsInterconnects</a>>

interconnects block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#interconnects ComputeWireGroup#interconnects}

---

### ComputeWireGroupEndpointsInterconnects <a name="ComputeWireGroupEndpointsInterconnects" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnects"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnects.Initializer"></a>

```java
import io.cdktn.providers.google.compute_wire_group.ComputeWireGroupEndpointsInterconnects;

ComputeWireGroupEndpointsInterconnects.builder()
    .interconnectName(java.lang.String)
//  .interconnect(java.lang.String)
//  .vlanTags(java.util.List<java.lang.Number>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnects.property.interconnectName">interconnectName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#interconnect_name ComputeWireGroup#interconnect_name}. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnects.property.interconnect">interconnect</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#interconnect ComputeWireGroup#interconnect}. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnects.property.vlanTags">vlanTags</a></code> | <code>java.util.List<java.lang.Number></code> | VLAN tags for the interconnect. |

---

##### `interconnectName`<sup>Required</sup> <a name="interconnectName" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnects.property.interconnectName"></a>

```java
public java.lang.String getInterconnectName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#interconnect_name ComputeWireGroup#interconnect_name}.

---

##### `interconnect`<sup>Optional</sup> <a name="interconnect" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnects.property.interconnect"></a>

```java
public java.lang.String getInterconnect();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#interconnect ComputeWireGroup#interconnect}.

---

##### `vlanTags`<sup>Optional</sup> <a name="vlanTags" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnects.property.vlanTags"></a>

```java
public java.util.List<java.lang.Number> getVlanTags();
```

- *Type:* java.util.List<java.lang.Number>

VLAN tags for the interconnect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#vlan_tags ComputeWireGroup#vlan_tags}

---

### ComputeWireGroupTimeouts <a name="ComputeWireGroupTimeouts" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.compute_wire_group.ComputeWireGroupTimeouts;

ComputeWireGroupTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#create ComputeWireGroup#create}. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#delete ComputeWireGroup#delete}. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#update ComputeWireGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#create ComputeWireGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#delete ComputeWireGroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#update ComputeWireGroup#update}.

---

### ComputeWireGroupTopology <a name="ComputeWireGroupTopology" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopology"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopology.Initializer"></a>

```java
import io.cdktn.providers.google.compute_wire_group.ComputeWireGroupTopology;

ComputeWireGroupTopology.builder()
    .build();
```


### ComputeWireGroupTopologyEndpoints <a name="ComputeWireGroupTopologyEndpoints" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpoints.Initializer"></a>

```java
import io.cdktn.providers.google.compute_wire_group.ComputeWireGroupTopologyEndpoints;

ComputeWireGroupTopologyEndpoints.builder()
    .build();
```


### ComputeWireGroupWireProperties <a name="ComputeWireGroupWireProperties" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWireProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWireProperties.Initializer"></a>

```java
import io.cdktn.providers.google.compute_wire_group.ComputeWireGroupWireProperties;

ComputeWireGroupWireProperties.builder()
    .bandwidthAllocation(java.lang.String)
//  .bandwidthUnmetered(java.lang.Number)
//  .faultResponse(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWireProperties.property.bandwidthAllocation">bandwidthAllocation</a></code> | <code>java.lang.String</code> | The configuration of a wire's bandwidth allocation. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWireProperties.property.bandwidthUnmetered">bandwidthUnmetered</a></code> | <code>java.lang.Number</code> | The unmetered bandwidth setting. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWireProperties.property.faultResponse">faultResponse</a></code> | <code>java.lang.String</code> | Response when a fault is detected in a pseudowire: NONE: default. |

---

##### `bandwidthAllocation`<sup>Required</sup> <a name="bandwidthAllocation" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWireProperties.property.bandwidthAllocation"></a>

```java
public java.lang.String getBandwidthAllocation();
```

- *Type:* java.lang.String

The configuration of a wire's bandwidth allocation.

ALLOCATE_PER_WIRE: configures a separate unmetered bandwidth allocation (and associated charges) for each wire in the group.
SHARED_WITH_WIRE_GROUP: this is the default behavior, which configures one unmetered bandwidth allocation for the wire group. The unmetered bandwidth is divided equally across each wire in the group, but dynamic
throttling reallocates unused unmetered bandwidth from unused or underused wires to other wires in the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#bandwidth_allocation ComputeWireGroup#bandwidth_allocation}

---

##### `bandwidthUnmetered`<sup>Optional</sup> <a name="bandwidthUnmetered" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWireProperties.property.bandwidthUnmetered"></a>

```java
public java.lang.Number getBandwidthUnmetered();
```

- *Type:* java.lang.Number

The unmetered bandwidth setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#bandwidth_unmetered ComputeWireGroup#bandwidth_unmetered}

---

##### `faultResponse`<sup>Optional</sup> <a name="faultResponse" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWireProperties.property.faultResponse"></a>

```java
public java.lang.String getFaultResponse();
```

- *Type:* java.lang.String

Response when a fault is detected in a pseudowire: NONE: default.

DISABLE_PORT: set the port line protocol down when inline probes detect a fault. This setting is only permitted on port mode pseudowires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/compute_wire_group#fault_response ComputeWireGroup#fault_response}

---

### ComputeWireGroupWires <a name="ComputeWireGroupWires" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWires"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWires.Initializer"></a>

```java
import io.cdktn.providers.google.compute_wire_group.ComputeWireGroupWires;

ComputeWireGroupWires.builder()
    .build();
```


### ComputeWireGroupWiresEndpoints <a name="ComputeWireGroupWiresEndpoints" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpoints.Initializer"></a>

```java
import io.cdktn.providers.google.compute_wire_group.ComputeWireGroupWiresEndpoints;

ComputeWireGroupWiresEndpoints.builder()
    .build();
```


### ComputeWireGroupWiresWireProperties <a name="ComputeWireGroupWiresWireProperties" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWireProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWireProperties.Initializer"></a>

```java
import io.cdktn.providers.google.compute_wire_group.ComputeWireGroupWiresWireProperties;

ComputeWireGroupWiresWireProperties.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### ComputeWireGroupEndpointsInterconnectsList <a name="ComputeWireGroupEndpointsInterconnectsList" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsList.Initializer"></a>

```java
import io.cdktn.providers.google.compute_wire_group.ComputeWireGroupEndpointsInterconnectsList;

new ComputeWireGroupEndpointsInterconnectsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsList.get"></a>

```java
public ComputeWireGroupEndpointsInterconnectsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnects">ComputeWireGroupEndpointsInterconnects</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ComputeWireGroupEndpointsInterconnects> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnects">ComputeWireGroupEndpointsInterconnects</a>>

---


### ComputeWireGroupEndpointsInterconnectsOutputReference <a name="ComputeWireGroupEndpointsInterconnectsOutputReference" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_wire_group.ComputeWireGroupEndpointsInterconnectsOutputReference;

new ComputeWireGroupEndpointsInterconnectsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.resetInterconnect">resetInterconnect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.resetVlanTags">resetVlanTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInterconnect` <a name="resetInterconnect" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.resetInterconnect"></a>

```java
public void resetInterconnect()
```

##### `resetVlanTags` <a name="resetVlanTags" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.resetVlanTags"></a>

```java
public void resetVlanTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.property.interconnectInput">interconnectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.property.interconnectNameInput">interconnectNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.property.vlanTagsInput">vlanTagsInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.property.interconnect">interconnect</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.property.interconnectName">interconnectName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.property.vlanTags">vlanTags</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnects">ComputeWireGroupEndpointsInterconnects</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `interconnectInput`<sup>Optional</sup> <a name="interconnectInput" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.property.interconnectInput"></a>

```java
public java.lang.String getInterconnectInput();
```

- *Type:* java.lang.String

---

##### `interconnectNameInput`<sup>Optional</sup> <a name="interconnectNameInput" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.property.interconnectNameInput"></a>

```java
public java.lang.String getInterconnectNameInput();
```

- *Type:* java.lang.String

---

##### `vlanTagsInput`<sup>Optional</sup> <a name="vlanTagsInput" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.property.vlanTagsInput"></a>

```java
public java.util.List<java.lang.Number> getVlanTagsInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `interconnect`<sup>Required</sup> <a name="interconnect" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.property.interconnect"></a>

```java
public java.lang.String getInterconnect();
```

- *Type:* java.lang.String

---

##### `interconnectName`<sup>Required</sup> <a name="interconnectName" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.property.interconnectName"></a>

```java
public java.lang.String getInterconnectName();
```

- *Type:* java.lang.String

---

##### `vlanTags`<sup>Required</sup> <a name="vlanTags" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.property.vlanTags"></a>

```java
public java.util.List<java.lang.Number> getVlanTags();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsOutputReference.property.internalValue"></a>

```java
public IResolvable|ComputeWireGroupEndpointsInterconnects getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnects">ComputeWireGroupEndpointsInterconnects</a>

---


### ComputeWireGroupEndpointsList <a name="ComputeWireGroupEndpointsList" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsList.Initializer"></a>

```java
import io.cdktn.providers.google.compute_wire_group.ComputeWireGroupEndpointsList;

new ComputeWireGroupEndpointsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsList.get"></a>

```java
public ComputeWireGroupEndpointsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpoints">ComputeWireGroupEndpoints</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ComputeWireGroupEndpoints> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpoints">ComputeWireGroupEndpoints</a>>

---


### ComputeWireGroupEndpointsOutputReference <a name="ComputeWireGroupEndpointsOutputReference" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_wire_group.ComputeWireGroupEndpointsOutputReference;

new ComputeWireGroupEndpointsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.putInterconnects">putInterconnects</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.resetInterconnects">resetInterconnects</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInterconnects` <a name="putInterconnects" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.putInterconnects"></a>

```java
public void putInterconnects(IResolvable|java.util.List<ComputeWireGroupEndpointsInterconnects> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.putInterconnects.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnects">ComputeWireGroupEndpointsInterconnects</a>>

---

##### `resetInterconnects` <a name="resetInterconnects" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.resetInterconnects"></a>

```java
public void resetInterconnects()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.property.interconnects">interconnects</a></code> | <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsList">ComputeWireGroupEndpointsInterconnectsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.property.endpointInput">endpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.property.interconnectsInput">interconnectsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnects">ComputeWireGroupEndpointsInterconnects</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpoints">ComputeWireGroupEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `interconnects`<sup>Required</sup> <a name="interconnects" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.property.interconnects"></a>

```java
public ComputeWireGroupEndpointsInterconnectsList getInterconnects();
```

- *Type:* <a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnectsList">ComputeWireGroupEndpointsInterconnectsList</a>

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.property.endpointInput"></a>

```java
public java.lang.String getEndpointInput();
```

- *Type:* java.lang.String

---

##### `interconnectsInput`<sup>Optional</sup> <a name="interconnectsInput" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.property.interconnectsInput"></a>

```java
public IResolvable|java.util.List<ComputeWireGroupEndpointsInterconnects> getInterconnectsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsInterconnects">ComputeWireGroupEndpointsInterconnects</a>>

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpointsOutputReference.property.internalValue"></a>

```java
public IResolvable|ComputeWireGroupEndpoints getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupEndpoints">ComputeWireGroupEndpoints</a>

---


### ComputeWireGroupTimeoutsOutputReference <a name="ComputeWireGroupTimeoutsOutputReference" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_wire_group.ComputeWireGroupTimeoutsOutputReference;

new ComputeWireGroupTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeouts">ComputeWireGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ComputeWireGroupTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTimeouts">ComputeWireGroupTimeouts</a>

---


### ComputeWireGroupTopologyEndpointsList <a name="ComputeWireGroupTopologyEndpointsList" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsList.Initializer"></a>

```java
import io.cdktn.providers.google.compute_wire_group.ComputeWireGroupTopologyEndpointsList;

new ComputeWireGroupTopologyEndpointsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsList.get"></a>

```java
public ComputeWireGroupTopologyEndpointsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ComputeWireGroupTopologyEndpointsOutputReference <a name="ComputeWireGroupTopologyEndpointsOutputReference" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_wire_group.ComputeWireGroupTopologyEndpointsOutputReference;

new ComputeWireGroupTopologyEndpointsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.property.city">city</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.property.label">label</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpoints">ComputeWireGroupTopologyEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `city`<sup>Required</sup> <a name="city" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.property.city"></a>

```java
public java.lang.String getCity();
```

- *Type:* java.lang.String

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsOutputReference.property.internalValue"></a>

```java
public ComputeWireGroupTopologyEndpoints getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpoints">ComputeWireGroupTopologyEndpoints</a>

---


### ComputeWireGroupTopologyList <a name="ComputeWireGroupTopologyList" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyList.Initializer"></a>

```java
import io.cdktn.providers.google.compute_wire_group.ComputeWireGroupTopologyList;

new ComputeWireGroupTopologyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyList.get"></a>

```java
public ComputeWireGroupTopologyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ComputeWireGroupTopologyOutputReference <a name="ComputeWireGroupTopologyOutputReference" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_wire_group.ComputeWireGroupTopologyOutputReference;

new ComputeWireGroupTopologyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.property.endpoints">endpoints</a></code> | <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsList">ComputeWireGroupTopologyEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopology">ComputeWireGroupTopology</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.property.endpoints"></a>

```java
public ComputeWireGroupTopologyEndpointsList getEndpoints();
```

- *Type:* <a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyEndpointsList">ComputeWireGroupTopologyEndpointsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopologyOutputReference.property.internalValue"></a>

```java
public ComputeWireGroupTopology getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupTopology">ComputeWireGroupTopology</a>

---


### ComputeWireGroupWirePropertiesOutputReference <a name="ComputeWireGroupWirePropertiesOutputReference" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_wire_group.ComputeWireGroupWirePropertiesOutputReference;

new ComputeWireGroupWirePropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.resetBandwidthUnmetered">resetBandwidthUnmetered</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.resetFaultResponse">resetFaultResponse</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBandwidthUnmetered` <a name="resetBandwidthUnmetered" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.resetBandwidthUnmetered"></a>

```java
public void resetBandwidthUnmetered()
```

##### `resetFaultResponse` <a name="resetFaultResponse" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.resetFaultResponse"></a>

```java
public void resetFaultResponse()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.property.bandwidthAllocationInput">bandwidthAllocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.property.bandwidthUnmeteredInput">bandwidthUnmeteredInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.property.faultResponseInput">faultResponseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.property.bandwidthAllocation">bandwidthAllocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.property.bandwidthUnmetered">bandwidthUnmetered</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.property.faultResponse">faultResponse</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWireProperties">ComputeWireGroupWireProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bandwidthAllocationInput`<sup>Optional</sup> <a name="bandwidthAllocationInput" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.property.bandwidthAllocationInput"></a>

```java
public java.lang.String getBandwidthAllocationInput();
```

- *Type:* java.lang.String

---

##### `bandwidthUnmeteredInput`<sup>Optional</sup> <a name="bandwidthUnmeteredInput" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.property.bandwidthUnmeteredInput"></a>

```java
public java.lang.Number getBandwidthUnmeteredInput();
```

- *Type:* java.lang.Number

---

##### `faultResponseInput`<sup>Optional</sup> <a name="faultResponseInput" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.property.faultResponseInput"></a>

```java
public java.lang.String getFaultResponseInput();
```

- *Type:* java.lang.String

---

##### `bandwidthAllocation`<sup>Required</sup> <a name="bandwidthAllocation" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.property.bandwidthAllocation"></a>

```java
public java.lang.String getBandwidthAllocation();
```

- *Type:* java.lang.String

---

##### `bandwidthUnmetered`<sup>Required</sup> <a name="bandwidthUnmetered" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.property.bandwidthUnmetered"></a>

```java
public java.lang.Number getBandwidthUnmetered();
```

- *Type:* java.lang.Number

---

##### `faultResponse`<sup>Required</sup> <a name="faultResponse" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.property.faultResponse"></a>

```java
public java.lang.String getFaultResponse();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWirePropertiesOutputReference.property.internalValue"></a>

```java
public ComputeWireGroupWireProperties getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWireProperties">ComputeWireGroupWireProperties</a>

---


### ComputeWireGroupWiresEndpointsList <a name="ComputeWireGroupWiresEndpointsList" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsList.Initializer"></a>

```java
import io.cdktn.providers.google.compute_wire_group.ComputeWireGroupWiresEndpointsList;

new ComputeWireGroupWiresEndpointsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsList.get"></a>

```java
public ComputeWireGroupWiresEndpointsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ComputeWireGroupWiresEndpointsOutputReference <a name="ComputeWireGroupWiresEndpointsOutputReference" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_wire_group.ComputeWireGroupWiresEndpointsOutputReference;

new ComputeWireGroupWiresEndpointsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.property.interconnect">interconnect</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.property.vlanTag">vlanTag</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpoints">ComputeWireGroupWiresEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `interconnect`<sup>Required</sup> <a name="interconnect" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.property.interconnect"></a>

```java
public java.lang.String getInterconnect();
```

- *Type:* java.lang.String

---

##### `vlanTag`<sup>Required</sup> <a name="vlanTag" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.property.vlanTag"></a>

```java
public java.lang.Number getVlanTag();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsOutputReference.property.internalValue"></a>

```java
public ComputeWireGroupWiresEndpoints getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpoints">ComputeWireGroupWiresEndpoints</a>

---


### ComputeWireGroupWiresList <a name="ComputeWireGroupWiresList" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresList.Initializer"></a>

```java
import io.cdktn.providers.google.compute_wire_group.ComputeWireGroupWiresList;

new ComputeWireGroupWiresList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresList.get"></a>

```java
public ComputeWireGroupWiresOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ComputeWireGroupWiresOutputReference <a name="ComputeWireGroupWiresOutputReference" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_wire_group.ComputeWireGroupWiresOutputReference;

new ComputeWireGroupWiresOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.property.adminEnabled">adminEnabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.property.endpoints">endpoints</a></code> | <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsList">ComputeWireGroupWiresEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.property.label">label</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.property.wireProperties">wireProperties</a></code> | <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesList">ComputeWireGroupWiresWirePropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWires">ComputeWireGroupWires</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `adminEnabled`<sup>Required</sup> <a name="adminEnabled" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.property.adminEnabled"></a>

```java
public IResolvable getAdminEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.property.endpoints"></a>

```java
public ComputeWireGroupWiresEndpointsList getEndpoints();
```

- *Type:* <a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresEndpointsList">ComputeWireGroupWiresEndpointsList</a>

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

---

##### `wireProperties`<sup>Required</sup> <a name="wireProperties" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.property.wireProperties"></a>

```java
public ComputeWireGroupWiresWirePropertiesList getWireProperties();
```

- *Type:* <a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesList">ComputeWireGroupWiresWirePropertiesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresOutputReference.property.internalValue"></a>

```java
public ComputeWireGroupWires getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWires">ComputeWireGroupWires</a>

---


### ComputeWireGroupWiresWirePropertiesList <a name="ComputeWireGroupWiresWirePropertiesList" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesList.Initializer"></a>

```java
import io.cdktn.providers.google.compute_wire_group.ComputeWireGroupWiresWirePropertiesList;

new ComputeWireGroupWiresWirePropertiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesList.get"></a>

```java
public ComputeWireGroupWiresWirePropertiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ComputeWireGroupWiresWirePropertiesOutputReference <a name="ComputeWireGroupWiresWirePropertiesOutputReference" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_wire_group.ComputeWireGroupWiresWirePropertiesOutputReference;

new ComputeWireGroupWiresWirePropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.property.bandwidthUnmetered">bandwidthUnmetered</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.property.faultResponse">faultResponse</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWireProperties">ComputeWireGroupWiresWireProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bandwidthUnmetered`<sup>Required</sup> <a name="bandwidthUnmetered" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.property.bandwidthUnmetered"></a>

```java
public java.lang.Number getBandwidthUnmetered();
```

- *Type:* java.lang.Number

---

##### `faultResponse`<sup>Required</sup> <a name="faultResponse" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.property.faultResponse"></a>

```java
public java.lang.String getFaultResponse();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWirePropertiesOutputReference.property.internalValue"></a>

```java
public ComputeWireGroupWiresWireProperties getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.computeWireGroup.ComputeWireGroupWiresWireProperties">ComputeWireGroupWiresWireProperties</a>

---



