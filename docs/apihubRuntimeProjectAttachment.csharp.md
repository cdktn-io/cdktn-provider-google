# `apihubRuntimeProjectAttachment` Submodule <a name="`apihubRuntimeProjectAttachment` Submodule" id="@cdktn/provider-google.apihubRuntimeProjectAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApihubRuntimeProjectAttachment <a name="ApihubRuntimeProjectAttachment" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apihub_runtime_project_attachment google_apihub_runtime_project_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApihubRuntimeProjectAttachment(Construct Scope, string Id, ApihubRuntimeProjectAttachmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentConfig">ApihubRuntimeProjectAttachmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentConfig">ApihubRuntimeProjectAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.putTimeouts"></a>

```csharp
private void PutTimeouts(ApihubRuntimeProjectAttachmentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeouts">ApihubRuntimeProjectAttachmentTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ApihubRuntimeProjectAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

ApihubRuntimeProjectAttachment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

ApihubRuntimeProjectAttachment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

ApihubRuntimeProjectAttachment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

ApihubRuntimeProjectAttachment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ApihubRuntimeProjectAttachment resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApihubRuntimeProjectAttachment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApihubRuntimeProjectAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apihub_runtime_project_attachment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ApihubRuntimeProjectAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference">ApihubRuntimeProjectAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.runtimeProjectAttachmentIdInput">RuntimeProjectAttachmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.runtimeProjectInput">RuntimeProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeouts">ApihubRuntimeProjectAttachmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.runtimeProject">RuntimeProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.runtimeProjectAttachmentId">RuntimeProjectAttachmentId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.timeouts"></a>

```csharp
public ApihubRuntimeProjectAttachmentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference">ApihubRuntimeProjectAttachmentTimeoutsOutputReference</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RuntimeProjectAttachmentIdInput`<sup>Optional</sup> <a name="RuntimeProjectAttachmentIdInput" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.runtimeProjectAttachmentIdInput"></a>

```csharp
public string RuntimeProjectAttachmentIdInput { get; }
```

- *Type:* string

---

##### `RuntimeProjectInput`<sup>Optional</sup> <a name="RuntimeProjectInput" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.runtimeProjectInput"></a>

```csharp
public string RuntimeProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.timeoutsInput"></a>

```csharp
public IResolvable|ApihubRuntimeProjectAttachmentTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeouts">ApihubRuntimeProjectAttachmentTimeouts</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `RuntimeProject`<sup>Required</sup> <a name="RuntimeProject" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.runtimeProject"></a>

```csharp
public string RuntimeProject { get; }
```

- *Type:* string

---

##### `RuntimeProjectAttachmentId`<sup>Required</sup> <a name="RuntimeProjectAttachmentId" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.runtimeProjectAttachmentId"></a>

```csharp
public string RuntimeProjectAttachmentId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApihubRuntimeProjectAttachmentConfig <a name="ApihubRuntimeProjectAttachmentConfig" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApihubRuntimeProjectAttachmentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string RuntimeProject,
    string RuntimeProjectAttachmentId,
    string DeletionPolicy = null,
    string Id = null,
    string Project = null,
    ApihubRuntimeProjectAttachmentTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentConfig.property.location">Location</a></code> | <code>string</code> | Part of 'parent'. See documentation of 'projectsId'. |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentConfig.property.runtimeProject">RuntimeProject</a></code> | <code>string</code> | Required. |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentConfig.property.runtimeProjectAttachmentId">RuntimeProjectAttachmentId</a></code> | <code>string</code> | The ID to use for the Runtime Project Attachment, which will become the final component of the Runtime Project Attachment's name. |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apihub_runtime_project_attachment#id ApihubRuntimeProjectAttachment#id}. |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apihub_runtime_project_attachment#project ApihubRuntimeProjectAttachment#project}. |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeouts">ApihubRuntimeProjectAttachmentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Part of 'parent'. See documentation of 'projectsId'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apihub_runtime_project_attachment#location ApihubRuntimeProjectAttachment#location}

---

##### `RuntimeProject`<sup>Required</sup> <a name="RuntimeProject" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentConfig.property.runtimeProject"></a>

```csharp
public string RuntimeProject { get; set; }
```

- *Type:* string

Required.

Immutable. Google cloud project name in the format: "projects/abc" or "projects/123".
As input, project name with either project id or number are accepted.
As output, this field will contain project number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apihub_runtime_project_attachment#runtime_project ApihubRuntimeProjectAttachment#runtime_project}

---

##### `RuntimeProjectAttachmentId`<sup>Required</sup> <a name="RuntimeProjectAttachmentId" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentConfig.property.runtimeProjectAttachmentId"></a>

```csharp
public string RuntimeProjectAttachmentId { get; set; }
```

- *Type:* string

The ID to use for the Runtime Project Attachment, which will become the final component of the Runtime Project Attachment's name.

The ID must be the same
as the project ID of the Google cloud project specified in the
runtime_project_attachment.runtime_project field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apihub_runtime_project_attachment#runtime_project_attachment_id ApihubRuntimeProjectAttachment#runtime_project_attachment_id}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apihub_runtime_project_attachment#deletion_policy ApihubRuntimeProjectAttachment#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apihub_runtime_project_attachment#id ApihubRuntimeProjectAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apihub_runtime_project_attachment#project ApihubRuntimeProjectAttachment#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentConfig.property.timeouts"></a>

```csharp
public ApihubRuntimeProjectAttachmentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeouts">ApihubRuntimeProjectAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apihub_runtime_project_attachment#timeouts ApihubRuntimeProjectAttachment#timeouts}

---

### ApihubRuntimeProjectAttachmentTimeouts <a name="ApihubRuntimeProjectAttachmentTimeouts" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApihubRuntimeProjectAttachmentTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apihub_runtime_project_attachment#create ApihubRuntimeProjectAttachment#create}. |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apihub_runtime_project_attachment#delete ApihubRuntimeProjectAttachment#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apihub_runtime_project_attachment#create ApihubRuntimeProjectAttachment#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.0/docs/resources/apihub_runtime_project_attachment#delete ApihubRuntimeProjectAttachment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApihubRuntimeProjectAttachmentTimeoutsOutputReference <a name="ApihubRuntimeProjectAttachmentTimeoutsOutputReference" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new ApihubRuntimeProjectAttachmentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeouts">ApihubRuntimeProjectAttachmentTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApihubRuntimeProjectAttachmentTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.apihubRuntimeProjectAttachment.ApihubRuntimeProjectAttachmentTimeouts">ApihubRuntimeProjectAttachmentTimeouts</a>

---



