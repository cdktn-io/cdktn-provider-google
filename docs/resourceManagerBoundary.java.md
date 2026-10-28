# `resourceManagerBoundary` Submodule <a name="`resourceManagerBoundary` Submodule" id="@cdktn/provider-google.resourceManagerBoundary"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourceManagerBoundary <a name="ResourceManagerBoundary" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary google_resource_manager_boundary}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.Initializer"></a>

```java
import io.cdktn.providers.google.resource_manager_boundary.ResourceManagerBoundary;

ResourceManagerBoundary.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .boundaryId(java.lang.String)
    .parent(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .resourceFilter(ResourceManagerBoundaryResourceFilter)
//  .timeouts(ResourceManagerBoundaryTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.Initializer.parameter.boundaryId">boundaryId</a></code> | <code>java.lang.String</code> | The user-assigned ID for the Boundary, which becomes the final component of the Boundary's resource name. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | The parent resource under which the Boundary is created. Must be of the form 'organizations/{organization_id}' or 'folders/{folder_id}'. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Human-readable display name of the Boundary. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary#id ResourceManagerBoundary#id}. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.Initializer.parameter.resourceFilter">resourceFilter</a></code> | <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilter">ResourceManagerBoundaryResourceFilter</a></code> | resource_filter block. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeouts">ResourceManagerBoundaryTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `boundaryId`<sup>Required</sup> <a name="boundaryId" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.Initializer.parameter.boundaryId"></a>

- *Type:* java.lang.String

The user-assigned ID for the Boundary, which becomes the final component of the Boundary's resource name.

Must be unique within the parent.
Must be 6 to 30 lowercase ASCII letters, digits, or hyphens, must start
with a letter, and may not end with a hyphen.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary#boundary_id ResourceManagerBoundary#boundary_id}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

The parent resource under which the Boundary is created. Must be of the form 'organizations/{organization_id}' or 'folders/{folder_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary#parent ResourceManagerBoundary#parent}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary#deletion_policy ResourceManagerBoundary#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Human-readable display name of the Boundary.

When present it must be
between 4 and 30 characters. Allowed characters are lowercase and
uppercase letters, numbers, hyphen, single-quote, double-quote, space,
and exclamation point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary#display_name ResourceManagerBoundary#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary#id ResourceManagerBoundary#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resourceFilter`<sup>Optional</sup> <a name="resourceFilter" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.Initializer.parameter.resourceFilter"></a>

- *Type:* <a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilter">ResourceManagerBoundaryResourceFilter</a>

resource_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary#resource_filter ResourceManagerBoundary#resource_filter}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeouts">ResourceManagerBoundaryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary#timeouts ResourceManagerBoundary#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.putResourceFilter">putResourceFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.resetResourceFilter">resetResourceFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putResourceFilter` <a name="putResourceFilter" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.putResourceFilter"></a>

