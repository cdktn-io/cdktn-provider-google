# `resourceManagerBoundaryConfig` Submodule <a name="`resourceManagerBoundaryConfig` Submodule" id="@cdktn/provider-google.resourceManagerBoundaryConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourceManagerBoundaryConfigA <a name="ResourceManagerBoundaryConfigA" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary_config google_resource_manager_boundary_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.Initializer"></a>

```java
import io.cdktn.providers.google.resource_manager_boundary_config.ResourceManagerBoundaryConfigA;

ResourceManagerBoundaryConfigA.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .parent(java.lang.String)
    .tagKey(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(ResourceManagerBoundaryConfigTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | The parent resource whose BoundaryConfig this is. Must be of the form 'organizations/{organization_id}' or 'folders/{folder_id}'. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.Initializer.parameter.tagKey">tagKey</a></code> | <code>java.lang.String</code> | The namespaced name of the partitioning tag key, in the form '{parent_id}/{tag_key_short_name}', for example '123456789012/env'. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary_config#id ResourceManagerBoundaryConfigA#id}. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeouts">ResourceManagerBoundaryConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

The parent resource whose BoundaryConfig this is. Must be of the form 'organizations/{organization_id}' or 'folders/{folder_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary_config#parent ResourceManagerBoundaryConfigA#parent}

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.Initializer.parameter.tagKey"></a>

- *Type:* java.lang.String

The namespaced name of the partitioning tag key, in the form '{parent_id}/{tag_key_short_name}', for example '123456789012/env'.

Boundaries under this parent filter projects on this tag key.

The service also accepts the 'tagKeys/{numeric_id}' form here, but
Boundaries accept only the namespaced form and are validated against this
value verbatim. Storing the 'tagKeys/{numeric_id}' form therefore makes
every subsequent Boundary create fail with 'FAILED_PRECONDITION'. Always
use the namespaced form, for example
'google_tags_tag_key.example.namespaced_name'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary_config#tag_key ResourceManagerBoundaryConfigA#tag_key}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary_config#deletion_policy ResourceManagerBoundaryConfigA#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary_config#id ResourceManagerBoundaryConfigA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeouts">ResourceManagerBoundaryConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary_config#timeouts ResourceManagerBoundaryConfigA#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.putTimeouts"></a>

```java
public void putTimeouts(ResourceManagerBoundaryConfigTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeouts">ResourceManagerBoundaryConfigTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ResourceManagerBoundaryConfigA resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.isConstruct"></a>

```java
import io.cdktn.providers.google.resource_manager_boundary_config.ResourceManagerBoundaryConfigA;

ResourceManagerBoundaryConfigA.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.isTerraformElement"></a>

```java
import io.cdktn.providers.google.resource_manager_boundary_config.ResourceManagerBoundaryConfigA;

ResourceManagerBoundaryConfigA.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.isTerraformResource"></a>

```java
import io.cdktn.providers.google.resource_manager_boundary_config.ResourceManagerBoundaryConfigA;

ResourceManagerBoundaryConfigA.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.resource_manager_boundary_config.ResourceManagerBoundaryConfigA;

ResourceManagerBoundaryConfigA.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ResourceManagerBoundaryConfigA.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ResourceManagerBoundaryConfigA resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ResourceManagerBoundaryConfigA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ResourceManagerBoundaryConfigA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ResourceManagerBoundaryConfigA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference">ResourceManagerBoundaryConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.tagKeyInput">tagKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeouts">ResourceManagerBoundaryConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.timeouts"></a>

```java
public ResourceManagerBoundaryConfigTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference">ResourceManagerBoundaryConfigTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.tagKeyInput"></a>

```java
public java.lang.String getTagKeyInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.timeoutsInput"></a>

```java
public IResolvable|ResourceManagerBoundaryConfigTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeouts">ResourceManagerBoundaryConfigTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigA.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ResourceManagerBoundaryConfigAConfig <a name="ResourceManagerBoundaryConfigAConfig" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigAConfig.Initializer"></a>

```java
import io.cdktn.providers.google.resource_manager_boundary_config.ResourceManagerBoundaryConfigAConfig;

ResourceManagerBoundaryConfigAConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .parent(java.lang.String)
    .tagKey(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(ResourceManagerBoundaryConfigTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigAConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigAConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigAConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigAConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigAConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigAConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigAConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigAConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | The parent resource whose BoundaryConfig this is. Must be of the form 'organizations/{organization_id}' or 'folders/{folder_id}'. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigAConfig.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | The namespaced name of the partitioning tag key, in the form '{parent_id}/{tag_key_short_name}', for example '123456789012/env'. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigAConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigAConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary_config#id ResourceManagerBoundaryConfigA#id}. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigAConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeouts">ResourceManagerBoundaryConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigAConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigAConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigAConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigAConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigAConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigAConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigAConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigAConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

The parent resource whose BoundaryConfig this is. Must be of the form 'organizations/{organization_id}' or 'folders/{folder_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary_config#parent ResourceManagerBoundaryConfigA#parent}

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigAConfig.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

The namespaced name of the partitioning tag key, in the form '{parent_id}/{tag_key_short_name}', for example '123456789012/env'.

Boundaries under this parent filter projects on this tag key.

The service also accepts the 'tagKeys/{numeric_id}' form here, but
Boundaries accept only the namespaced form and are validated against this
value verbatim. Storing the 'tagKeys/{numeric_id}' form therefore makes
every subsequent Boundary create fail with 'FAILED_PRECONDITION'. Always
use the namespaced form, for example
'google_tags_tag_key.example.namespaced_name'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary_config#tag_key ResourceManagerBoundaryConfigA#tag_key}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigAConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary_config#deletion_policy ResourceManagerBoundaryConfigA#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigAConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary_config#id ResourceManagerBoundaryConfigA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigAConfig.property.timeouts"></a>

```java
public ResourceManagerBoundaryConfigTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeouts">ResourceManagerBoundaryConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary_config#timeouts ResourceManagerBoundaryConfigA#timeouts}

---

### ResourceManagerBoundaryConfigTimeouts <a name="ResourceManagerBoundaryConfigTimeouts" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.resource_manager_boundary_config.ResourceManagerBoundaryConfigTimeouts;

ResourceManagerBoundaryConfigTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary_config#create ResourceManagerBoundaryConfigA#create}. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary_config#delete ResourceManagerBoundaryConfigA#delete}. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary_config#update ResourceManagerBoundaryConfigA#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary_config#create ResourceManagerBoundaryConfigA#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary_config#delete ResourceManagerBoundaryConfigA#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary_config#update ResourceManagerBoundaryConfigA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ResourceManagerBoundaryConfigTimeoutsOutputReference <a name="ResourceManagerBoundaryConfigTimeoutsOutputReference" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.resource_manager_boundary_config.ResourceManagerBoundaryConfigTimeoutsOutputReference;

new ResourceManagerBoundaryConfigTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeouts">ResourceManagerBoundaryConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ResourceManagerBoundaryConfigTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.resourceManagerBoundaryConfig.ResourceManagerBoundaryConfigTimeouts">ResourceManagerBoundaryConfigTimeouts</a>

---



