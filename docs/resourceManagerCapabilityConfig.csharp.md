# `resourceManagerCapabilityConfig` Submodule <a name="`resourceManagerCapabilityConfig` Submodule" id="@cdktn/provider-google.resourceManagerCapabilityConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourceManagerCapabilityConfigA <a name="ResourceManagerCapabilityConfigA" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config google_resource_manager_capability_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ResourceManagerCapabilityConfigA(Construct Scope, string Id, ResourceManagerCapabilityConfigAConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig">ResourceManagerCapabilityConfigAConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig">ResourceManagerCapabilityConfigAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.resetManagementProject">ResetManagementProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.putTimeouts"></a>

```csharp
private void PutTimeouts(ResourceManagerCapabilityConfigTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeouts">ResourceManagerCapabilityConfigTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetManagementProject` <a name="ResetManagementProject" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.resetManagementProject"></a>

```csharp
private void ResetManagementProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ResourceManagerCapabilityConfigA resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

ResourceManagerCapabilityConfigA.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

ResourceManagerCapabilityConfigA.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

ResourceManagerCapabilityConfigA.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

ResourceManagerCapabilityConfigA.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ResourceManagerCapabilityConfigA resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ResourceManagerCapabilityConfigA to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ResourceManagerCapabilityConfigA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ResourceManagerCapabilityConfigA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference">ResourceManagerCapabilityConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.capabilityConfigIdInput">CapabilityConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.managementProjectInput">ManagementProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeouts">ResourceManagerCapabilityConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.typesInput">TypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.capabilityConfigId">CapabilityConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.managementProject">ManagementProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.parent">Parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.types">Types</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.timeouts"></a>

```csharp
public ResourceManagerCapabilityConfigTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference">ResourceManagerCapabilityConfigTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `CapabilityConfigIdInput`<sup>Optional</sup> <a name="CapabilityConfigIdInput" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.capabilityConfigIdInput"></a>

```csharp
public string CapabilityConfigIdInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ManagementProjectInput`<sup>Optional</sup> <a name="ManagementProjectInput" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.managementProjectInput"></a>

```csharp
public string ManagementProjectInput { get; }
```

- *Type:* string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.timeoutsInput"></a>

```csharp
public IResolvable|ResourceManagerCapabilityConfigTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeouts">ResourceManagerCapabilityConfigTimeouts</a>

---

##### `TypesInput`<sup>Optional</sup> <a name="TypesInput" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.typesInput"></a>

```csharp
public string[] TypesInput { get; }
```

- *Type:* string[]

---

##### `CapabilityConfigId`<sup>Required</sup> <a name="CapabilityConfigId" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.capabilityConfigId"></a>

```csharp
public string CapabilityConfigId { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ManagementProject`<sup>Required</sup> <a name="ManagementProject" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.managementProject"></a>

```csharp
public string ManagementProject { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

##### `Types`<sup>Required</sup> <a name="Types" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.types"></a>

```csharp
public string[] Types { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigA.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ResourceManagerCapabilityConfigAConfig <a name="ResourceManagerCapabilityConfigAConfig" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ResourceManagerCapabilityConfigAConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string CapabilityConfigId,
    string Parent,
    string[] Types,
    string DeletionPolicy = null,
    string DisplayName = null,
    string Id = null,
    string ManagementProject = null,
    ResourceManagerCapabilityConfigTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.capabilityConfigId">CapabilityConfigId</a></code> | <code>string</code> | User-specified identifier of the capability config. Must be 6 to 30 characters, and contain only lowercase letters, numbers, and hyphens. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.parent">Parent</a></code> | <code>string</code> | The parent resource in which to create the capability config. Format: 'folders/{folder_id}', 'organizations/{organization_id}', or 'projects/{project_number}'. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.types">Types</a></code> | <code>string[]</code> | The capabilities enabled for the resource and its sub-tree. Possible values: "AGENT_MANAGEMENT". |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.displayName">DisplayName</a></code> | <code>string</code> | User-defined name for the capability config. Must be between 4 and 30 characters. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#id ResourceManagerCapabilityConfigA#id}. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.managementProject">ManagementProject</a></code> | <code>string</code> | The management project for the capability config. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeouts">ResourceManagerCapabilityConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CapabilityConfigId`<sup>Required</sup> <a name="CapabilityConfigId" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.capabilityConfigId"></a>

```csharp
public string CapabilityConfigId { get; set; }
```

- *Type:* string

User-specified identifier of the capability config. Must be 6 to 30 characters, and contain only lowercase letters, numbers, and hyphens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#capability_config_id ResourceManagerCapabilityConfigA#capability_config_id}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

The parent resource in which to create the capability config. Format: 'folders/{folder_id}', 'organizations/{organization_id}', or 'projects/{project_number}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#parent ResourceManagerCapabilityConfigA#parent}

---

##### `Types`<sup>Required</sup> <a name="Types" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.types"></a>

```csharp
public string[] Types { get; set; }
```

- *Type:* string[]

The capabilities enabled for the resource and its sub-tree. Possible values: "AGENT_MANAGEMENT".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#types ResourceManagerCapabilityConfigA#types}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; set; }
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#deletion_policy ResourceManagerCapabilityConfigA#deletion_policy}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

User-defined name for the capability config. Must be between 4 and 30 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#display_name ResourceManagerCapabilityConfigA#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#id ResourceManagerCapabilityConfigA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ManagementProject`<sup>Optional</sup> <a name="ManagementProject" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.managementProject"></a>

```csharp
public string ManagementProject { get; set; }
```

- *Type:* string

The management project for the capability config.

If unspecified, a project will be created automatically.
Must be specified for project-scoped capability config.
Format: 'projects/{project_number}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#management_project ResourceManagerCapabilityConfigA#management_project}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigAConfig.property.timeouts"></a>

```csharp
public ResourceManagerCapabilityConfigTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeouts">ResourceManagerCapabilityConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#timeouts ResourceManagerCapabilityConfigA#timeouts}

---

### ResourceManagerCapabilityConfigTimeouts <a name="ResourceManagerCapabilityConfigTimeouts" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ResourceManagerCapabilityConfigTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#create ResourceManagerCapabilityConfigA#create}. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#delete ResourceManagerCapabilityConfigA#delete}. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#update ResourceManagerCapabilityConfigA#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#create ResourceManagerCapabilityConfigA#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#delete ResourceManagerCapabilityConfigA#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/resource_manager_capability_config#update ResourceManagerCapabilityConfigA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ResourceManagerCapabilityConfigTimeoutsOutputReference <a name="ResourceManagerCapabilityConfigTimeoutsOutputReference" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ResourceManagerCapabilityConfigTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeouts">ResourceManagerCapabilityConfigTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ResourceManagerCapabilityConfigTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.resourceManagerCapabilityConfig.ResourceManagerCapabilityConfigTimeouts">ResourceManagerCapabilityConfigTimeouts</a>

---



