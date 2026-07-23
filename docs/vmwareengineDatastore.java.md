# `vmwareengineDatastore` Submodule <a name="`vmwareengineDatastore` Submodule" id="@cdktn/provider-google.vmwareengineDatastore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VmwareengineDatastore <a name="VmwareengineDatastore" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_datastore google_vmwareengine_datastore}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer"></a>

```java
import io.cdktn.providers.google.vmwareengine_datastore.VmwareengineDatastore;

VmwareengineDatastore.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .name(java.lang.String)
    .nfsDatastore(VmwareengineDatastoreNfsDatastore)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(VmwareengineDatastoreTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The user-provided identifier of the datastore to be created. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.nfsDatastore">nfsDatastore</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastore">VmwareengineDatastoreNfsDatastore</a></code> | nfs_datastore block. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | User-provided description for this datastore. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_datastore#id VmwareengineDatastore#id}. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_datastore#project VmwareengineDatastore#project}. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeouts">VmwareengineDatastoreTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_datastore#location VmwareengineDatastore#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The user-provided identifier of the datastore to be created.

This identifier must be unique among each 'Datastore' within the parent
and becomes the final token in the name URI.
The identifier must meet the following requirements:

* Only contains 1-63 alphanumeric characters and hyphens
* Begins with an alphabetical character
* Ends with a non-hyphen character
* Not formatted as a UUID
* Complies with [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034)
  (section 3.5)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_datastore#name VmwareengineDatastore#name}

---

##### `nfsDatastore`<sup>Required</sup> <a name="nfsDatastore" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.nfsDatastore"></a>

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastore">VmwareengineDatastoreNfsDatastore</a>

nfs_datastore block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_datastore#nfs_datastore VmwareengineDatastore#nfs_datastore}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_datastore#deletion_policy VmwareengineDatastore#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.description"></a>

- *Type:* java.lang.String

User-provided description for this datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_datastore#description VmwareengineDatastore#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_datastore#id VmwareengineDatastore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_datastore#project VmwareengineDatastore#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeouts">VmwareengineDatastoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_datastore#timeouts VmwareengineDatastore#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.putNfsDatastore">putNfsDatastore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putNfsDatastore` <a name="putNfsDatastore" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.putNfsDatastore"></a>

