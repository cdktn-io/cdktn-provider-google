# `vertexAiCustomJob` Submodule <a name="`vertexAiCustomJob` Submodule" id="@cdktn/provider-google.vertexAiCustomJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VertexAiCustomJob <a name="VertexAiCustomJob" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job google_vertex_ai_custom_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiCustomJob(Construct Scope, string Id, VertexAiCustomJobConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobConfig">VertexAiCustomJobConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobConfig">VertexAiCustomJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.putEncryptionSpec">PutEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.putJobSpec">PutJobSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.resetEncryptionSpec">ResetEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEncryptionSpec` <a name="PutEncryptionSpec" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.putEncryptionSpec"></a>

```csharp
private void PutEncryptionSpec(VertexAiCustomJobEncryptionSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.putEncryptionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpec">VertexAiCustomJobEncryptionSpec</a>

---

##### `PutJobSpec` <a name="PutJobSpec" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.putJobSpec"></a>

```csharp
private void PutJobSpec(VertexAiCustomJobJobSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.putJobSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpec">VertexAiCustomJobJobSpec</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.putTimeouts"></a>

```csharp
private void PutTimeouts(VertexAiCustomJobTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeouts">VertexAiCustomJobTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetEncryptionSpec` <a name="ResetEncryptionSpec" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.resetEncryptionSpec"></a>

```csharp
private void ResetEncryptionSpec()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a VertexAiCustomJob resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

VertexAiCustomJob.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

VertexAiCustomJob.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

VertexAiCustomJob.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

VertexAiCustomJob.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a VertexAiCustomJob resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VertexAiCustomJob to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VertexAiCustomJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the VertexAiCustomJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference">VertexAiCustomJobEncryptionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.error">Error</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorList">VertexAiCustomJobErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.jobSpec">JobSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference">VertexAiCustomJobJobSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference">VertexAiCustomJobTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.webAccessUris">WebAccessUris</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.encryptionSpecInput">EncryptionSpecInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpec">VertexAiCustomJobEncryptionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.jobSpecInput">JobSpecInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpec">VertexAiCustomJobJobSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeouts">VertexAiCustomJobTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `EncryptionSpec`<sup>Required</sup> <a name="EncryptionSpec" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.encryptionSpec"></a>

```csharp
public VertexAiCustomJobEncryptionSpecOutputReference EncryptionSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference">VertexAiCustomJobEncryptionSpecOutputReference</a>

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.error"></a>

```csharp
public VertexAiCustomJobErrorList Error { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorList">VertexAiCustomJobErrorList</a>

---

##### `JobSpec`<sup>Required</sup> <a name="JobSpec" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.jobSpec"></a>

```csharp
public VertexAiCustomJobJobSpecOutputReference JobSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference">VertexAiCustomJobJobSpecOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.timeouts"></a>

```csharp
public VertexAiCustomJobTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference">VertexAiCustomJobTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `WebAccessUris`<sup>Required</sup> <a name="WebAccessUris" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.webAccessUris"></a>

```csharp
public StringMap WebAccessUris { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EncryptionSpecInput`<sup>Optional</sup> <a name="EncryptionSpecInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.encryptionSpecInput"></a>

```csharp
public VertexAiCustomJobEncryptionSpec EncryptionSpecInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpec">VertexAiCustomJobEncryptionSpec</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `JobSpecInput`<sup>Optional</sup> <a name="JobSpecInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.jobSpecInput"></a>

```csharp
public VertexAiCustomJobJobSpec JobSpecInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpec">VertexAiCustomJobJobSpec</a>

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.timeoutsInput"></a>

```csharp
public IResolvable|VertexAiCustomJobTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeouts">VertexAiCustomJobTimeouts</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJob.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VertexAiCustomJobConfig <a name="VertexAiCustomJobConfig" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiCustomJobConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DisplayName,
    VertexAiCustomJobJobSpec JobSpec,
    string Region,
    string DeletionPolicy = null,
    VertexAiCustomJobEncryptionSpec EncryptionSpec = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    VertexAiCustomJobTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The display name of the CustomJob. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobConfig.property.jobSpec">JobSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpec">VertexAiCustomJobJobSpec</a></code> | job_spec block. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobConfig.property.region">Region</a></code> | <code>string</code> | The Google Cloud region to run the custom job in. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobConfig.property.encryptionSpec">EncryptionSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpec">VertexAiCustomJobEncryptionSpec</a></code> | encryption_spec block. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#id VertexAiCustomJob#id}. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The labels with user-defined metadata to organize CustomJobs. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#project VertexAiCustomJob#project}. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeouts">VertexAiCustomJobTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The display name of the CustomJob.

The name can be up to 128 characters long and can consist of any UTF-8 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#display_name VertexAiCustomJob#display_name}

---

##### `JobSpec`<sup>Required</sup> <a name="JobSpec" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobConfig.property.jobSpec"></a>

```csharp
public VertexAiCustomJobJobSpec JobSpec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpec">VertexAiCustomJobJobSpec</a>

job_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#job_spec VertexAiCustomJob#job_spec}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The Google Cloud region to run the custom job in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#region VertexAiCustomJob#region}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#deletion_policy VertexAiCustomJob#deletion_policy}

---

##### `EncryptionSpec`<sup>Optional</sup> <a name="EncryptionSpec" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobConfig.property.encryptionSpec"></a>

```csharp
public VertexAiCustomJobEncryptionSpec EncryptionSpec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpec">VertexAiCustomJobEncryptionSpec</a>

encryption_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#encryption_spec VertexAiCustomJob#encryption_spec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#id VertexAiCustomJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The labels with user-defined metadata to organize CustomJobs.

Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed.
See https://goo.gl/xmQnxf for more information and examples of labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#labels VertexAiCustomJob#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#project VertexAiCustomJob#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobConfig.property.timeouts"></a>

```csharp
public VertexAiCustomJobTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeouts">VertexAiCustomJobTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#timeouts VertexAiCustomJob#timeouts}

---

### VertexAiCustomJobEncryptionSpec <a name="VertexAiCustomJobEncryptionSpec" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiCustomJobEncryptionSpec {
    string KmsKeyName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpec.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | Resource name of the Cloud KMS key used to protect the resource. |

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpec.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; set; }
```

- *Type:* string

Resource name of the Cloud KMS key used to protect the resource.

The Cloud KMS key must be in the same region as the resource. It must have the format
'projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{crypto_key}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#kms_key_name VertexAiCustomJob#kms_key_name}

---

### VertexAiCustomJobError <a name="VertexAiCustomJobError" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobError.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiCustomJobError {

};
```


### VertexAiCustomJobJobSpec <a name="VertexAiCustomJobJobSpec" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiCustomJobJobSpec {
    IResolvable|VertexAiCustomJobJobSpecWorkerPoolSpecs[] WorkerPoolSpecs,
    VertexAiCustomJobJobSpecBaseOutputDirectory BaseOutputDirectory = null,
    bool|IResolvable EnableDashboardAccess = null,
    bool|IResolvable EnableWebAccess = null,
    string Network = null,
    VertexAiCustomJobJobSpecPscInterfaceConfig PscInterfaceConfig = null,
    string[] ReservedIpRanges = null,
    VertexAiCustomJobJobSpecScheduling Scheduling = null,
    string ServiceAccount = null,
    string Tensorboard = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpec.property.workerPoolSpecs">WorkerPoolSpecs</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecs">VertexAiCustomJobJobSpecWorkerPoolSpecs</a>[]</code> | worker_pool_specs block. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpec.property.baseOutputDirectory">BaseOutputDirectory</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectory">VertexAiCustomJobJobSpecBaseOutputDirectory</a></code> | base_output_directory block. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpec.property.enableDashboardAccess">EnableDashboardAccess</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether you want Vertex AI to enable access to the customized dashboard in training chief container. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpec.property.enableWebAccess">EnableWebAccess</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether you want Vertex AI to enable interactive shell access to training containers. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpec.property.network">Network</a></code> | <code>string</code> | The full name of the Compute Engine network to which the Job should be peered. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpec.property.pscInterfaceConfig">PscInterfaceConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfig">VertexAiCustomJobJobSpecPscInterfaceConfig</a></code> | psc_interface_config block. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpec.property.reservedIpRanges">ReservedIpRanges</a></code> | <code>string[]</code> | A list of names for the reserved ip ranges under the VPC network that can be used for this job. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpec.property.scheduling">Scheduling</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecScheduling">VertexAiCustomJobJobSpecScheduling</a></code> | scheduling block. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpec.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | Specifies the service account for workload run-as account. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpec.property.tensorboard">Tensorboard</a></code> | <code>string</code> | The name of a Vertex AI Tensorboard resource to which this CustomJob will upload Tensorboard logs. |

---

##### `WorkerPoolSpecs`<sup>Required</sup> <a name="WorkerPoolSpecs" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpec.property.workerPoolSpecs"></a>

```csharp
public IResolvable|VertexAiCustomJobJobSpecWorkerPoolSpecs[] WorkerPoolSpecs { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecs">VertexAiCustomJobJobSpecWorkerPoolSpecs</a>[]

worker_pool_specs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#worker_pool_specs VertexAiCustomJob#worker_pool_specs}

---

##### `BaseOutputDirectory`<sup>Optional</sup> <a name="BaseOutputDirectory" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpec.property.baseOutputDirectory"></a>

```csharp
public VertexAiCustomJobJobSpecBaseOutputDirectory BaseOutputDirectory { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectory">VertexAiCustomJobJobSpecBaseOutputDirectory</a>

base_output_directory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#base_output_directory VertexAiCustomJob#base_output_directory}

---

##### `EnableDashboardAccess`<sup>Optional</sup> <a name="EnableDashboardAccess" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpec.property.enableDashboardAccess"></a>

```csharp
public bool|IResolvable EnableDashboardAccess { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether you want Vertex AI to enable access to the customized dashboard in training chief container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#enable_dashboard_access VertexAiCustomJob#enable_dashboard_access}

---

##### `EnableWebAccess`<sup>Optional</sup> <a name="EnableWebAccess" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpec.property.enableWebAccess"></a>

```csharp
public bool|IResolvable EnableWebAccess { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether you want Vertex AI to enable interactive shell access to training containers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#enable_web_access VertexAiCustomJob#enable_web_access}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpec.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

The full name of the Compute Engine network to which the Job should be peered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#network VertexAiCustomJob#network}

---

##### `PscInterfaceConfig`<sup>Optional</sup> <a name="PscInterfaceConfig" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpec.property.pscInterfaceConfig"></a>

```csharp
public VertexAiCustomJobJobSpecPscInterfaceConfig PscInterfaceConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfig">VertexAiCustomJobJobSpecPscInterfaceConfig</a>

psc_interface_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#psc_interface_config VertexAiCustomJob#psc_interface_config}

---

##### `ReservedIpRanges`<sup>Optional</sup> <a name="ReservedIpRanges" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpec.property.reservedIpRanges"></a>

```csharp
public string[] ReservedIpRanges { get; set; }
```

- *Type:* string[]

A list of names for the reserved ip ranges under the VPC network that can be used for this job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#reserved_ip_ranges VertexAiCustomJob#reserved_ip_ranges}

---

##### `Scheduling`<sup>Optional</sup> <a name="Scheduling" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpec.property.scheduling"></a>

```csharp
public VertexAiCustomJobJobSpecScheduling Scheduling { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecScheduling">VertexAiCustomJobJobSpecScheduling</a>

scheduling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#scheduling VertexAiCustomJob#scheduling}

---

##### `ServiceAccount`<sup>Optional</sup> <a name="ServiceAccount" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpec.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; set; }
```

- *Type:* string

Specifies the service account for workload run-as account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#service_account VertexAiCustomJob#service_account}

---

##### `Tensorboard`<sup>Optional</sup> <a name="Tensorboard" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpec.property.tensorboard"></a>

```csharp
public string Tensorboard { get; set; }
```

- *Type:* string

The name of a Vertex AI Tensorboard resource to which this CustomJob will upload Tensorboard logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#tensorboard VertexAiCustomJob#tensorboard}

---

### VertexAiCustomJobJobSpecBaseOutputDirectory <a name="VertexAiCustomJobJobSpecBaseOutputDirectory" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectory.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiCustomJobJobSpecBaseOutputDirectory {
    string OutputUriPrefix
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectory.property.outputUriPrefix">OutputUriPrefix</a></code> | <code>string</code> | Cloud Storage folder URL to store the output. |

---

##### `OutputUriPrefix`<sup>Required</sup> <a name="OutputUriPrefix" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectory.property.outputUriPrefix"></a>

```csharp
public string OutputUriPrefix { get; set; }
```

- *Type:* string

Cloud Storage folder URL to store the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#output_uri_prefix VertexAiCustomJob#output_uri_prefix}

---

### VertexAiCustomJobJobSpecPscInterfaceConfig <a name="VertexAiCustomJobJobSpecPscInterfaceConfig" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiCustomJobJobSpecPscInterfaceConfig {
    IResolvable|VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs[] DnsPeeringConfigs = null,
    string NetworkAttachment = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfig.property.dnsPeeringConfigs">DnsPeeringConfigs</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs">VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs</a>[]</code> | dns_peering_configs block. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfig.property.networkAttachment">NetworkAttachment</a></code> | <code>string</code> | The name of the attachment to connect to. |

---

##### `DnsPeeringConfigs`<sup>Optional</sup> <a name="DnsPeeringConfigs" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfig.property.dnsPeeringConfigs"></a>

```csharp
public IResolvable|VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs[] DnsPeeringConfigs { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs">VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs</a>[]

dns_peering_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#dns_peering_configs VertexAiCustomJob#dns_peering_configs}

---

##### `NetworkAttachment`<sup>Optional</sup> <a name="NetworkAttachment" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfig.property.networkAttachment"></a>

```csharp
public string NetworkAttachment { get; set; }
```

- *Type:* string

The name of the attachment to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#network_attachment VertexAiCustomJob#network_attachment}

---

### VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs <a name="VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs {
    string Domain,
    string TargetNetwork,
    string TargetProject
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs.property.domain">Domain</a></code> | <code>string</code> | The DNS name suffix of the zone being peered to, e.g., "my-internal-domain.corp.". Must end with a dot. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs.property.targetNetwork">TargetNetwork</a></code> | <code>string</code> | The VPC network name in the target_project where the DNS zone specified by 'domain' is visible. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs.property.targetProject">TargetProject</a></code> | <code>string</code> | The project ID hosting the Cloud DNS managed zone that contains the 'domain'. |

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs.property.domain"></a>

```csharp
public string Domain { get; set; }
```

- *Type:* string

The DNS name suffix of the zone being peered to, e.g., "my-internal-domain.corp.". Must end with a dot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#domain VertexAiCustomJob#domain}

---

##### `TargetNetwork`<sup>Required</sup> <a name="TargetNetwork" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs.property.targetNetwork"></a>

```csharp
public string TargetNetwork { get; set; }
```

- *Type:* string

The VPC network name in the target_project where the DNS zone specified by 'domain' is visible.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#target_network VertexAiCustomJob#target_network}

---

##### `TargetProject`<sup>Required</sup> <a name="TargetProject" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs.property.targetProject"></a>

```csharp
public string TargetProject { get; set; }
```

- *Type:* string

The project ID hosting the Cloud DNS managed zone that contains the 'domain'.

The Vertex AI Service Agent requires the dns.peer role on this project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#target_project VertexAiCustomJob#target_project}

---

### VertexAiCustomJobJobSpecScheduling <a name="VertexAiCustomJobJobSpecScheduling" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecScheduling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecScheduling.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiCustomJobJobSpecScheduling {
    bool|IResolvable DisableRetries = null,
    string MaxWaitDuration = null,
    bool|IResolvable RestartJobOnWorkerRestart = null,
    string Strategy = null,
    string Timeout = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecScheduling.property.disableRetries">DisableRetries</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates if the job should retry for internal errors after the job starts running. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecScheduling.property.maxWaitDuration">MaxWaitDuration</a></code> | <code>string</code> | The maximum duration that a job will wait for the requested resources to be provisioned if the scheduling strategy is set to FLEX_START. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecScheduling.property.restartJobOnWorkerRestart">RestartJobOnWorkerRestart</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Restarts the entire CustomJob if a worker gets restarted. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecScheduling.property.strategy">Strategy</a></code> | <code>string</code> | This determines which type of scheduling strategy to use. Possible values: ["STANDARD", "SPOT", "FLEX_START"]. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecScheduling.property.timeout">Timeout</a></code> | <code>string</code> | The maximum job running time. |

---

##### `DisableRetries`<sup>Optional</sup> <a name="DisableRetries" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecScheduling.property.disableRetries"></a>

```csharp
public bool|IResolvable DisableRetries { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates if the job should retry for internal errors after the job starts running.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#disable_retries VertexAiCustomJob#disable_retries}

---

##### `MaxWaitDuration`<sup>Optional</sup> <a name="MaxWaitDuration" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecScheduling.property.maxWaitDuration"></a>

```csharp
public string MaxWaitDuration { get; set; }
```

- *Type:* string

The maximum duration that a job will wait for the requested resources to be provisioned if the scheduling strategy is set to FLEX_START.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#max_wait_duration VertexAiCustomJob#max_wait_duration}

---

##### `RestartJobOnWorkerRestart`<sup>Optional</sup> <a name="RestartJobOnWorkerRestart" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecScheduling.property.restartJobOnWorkerRestart"></a>

```csharp
public bool|IResolvable RestartJobOnWorkerRestart { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Restarts the entire CustomJob if a worker gets restarted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#restart_job_on_worker_restart VertexAiCustomJob#restart_job_on_worker_restart}

---

##### `Strategy`<sup>Optional</sup> <a name="Strategy" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecScheduling.property.strategy"></a>

```csharp
public string Strategy { get; set; }
```

- *Type:* string

This determines which type of scheduling strategy to use. Possible values: ["STANDARD", "SPOT", "FLEX_START"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#strategy VertexAiCustomJob#strategy}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecScheduling.property.timeout"></a>

```csharp
public string Timeout { get; set; }
```

- *Type:* string

The maximum job running time.

The default is 7 days. A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#timeout VertexAiCustomJob#timeout}

---

### VertexAiCustomJobJobSpecWorkerPoolSpecs <a name="VertexAiCustomJobJobSpecWorkerPoolSpecs" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiCustomJobJobSpecWorkerPoolSpecs {
    VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec ContainerSpec = null,
    VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec DiskSpec = null,
    IResolvable|VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts[] LustreMounts = null,
    VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec MachineSpec = null,
    IResolvable|VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts[] NfsMounts = null,
    VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec PythonPackageSpec = null,
    double ReplicaCount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecs.property.containerSpec">ContainerSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec">VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec</a></code> | container_spec block. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecs.property.diskSpec">DiskSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec">VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec</a></code> | disk_spec block. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecs.property.lustreMounts">LustreMounts</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts">VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts</a>[]</code> | lustre_mounts block. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecs.property.machineSpec">MachineSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec">VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec</a></code> | machine_spec block. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecs.property.nfsMounts">NfsMounts</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts">VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts</a>[]</code> | nfs_mounts block. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecs.property.pythonPackageSpec">PythonPackageSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec">VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec</a></code> | python_package_spec block. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecs.property.replicaCount">ReplicaCount</a></code> | <code>double</code> | The number of worker replicas to use for this worker pool. |

---

##### `ContainerSpec`<sup>Optional</sup> <a name="ContainerSpec" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecs.property.containerSpec"></a>

```csharp
public VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec ContainerSpec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec">VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec</a>

container_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#container_spec VertexAiCustomJob#container_spec}

---

##### `DiskSpec`<sup>Optional</sup> <a name="DiskSpec" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecs.property.diskSpec"></a>

```csharp
public VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec DiskSpec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec">VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec</a>

disk_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#disk_spec VertexAiCustomJob#disk_spec}

---

##### `LustreMounts`<sup>Optional</sup> <a name="LustreMounts" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecs.property.lustreMounts"></a>

```csharp
public IResolvable|VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts[] LustreMounts { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts">VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts</a>[]

lustre_mounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#lustre_mounts VertexAiCustomJob#lustre_mounts}

---

##### `MachineSpec`<sup>Optional</sup> <a name="MachineSpec" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecs.property.machineSpec"></a>

```csharp
public VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec MachineSpec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec">VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec</a>

machine_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#machine_spec VertexAiCustomJob#machine_spec}

---

##### `NfsMounts`<sup>Optional</sup> <a name="NfsMounts" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecs.property.nfsMounts"></a>

```csharp
public IResolvable|VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts[] NfsMounts { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts">VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts</a>[]

nfs_mounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#nfs_mounts VertexAiCustomJob#nfs_mounts}

---

##### `PythonPackageSpec`<sup>Optional</sup> <a name="PythonPackageSpec" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecs.property.pythonPackageSpec"></a>

```csharp
public VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec PythonPackageSpec { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec">VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec</a>

python_package_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#python_package_spec VertexAiCustomJob#python_package_spec}

---

##### `ReplicaCount`<sup>Optional</sup> <a name="ReplicaCount" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecs.property.replicaCount"></a>

```csharp
public double ReplicaCount { get; set; }
```

- *Type:* double

The number of worker replicas to use for this worker pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#replica_count VertexAiCustomJob#replica_count}

---

### VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec <a name="VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec {
    string ImageUri,
    string[] Args = null,
    string[] Command = null,
    IResolvable|VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv[] Env = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec.property.imageUri">ImageUri</a></code> | <code>string</code> | The URI of a container image in the Container Registry that is to be run on each worker replica. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec.property.args">Args</a></code> | <code>string[]</code> | The arguments to be passed when starting the container. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec.property.command">Command</a></code> | <code>string[]</code> | The command to be invoked when the container is started. It overrides the entrypoint instruction in Dockerfile when provided. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec.property.env">Env</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv">VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv</a>[]</code> | env block. |

---

##### `ImageUri`<sup>Required</sup> <a name="ImageUri" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec.property.imageUri"></a>

```csharp
public string ImageUri { get; set; }
```

- *Type:* string

The URI of a container image in the Container Registry that is to be run on each worker replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#image_uri VertexAiCustomJob#image_uri}

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec.property.args"></a>

```csharp
public string[] Args { get; set; }
```

- *Type:* string[]

The arguments to be passed when starting the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#args VertexAiCustomJob#args}

---

##### `Command`<sup>Optional</sup> <a name="Command" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec.property.command"></a>

```csharp
public string[] Command { get; set; }
```

- *Type:* string[]

The command to be invoked when the container is started. It overrides the entrypoint instruction in Dockerfile when provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#command VertexAiCustomJob#command}

---

##### `Env`<sup>Optional</sup> <a name="Env" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec.property.env"></a>

```csharp
public IResolvable|VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv[] Env { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv">VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv</a>[]

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#env VertexAiCustomJob#env}

---

### VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv <a name="VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv {
    string Name,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv.property.name">Name</a></code> | <code>string</code> | Name of the environment variable. Must be a valid C identifier. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv.property.value">Value</a></code> | <code>string</code> | Variables that reference a $(VAR_NAME) are expanded using the previous defined environment variables in the container. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the environment variable. Must be a valid C identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#name VertexAiCustomJob#name}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Variables that reference a $(VAR_NAME) are expanded using the previous defined environment variables in the container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#value VertexAiCustomJob#value}

---

### VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec <a name="VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec {
    double BootDiskSizeGb = null,
    string BootDiskType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec.property.bootDiskSizeGb">BootDiskSizeGb</a></code> | <code>double</code> | Size in GB of the boot disk (default is 100GB). |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec.property.bootDiskType">BootDiskType</a></code> | <code>string</code> | Type of the disk. |

---

##### `BootDiskSizeGb`<sup>Optional</sup> <a name="BootDiskSizeGb" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec.property.bootDiskSizeGb"></a>

```csharp
public double BootDiskSizeGb { get; set; }
```

- *Type:* double

Size in GB of the boot disk (default is 100GB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#boot_disk_size_gb VertexAiCustomJob#boot_disk_size_gb}

---

##### `BootDiskType`<sup>Optional</sup> <a name="BootDiskType" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec.property.bootDiskType"></a>

```csharp
public string BootDiskType { get; set; }
```

- *Type:* string

Type of the disk.

The default value depends on the machine type. Valid values include: "pd-ssd", "pd-standard", "pd-balanced", and "hyperdisk-balanced".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#boot_disk_type VertexAiCustomJob#boot_disk_type}

---

### VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts <a name="VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts {
    string Filesystem,
    string InstanceIp,
    string MountPoint,
    string VolumeHandle
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts.property.filesystem">Filesystem</a></code> | <code>string</code> | The name of the Lustre filesystem. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts.property.instanceIp">InstanceIp</a></code> | <code>string</code> | IP address of the Lustre instance. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts.property.mountPoint">MountPoint</a></code> | <code>string</code> | Destination mount path. The Lustre file system will be mounted for the user under /mnt/lustre/<mount_point>. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts.property.volumeHandle">VolumeHandle</a></code> | <code>string</code> | The unique identifier of the Lustre volume. |

---

##### `Filesystem`<sup>Required</sup> <a name="Filesystem" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts.property.filesystem"></a>

```csharp
public string Filesystem { get; set; }
```

- *Type:* string

The name of the Lustre filesystem.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#filesystem VertexAiCustomJob#filesystem}

---

##### `InstanceIp`<sup>Required</sup> <a name="InstanceIp" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts.property.instanceIp"></a>

```csharp
public string InstanceIp { get; set; }
```

- *Type:* string

IP address of the Lustre instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#instance_ip VertexAiCustomJob#instance_ip}

---

##### `MountPoint`<sup>Required</sup> <a name="MountPoint" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts.property.mountPoint"></a>

```csharp
public string MountPoint { get; set; }
```

- *Type:* string

Destination mount path. The Lustre file system will be mounted for the user under /mnt/lustre/<mount_point>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#mount_point VertexAiCustomJob#mount_point}

---

##### `VolumeHandle`<sup>Required</sup> <a name="VolumeHandle" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts.property.volumeHandle"></a>

```csharp
public string VolumeHandle { get; set; }
```

- *Type:* string

The unique identifier of the Lustre volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#volume_handle VertexAiCustomJob#volume_handle}

---

### VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec <a name="VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec {
    double AcceleratorCount = null,
    string AcceleratorType = null,
    string MachineType = null,
    VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity ReservationAffinity = null,
    string TpuTopology = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec.property.acceleratorCount">AcceleratorCount</a></code> | <code>double</code> | The number of accelerators to attach to the machine. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec.property.acceleratorType">AcceleratorType</a></code> | <code>string</code> | The type of accelerator(s) that may be attached to the machine. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec.property.machineType">MachineType</a></code> | <code>string</code> | The type of the machine. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec.property.reservationAffinity">ReservationAffinity</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity">VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity</a></code> | reservation_affinity block. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec.property.tpuTopology">TpuTopology</a></code> | <code>string</code> | The topology of the TPUs. |

---

##### `AcceleratorCount`<sup>Optional</sup> <a name="AcceleratorCount" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec.property.acceleratorCount"></a>

```csharp
public double AcceleratorCount { get; set; }
```

- *Type:* double

The number of accelerators to attach to the machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#accelerator_count VertexAiCustomJob#accelerator_count}

---

##### `AcceleratorType`<sup>Optional</sup> <a name="AcceleratorType" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec.property.acceleratorType"></a>

```csharp
public string AcceleratorType { get; set; }
```

- *Type:* string

The type of accelerator(s) that may be attached to the machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#accelerator_type VertexAiCustomJob#accelerator_type}

---

##### `MachineType`<sup>Optional</sup> <a name="MachineType" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec.property.machineType"></a>

```csharp
public string MachineType { get; set; }
```

- *Type:* string

The type of the machine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#machine_type VertexAiCustomJob#machine_type}

---

##### `ReservationAffinity`<sup>Optional</sup> <a name="ReservationAffinity" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec.property.reservationAffinity"></a>

```csharp
public VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity ReservationAffinity { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity">VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity</a>

reservation_affinity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#reservation_affinity VertexAiCustomJob#reservation_affinity}

---

##### `TpuTopology`<sup>Optional</sup> <a name="TpuTopology" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec.property.tpuTopology"></a>

```csharp
public string TpuTopology { get; set; }
```

- *Type:* string

The topology of the TPUs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#tpu_topology VertexAiCustomJob#tpu_topology}

---

### VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity <a name="VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity {
    string ReservationAffinityType,
    string Key = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity.property.reservationAffinityType">ReservationAffinityType</a></code> | <code>string</code> | Specifies the reservation affinity type. Possible values: "NO_RESERVATION", "ANY_RESERVATION", and "SPECIFIC_RESERVATION". |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity.property.key">Key</a></code> | <code>string</code> | Corresponds to the label key of a reservation resource. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity.property.values">Values</a></code> | <code>string[]</code> | Corresponds to the label values of a reservation resource. |

---

##### `ReservationAffinityType`<sup>Required</sup> <a name="ReservationAffinityType" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity.property.reservationAffinityType"></a>

```csharp
public string ReservationAffinityType { get; set; }
```

- *Type:* string

Specifies the reservation affinity type. Possible values: "NO_RESERVATION", "ANY_RESERVATION", and "SPECIFIC_RESERVATION".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#reservation_affinity_type VertexAiCustomJob#reservation_affinity_type}

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Corresponds to the label key of a reservation resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#key VertexAiCustomJob#key}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Corresponds to the label values of a reservation resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#values VertexAiCustomJob#values}

---

### VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts <a name="VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts {
    string MountPoint,
    string Path,
    string Server
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts.property.mountPoint">MountPoint</a></code> | <code>string</code> | Destination mount path. The path must be absolute. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts.property.path">Path</a></code> | <code>string</code> | Source path exported from NFS database. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts.property.server">Server</a></code> | <code>string</code> | IP address of the NFS server. |

---

##### `MountPoint`<sup>Required</sup> <a name="MountPoint" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts.property.mountPoint"></a>

```csharp
public string MountPoint { get; set; }
```

- *Type:* string

Destination mount path. The path must be absolute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#mount_point VertexAiCustomJob#mount_point}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Source path exported from NFS database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#path VertexAiCustomJob#path}

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts.property.server"></a>

```csharp
public string Server { get; set; }
```

- *Type:* string

IP address of the NFS server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#server VertexAiCustomJob#server}

---

### VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec <a name="VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec {
    string ExecutorImageUri,
    string[] PackageUris,
    string PythonModule,
    string[] Args = null,
    IResolvable|VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv[] Env = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec.property.executorImageUri">ExecutorImageUri</a></code> | <code>string</code> | The URI of a container image in Artifact Registry that will run the provided Python package. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec.property.packageUris">PackageUris</a></code> | <code>string[]</code> | The Google Cloud Storage location of the Python package files which are the training program and its dependent packages. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec.property.pythonModule">PythonModule</a></code> | <code>string</code> | The Python module name to run after installing the packages. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec.property.args">Args</a></code> | <code>string[]</code> | Command line arguments to be passed to the Python task. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec.property.env">Env</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv">VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv</a>[]</code> | env block. |

---

##### `ExecutorImageUri`<sup>Required</sup> <a name="ExecutorImageUri" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec.property.executorImageUri"></a>

```csharp
public string ExecutorImageUri { get; set; }
```

- *Type:* string

The URI of a container image in Artifact Registry that will run the provided Python package.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#executor_image_uri VertexAiCustomJob#executor_image_uri}

---

##### `PackageUris`<sup>Required</sup> <a name="PackageUris" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec.property.packageUris"></a>

```csharp
public string[] PackageUris { get; set; }
```

- *Type:* string[]

The Google Cloud Storage location of the Python package files which are the training program and its dependent packages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#package_uris VertexAiCustomJob#package_uris}

---

##### `PythonModule`<sup>Required</sup> <a name="PythonModule" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec.property.pythonModule"></a>

```csharp
public string PythonModule { get; set; }
```

- *Type:* string

The Python module name to run after installing the packages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#python_module VertexAiCustomJob#python_module}

---

##### `Args`<sup>Optional</sup> <a name="Args" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec.property.args"></a>

```csharp
public string[] Args { get; set; }
```

- *Type:* string[]

Command line arguments to be passed to the Python task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#args VertexAiCustomJob#args}

---

##### `Env`<sup>Optional</sup> <a name="Env" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec.property.env"></a>

```csharp
public IResolvable|VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv[] Env { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv">VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv</a>[]

env block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#env VertexAiCustomJob#env}

---

### VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv <a name="VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv {
    string Name,
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv.property.name">Name</a></code> | <code>string</code> | Name of the environment variable. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv.property.value">Value</a></code> | <code>string</code> | Value of the environment variable. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#name VertexAiCustomJob#name}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Value of the environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#value VertexAiCustomJob#value}

---

### VertexAiCustomJobTimeouts <a name="VertexAiCustomJobTimeouts" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiCustomJobTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#create VertexAiCustomJob#create}. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#delete VertexAiCustomJob#delete}. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#update VertexAiCustomJob#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#create VertexAiCustomJob#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#delete VertexAiCustomJob#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/vertex_ai_custom_job#update VertexAiCustomJob#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VertexAiCustomJobEncryptionSpecOutputReference <a name="VertexAiCustomJobEncryptionSpecOutputReference" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiCustomJobEncryptionSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpec">VertexAiCustomJobEncryptionSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.property.kmsKeyNameInput"></a>

```csharp
public string KmsKeyNameInput { get; }
```

- *Type:* string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpecOutputReference.property.internalValue"></a>

```csharp
public VertexAiCustomJobEncryptionSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobEncryptionSpec">VertexAiCustomJobEncryptionSpec</a>

---


### VertexAiCustomJobErrorList <a name="VertexAiCustomJobErrorList" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiCustomJobErrorList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorList.get"></a>

```csharp
private VertexAiCustomJobErrorOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### VertexAiCustomJobErrorOutputReference <a name="VertexAiCustomJobErrorOutputReference" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiCustomJobErrorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.property.code">Code</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobError">VertexAiCustomJobError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.property.code"></a>

```csharp
public double Code { get; }
```

- *Type:* double

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobErrorOutputReference.property.internalValue"></a>

```csharp
public VertexAiCustomJobError InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobError">VertexAiCustomJobError</a>

---


### VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference <a name="VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.property.outputUriPrefixInput">OutputUriPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.property.outputUriPrefix">OutputUriPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectory">VertexAiCustomJobJobSpecBaseOutputDirectory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OutputUriPrefixInput`<sup>Optional</sup> <a name="OutputUriPrefixInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.property.outputUriPrefixInput"></a>

```csharp
public string OutputUriPrefixInput { get; }
```

- *Type:* string

---

##### `OutputUriPrefix`<sup>Required</sup> <a name="OutputUriPrefix" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.property.outputUriPrefix"></a>

```csharp
public string OutputUriPrefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference.property.internalValue"></a>

```csharp
public VertexAiCustomJobJobSpecBaseOutputDirectory InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectory">VertexAiCustomJobJobSpecBaseOutputDirectory</a>

---


### VertexAiCustomJobJobSpecOutputReference <a name="VertexAiCustomJobJobSpecOutputReference" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiCustomJobJobSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.putBaseOutputDirectory">PutBaseOutputDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.putPscInterfaceConfig">PutPscInterfaceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.putScheduling">PutScheduling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.putWorkerPoolSpecs">PutWorkerPoolSpecs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.resetBaseOutputDirectory">ResetBaseOutputDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.resetEnableDashboardAccess">ResetEnableDashboardAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.resetEnableWebAccess">ResetEnableWebAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.resetPscInterfaceConfig">ResetPscInterfaceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.resetReservedIpRanges">ResetReservedIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.resetScheduling">ResetScheduling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.resetServiceAccount">ResetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.resetTensorboard">ResetTensorboard</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBaseOutputDirectory` <a name="PutBaseOutputDirectory" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.putBaseOutputDirectory"></a>

```csharp
private void PutBaseOutputDirectory(VertexAiCustomJobJobSpecBaseOutputDirectory Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.putBaseOutputDirectory.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectory">VertexAiCustomJobJobSpecBaseOutputDirectory</a>

---

##### `PutPscInterfaceConfig` <a name="PutPscInterfaceConfig" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.putPscInterfaceConfig"></a>

```csharp
private void PutPscInterfaceConfig(VertexAiCustomJobJobSpecPscInterfaceConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.putPscInterfaceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfig">VertexAiCustomJobJobSpecPscInterfaceConfig</a>

---

##### `PutScheduling` <a name="PutScheduling" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.putScheduling"></a>

```csharp
private void PutScheduling(VertexAiCustomJobJobSpecScheduling Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.putScheduling.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecScheduling">VertexAiCustomJobJobSpecScheduling</a>

---

##### `PutWorkerPoolSpecs` <a name="PutWorkerPoolSpecs" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.putWorkerPoolSpecs"></a>

```csharp
private void PutWorkerPoolSpecs(IResolvable|VertexAiCustomJobJobSpecWorkerPoolSpecs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.putWorkerPoolSpecs.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecs">VertexAiCustomJobJobSpecWorkerPoolSpecs</a>[]

---

##### `ResetBaseOutputDirectory` <a name="ResetBaseOutputDirectory" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.resetBaseOutputDirectory"></a>

```csharp
private void ResetBaseOutputDirectory()
```

##### `ResetEnableDashboardAccess` <a name="ResetEnableDashboardAccess" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.resetEnableDashboardAccess"></a>

```csharp
private void ResetEnableDashboardAccess()
```

##### `ResetEnableWebAccess` <a name="ResetEnableWebAccess" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.resetEnableWebAccess"></a>

```csharp
private void ResetEnableWebAccess()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.resetNetwork"></a>

```csharp
private void ResetNetwork()
```

##### `ResetPscInterfaceConfig` <a name="ResetPscInterfaceConfig" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.resetPscInterfaceConfig"></a>

```csharp
private void ResetPscInterfaceConfig()
```

##### `ResetReservedIpRanges` <a name="ResetReservedIpRanges" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.resetReservedIpRanges"></a>

```csharp
private void ResetReservedIpRanges()
```

##### `ResetScheduling` <a name="ResetScheduling" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.resetScheduling"></a>

```csharp
private void ResetScheduling()
```

##### `ResetServiceAccount` <a name="ResetServiceAccount" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.resetServiceAccount"></a>

```csharp
private void ResetServiceAccount()
```

##### `ResetTensorboard` <a name="ResetTensorboard" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.resetTensorboard"></a>

```csharp
private void ResetTensorboard()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.baseOutputDirectory">BaseOutputDirectory</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference">VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.pscInterfaceConfig">PscInterfaceConfig</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference">VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.scheduling">Scheduling</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference">VertexAiCustomJobJobSpecSchedulingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.workerPoolSpecs">WorkerPoolSpecs</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsList">VertexAiCustomJobJobSpecWorkerPoolSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.baseOutputDirectoryInput">BaseOutputDirectoryInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectory">VertexAiCustomJobJobSpecBaseOutputDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.enableDashboardAccessInput">EnableDashboardAccessInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.enableWebAccessInput">EnableWebAccessInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.pscInterfaceConfigInput">PscInterfaceConfigInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfig">VertexAiCustomJobJobSpecPscInterfaceConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.reservedIpRangesInput">ReservedIpRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.schedulingInput">SchedulingInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecScheduling">VertexAiCustomJobJobSpecScheduling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.serviceAccountInput">ServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.tensorboardInput">TensorboardInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.workerPoolSpecsInput">WorkerPoolSpecsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecs">VertexAiCustomJobJobSpecWorkerPoolSpecs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.enableDashboardAccess">EnableDashboardAccess</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.enableWebAccess">EnableWebAccess</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.reservedIpRanges">ReservedIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.serviceAccount">ServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.tensorboard">Tensorboard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpec">VertexAiCustomJobJobSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BaseOutputDirectory`<sup>Required</sup> <a name="BaseOutputDirectory" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.baseOutputDirectory"></a>

```csharp
public VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference BaseOutputDirectory { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference">VertexAiCustomJobJobSpecBaseOutputDirectoryOutputReference</a>

---

##### `PscInterfaceConfig`<sup>Required</sup> <a name="PscInterfaceConfig" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.pscInterfaceConfig"></a>

```csharp
public VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference PscInterfaceConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference">VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference</a>

---

##### `Scheduling`<sup>Required</sup> <a name="Scheduling" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.scheduling"></a>

```csharp
public VertexAiCustomJobJobSpecSchedulingOutputReference Scheduling { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference">VertexAiCustomJobJobSpecSchedulingOutputReference</a>

---

##### `WorkerPoolSpecs`<sup>Required</sup> <a name="WorkerPoolSpecs" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.workerPoolSpecs"></a>

```csharp
public VertexAiCustomJobJobSpecWorkerPoolSpecsList WorkerPoolSpecs { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsList">VertexAiCustomJobJobSpecWorkerPoolSpecsList</a>

---

##### `BaseOutputDirectoryInput`<sup>Optional</sup> <a name="BaseOutputDirectoryInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.baseOutputDirectoryInput"></a>

```csharp
public VertexAiCustomJobJobSpecBaseOutputDirectory BaseOutputDirectoryInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecBaseOutputDirectory">VertexAiCustomJobJobSpecBaseOutputDirectory</a>

---

##### `EnableDashboardAccessInput`<sup>Optional</sup> <a name="EnableDashboardAccessInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.enableDashboardAccessInput"></a>

```csharp
public bool|IResolvable EnableDashboardAccessInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableWebAccessInput`<sup>Optional</sup> <a name="EnableWebAccessInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.enableWebAccessInput"></a>

```csharp
public bool|IResolvable EnableWebAccessInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `PscInterfaceConfigInput`<sup>Optional</sup> <a name="PscInterfaceConfigInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.pscInterfaceConfigInput"></a>

```csharp
public VertexAiCustomJobJobSpecPscInterfaceConfig PscInterfaceConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfig">VertexAiCustomJobJobSpecPscInterfaceConfig</a>

---

##### `ReservedIpRangesInput`<sup>Optional</sup> <a name="ReservedIpRangesInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.reservedIpRangesInput"></a>

```csharp
public string[] ReservedIpRangesInput { get; }
```

- *Type:* string[]

---

##### `SchedulingInput`<sup>Optional</sup> <a name="SchedulingInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.schedulingInput"></a>

```csharp
public VertexAiCustomJobJobSpecScheduling SchedulingInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecScheduling">VertexAiCustomJobJobSpecScheduling</a>

---

##### `ServiceAccountInput`<sup>Optional</sup> <a name="ServiceAccountInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.serviceAccountInput"></a>

```csharp
public string ServiceAccountInput { get; }
```

- *Type:* string

---

##### `TensorboardInput`<sup>Optional</sup> <a name="TensorboardInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.tensorboardInput"></a>

```csharp
public string TensorboardInput { get; }
```

- *Type:* string

---

##### `WorkerPoolSpecsInput`<sup>Optional</sup> <a name="WorkerPoolSpecsInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.workerPoolSpecsInput"></a>

```csharp
public IResolvable|VertexAiCustomJobJobSpecWorkerPoolSpecs[] WorkerPoolSpecsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecs">VertexAiCustomJobJobSpecWorkerPoolSpecs</a>[]

---

##### `EnableDashboardAccess`<sup>Required</sup> <a name="EnableDashboardAccess" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.enableDashboardAccess"></a>

```csharp
public bool|IResolvable EnableDashboardAccess { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EnableWebAccess`<sup>Required</sup> <a name="EnableWebAccess" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.enableWebAccess"></a>

```csharp
public bool|IResolvable EnableWebAccess { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `ReservedIpRanges`<sup>Required</sup> <a name="ReservedIpRanges" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.reservedIpRanges"></a>

```csharp
public string[] ReservedIpRanges { get; }
```

- *Type:* string[]

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.serviceAccount"></a>

```csharp
public string ServiceAccount { get; }
```

- *Type:* string

---

##### `Tensorboard`<sup>Required</sup> <a name="Tensorboard" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.tensorboard"></a>

```csharp
public string Tensorboard { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecOutputReference.property.internalValue"></a>

```csharp
public VertexAiCustomJobJobSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpec">VertexAiCustomJobJobSpec</a>

---


### VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList <a name="VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.get"></a>

```csharp
private VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs">VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList.property.internalValue"></a>

```csharp
public IResolvable|VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs">VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs</a>[]

---


### VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference <a name="VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.domainInput">DomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetworkInput">TargetNetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProjectInput">TargetProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetwork">TargetNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProject">TargetProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs">VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.domainInput"></a>

```csharp
public string DomainInput { get; }
```

- *Type:* string

---

##### `TargetNetworkInput`<sup>Optional</sup> <a name="TargetNetworkInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetworkInput"></a>

```csharp
public string TargetNetworkInput { get; }
```

- *Type:* string

---

##### `TargetProjectInput`<sup>Optional</sup> <a name="TargetProjectInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProjectInput"></a>

```csharp
public string TargetProjectInput { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `TargetNetwork`<sup>Required</sup> <a name="TargetNetwork" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetNetwork"></a>

```csharp
public string TargetNetwork { get; }
```

- *Type:* string

---

##### `TargetProject`<sup>Required</sup> <a name="TargetProject" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.targetProject"></a>

```csharp
public string TargetProject { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs">VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs</a>

---


### VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference <a name="VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.putDnsPeeringConfigs">PutDnsPeeringConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.resetDnsPeeringConfigs">ResetDnsPeeringConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.resetNetworkAttachment">ResetNetworkAttachment</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDnsPeeringConfigs` <a name="PutDnsPeeringConfigs" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.putDnsPeeringConfigs"></a>

```csharp
private void PutDnsPeeringConfigs(IResolvable|VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.putDnsPeeringConfigs.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs">VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs</a>[]

---

##### `ResetDnsPeeringConfigs` <a name="ResetDnsPeeringConfigs" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.resetDnsPeeringConfigs"></a>

```csharp
private void ResetDnsPeeringConfigs()
```

##### `ResetNetworkAttachment` <a name="ResetNetworkAttachment" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.resetNetworkAttachment"></a>

```csharp
private void ResetNetworkAttachment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.property.dnsPeeringConfigs">DnsPeeringConfigs</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList">VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.property.dnsPeeringConfigsInput">DnsPeeringConfigsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs">VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.property.networkAttachmentInput">NetworkAttachmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.property.networkAttachment">NetworkAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfig">VertexAiCustomJobJobSpecPscInterfaceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DnsPeeringConfigs`<sup>Required</sup> <a name="DnsPeeringConfigs" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.property.dnsPeeringConfigs"></a>

```csharp
public VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList DnsPeeringConfigs { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList">VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigsList</a>

---

##### `DnsPeeringConfigsInput`<sup>Optional</sup> <a name="DnsPeeringConfigsInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.property.dnsPeeringConfigsInput"></a>

```csharp
public IResolvable|VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs[] DnsPeeringConfigsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs">VertexAiCustomJobJobSpecPscInterfaceConfigDnsPeeringConfigs</a>[]

---

##### `NetworkAttachmentInput`<sup>Optional</sup> <a name="NetworkAttachmentInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.property.networkAttachmentInput"></a>

```csharp
public string NetworkAttachmentInput { get; }
```

- *Type:* string

---

##### `NetworkAttachment`<sup>Required</sup> <a name="NetworkAttachment" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.property.networkAttachment"></a>

```csharp
public string NetworkAttachment { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfigOutputReference.property.internalValue"></a>

```csharp
public VertexAiCustomJobJobSpecPscInterfaceConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecPscInterfaceConfig">VertexAiCustomJobJobSpecPscInterfaceConfig</a>

---


### VertexAiCustomJobJobSpecSchedulingOutputReference <a name="VertexAiCustomJobJobSpecSchedulingOutputReference" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiCustomJobJobSpecSchedulingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.resetDisableRetries">ResetDisableRetries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.resetMaxWaitDuration">ResetMaxWaitDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.resetRestartJobOnWorkerRestart">ResetRestartJobOnWorkerRestart</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.resetStrategy">ResetStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisableRetries` <a name="ResetDisableRetries" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.resetDisableRetries"></a>

```csharp
private void ResetDisableRetries()
```

##### `ResetMaxWaitDuration` <a name="ResetMaxWaitDuration" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.resetMaxWaitDuration"></a>

```csharp
private void ResetMaxWaitDuration()
```

##### `ResetRestartJobOnWorkerRestart` <a name="ResetRestartJobOnWorkerRestart" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.resetRestartJobOnWorkerRestart"></a>

```csharp
private void ResetRestartJobOnWorkerRestart()
```

##### `ResetStrategy` <a name="ResetStrategy" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.resetStrategy"></a>

```csharp
private void ResetStrategy()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.resetTimeout"></a>

```csharp
private void ResetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.property.disableRetriesInput">DisableRetriesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.property.maxWaitDurationInput">MaxWaitDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.property.restartJobOnWorkerRestartInput">RestartJobOnWorkerRestartInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.property.strategyInput">StrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.property.disableRetries">DisableRetries</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.property.maxWaitDuration">MaxWaitDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.property.restartJobOnWorkerRestart">RestartJobOnWorkerRestart</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.property.strategy">Strategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.property.timeout">Timeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecScheduling">VertexAiCustomJobJobSpecScheduling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisableRetriesInput`<sup>Optional</sup> <a name="DisableRetriesInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.property.disableRetriesInput"></a>

```csharp
public bool|IResolvable DisableRetriesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaxWaitDurationInput`<sup>Optional</sup> <a name="MaxWaitDurationInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.property.maxWaitDurationInput"></a>

```csharp
public string MaxWaitDurationInput { get; }
```

- *Type:* string

---

##### `RestartJobOnWorkerRestartInput`<sup>Optional</sup> <a name="RestartJobOnWorkerRestartInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.property.restartJobOnWorkerRestartInput"></a>

```csharp
public bool|IResolvable RestartJobOnWorkerRestartInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `StrategyInput`<sup>Optional</sup> <a name="StrategyInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.property.strategyInput"></a>

```csharp
public string StrategyInput { get; }
```

- *Type:* string

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.property.timeoutInput"></a>

```csharp
public string TimeoutInput { get; }
```

- *Type:* string

---

##### `DisableRetries`<sup>Required</sup> <a name="DisableRetries" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.property.disableRetries"></a>

```csharp
public bool|IResolvable DisableRetries { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaxWaitDuration`<sup>Required</sup> <a name="MaxWaitDuration" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.property.maxWaitDuration"></a>

```csharp
public string MaxWaitDuration { get; }
```

- *Type:* string

---

##### `RestartJobOnWorkerRestart`<sup>Required</sup> <a name="RestartJobOnWorkerRestart" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.property.restartJobOnWorkerRestart"></a>

```csharp
public bool|IResolvable RestartJobOnWorkerRestart { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Strategy`<sup>Required</sup> <a name="Strategy" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.property.strategy"></a>

```csharp
public string Strategy { get; }
```

- *Type:* string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.property.timeout"></a>

```csharp
public string Timeout { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecSchedulingOutputReference.property.internalValue"></a>

```csharp
public VertexAiCustomJobJobSpecScheduling InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecScheduling">VertexAiCustomJobJobSpecScheduling</a>

---


### VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList <a name="VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.get"></a>

```csharp
private VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv">VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList.property.internalValue"></a>

```csharp
public IResolvable|VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv">VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv</a>[]

---


### VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference <a name="VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv">VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvOutputReference.property.internalValue"></a>

```csharp
public IResolvable|VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv">VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv</a>

---


### VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference <a name="VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.putEnv">PutEnv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.resetArgs">ResetArgs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.resetCommand">ResetCommand</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.resetEnv">ResetEnv</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnv` <a name="PutEnv" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.putEnv"></a>

```csharp
private void PutEnv(IResolvable|VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.putEnv.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv">VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv</a>[]

---

##### `ResetArgs` <a name="ResetArgs" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.resetArgs"></a>

```csharp
private void ResetArgs()
```

##### `ResetCommand` <a name="ResetCommand" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.resetCommand"></a>

```csharp
private void ResetCommand()
```

##### `ResetEnv` <a name="ResetEnv" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.resetEnv"></a>

```csharp
private void ResetEnv()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.env">Env</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList">VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.argsInput">ArgsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.commandInput">CommandInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.envInput">EnvInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv">VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.imageUriInput">ImageUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.args">Args</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.command">Command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.imageUri">ImageUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec">VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Env`<sup>Required</sup> <a name="Env" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.env"></a>

```csharp
public VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList Env { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList">VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnvList</a>

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.argsInput"></a>

```csharp
public string[] ArgsInput { get; }
```

- *Type:* string[]

---

##### `CommandInput`<sup>Optional</sup> <a name="CommandInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.commandInput"></a>

```csharp
public string[] CommandInput { get; }
```

- *Type:* string[]

---

##### `EnvInput`<sup>Optional</sup> <a name="EnvInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.envInput"></a>

```csharp
public IResolvable|VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv[] EnvInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv">VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecEnv</a>[]

---

##### `ImageUriInput`<sup>Optional</sup> <a name="ImageUriInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.imageUriInput"></a>

```csharp
public string ImageUriInput { get; }
```

- *Type:* string

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.args"></a>

```csharp
public string[] Args { get; }
```

- *Type:* string[]

---

##### `Command`<sup>Required</sup> <a name="Command" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.command"></a>

```csharp
public string[] Command { get; }
```

- *Type:* string[]

---

##### `ImageUri`<sup>Required</sup> <a name="ImageUri" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.imageUri"></a>

```csharp
public string ImageUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference.property.internalValue"></a>

```csharp
public VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec">VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec</a>

---


### VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference <a name="VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.resetBootDiskSizeGb">ResetBootDiskSizeGb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.resetBootDiskType">ResetBootDiskType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBootDiskSizeGb` <a name="ResetBootDiskSizeGb" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.resetBootDiskSizeGb"></a>

```csharp
private void ResetBootDiskSizeGb()
```

##### `ResetBootDiskType` <a name="ResetBootDiskType" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.resetBootDiskType"></a>

```csharp
private void ResetBootDiskType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.property.bootDiskSizeGbInput">BootDiskSizeGbInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.property.bootDiskTypeInput">BootDiskTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.property.bootDiskSizeGb">BootDiskSizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.property.bootDiskType">BootDiskType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec">VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BootDiskSizeGbInput`<sup>Optional</sup> <a name="BootDiskSizeGbInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.property.bootDiskSizeGbInput"></a>

```csharp
public double BootDiskSizeGbInput { get; }
```

- *Type:* double

---

##### `BootDiskTypeInput`<sup>Optional</sup> <a name="BootDiskTypeInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.property.bootDiskTypeInput"></a>

```csharp
public string BootDiskTypeInput { get; }
```

- *Type:* string

---

##### `BootDiskSizeGb`<sup>Required</sup> <a name="BootDiskSizeGb" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.property.bootDiskSizeGb"></a>

```csharp
public double BootDiskSizeGb { get; }
```

- *Type:* double

---

##### `BootDiskType`<sup>Required</sup> <a name="BootDiskType" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.property.bootDiskType"></a>

```csharp
public string BootDiskType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference.property.internalValue"></a>

```csharp
public VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec">VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec</a>

---


### VertexAiCustomJobJobSpecWorkerPoolSpecsList <a name="VertexAiCustomJobJobSpecWorkerPoolSpecsList" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiCustomJobJobSpecWorkerPoolSpecsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsList.get"></a>

```csharp
private VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecs">VertexAiCustomJobJobSpecWorkerPoolSpecs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsList.property.internalValue"></a>

```csharp
public IResolvable|VertexAiCustomJobJobSpecWorkerPoolSpecs[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecs">VertexAiCustomJobJobSpecWorkerPoolSpecs</a>[]

---


### VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList <a name="VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.get"></a>

```csharp
private VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts">VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList.property.internalValue"></a>

```csharp
public IResolvable|VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts">VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts</a>[]

---


### VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference <a name="VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.filesystemInput">FilesystemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.instanceIpInput">InstanceIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.mountPointInput">MountPointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.volumeHandleInput">VolumeHandleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.filesystem">Filesystem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.instanceIp">InstanceIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.mountPoint">MountPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.volumeHandle">VolumeHandle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts">VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FilesystemInput`<sup>Optional</sup> <a name="FilesystemInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.filesystemInput"></a>

```csharp
public string FilesystemInput { get; }
```

- *Type:* string

---

##### `InstanceIpInput`<sup>Optional</sup> <a name="InstanceIpInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.instanceIpInput"></a>

```csharp
public string InstanceIpInput { get; }
```

- *Type:* string

---

##### `MountPointInput`<sup>Optional</sup> <a name="MountPointInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.mountPointInput"></a>

```csharp
public string MountPointInput { get; }
```

- *Type:* string

---

##### `VolumeHandleInput`<sup>Optional</sup> <a name="VolumeHandleInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.volumeHandleInput"></a>

```csharp
public string VolumeHandleInput { get; }
```

- *Type:* string

---

##### `Filesystem`<sup>Required</sup> <a name="Filesystem" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.filesystem"></a>

```csharp
public string Filesystem { get; }
```

- *Type:* string

---

##### `InstanceIp`<sup>Required</sup> <a name="InstanceIp" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.instanceIp"></a>

```csharp
public string InstanceIp { get; }
```

- *Type:* string

---

##### `MountPoint`<sup>Required</sup> <a name="MountPoint" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.mountPoint"></a>

```csharp
public string MountPoint { get; }
```

- *Type:* string

---

##### `VolumeHandle`<sup>Required</sup> <a name="VolumeHandle" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.volumeHandle"></a>

```csharp
public string VolumeHandle { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts">VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts</a>

---


### VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference <a name="VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.putReservationAffinity">PutReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.resetAcceleratorCount">ResetAcceleratorCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.resetAcceleratorType">ResetAcceleratorType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.resetMachineType">ResetMachineType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.resetReservationAffinity">ResetReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.resetTpuTopology">ResetTpuTopology</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutReservationAffinity` <a name="PutReservationAffinity" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.putReservationAffinity"></a>

```csharp
private void PutReservationAffinity(VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.putReservationAffinity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity">VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity</a>

---

##### `ResetAcceleratorCount` <a name="ResetAcceleratorCount" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.resetAcceleratorCount"></a>

```csharp
private void ResetAcceleratorCount()
```

##### `ResetAcceleratorType` <a name="ResetAcceleratorType" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.resetAcceleratorType"></a>

```csharp
private void ResetAcceleratorType()
```

##### `ResetMachineType` <a name="ResetMachineType" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.resetMachineType"></a>

```csharp
private void ResetMachineType()
```

##### `ResetReservationAffinity` <a name="ResetReservationAffinity" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.resetReservationAffinity"></a>

```csharp
private void ResetReservationAffinity()
```

##### `ResetTpuTopology` <a name="ResetTpuTopology" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.resetTpuTopology"></a>

```csharp
private void ResetTpuTopology()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.reservationAffinity">ReservationAffinity</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference">VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.acceleratorCountInput">AcceleratorCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.acceleratorTypeInput">AcceleratorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.machineTypeInput">MachineTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.reservationAffinityInput">ReservationAffinityInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity">VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.tpuTopologyInput">TpuTopologyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.acceleratorCount">AcceleratorCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.acceleratorType">AcceleratorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.machineType">MachineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.tpuTopology">TpuTopology</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec">VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReservationAffinity`<sup>Required</sup> <a name="ReservationAffinity" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.reservationAffinity"></a>

```csharp
public VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference ReservationAffinity { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference">VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference</a>

---

##### `AcceleratorCountInput`<sup>Optional</sup> <a name="AcceleratorCountInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.acceleratorCountInput"></a>

```csharp
public double AcceleratorCountInput { get; }
```

- *Type:* double

---

##### `AcceleratorTypeInput`<sup>Optional</sup> <a name="AcceleratorTypeInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.acceleratorTypeInput"></a>

```csharp
public string AcceleratorTypeInput { get; }
```

- *Type:* string

---

##### `MachineTypeInput`<sup>Optional</sup> <a name="MachineTypeInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.machineTypeInput"></a>

```csharp
public string MachineTypeInput { get; }
```

- *Type:* string

---

##### `ReservationAffinityInput`<sup>Optional</sup> <a name="ReservationAffinityInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.reservationAffinityInput"></a>

```csharp
public VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity ReservationAffinityInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity">VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity</a>

---

##### `TpuTopologyInput`<sup>Optional</sup> <a name="TpuTopologyInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.tpuTopologyInput"></a>

```csharp
public string TpuTopologyInput { get; }
```

- *Type:* string

---

##### `AcceleratorCount`<sup>Required</sup> <a name="AcceleratorCount" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.acceleratorCount"></a>

```csharp
public double AcceleratorCount { get; }
```

- *Type:* double

---

##### `AcceleratorType`<sup>Required</sup> <a name="AcceleratorType" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.acceleratorType"></a>

```csharp
public string AcceleratorType { get; }
```

- *Type:* string

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.machineType"></a>

```csharp
public string MachineType { get; }
```

- *Type:* string

---

##### `TpuTopology`<sup>Required</sup> <a name="TpuTopology" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.tpuTopology"></a>

```csharp
public string TpuTopology { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference.property.internalValue"></a>

```csharp
public VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec">VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec</a>

---


### VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference <a name="VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.reservationAffinityTypeInput">ReservationAffinityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.reservationAffinityType">ReservationAffinityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity">VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ReservationAffinityTypeInput`<sup>Optional</sup> <a name="ReservationAffinityTypeInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.reservationAffinityTypeInput"></a>

```csharp
public string ReservationAffinityTypeInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `ReservationAffinityType`<sup>Required</sup> <a name="ReservationAffinityType" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.reservationAffinityType"></a>

```csharp
public string ReservationAffinityType { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinityOutputReference.property.internalValue"></a>

```csharp
public VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity">VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecReservationAffinity</a>

---


### VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList <a name="VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.get"></a>

```csharp
private VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts">VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList.property.internalValue"></a>

```csharp
public IResolvable|VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts">VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts</a>[]

---


### VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference <a name="VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.mountPointInput">MountPointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.serverInput">ServerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.mountPoint">MountPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.server">Server</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts">VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MountPointInput`<sup>Optional</sup> <a name="MountPointInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.mountPointInput"></a>

```csharp
public string MountPointInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `ServerInput`<sup>Optional</sup> <a name="ServerInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.serverInput"></a>

```csharp
public string ServerInput { get; }
```

- *Type:* string

---

##### `MountPoint`<sup>Required</sup> <a name="MountPoint" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.mountPoint"></a>

```csharp
public string MountPoint { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Server`<sup>Required</sup> <a name="Server" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.server"></a>

```csharp
public string Server { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts">VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts</a>

---


### VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference <a name="VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putContainerSpec">PutContainerSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putDiskSpec">PutDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putLustreMounts">PutLustreMounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putMachineSpec">PutMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putNfsMounts">PutNfsMounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putPythonPackageSpec">PutPythonPackageSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resetContainerSpec">ResetContainerSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resetDiskSpec">ResetDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resetLustreMounts">ResetLustreMounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resetMachineSpec">ResetMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resetNfsMounts">ResetNfsMounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resetPythonPackageSpec">ResetPythonPackageSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resetReplicaCount">ResetReplicaCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContainerSpec` <a name="PutContainerSpec" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putContainerSpec"></a>

```csharp
private void PutContainerSpec(VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putContainerSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec">VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec</a>

---

##### `PutDiskSpec` <a name="PutDiskSpec" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putDiskSpec"></a>

```csharp
private void PutDiskSpec(VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putDiskSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec">VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec</a>

---

##### `PutLustreMounts` <a name="PutLustreMounts" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putLustreMounts"></a>

```csharp
private void PutLustreMounts(IResolvable|VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putLustreMounts.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts">VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts</a>[]

---

##### `PutMachineSpec` <a name="PutMachineSpec" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putMachineSpec"></a>

```csharp
private void PutMachineSpec(VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putMachineSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec">VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec</a>

---

##### `PutNfsMounts` <a name="PutNfsMounts" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putNfsMounts"></a>

```csharp
private void PutNfsMounts(IResolvable|VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putNfsMounts.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts">VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts</a>[]

---

##### `PutPythonPackageSpec` <a name="PutPythonPackageSpec" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putPythonPackageSpec"></a>

```csharp
private void PutPythonPackageSpec(VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.putPythonPackageSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec">VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec</a>

---

##### `ResetContainerSpec` <a name="ResetContainerSpec" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resetContainerSpec"></a>

```csharp
private void ResetContainerSpec()
```

##### `ResetDiskSpec` <a name="ResetDiskSpec" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resetDiskSpec"></a>

```csharp
private void ResetDiskSpec()
```

##### `ResetLustreMounts` <a name="ResetLustreMounts" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resetLustreMounts"></a>

```csharp
private void ResetLustreMounts()
```

##### `ResetMachineSpec` <a name="ResetMachineSpec" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resetMachineSpec"></a>

```csharp
private void ResetMachineSpec()
```

##### `ResetNfsMounts` <a name="ResetNfsMounts" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resetNfsMounts"></a>

```csharp
private void ResetNfsMounts()
```

##### `ResetPythonPackageSpec` <a name="ResetPythonPackageSpec" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resetPythonPackageSpec"></a>

```csharp
private void ResetPythonPackageSpec()
```

##### `ResetReplicaCount` <a name="ResetReplicaCount" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.resetReplicaCount"></a>

```csharp
private void ResetReplicaCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.containerSpec">ContainerSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference">VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.diskSpec">DiskSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference">VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.lustreMounts">LustreMounts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList">VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.machineSpec">MachineSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference">VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.nfsMounts">NfsMounts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList">VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.pythonPackageSpec">PythonPackageSpec</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference">VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.containerSpecInput">ContainerSpecInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec">VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.diskSpecInput">DiskSpecInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec">VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.lustreMountsInput">LustreMountsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts">VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.machineSpecInput">MachineSpecInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec">VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.nfsMountsInput">NfsMountsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts">VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.pythonPackageSpecInput">PythonPackageSpecInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec">VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.replicaCountInput">ReplicaCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.replicaCount">ReplicaCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecs">VertexAiCustomJobJobSpecWorkerPoolSpecs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContainerSpec`<sup>Required</sup> <a name="ContainerSpec" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.containerSpec"></a>

```csharp
public VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference ContainerSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference">VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpecOutputReference</a>

---

##### `DiskSpec`<sup>Required</sup> <a name="DiskSpec" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.diskSpec"></a>

```csharp
public VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference DiskSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference">VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpecOutputReference</a>

---

##### `LustreMounts`<sup>Required</sup> <a name="LustreMounts" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.lustreMounts"></a>

```csharp
public VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList LustreMounts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList">VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMountsList</a>

---

##### `MachineSpec`<sup>Required</sup> <a name="MachineSpec" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.machineSpec"></a>

```csharp
public VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference MachineSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference">VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpecOutputReference</a>

---

##### `NfsMounts`<sup>Required</sup> <a name="NfsMounts" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.nfsMounts"></a>

```csharp
public VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList NfsMounts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList">VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMountsList</a>

---

##### `PythonPackageSpec`<sup>Required</sup> <a name="PythonPackageSpec" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.pythonPackageSpec"></a>

```csharp
public VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference PythonPackageSpec { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference">VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference</a>

---

##### `ContainerSpecInput`<sup>Optional</sup> <a name="ContainerSpecInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.containerSpecInput"></a>

```csharp
public VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec ContainerSpecInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec">VertexAiCustomJobJobSpecWorkerPoolSpecsContainerSpec</a>

---

##### `DiskSpecInput`<sup>Optional</sup> <a name="DiskSpecInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.diskSpecInput"></a>

```csharp
public VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec DiskSpecInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec">VertexAiCustomJobJobSpecWorkerPoolSpecsDiskSpec</a>

---

##### `LustreMountsInput`<sup>Optional</sup> <a name="LustreMountsInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.lustreMountsInput"></a>

```csharp
public IResolvable|VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts[] LustreMountsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts">VertexAiCustomJobJobSpecWorkerPoolSpecsLustreMounts</a>[]

---

##### `MachineSpecInput`<sup>Optional</sup> <a name="MachineSpecInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.machineSpecInput"></a>

```csharp
public VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec MachineSpecInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec">VertexAiCustomJobJobSpecWorkerPoolSpecsMachineSpec</a>

---

##### `NfsMountsInput`<sup>Optional</sup> <a name="NfsMountsInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.nfsMountsInput"></a>

```csharp
public IResolvable|VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts[] NfsMountsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts">VertexAiCustomJobJobSpecWorkerPoolSpecsNfsMounts</a>[]

---

##### `PythonPackageSpecInput`<sup>Optional</sup> <a name="PythonPackageSpecInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.pythonPackageSpecInput"></a>

```csharp
public VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec PythonPackageSpecInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec">VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec</a>

---

##### `ReplicaCountInput`<sup>Optional</sup> <a name="ReplicaCountInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.replicaCountInput"></a>

```csharp
public double ReplicaCountInput { get; }
```

- *Type:* double

---

##### `ReplicaCount`<sup>Required</sup> <a name="ReplicaCount" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.replicaCount"></a>

```csharp
public double ReplicaCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|VertexAiCustomJobJobSpecWorkerPoolSpecs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecs">VertexAiCustomJobJobSpecWorkerPoolSpecs</a>

---


### VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList <a name="VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.get"></a>

```csharp
private VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv">VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList.property.internalValue"></a>

```csharp
public IResolvable|VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv">VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv</a>[]

---


### VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference <a name="VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv">VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvOutputReference.property.internalValue"></a>

```csharp
public IResolvable|VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv">VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv</a>

---


### VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference <a name="VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.putEnv">PutEnv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.resetArgs">ResetArgs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.resetEnv">ResetEnv</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnv` <a name="PutEnv" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.putEnv"></a>

```csharp
private void PutEnv(IResolvable|VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.putEnv.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv">VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv</a>[]

---

##### `ResetArgs` <a name="ResetArgs" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.resetArgs"></a>

```csharp
private void ResetArgs()
```

##### `ResetEnv` <a name="ResetEnv" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.resetEnv"></a>

```csharp
private void ResetEnv()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.env">Env</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList">VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.argsInput">ArgsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.envInput">EnvInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv">VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.executorImageUriInput">ExecutorImageUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.packageUrisInput">PackageUrisInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.pythonModuleInput">PythonModuleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.args">Args</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.executorImageUri">ExecutorImageUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.packageUris">PackageUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.pythonModule">PythonModule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec">VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Env`<sup>Required</sup> <a name="Env" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.env"></a>

```csharp
public VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList Env { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList">VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnvList</a>

---

##### `ArgsInput`<sup>Optional</sup> <a name="ArgsInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.argsInput"></a>

```csharp
public string[] ArgsInput { get; }
```

- *Type:* string[]

---

##### `EnvInput`<sup>Optional</sup> <a name="EnvInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.envInput"></a>

```csharp
public IResolvable|VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv[] EnvInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv">VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecEnv</a>[]

---

##### `ExecutorImageUriInput`<sup>Optional</sup> <a name="ExecutorImageUriInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.executorImageUriInput"></a>

```csharp
public string ExecutorImageUriInput { get; }
```

- *Type:* string

---

##### `PackageUrisInput`<sup>Optional</sup> <a name="PackageUrisInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.packageUrisInput"></a>

```csharp
public string[] PackageUrisInput { get; }
```

- *Type:* string[]

---

##### `PythonModuleInput`<sup>Optional</sup> <a name="PythonModuleInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.pythonModuleInput"></a>

```csharp
public string PythonModuleInput { get; }
```

- *Type:* string

---

##### `Args`<sup>Required</sup> <a name="Args" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.args"></a>

```csharp
public string[] Args { get; }
```

- *Type:* string[]

---

##### `ExecutorImageUri`<sup>Required</sup> <a name="ExecutorImageUri" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.executorImageUri"></a>

```csharp
public string ExecutorImageUri { get; }
```

- *Type:* string

---

##### `PackageUris`<sup>Required</sup> <a name="PackageUris" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.packageUris"></a>

```csharp
public string[] PackageUris { get; }
```

- *Type:* string[]

---

##### `PythonModule`<sup>Required</sup> <a name="PythonModule" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.pythonModule"></a>

```csharp
public string PythonModule { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpecOutputReference.property.internalValue"></a>

```csharp
public VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec">VertexAiCustomJobJobSpecWorkerPoolSpecsPythonPackageSpec</a>

---


### VertexAiCustomJobTimeoutsOutputReference <a name="VertexAiCustomJobTimeoutsOutputReference" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new VertexAiCustomJobTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeouts">VertexAiCustomJobTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|VertexAiCustomJobTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiCustomJob.VertexAiCustomJobTimeouts">VertexAiCustomJobTimeouts</a>

---



