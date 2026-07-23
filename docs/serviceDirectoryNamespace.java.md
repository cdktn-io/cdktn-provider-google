# `serviceDirectoryNamespace` Submodule <a name="`serviceDirectoryNamespace` Submodule" id="@cdktn/provider-google.serviceDirectoryNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceDirectoryNamespace <a name="ServiceDirectoryNamespace" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/service_directory_namespace google_service_directory_namespace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.Initializer"></a>

```java
import io.cdktn.providers.google.service_directory_namespace.ServiceDirectoryNamespace;

ServiceDirectoryNamespace.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .namespaceId(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(ServiceDirectoryNamespaceTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location for the Namespace. |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.Initializer.parameter.namespaceId">namespaceId</a></code> | <code>java.lang.String</code> | The Resource ID must be 1-63 characters long, including digits, lowercase letters or the hyphen character. |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/service_directory_namespace#id ServiceDirectoryNamespace#id}. |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Resource labels associated with this Namespace. |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/service_directory_namespace#project ServiceDirectoryNamespace#project}. |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeouts">ServiceDirectoryNamespaceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location for the Namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/service_directory_namespace#location ServiceDirectoryNamespace#location}

---

##### `namespaceId`<sup>Required</sup> <a name="namespaceId" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.Initializer.parameter.namespaceId"></a>

- *Type:* java.lang.String

The Resource ID must be 1-63 characters long, including digits, lowercase letters or the hyphen character.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/service_directory_namespace#namespace_id ServiceDirectoryNamespace#namespace_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/service_directory_namespace#deletion_policy ServiceDirectoryNamespace#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/service_directory_namespace#id ServiceDirectoryNamespace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Resource labels associated with this Namespace.

No more than 64 user
labels can be associated with a given resource. Label keys and values can
be no longer than 63 characters.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/service_directory_namespace#labels ServiceDirectoryNamespace#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/service_directory_namespace#project ServiceDirectoryNamespace#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeouts">ServiceDirectoryNamespaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/service_directory_namespace#timeouts ServiceDirectoryNamespace#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.putTimeouts"></a>

```java
public void putTimeouts(ServiceDirectoryNamespaceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeouts">ServiceDirectoryNamespaceTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ServiceDirectoryNamespace resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.isConstruct"></a>

```java
import io.cdktn.providers.google.service_directory_namespace.ServiceDirectoryNamespace;

ServiceDirectoryNamespace.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.isTerraformElement"></a>

```java
import io.cdktn.providers.google.service_directory_namespace.ServiceDirectoryNamespace;

ServiceDirectoryNamespace.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.isTerraformResource"></a>

```java
import io.cdktn.providers.google.service_directory_namespace.ServiceDirectoryNamespace;

ServiceDirectoryNamespace.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.service_directory_namespace.ServiceDirectoryNamespace;

ServiceDirectoryNamespace.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ServiceDirectoryNamespace.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ServiceDirectoryNamespace resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ServiceDirectoryNamespace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ServiceDirectoryNamespace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/service_directory_namespace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ServiceDirectoryNamespace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeoutsOutputReference">ServiceDirectoryNamespaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.property.namespaceIdInput">namespaceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeouts">ServiceDirectoryNamespaceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.property.namespaceId">namespaceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.property.timeouts"></a>

```java
public ServiceDirectoryNamespaceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeoutsOutputReference">ServiceDirectoryNamespaceTimeoutsOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `namespaceIdInput`<sup>Optional</sup> <a name="namespaceIdInput" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.property.namespaceIdInput"></a>

```java
public java.lang.String getNamespaceIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.property.timeoutsInput"></a>

```java
public IResolvable|ServiceDirectoryNamespaceTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeouts">ServiceDirectoryNamespaceTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `namespaceId`<sup>Required</sup> <a name="namespaceId" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.property.namespaceId"></a>

```java
public java.lang.String getNamespaceId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespace.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceDirectoryNamespaceConfig <a name="ServiceDirectoryNamespaceConfig" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceConfig.Initializer"></a>

```java
import io.cdktn.providers.google.service_directory_namespace.ServiceDirectoryNamespaceConfig;

ServiceDirectoryNamespaceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .namespaceId(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(ServiceDirectoryNamespaceTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location for the Namespace. |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceConfig.property.namespaceId">namespaceId</a></code> | <code>java.lang.String</code> | The Resource ID must be 1-63 characters long, including digits, lowercase letters or the hyphen character. |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/service_directory_namespace#id ServiceDirectoryNamespace#id}. |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Resource labels associated with this Namespace. |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/service_directory_namespace#project ServiceDirectoryNamespace#project}. |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeouts">ServiceDirectoryNamespaceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location for the Namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/service_directory_namespace#location ServiceDirectoryNamespace#location}

---

##### `namespaceId`<sup>Required</sup> <a name="namespaceId" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceConfig.property.namespaceId"></a>

```java
public java.lang.String getNamespaceId();
```

- *Type:* java.lang.String

The Resource ID must be 1-63 characters long, including digits, lowercase letters or the hyphen character.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/service_directory_namespace#namespace_id ServiceDirectoryNamespace#namespace_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/service_directory_namespace#deletion_policy ServiceDirectoryNamespace#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/service_directory_namespace#id ServiceDirectoryNamespace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Resource labels associated with this Namespace.

No more than 64 user
labels can be associated with a given resource. Label keys and values can
be no longer than 63 characters.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/service_directory_namespace#labels ServiceDirectoryNamespace#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/service_directory_namespace#project ServiceDirectoryNamespace#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceConfig.property.timeouts"></a>

```java
public ServiceDirectoryNamespaceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeouts">ServiceDirectoryNamespaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/service_directory_namespace#timeouts ServiceDirectoryNamespace#timeouts}

---

### ServiceDirectoryNamespaceTimeouts <a name="ServiceDirectoryNamespaceTimeouts" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.service_directory_namespace.ServiceDirectoryNamespaceTimeouts;

ServiceDirectoryNamespaceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/service_directory_namespace#create ServiceDirectoryNamespace#create}. |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/service_directory_namespace#delete ServiceDirectoryNamespace#delete}. |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/service_directory_namespace#update ServiceDirectoryNamespace#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/service_directory_namespace#create ServiceDirectoryNamespace#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/service_directory_namespace#delete ServiceDirectoryNamespace#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/resources/service_directory_namespace#update ServiceDirectoryNamespace#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceDirectoryNamespaceTimeoutsOutputReference <a name="ServiceDirectoryNamespaceTimeoutsOutputReference" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.service_directory_namespace.ServiceDirectoryNamespaceTimeoutsOutputReference;

new ServiceDirectoryNamespaceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeouts">ServiceDirectoryNamespaceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ServiceDirectoryNamespaceTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.serviceDirectoryNamespace.ServiceDirectoryNamespaceTimeouts">ServiceDirectoryNamespaceTimeouts</a>

---