```java
public void putNfsDatastore(VmwareengineDatastoreNfsDatastore value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.putNfsDatastore.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastore">VmwareengineDatastoreNfsDatastore</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.putTimeouts"></a>

```java
public void putTimeouts(VmwareengineDatastoreTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeouts">VmwareengineDatastoreTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a VmwareengineDatastore resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.isConstruct"></a>

```java
import io.cdktn.providers.google.vmwareengine_datastore.VmwareengineDatastore;

VmwareengineDatastore.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.isTerraformElement"></a>

```java
import io.cdktn.providers.google.vmwareengine_datastore.VmwareengineDatastore;

VmwareengineDatastore.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.isTerraformResource"></a>

```java
import io.cdktn.providers.google.vmwareengine_datastore.VmwareengineDatastore;

VmwareengineDatastore.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.vmwareengine_datastore.VmwareengineDatastore;

VmwareengineDatastore.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VmwareengineDatastore.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a VmwareengineDatastore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VmwareengineDatastore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VmwareengineDatastore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_datastore#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the VmwareengineDatastore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.clusters">clusters</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.nfsDatastore">nfsDatastore</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference">VmwareengineDatastoreNfsDatastoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference">VmwareengineDatastoreTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.nfsDatastoreInput">nfsDatastoreInput</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastore">VmwareengineDatastoreNfsDatastore</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeouts">VmwareengineDatastoreTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `clusters`<sup>Required</sup> <a name="clusters" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.clusters"></a>

```java
public java.util.List<java.lang.String> getClusters();
```

- *Type:* java.util.List<java.lang.String>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `nfsDatastore`<sup>Required</sup> <a name="nfsDatastore" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.nfsDatastore"></a>

```java
public VmwareengineDatastoreNfsDatastoreOutputReference getNfsDatastore();
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference">VmwareengineDatastoreNfsDatastoreOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.timeouts"></a>

```java
public VmwareengineDatastoreTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference">VmwareengineDatastoreTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nfsDatastoreInput`<sup>Optional</sup> <a name="nfsDatastoreInput" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.nfsDatastoreInput"></a>

```java
public VmwareengineDatastoreNfsDatastore getNfsDatastoreInput();
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastore">VmwareengineDatastoreNfsDatastore</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.timeoutsInput"></a>

```java
public IResolvable|VmwareengineDatastoreTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeouts">VmwareengineDatastoreTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastore.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VmwareengineDatastoreConfig <a name="VmwareengineDatastoreConfig" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.Initializer"></a>

```java
import io.cdktn.providers.google.vmwareengine_datastore.VmwareengineDatastoreConfig;

VmwareengineDatastoreConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .name(java.lang.String)
    .nfsDatastore(VmwareengineDatastoreNfsDatastore)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(VmwareengineDatastoreTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.name">name</a></code> | <code>java.lang.String</code> | The user-provided identifier of the datastore to be created. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.nfsDatastore">nfsDatastore</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastore">VmwareengineDatastoreNfsDatastore</a></code> | nfs_datastore block. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.description">description</a></code> | <code>java.lang.String</code> | User-provided description for this datastore. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_datastore#id VmwareengineDatastore#id}. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_datastore#project VmwareengineDatastore#project}. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeouts">VmwareengineDatastoreTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_datastore#location VmwareengineDatastore#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The user-provided identifier of the datastore to be created.

This identifier must be unique among each 'Datastore' within the parent
and becomes the final token in the name URI.
The identifier must meet the following requirements:

* Only contains 1-63 alphanumeric characters and hyphens
* Begins with an alphabetical character
* Ends with a non-hyphen character
* Not formatted as a UUID
* Complies with [RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034)
  (section 3.5)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_datastore#name VmwareengineDatastore#name}

---

##### `nfsDatastore`<sup>Required</sup> <a name="nfsDatastore" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.nfsDatastore"></a>

```java
public VmwareengineDatastoreNfsDatastore getNfsDatastore();
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastore">VmwareengineDatastoreNfsDatastore</a>

nfs_datastore block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_datastore#nfs_datastore VmwareengineDatastore#nfs_datastore}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_datastore#deletion_policy VmwareengineDatastore#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

User-provided description for this datastore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_datastore#description VmwareengineDatastore#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_datastore#id VmwareengineDatastore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_datastore#project VmwareengineDatastore#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreConfig.property.timeouts"></a>

```java
public VmwareengineDatastoreTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeouts">VmwareengineDatastoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_datastore#timeouts VmwareengineDatastore#timeouts}

---

### VmwareengineDatastoreNfsDatastore <a name="VmwareengineDatastoreNfsDatastore" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastore"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastore.Initializer"></a>

```java
import io.cdktn.providers.google.vmwareengine_datastore.VmwareengineDatastoreNfsDatastore;

VmwareengineDatastoreNfsDatastore.builder()
//  .googleFileService(VmwareengineDatastoreNfsDatastoreGoogleFileService)
//  .thirdPartyFileService(VmwareengineDatastoreNfsDatastoreThirdPartyFileService)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastore.property.googleFileService">googleFileService</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileService">VmwareengineDatastoreNfsDatastoreGoogleFileService</a></code> | google_file_service block. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastore.property.thirdPartyFileService">thirdPartyFileService</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileService">VmwareengineDatastoreNfsDatastoreThirdPartyFileService</a></code> | third_party_file_service block. |

---

##### `googleFileService`<sup>Optional</sup> <a name="googleFileService" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastore.property.googleFileService"></a>

```java
public VmwareengineDatastoreNfsDatastoreGoogleFileService getGoogleFileService();
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileService">VmwareengineDatastoreNfsDatastoreGoogleFileService</a>

google_file_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_datastore#google_file_service VmwareengineDatastore#google_file_service}

---

##### `thirdPartyFileService`<sup>Optional</sup> <a name="thirdPartyFileService" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastore.property.thirdPartyFileService"></a>

```java
public VmwareengineDatastoreNfsDatastoreThirdPartyFileService getThirdPartyFileService();
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileService">VmwareengineDatastoreNfsDatastoreThirdPartyFileService</a>

third_party_file_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_datastore#third_party_file_service VmwareengineDatastore#third_party_file_service}

---

### VmwareengineDatastoreNfsDatastoreGoogleFileService <a name="VmwareengineDatastoreNfsDatastoreGoogleFileService" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileService"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileService.Initializer"></a>

```java
import io.cdktn.providers.google.vmwareengine_datastore.VmwareengineDatastoreNfsDatastoreGoogleFileService;

VmwareengineDatastoreNfsDatastoreGoogleFileService.builder()
//  .filestoreInstance(java.lang.String)
//  .netappVolume(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileService.property.filestoreInstance">filestoreInstance</a></code> | <code>java.lang.String</code> | Google filestore instance resource name e.g. projects/my-project/locations/me-west1-b/instances/my-instance. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileService.property.netappVolume">netappVolume</a></code> | <code>java.lang.String</code> | Google netapp volume resource name e.g. projects/my-project/locations/me-west1-b/volumes/my-volume. |

---

##### `filestoreInstance`<sup>Optional</sup> <a name="filestoreInstance" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileService.property.filestoreInstance"></a>

```java
public java.lang.String getFilestoreInstance();
```

- *Type:* java.lang.String

Google filestore instance resource name e.g. projects/my-project/locations/me-west1-b/instances/my-instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_datastore#filestore_instance VmwareengineDatastore#filestore_instance}

---

##### `netappVolume`<sup>Optional</sup> <a name="netappVolume" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileService.property.netappVolume"></a>

```java
public java.lang.String getNetappVolume();
```

- *Type:* java.lang.String

Google netapp volume resource name e.g. projects/my-project/locations/me-west1-b/volumes/my-volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_datastore#netapp_volume VmwareengineDatastore#netapp_volume}

---

### VmwareengineDatastoreNfsDatastoreThirdPartyFileService <a name="VmwareengineDatastoreNfsDatastoreThirdPartyFileService" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileService"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileService.Initializer"></a>

```java
import io.cdktn.providers.google.vmwareengine_datastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileService;

VmwareengineDatastoreNfsDatastoreThirdPartyFileService.builder()
    .fileShare(java.lang.String)
    .network(java.lang.String)
    .servers(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileService.property.fileShare">fileShare</a></code> | <code>java.lang.String</code> | Required Mount Folder name. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileService.property.network">network</a></code> | <code>java.lang.String</code> | Required to identify vpc peering used for NFS access network name of NFS's vpc e.g. projects/project-id/global/networks/my-network_id. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileService.property.servers">servers</a></code> | <code>java.util.List<java.lang.String></code> | Server IP addresses of the NFS file service. |

---

##### `fileShare`<sup>Required</sup> <a name="fileShare" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileService.property.fileShare"></a>

```java
public java.lang.String getFileShare();
```

- *Type:* java.lang.String

Required Mount Folder name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_datastore#file_share VmwareengineDatastore#file_share}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileService.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

Required to identify vpc peering used for NFS access network name of NFS's vpc e.g. projects/project-id/global/networks/my-network_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_datastore#network VmwareengineDatastore#network}

---

##### `servers`<sup>Required</sup> <a name="servers" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileService.property.servers"></a>

```java
public java.util.List<java.lang.String> getServers();
```

- *Type:* java.util.List<java.lang.String>

Server IP addresses of the NFS file service.

NFS v3, provide a single IP address or DNS name.
Multiple servers can be supported in future when NFS 4.1 protocol support
is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_datastore#servers VmwareengineDatastore#servers}

---

### VmwareengineDatastoreTimeouts <a name="VmwareengineDatastoreTimeouts" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.vmwareengine_datastore.VmwareengineDatastoreTimeouts;

VmwareengineDatastoreTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_datastore#create VmwareengineDatastore#create}. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_datastore#delete VmwareengineDatastore#delete}. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_datastore#update VmwareengineDatastore#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_datastore#create VmwareengineDatastore#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_datastore#delete VmwareengineDatastore#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/vmwareengine_datastore#update VmwareengineDatastore#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference <a name="VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vmwareengine_datastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference;

new VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.resetFilestoreInstance">resetFilestoreInstance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.resetNetappVolume">resetNetappVolume</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFilestoreInstance` <a name="resetFilestoreInstance" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.resetFilestoreInstance"></a>

```java
public void resetFilestoreInstance()
```

##### `resetNetappVolume` <a name="resetNetappVolume" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.resetNetappVolume"></a>

```java
public void resetNetappVolume()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.filestoreInstanceInput">filestoreInstanceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.netappVolumeInput">netappVolumeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.filestoreInstance">filestoreInstance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.netappVolume">netappVolume</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileService">VmwareengineDatastoreNfsDatastoreGoogleFileService</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `filestoreInstanceInput`<sup>Optional</sup> <a name="filestoreInstanceInput" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.filestoreInstanceInput"></a>

```java
public java.lang.String getFilestoreInstanceInput();
```

- *Type:* java.lang.String

---

##### `netappVolumeInput`<sup>Optional</sup> <a name="netappVolumeInput" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.netappVolumeInput"></a>

```java
public java.lang.String getNetappVolumeInput();
```

- *Type:* java.lang.String

---

##### `filestoreInstance`<sup>Required</sup> <a name="filestoreInstance" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.filestoreInstance"></a>

```java
public java.lang.String getFilestoreInstance();
```

- *Type:* java.lang.String

---

##### `netappVolume`<sup>Required</sup> <a name="netappVolume" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.netappVolume"></a>

```java
public java.lang.String getNetappVolume();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference.property.internalValue"></a>

```java
public VmwareengineDatastoreNfsDatastoreGoogleFileService getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileService">VmwareengineDatastoreNfsDatastoreGoogleFileService</a>

---


### VmwareengineDatastoreNfsDatastoreOutputReference <a name="VmwareengineDatastoreNfsDatastoreOutputReference" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vmwareengine_datastore.VmwareengineDatastoreNfsDatastoreOutputReference;

new VmwareengineDatastoreNfsDatastoreOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.putGoogleFileService">putGoogleFileService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.putThirdPartyFileService">putThirdPartyFileService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.resetGoogleFileService">resetGoogleFileService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.resetThirdPartyFileService">resetThirdPartyFileService</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGoogleFileService` <a name="putGoogleFileService" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.putGoogleFileService"></a>

```java
public void putGoogleFileService(VmwareengineDatastoreNfsDatastoreGoogleFileService value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.putGoogleFileService.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileService">VmwareengineDatastoreNfsDatastoreGoogleFileService</a>

---

##### `putThirdPartyFileService` <a name="putThirdPartyFileService" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.putThirdPartyFileService"></a>

```java
public void putThirdPartyFileService(VmwareengineDatastoreNfsDatastoreThirdPartyFileService value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.putThirdPartyFileService.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileService">VmwareengineDatastoreNfsDatastoreThirdPartyFileService</a>

---

##### `resetGoogleFileService` <a name="resetGoogleFileService" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.resetGoogleFileService"></a>

```java
public void resetGoogleFileService()
```

##### `resetThirdPartyFileService` <a name="resetThirdPartyFileService" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.resetThirdPartyFileService"></a>

```java
public void resetThirdPartyFileService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.property.googleFileService">googleFileService</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference">VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.property.thirdPartyFileService">thirdPartyFileService</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference">VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.property.googleFileServiceInput">googleFileServiceInput</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileService">VmwareengineDatastoreNfsDatastoreGoogleFileService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.property.thirdPartyFileServiceInput">thirdPartyFileServiceInput</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileService">VmwareengineDatastoreNfsDatastoreThirdPartyFileService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastore">VmwareengineDatastoreNfsDatastore</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `googleFileService`<sup>Required</sup> <a name="googleFileService" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.property.googleFileService"></a>

```java
public VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference getGoogleFileService();
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference">VmwareengineDatastoreNfsDatastoreGoogleFileServiceOutputReference</a>

---

##### `thirdPartyFileService`<sup>Required</sup> <a name="thirdPartyFileService" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.property.thirdPartyFileService"></a>

```java
public VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference getThirdPartyFileService();
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference">VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference</a>

---

##### `googleFileServiceInput`<sup>Optional</sup> <a name="googleFileServiceInput" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.property.googleFileServiceInput"></a>

```java
public VmwareengineDatastoreNfsDatastoreGoogleFileService getGoogleFileServiceInput();
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreGoogleFileService">VmwareengineDatastoreNfsDatastoreGoogleFileService</a>

---

##### `thirdPartyFileServiceInput`<sup>Optional</sup> <a name="thirdPartyFileServiceInput" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.property.thirdPartyFileServiceInput"></a>

```java
public VmwareengineDatastoreNfsDatastoreThirdPartyFileService getThirdPartyFileServiceInput();
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileService">VmwareengineDatastoreNfsDatastoreThirdPartyFileService</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreOutputReference.property.internalValue"></a>

```java
public VmwareengineDatastoreNfsDatastore getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastore">VmwareengineDatastoreNfsDatastore</a>

---


### VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference <a name="VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vmwareengine_datastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference;

new VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.fileShareInput">fileShareInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.serversInput">serversInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.fileShare">fileShare</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.servers">servers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileService">VmwareengineDatastoreNfsDatastoreThirdPartyFileService</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fileShareInput`<sup>Optional</sup> <a name="fileShareInput" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.fileShareInput"></a>

```java
public java.lang.String getFileShareInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `serversInput`<sup>Optional</sup> <a name="serversInput" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.serversInput"></a>

```java
public java.util.List<java.lang.String> getServersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fileShare`<sup>Required</sup> <a name="fileShare" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.fileShare"></a>

```java
public java.lang.String getFileShare();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `servers`<sup>Required</sup> <a name="servers" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.servers"></a>

```java
public java.util.List<java.lang.String> getServers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileServiceOutputReference.property.internalValue"></a>

```java
public VmwareengineDatastoreNfsDatastoreThirdPartyFileService getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreNfsDatastoreThirdPartyFileService">VmwareengineDatastoreNfsDatastoreThirdPartyFileService</a>

---


### VmwareengineDatastoreTimeoutsOutputReference <a name="VmwareengineDatastoreTimeoutsOutputReference" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vmwareengine_datastore.VmwareengineDatastoreTimeoutsOutputReference;

new VmwareengineDatastoreTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeouts">VmwareengineDatastoreTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|VmwareengineDatastoreTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.vmwareengineDatastore.VmwareengineDatastoreTimeouts">VmwareengineDatastoreTimeouts</a>

---