```java
public void putResourceFilter(ResourceManagerBoundaryResourceFilter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.putResourceFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilter">ResourceManagerBoundaryResourceFilter</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.putTimeouts"></a>

```java
public void putTimeouts(ResourceManagerBoundaryTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeouts">ResourceManagerBoundaryTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.resetId"></a>

```java
public void resetId()
```

##### `resetResourceFilter` <a name="resetResourceFilter" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.resetResourceFilter"></a>

```java
public void resetResourceFilter()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ResourceManagerBoundary resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.isConstruct"></a>

```java
import io.cdktn.providers.google.resource_manager_boundary.ResourceManagerBoundary;

ResourceManagerBoundary.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.isTerraformElement"></a>

```java
import io.cdktn.providers.google.resource_manager_boundary.ResourceManagerBoundary;

ResourceManagerBoundary.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.isTerraformResource"></a>

```java
import io.cdktn.providers.google.resource_manager_boundary.ResourceManagerBoundary;

ResourceManagerBoundary.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.resource_manager_boundary.ResourceManagerBoundary;

ResourceManagerBoundary.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ResourceManagerBoundary.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ResourceManagerBoundary resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ResourceManagerBoundary to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ResourceManagerBoundary that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ResourceManagerBoundary to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.managementProject">managementProject</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.resourceFilter">resourceFilter</a></code> | <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference">ResourceManagerBoundaryResourceFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference">ResourceManagerBoundaryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.boundaryIdInput">boundaryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.resourceFilterInput">resourceFilterInput</a></code> | <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilter">ResourceManagerBoundaryResourceFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeouts">ResourceManagerBoundaryTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.boundaryId">boundaryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `managementProject`<sup>Required</sup> <a name="managementProject" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.managementProject"></a>

```java
public java.lang.String getManagementProject();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceFilter`<sup>Required</sup> <a name="resourceFilter" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.resourceFilter"></a>

```java
public ResourceManagerBoundaryResourceFilterOutputReference getResourceFilter();
```

- *Type:* <a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference">ResourceManagerBoundaryResourceFilterOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.timeouts"></a>

```java
public ResourceManagerBoundaryTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference">ResourceManagerBoundaryTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `boundaryIdInput`<sup>Optional</sup> <a name="boundaryIdInput" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.boundaryIdInput"></a>

```java
public java.lang.String getBoundaryIdInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `resourceFilterInput`<sup>Optional</sup> <a name="resourceFilterInput" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.resourceFilterInput"></a>

```java
public ResourceManagerBoundaryResourceFilter getResourceFilterInput();
```

- *Type:* <a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilter">ResourceManagerBoundaryResourceFilter</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.timeoutsInput"></a>

```java
public IResolvable|ResourceManagerBoundaryTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeouts">ResourceManagerBoundaryTimeouts</a>

---

##### `boundaryId`<sup>Required</sup> <a name="boundaryId" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.boundaryId"></a>

```java
public java.lang.String getBoundaryId();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundary.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ResourceManagerBoundaryConfig <a name="ResourceManagerBoundaryConfig" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryConfig.Initializer"></a>

```java
import io.cdktn.providers.google.resource_manager_boundary.ResourceManagerBoundaryConfig;

ResourceManagerBoundaryConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .boundaryId(java.lang.String)
    .parent(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .resourceFilter(ResourceManagerBoundaryResourceFilter)
//  .timeouts(ResourceManagerBoundaryTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryConfig.property.boundaryId">boundaryId</a></code> | <code>java.lang.String</code> | The user-assigned ID for the Boundary, which becomes the final component of the Boundary's resource name. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | The parent resource under which the Boundary is created. Must be of the form 'organizations/{organization_id}' or 'folders/{folder_id}'. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Human-readable display name of the Boundary. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary#id ResourceManagerBoundary#id}. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryConfig.property.resourceFilter">resourceFilter</a></code> | <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilter">ResourceManagerBoundaryResourceFilter</a></code> | resource_filter block. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeouts">ResourceManagerBoundaryTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `boundaryId`<sup>Required</sup> <a name="boundaryId" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryConfig.property.boundaryId"></a>

```java
public java.lang.String getBoundaryId();
```

- *Type:* java.lang.String

The user-assigned ID for the Boundary, which becomes the final component of the Boundary's resource name.

Must be unique within the parent.
Must be 6 to 30 lowercase ASCII letters, digits, or hyphens, must start
with a letter, and may not end with a hyphen.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary#boundary_id ResourceManagerBoundary#boundary_id}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

The parent resource under which the Boundary is created. Must be of the form 'organizations/{organization_id}' or 'folders/{folder_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary#parent ResourceManagerBoundary#parent}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary#deletion_policy ResourceManagerBoundary#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Human-readable display name of the Boundary.

When present it must be
between 4 and 30 characters. Allowed characters are lowercase and
uppercase letters, numbers, hyphen, single-quote, double-quote, space,
and exclamation point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary#display_name ResourceManagerBoundary#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary#id ResourceManagerBoundary#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resourceFilter`<sup>Optional</sup> <a name="resourceFilter" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryConfig.property.resourceFilter"></a>

```java
public ResourceManagerBoundaryResourceFilter getResourceFilter();
```

- *Type:* <a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilter">ResourceManagerBoundaryResourceFilter</a>

resource_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary#resource_filter ResourceManagerBoundary#resource_filter}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryConfig.property.timeouts"></a>

```java
public ResourceManagerBoundaryTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeouts">ResourceManagerBoundaryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary#timeouts ResourceManagerBoundary#timeouts}

---

### ResourceManagerBoundaryResourceFilter <a name="ResourceManagerBoundaryResourceFilter" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilter.Initializer"></a>

```java
import io.cdktn.providers.google.resource_manager_boundary.ResourceManagerBoundaryResourceFilter;

ResourceManagerBoundaryResourceFilter.builder()
    .tagFilter(ResourceManagerBoundaryResourceFilterTagFilter)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilter.property.tagFilter">tagFilter</a></code> | <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilter">ResourceManagerBoundaryResourceFilterTagFilter</a></code> | tag_filter block. |

---

##### `tagFilter`<sup>Required</sup> <a name="tagFilter" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilter.property.tagFilter"></a>

```java
public ResourceManagerBoundaryResourceFilterTagFilter getTagFilter();
```

- *Type:* <a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilter">ResourceManagerBoundaryResourceFilterTagFilter</a>

tag_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary#tag_filter ResourceManagerBoundary#tag_filter}

---

### ResourceManagerBoundaryResourceFilterTagFilter <a name="ResourceManagerBoundaryResourceFilterTagFilter" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilter.Initializer"></a>

```java
import io.cdktn.providers.google.resource_manager_boundary.ResourceManagerBoundaryResourceFilterTagFilter;

ResourceManagerBoundaryResourceFilterTagFilter.builder()
    .tagKey(java.lang.String)
    .tagValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilter.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | The namespaced name of the tag key, in the form '{parent_id}/{tag_key_short_name}', for example '123456789012/env'. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilter.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | The allowed short name of the tag value, for example 'production'. |

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilter.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

The namespaced name of the tag key, in the form '{parent_id}/{tag_key_short_name}', for example '123456789012/env'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary#tag_key ResourceManagerBoundary#tag_key}

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilter.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

The allowed short name of the tag value, for example 'production'.

A project matches this tag filter if its effective tag value for
the given 'tagKey' matches this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary#tag_value ResourceManagerBoundary#tag_value}

---

### ResourceManagerBoundaryTimeouts <a name="ResourceManagerBoundaryTimeouts" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.resource_manager_boundary.ResourceManagerBoundaryTimeouts;

ResourceManagerBoundaryTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary#create ResourceManagerBoundary#create}. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary#delete ResourceManagerBoundary#delete}. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary#update ResourceManagerBoundary#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary#create ResourceManagerBoundary#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary#delete ResourceManagerBoundary#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/resource_manager_boundary#update ResourceManagerBoundary#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ResourceManagerBoundaryResourceFilterOutputReference <a name="ResourceManagerBoundaryResourceFilterOutputReference" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.resource_manager_boundary.ResourceManagerBoundaryResourceFilterOutputReference;

new ResourceManagerBoundaryResourceFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.putTagFilter">putTagFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTagFilter` <a name="putTagFilter" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.putTagFilter"></a>

```java
public void putTagFilter(ResourceManagerBoundaryResourceFilterTagFilter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.putTagFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilter">ResourceManagerBoundaryResourceFilterTagFilter</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.property.tagFilter">tagFilter</a></code> | <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference">ResourceManagerBoundaryResourceFilterTagFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.property.tagFilterInput">tagFilterInput</a></code> | <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilter">ResourceManagerBoundaryResourceFilterTagFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilter">ResourceManagerBoundaryResourceFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tagFilter`<sup>Required</sup> <a name="tagFilter" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.property.tagFilter"></a>

```java
public ResourceManagerBoundaryResourceFilterTagFilterOutputReference getTagFilter();
```

- *Type:* <a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference">ResourceManagerBoundaryResourceFilterTagFilterOutputReference</a>

---

##### `tagFilterInput`<sup>Optional</sup> <a name="tagFilterInput" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.property.tagFilterInput"></a>

```java
public ResourceManagerBoundaryResourceFilterTagFilter getTagFilterInput();
```

- *Type:* <a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilter">ResourceManagerBoundaryResourceFilterTagFilter</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterOutputReference.property.internalValue"></a>

```java
public ResourceManagerBoundaryResourceFilter getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilter">ResourceManagerBoundaryResourceFilter</a>

---


### ResourceManagerBoundaryResourceFilterTagFilterOutputReference <a name="ResourceManagerBoundaryResourceFilterTagFilterOutputReference" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.resource_manager_boundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference;

new ResourceManagerBoundaryResourceFilterTagFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.property.tagValueInput">tagValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilter">ResourceManagerBoundaryResourceFilterTagFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.property.tagKeyInput"></a>

```java
public java.lang.String getTagKeyInput();
```

- *Type:* java.lang.String

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.property.tagValueInput"></a>

```java
public java.lang.String getTagValueInput();
```

- *Type:* java.lang.String

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilterOutputReference.property.internalValue"></a>

```java
public ResourceManagerBoundaryResourceFilterTagFilter getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryResourceFilterTagFilter">ResourceManagerBoundaryResourceFilterTagFilter</a>

---


### ResourceManagerBoundaryTimeoutsOutputReference <a name="ResourceManagerBoundaryTimeoutsOutputReference" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.resource_manager_boundary.ResourceManagerBoundaryTimeoutsOutputReference;

new ResourceManagerBoundaryTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeouts">ResourceManagerBoundaryTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ResourceManagerBoundaryTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.resourceManagerBoundary.ResourceManagerBoundaryTimeouts">ResourceManagerBoundaryTimeouts</a>

---



