# `saasRuntimeUnit` Submodule <a name="`saasRuntimeUnit` Submodule" id="@cdktn/provider-google.saasRuntimeUnit"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SaasRuntimeUnit <a name="SaasRuntimeUnit" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit google_saas_runtime_unit}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SaasRuntimeUnit(Construct Scope, string Id, SaasRuntimeUnitConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig">SaasRuntimeUnitConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig">SaasRuntimeUnitConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.putMaintenance">PutMaintenance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetApplication">ResetApplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetMaintenance">ResetMaintenance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetManagementMode">ResetManagementMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetTenant">ResetTenant</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetUnitKind">ResetUnitKind</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMaintenance` <a name="PutMaintenance" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.putMaintenance"></a>

```csharp
private void PutMaintenance(SaasRuntimeUnitMaintenance Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.putMaintenance.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenance">SaasRuntimeUnitMaintenance</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.putTimeouts"></a>

```csharp
private void PutTimeouts(SaasRuntimeUnitTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeouts">SaasRuntimeUnitTimeouts</a>

---

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetApplication` <a name="ResetApplication" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetApplication"></a>

```csharp
private void ResetApplication()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetMaintenance` <a name="ResetMaintenance" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetMaintenance"></a>

```csharp
private void ResetMaintenance()
```

##### `ResetManagementMode` <a name="ResetManagementMode" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetManagementMode"></a>

```csharp
private void ResetManagementMode()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTenant` <a name="ResetTenant" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetTenant"></a>

```csharp
private void ResetTenant()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUnitKind` <a name="ResetUnitKind" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.resetUnitKind"></a>

```csharp
private void ResetUnitKind()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SaasRuntimeUnit resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

SaasRuntimeUnit.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

SaasRuntimeUnit.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

SaasRuntimeUnit.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

SaasRuntimeUnit.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SaasRuntimeUnit resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SaasRuntimeUnit to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SaasRuntimeUnit that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SaasRuntimeUnit to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList">SaasRuntimeUnitConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.dependencies">Dependencies</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList">SaasRuntimeUnitDependenciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.dependents">Dependents</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList">SaasRuntimeUnitDependentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.inputVariables">InputVariables</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList">SaasRuntimeUnitInputVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.maintenance">Maintenance</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference">SaasRuntimeUnitMaintenanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.ongoingOperations">OngoingOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.outputVariables">OutputVariables</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList">SaasRuntimeUnitOutputVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.pendingOperations">PendingOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.release">Release</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.scheduledOperations">ScheduledOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.systemCleanupAt">SystemCleanupAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.systemManagedState">SystemManagedState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference">SaasRuntimeUnitTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.annotationsInput">AnnotationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.applicationInput">ApplicationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.maintenanceInput">MaintenanceInput</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenance">SaasRuntimeUnitMaintenance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.managementModeInput">ManagementModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.tenantInput">TenantInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeouts">SaasRuntimeUnitTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.unitIdInput">UnitIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.unitKindInput">UnitKindInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.application">Application</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.managementMode">ManagementMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.tenant">Tenant</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.unitId">UnitId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.unitKind">UnitKind</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.conditions"></a>

```csharp
public SaasRuntimeUnitConditionsList Conditions { get; }
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList">SaasRuntimeUnitConditionsList</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Dependencies`<sup>Required</sup> <a name="Dependencies" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.dependencies"></a>

```csharp
public SaasRuntimeUnitDependenciesList Dependencies { get; }
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList">SaasRuntimeUnitDependenciesList</a>

---

##### `Dependents`<sup>Required</sup> <a name="Dependents" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.dependents"></a>

```csharp
public SaasRuntimeUnitDependentsList Dependents { get; }
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList">SaasRuntimeUnitDependentsList</a>

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.effectiveAnnotations"></a>

```csharp
public StringMap EffectiveAnnotations { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `InputVariables`<sup>Required</sup> <a name="InputVariables" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.inputVariables"></a>

```csharp
public SaasRuntimeUnitInputVariablesList InputVariables { get; }
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList">SaasRuntimeUnitInputVariablesList</a>

---

##### `Maintenance`<sup>Required</sup> <a name="Maintenance" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.maintenance"></a>

```csharp
public SaasRuntimeUnitMaintenanceOutputReference Maintenance { get; }
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference">SaasRuntimeUnitMaintenanceOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OngoingOperations`<sup>Required</sup> <a name="OngoingOperations" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.ongoingOperations"></a>

```csharp
public string[] OngoingOperations { get; }
```

- *Type:* string[]

---

##### `OutputVariables`<sup>Required</sup> <a name="OutputVariables" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.outputVariables"></a>

```csharp
public SaasRuntimeUnitOutputVariablesList OutputVariables { get; }
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList">SaasRuntimeUnitOutputVariablesList</a>

---

##### `PendingOperations`<sup>Required</sup> <a name="PendingOperations" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.pendingOperations"></a>

```csharp
public string[] PendingOperations { get; }
```

- *Type:* string[]

---

##### `Release`<sup>Required</sup> <a name="Release" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.release"></a>

```csharp
public string Release { get; }
```

- *Type:* string

---

##### `ScheduledOperations`<sup>Required</sup> <a name="ScheduledOperations" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.scheduledOperations"></a>

```csharp
public string[] ScheduledOperations { get; }
```

- *Type:* string[]

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemCleanupAt`<sup>Required</sup> <a name="SystemCleanupAt" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.systemCleanupAt"></a>

```csharp
public string SystemCleanupAt { get; }
```

- *Type:* string

---

##### `SystemManagedState`<sup>Required</sup> <a name="SystemManagedState" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.systemManagedState"></a>

```csharp
public string SystemManagedState { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.timeouts"></a>

```csharp
public SaasRuntimeUnitTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference">SaasRuntimeUnitTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.annotationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> AnnotationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ApplicationInput`<sup>Optional</sup> <a name="ApplicationInput" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.applicationInput"></a>

```csharp
public string ApplicationInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MaintenanceInput`<sup>Optional</sup> <a name="MaintenanceInput" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.maintenanceInput"></a>

```csharp
public SaasRuntimeUnitMaintenance MaintenanceInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenance">SaasRuntimeUnitMaintenance</a>

---

##### `ManagementModeInput`<sup>Optional</sup> <a name="ManagementModeInput" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.managementModeInput"></a>

```csharp
public string ManagementModeInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TenantInput`<sup>Optional</sup> <a name="TenantInput" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.tenantInput"></a>

```csharp
public string TenantInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.timeoutsInput"></a>

```csharp
public IResolvable|SaasRuntimeUnitTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeouts">SaasRuntimeUnitTimeouts</a>

---

##### `UnitIdInput`<sup>Optional</sup> <a name="UnitIdInput" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.unitIdInput"></a>

```csharp
public string UnitIdInput { get; }
```

- *Type:* string

---

##### `UnitKindInput`<sup>Optional</sup> <a name="UnitKindInput" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.unitKindInput"></a>

```csharp
public string UnitKindInput { get; }
```

- *Type:* string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Application`<sup>Required</sup> <a name="Application" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.application"></a>

```csharp
public string Application { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `ManagementMode`<sup>Required</sup> <a name="ManagementMode" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.managementMode"></a>

```csharp
public string ManagementMode { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Tenant`<sup>Required</sup> <a name="Tenant" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.tenant"></a>

```csharp
public string Tenant { get; }
```

- *Type:* string

---

##### `UnitId`<sup>Required</sup> <a name="UnitId" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.unitId"></a>

```csharp
public string UnitId { get; }
```

- *Type:* string

---

##### `UnitKind`<sup>Required</sup> <a name="UnitKind" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.unitKind"></a>

```csharp
public string UnitKind { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnit.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SaasRuntimeUnitConditions <a name="SaasRuntimeUnitConditions" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SaasRuntimeUnitConditions {

};
```


### SaasRuntimeUnitConfig <a name="SaasRuntimeUnitConfig" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SaasRuntimeUnitConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string UnitId,
    System.Collections.Generic.IDictionary<string, string> Annotations = null,
    string Application = null,
    string DeletionPolicy = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    SaasRuntimeUnitMaintenance Maintenance = null,
    string ManagementMode = null,
    string Project = null,
    string Tenant = null,
    SaasRuntimeUnitTimeouts Timeouts = null,
    string UnitKind = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.unitId">UnitId</a></code> | <code>string</code> | The ID value for the new unit. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.annotations">Annotations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.application">Application</a></code> | <code>string</code> | Reference to the App Hub Application this Unit belongs to, in the format 'projects/{project}/locations/{location}/applications/{application}'. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#id SaasRuntimeUnit#id}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.maintenance">Maintenance</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenance">SaasRuntimeUnitMaintenance</a></code> | maintenance block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.managementMode">ManagementMode</a></code> | <code>string</code> | Indicates whether the Unit life cycle is controlled by the user or by the system. Immutable once created. Possible values: MANAGEMENT_MODE_USER MANAGEMENT_MODE_SYSTEM. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#project SaasRuntimeUnit#project}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.tenant">Tenant</a></code> | <code>string</code> | Reference to the Saas Tenant resource this unit belongs to. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeouts">SaasRuntimeUnitTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.unitKind">UnitKind</a></code> | <code>string</code> | Reference to the UnitKind this Unit belongs to. Immutable once set. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#location SaasRuntimeUnit#location}

---

##### `UnitId`<sup>Required</sup> <a name="UnitId" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.unitId"></a>

```csharp
public string UnitId { get; set; }
```

- *Type:* string

The ID value for the new unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#unit_id SaasRuntimeUnit#unit_id}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.annotations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Annotations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata.

They are not queryable and should be preserved when modifying objects.

More info: https://kubernetes.io/docs/user-guide/annotations

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#annotations SaasRuntimeUnit#annotations}

---

##### `Application`<sup>Optional</sup> <a name="Application" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.application"></a>

```csharp
public string Application { get; set; }
```

- *Type:* string

Reference to the App Hub Application this Unit belongs to, in the format 'projects/{project}/locations/{location}/applications/{application}'.

All resources deployed in this Unit are associated with the specified
Application. If empty, the service sets it during any UnitOperation
when the UnitKind has 'app_params.group' and App Hub is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#application SaasRuntimeUnit#application}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#deletion_policy SaasRuntimeUnit#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#id SaasRuntimeUnit#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The labels on the resource, which can be used for categorization. similar to Kubernetes resource labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#labels SaasRuntimeUnit#labels}

---

##### `Maintenance`<sup>Optional</sup> <a name="Maintenance" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.maintenance"></a>

```csharp
public SaasRuntimeUnitMaintenance Maintenance { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenance">SaasRuntimeUnitMaintenance</a>

maintenance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#maintenance SaasRuntimeUnit#maintenance}

---

##### `ManagementMode`<sup>Optional</sup> <a name="ManagementMode" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.managementMode"></a>

```csharp
public string ManagementMode { get; set; }
```

- *Type:* string

Indicates whether the Unit life cycle is controlled by the user or by the system. Immutable once created. Possible values: MANAGEMENT_MODE_USER MANAGEMENT_MODE_SYSTEM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#management_mode SaasRuntimeUnit#management_mode}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#project SaasRuntimeUnit#project}.

---

##### `Tenant`<sup>Optional</sup> <a name="Tenant" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.tenant"></a>

```csharp
public string Tenant { get; set; }
```

- *Type:* string

Reference to the Saas Tenant resource this unit belongs to.

This for
example informs the maintenance policies to use for scheduling future
updates on a unit. (optional and immutable once created)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#tenant SaasRuntimeUnit#tenant}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.timeouts"></a>

```csharp
public SaasRuntimeUnitTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeouts">SaasRuntimeUnitTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#timeouts SaasRuntimeUnit#timeouts}

---

##### `UnitKind`<sup>Optional</sup> <a name="UnitKind" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConfig.property.unitKind"></a>

```csharp
public string UnitKind { get; set; }
```

- *Type:* string

Reference to the UnitKind this Unit belongs to. Immutable once set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#unit_kind SaasRuntimeUnit#unit_kind}

---

### SaasRuntimeUnitDependencies <a name="SaasRuntimeUnitDependencies" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependencies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependencies.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SaasRuntimeUnitDependencies {

};
```


### SaasRuntimeUnitDependents <a name="SaasRuntimeUnitDependents" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependents.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SaasRuntimeUnitDependents {

};
```


### SaasRuntimeUnitInputVariables <a name="SaasRuntimeUnitInputVariables" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariables.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SaasRuntimeUnitInputVariables {

};
```


### SaasRuntimeUnitMaintenance <a name="SaasRuntimeUnitMaintenance" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenance"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenance.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SaasRuntimeUnitMaintenance {
    string PinnedUntilTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenance.property.pinnedUntilTime">PinnedUntilTime</a></code> | <code>string</code> | If present, it fixes the release on the unit until the given time; |

---

##### `PinnedUntilTime`<sup>Optional</sup> <a name="PinnedUntilTime" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenance.property.pinnedUntilTime"></a>

```csharp
public string PinnedUntilTime { get; set; }
```

- *Type:* string

If present, it fixes the release on the unit until the given time;

i.e.
changes to the release field will be rejected. Rollouts should and will
also respect this by not requesting an upgrade in the first place.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#pinned_until_time SaasRuntimeUnit#pinned_until_time}

---

### SaasRuntimeUnitOutputVariables <a name="SaasRuntimeUnitOutputVariables" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariables.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SaasRuntimeUnitOutputVariables {

};
```


### SaasRuntimeUnitTimeouts <a name="SaasRuntimeUnitTimeouts" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SaasRuntimeUnitTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#create SaasRuntimeUnit#create}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#delete SaasRuntimeUnit#delete}. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#update SaasRuntimeUnit#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#create SaasRuntimeUnit#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#delete SaasRuntimeUnit#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/saas_runtime_unit#update SaasRuntimeUnit#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### SaasRuntimeUnitConditionsList <a name="SaasRuntimeUnitConditionsList" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SaasRuntimeUnitConditionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.get"></a>

```csharp
private SaasRuntimeUnitConditionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### SaasRuntimeUnitConditionsOutputReference <a name="SaasRuntimeUnitConditionsOutputReference" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SaasRuntimeUnitConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.property.lastTransitionTime">LastTransitionTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.property.reason">Reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditions">SaasRuntimeUnitConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LastTransitionTime`<sup>Required</sup> <a name="LastTransitionTime" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.property.lastTransitionTime"></a>

```csharp
public string LastTransitionTime { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.property.reason"></a>

```csharp
public string Reason { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditionsOutputReference.property.internalValue"></a>

```csharp
public SaasRuntimeUnitConditions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitConditions">SaasRuntimeUnitConditions</a>

---


### SaasRuntimeUnitDependenciesList <a name="SaasRuntimeUnitDependenciesList" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SaasRuntimeUnitDependenciesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.get"></a>

```csharp
private SaasRuntimeUnitDependenciesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### SaasRuntimeUnitDependenciesOutputReference <a name="SaasRuntimeUnitDependenciesOutputReference" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SaasRuntimeUnitDependenciesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependencies">SaasRuntimeUnitDependencies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependenciesOutputReference.property.internalValue"></a>

```csharp
public SaasRuntimeUnitDependencies InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependencies">SaasRuntimeUnitDependencies</a>

---


### SaasRuntimeUnitDependentsList <a name="SaasRuntimeUnitDependentsList" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SaasRuntimeUnitDependentsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.get"></a>

```csharp
private SaasRuntimeUnitDependentsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### SaasRuntimeUnitDependentsOutputReference <a name="SaasRuntimeUnitDependentsOutputReference" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SaasRuntimeUnitDependentsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependents">SaasRuntimeUnitDependents</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependentsOutputReference.property.internalValue"></a>

```csharp
public SaasRuntimeUnitDependents InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitDependents">SaasRuntimeUnitDependents</a>

---


### SaasRuntimeUnitInputVariablesList <a name="SaasRuntimeUnitInputVariablesList" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SaasRuntimeUnitInputVariablesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.get"></a>

```csharp
private SaasRuntimeUnitInputVariablesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### SaasRuntimeUnitInputVariablesOutputReference <a name="SaasRuntimeUnitInputVariablesOutputReference" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SaasRuntimeUnitInputVariablesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.property.variable">Variable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariables">SaasRuntimeUnitInputVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `Variable`<sup>Required</sup> <a name="Variable" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.property.variable"></a>

```csharp
public string Variable { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariablesOutputReference.property.internalValue"></a>

```csharp
public SaasRuntimeUnitInputVariables InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitInputVariables">SaasRuntimeUnitInputVariables</a>

---


### SaasRuntimeUnitMaintenanceOutputReference <a name="SaasRuntimeUnitMaintenanceOutputReference" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SaasRuntimeUnitMaintenanceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.resetPinnedUntilTime">ResetPinnedUntilTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPinnedUntilTime` <a name="ResetPinnedUntilTime" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.resetPinnedUntilTime"></a>

```csharp
private void ResetPinnedUntilTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.property.pinnedUntilTimeInput">PinnedUntilTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.property.pinnedUntilTime">PinnedUntilTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenance">SaasRuntimeUnitMaintenance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PinnedUntilTimeInput`<sup>Optional</sup> <a name="PinnedUntilTimeInput" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.property.pinnedUntilTimeInput"></a>

```csharp
public string PinnedUntilTimeInput { get; }
```

- *Type:* string

---

##### `PinnedUntilTime`<sup>Required</sup> <a name="PinnedUntilTime" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.property.pinnedUntilTime"></a>

```csharp
public string PinnedUntilTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenanceOutputReference.property.internalValue"></a>

```csharp
public SaasRuntimeUnitMaintenance InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitMaintenance">SaasRuntimeUnitMaintenance</a>

---


### SaasRuntimeUnitOutputVariablesList <a name="SaasRuntimeUnitOutputVariablesList" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SaasRuntimeUnitOutputVariablesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.get"></a>

```csharp
private SaasRuntimeUnitOutputVariablesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### SaasRuntimeUnitOutputVariablesOutputReference <a name="SaasRuntimeUnitOutputVariablesOutputReference" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SaasRuntimeUnitOutputVariablesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.property.variable">Variable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariables">SaasRuntimeUnitOutputVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `Variable`<sup>Required</sup> <a name="Variable" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.property.variable"></a>

```csharp
public string Variable { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariablesOutputReference.property.internalValue"></a>

```csharp
public SaasRuntimeUnitOutputVariables InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitOutputVariables">SaasRuntimeUnitOutputVariables</a>

---


### SaasRuntimeUnitTimeoutsOutputReference <a name="SaasRuntimeUnitTimeoutsOutputReference" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new SaasRuntimeUnitTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeouts">SaasRuntimeUnitTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SaasRuntimeUnitTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.saasRuntimeUnit.SaasRuntimeUnitTimeouts">SaasRuntimeUnitTimeouts</a>

---



