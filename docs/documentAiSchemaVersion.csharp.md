# `documentAiSchemaVersion` Submodule <a name="`documentAiSchemaVersion` Submodule" id="@cdktn/provider-google.documentAiSchemaVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DocumentAiSchemaVersion <a name="DocumentAiSchemaVersion" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version google_document_ai_schema_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DocumentAiSchemaVersion(Construct Scope, string Id, DocumentAiSchemaVersionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig">DocumentAiSchemaVersionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig">DocumentAiSchemaVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.putSchema">PutSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSchema` <a name="PutSchema" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.putSchema"></a>

```csharp
private void PutSchema(DocumentAiSchemaVersionSchema Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.putSchema.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema">DocumentAiSchemaVersionSchema</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.putTimeouts"></a>

```csharp
private void PutTimeouts(DocumentAiSchemaVersionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeouts">DocumentAiSchemaVersionTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DocumentAiSchemaVersion resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DocumentAiSchemaVersion.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DocumentAiSchemaVersion.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DocumentAiSchemaVersion.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DocumentAiSchemaVersion.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DocumentAiSchemaVersion resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DocumentAiSchemaVersion to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DocumentAiSchemaVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DocumentAiSchemaVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.schema">Schema</a></code> | <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference">DocumentAiSchemaVersionSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference">DocumentAiSchemaVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.schemaIdInput">SchemaIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.schemaInput">SchemaInput</a></code> | <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema">DocumentAiSchemaVersionSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeouts">DocumentAiSchemaVersionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.schemaId">SchemaId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.schema"></a>

```csharp
public DocumentAiSchemaVersionSchemaOutputReference Schema { get; }
```

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference">DocumentAiSchemaVersionSchemaOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.timeouts"></a>

```csharp
public DocumentAiSchemaVersionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference">DocumentAiSchemaVersionTimeoutsOutputReference</a>

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `SchemaIdInput`<sup>Optional</sup> <a name="SchemaIdInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.schemaIdInput"></a>

```csharp
public string SchemaIdInput { get; }
```

- *Type:* string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.schemaInput"></a>

```csharp
public DocumentAiSchemaVersionSchema SchemaInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema">DocumentAiSchemaVersionSchema</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.timeoutsInput"></a>

```csharp
public IResolvable|DocumentAiSchemaVersionTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeouts">DocumentAiSchemaVersionTimeouts</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `SchemaId`<sup>Required</sup> <a name="SchemaId" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.schemaId"></a>

```csharp
public string SchemaId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersion.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DocumentAiSchemaVersionConfig <a name="DocumentAiSchemaVersionConfig" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DocumentAiSchemaVersionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DisplayName,
    string Location,
    DocumentAiSchemaVersionSchema Schema,
    string SchemaId,
    string DeletionPolicy = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    DocumentAiSchemaVersionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The user-defined name of the SchemaVersion. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.location">Location</a></code> | <code>string</code> | The location of the resource. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.schema">Schema</a></code> | <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema">DocumentAiSchemaVersionSchema</a></code> | schema block. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.schemaId">SchemaId</a></code> | <code>string</code> | The schema id that this schema version belongs to. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#id DocumentAiSchemaVersion#id}. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The Google Cloud labels for the SchemaVersion. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#project DocumentAiSchemaVersion#project}. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeouts">DocumentAiSchemaVersionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The user-defined name of the SchemaVersion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#display_name DocumentAiSchemaVersion#display_name}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#location DocumentAiSchemaVersion#location}

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.schema"></a>

```csharp
public DocumentAiSchemaVersionSchema Schema { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema">DocumentAiSchemaVersionSchema</a>

schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#schema DocumentAiSchemaVersion#schema}

---

##### `SchemaId`<sup>Required</sup> <a name="SchemaId" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.schemaId"></a>

```csharp
public string SchemaId { get; set; }
```

- *Type:* string

The schema id that this schema version belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#schema_id DocumentAiSchemaVersion#schema_id}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#deletion_policy DocumentAiSchemaVersion#deletion_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#id DocumentAiSchemaVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The Google Cloud labels for the SchemaVersion.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#labels DocumentAiSchemaVersion#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#project DocumentAiSchemaVersion#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionConfig.property.timeouts"></a>

```csharp
public DocumentAiSchemaVersionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeouts">DocumentAiSchemaVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#timeouts DocumentAiSchemaVersion#timeouts}

---

### DocumentAiSchemaVersionSchema <a name="DocumentAiSchemaVersionSchema" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DocumentAiSchemaVersionSchema {
    string Description = null,
    string DisplayName = null,
    string DocumentPrompt = null,
    IResolvable|DocumentAiSchemaVersionSchemaEntityTypes[] EntityTypes = null,
    DocumentAiSchemaVersionSchemaMetadata Metadata = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema.property.description">Description</a></code> | <code>string</code> | Description of the schema. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema.property.displayName">DisplayName</a></code> | <code>string</code> | Display name to show users. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema.property.documentPrompt">DocumentPrompt</a></code> | <code>string</code> | Document-level prompt provided by the user. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema.property.entityTypes">EntityTypes</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes">DocumentAiSchemaVersionSchemaEntityTypes</a>[]</code> | entity_types block. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema.property.metadata">Metadata</a></code> | <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadata">DocumentAiSchemaVersionSchemaMetadata</a></code> | metadata block. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#description DocumentAiSchemaVersion#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Display name to show users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#display_name DocumentAiSchemaVersion#display_name}

---

##### `DocumentPrompt`<sup>Optional</sup> <a name="DocumentPrompt" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema.property.documentPrompt"></a>

```csharp
public string DocumentPrompt { get; set; }
```

- *Type:* string

Document-level prompt provided by the user.

This custom text is injected into the AI model's prompt to provide extra, document-wide guidance for processing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#document_prompt DocumentAiSchemaVersion#document_prompt}

---

##### `EntityTypes`<sup>Optional</sup> <a name="EntityTypes" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema.property.entityTypes"></a>

```csharp
public IResolvable|DocumentAiSchemaVersionSchemaEntityTypes[] EntityTypes { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes">DocumentAiSchemaVersionSchemaEntityTypes</a>[]

entity_types block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#entity_types DocumentAiSchemaVersion#entity_types}

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema.property.metadata"></a>

```csharp
public DocumentAiSchemaVersionSchemaMetadata Metadata { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadata">DocumentAiSchemaVersionSchemaMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#metadata DocumentAiSchemaVersion#metadata}

---

### DocumentAiSchemaVersionSchemaEntityTypes <a name="DocumentAiSchemaVersionSchemaEntityTypes" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DocumentAiSchemaVersionSchemaEntityTypes {
    string Name,
    string[] BaseTypes = null,
    string DisplayName = null,
    DocumentAiSchemaVersionSchemaEntityTypesEnumValues EnumValues = null,
    IResolvable|DocumentAiSchemaVersionSchemaEntityTypesProperties[] Properties = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes.property.name">Name</a></code> | <code>string</code> | Name of the type. It must be unique within the schema file and cannot be a "Common Type". |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes.property.baseTypes">BaseTypes</a></code> | <code>string[]</code> | The entity type that this type is derived from. For now, one and only one should be set. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes.property.displayName">DisplayName</a></code> | <code>string</code> | User defined name for the type. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes.property.enumValues">EnumValues</a></code> | <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValues">DocumentAiSchemaVersionSchemaEntityTypesEnumValues</a></code> | enum_values block. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes.property.properties">Properties</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties">DocumentAiSchemaVersionSchemaEntityTypesProperties</a>[]</code> | properties block. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the type. It must be unique within the schema file and cannot be a "Common Type".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#name DocumentAiSchemaVersion#name}

---

##### `BaseTypes`<sup>Optional</sup> <a name="BaseTypes" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes.property.baseTypes"></a>

```csharp
public string[] BaseTypes { get; set; }
```

- *Type:* string[]

The entity type that this type is derived from. For now, one and only one should be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#base_types DocumentAiSchemaVersion#base_types}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

User defined name for the type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#display_name DocumentAiSchemaVersion#display_name}

---

##### `EnumValues`<sup>Optional</sup> <a name="EnumValues" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes.property.enumValues"></a>

```csharp
public DocumentAiSchemaVersionSchemaEntityTypesEnumValues EnumValues { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValues">DocumentAiSchemaVersionSchemaEntityTypesEnumValues</a>

enum_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#enum_values DocumentAiSchemaVersion#enum_values}

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes.property.properties"></a>

```csharp
public IResolvable|DocumentAiSchemaVersionSchemaEntityTypesProperties[] Properties { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties">DocumentAiSchemaVersionSchemaEntityTypesProperties</a>[]

properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#properties DocumentAiSchemaVersion#properties}

---

### DocumentAiSchemaVersionSchemaEntityTypesEnumValues <a name="DocumentAiSchemaVersionSchemaEntityTypesEnumValues" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValues.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DocumentAiSchemaVersionSchemaEntityTypesEnumValues {
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValues.property.values">Values</a></code> | <code>string[]</code> | The individual values that this enum values type can include. |

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValues.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

The individual values that this enum values type can include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#values DocumentAiSchemaVersion#values}

---

### DocumentAiSchemaVersionSchemaEntityTypesProperties <a name="DocumentAiSchemaVersionSchemaEntityTypesProperties" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DocumentAiSchemaVersionSchemaEntityTypesProperties {
    string Name,
    string ValueType,
    string DisplayName = null,
    string Method = null,
    string OccurrenceType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties.property.name">Name</a></code> | <code>string</code> | The name of the property. Follows the same guidelines as the EntityType name. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties.property.valueType">ValueType</a></code> | <code>string</code> | A reference to the value type of the property. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties.property.displayName">DisplayName</a></code> | <code>string</code> | User defined name for the property. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties.property.method">Method</a></code> | <code>string</code> | Specifies how the entity's value is obtained. Possible values: ["EXTRACT", "DERIVE", "RELAXED_EXTRACT"]. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties.property.occurrenceType">OccurrenceType</a></code> | <code>string</code> | Occurrence type limits the number of instances an entity type appears in the document. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the property. Follows the same guidelines as the EntityType name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#name DocumentAiSchemaVersion#name}

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties.property.valueType"></a>

```csharp
public string ValueType { get; set; }
```

- *Type:* string

A reference to the value type of the property.

This type is subject to the same conventions as the 'Entity.base_types' field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#value_type DocumentAiSchemaVersion#value_type}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

User defined name for the property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#display_name DocumentAiSchemaVersion#display_name}

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties.property.method"></a>

```csharp
public string Method { get; set; }
```

- *Type:* string

Specifies how the entity's value is obtained. Possible values: ["EXTRACT", "DERIVE", "RELAXED_EXTRACT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#method DocumentAiSchemaVersion#method}

---

##### `OccurrenceType`<sup>Optional</sup> <a name="OccurrenceType" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties.property.occurrenceType"></a>

```csharp
public string OccurrenceType { get; set; }
```

- *Type:* string

Occurrence type limits the number of instances an entity type appears in the document.

Possible values: ["OPTIONAL_ONCE", "OPTIONAL_MULTIPLE", "REQUIRED_ONCE", "REQUIRED_MULTIPLE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#occurrence_type DocumentAiSchemaVersion#occurrence_type}

---

### DocumentAiSchemaVersionSchemaMetadata <a name="DocumentAiSchemaVersionSchemaMetadata" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadata.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DocumentAiSchemaVersionSchemaMetadata {
    bool|IResolvable DocumentAllowMultipleLabels = null,
    bool|IResolvable DocumentSplitter = null,
    bool|IResolvable PrefixedNamingOnProperties = null,
    bool|IResolvable SkipNamingValidation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadata.property.documentAllowMultipleLabels">DocumentAllowMultipleLabels</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, on a given page, there can be multiple 'document' annotations covering it. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadata.property.documentSplitter">DocumentSplitter</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If true, a 'document' entity type can be applied to subdocument (splitting). |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadata.property.prefixedNamingOnProperties">PrefixedNamingOnProperties</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If set, all the nested entities must be prefixed with the parents. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadata.property.skipNamingValidation">SkipNamingValidation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If set, this will skip the naming format validation in the schema. |

---

##### `DocumentAllowMultipleLabels`<sup>Optional</sup> <a name="DocumentAllowMultipleLabels" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadata.property.documentAllowMultipleLabels"></a>

```csharp
public bool|IResolvable DocumentAllowMultipleLabels { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, on a given page, there can be multiple 'document' annotations covering it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#document_allow_multiple_labels DocumentAiSchemaVersion#document_allow_multiple_labels}

---

##### `DocumentSplitter`<sup>Optional</sup> <a name="DocumentSplitter" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadata.property.documentSplitter"></a>

```csharp
public bool|IResolvable DocumentSplitter { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If true, a 'document' entity type can be applied to subdocument (splitting).

Otherwise, it can only be applied to the entire document (classification).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#document_splitter DocumentAiSchemaVersion#document_splitter}

---

##### `PrefixedNamingOnProperties`<sup>Optional</sup> <a name="PrefixedNamingOnProperties" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadata.property.prefixedNamingOnProperties"></a>

```csharp
public bool|IResolvable PrefixedNamingOnProperties { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If set, all the nested entities must be prefixed with the parents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#prefixed_naming_on_properties DocumentAiSchemaVersion#prefixed_naming_on_properties}

---

##### `SkipNamingValidation`<sup>Optional</sup> <a name="SkipNamingValidation" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadata.property.skipNamingValidation"></a>

```csharp
public bool|IResolvable SkipNamingValidation { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If set, this will skip the naming format validation in the schema.

So the string values in 'DocumentSchema.EntityType.name' and 'DocumentSchema.EntityType.Property.name' will not be checked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#skip_naming_validation DocumentAiSchemaVersion#skip_naming_validation}

---

### DocumentAiSchemaVersionTimeouts <a name="DocumentAiSchemaVersionTimeouts" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DocumentAiSchemaVersionTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#create DocumentAiSchemaVersion#create}. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#delete DocumentAiSchemaVersion#delete}. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#update DocumentAiSchemaVersion#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#create DocumentAiSchemaVersion#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#delete DocumentAiSchemaVersion#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.9.0/docs/resources/document_ai_schema_version#update DocumentAiSchemaVersion#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference <a name="DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValues">DocumentAiSchemaVersionSchemaEntityTypesEnumValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference.property.internalValue"></a>

```csharp
public DocumentAiSchemaVersionSchemaEntityTypesEnumValues InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValues">DocumentAiSchemaVersionSchemaEntityTypesEnumValues</a>

---


### DocumentAiSchemaVersionSchemaEntityTypesList <a name="DocumentAiSchemaVersionSchemaEntityTypesList" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DocumentAiSchemaVersionSchemaEntityTypesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.get"></a>

```csharp
private DocumentAiSchemaVersionSchemaEntityTypesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes">DocumentAiSchemaVersionSchemaEntityTypes</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList.property.internalValue"></a>

```csharp
public IResolvable|DocumentAiSchemaVersionSchemaEntityTypes[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes">DocumentAiSchemaVersionSchemaEntityTypes</a>[]

---


### DocumentAiSchemaVersionSchemaEntityTypesOutputReference <a name="DocumentAiSchemaVersionSchemaEntityTypesOutputReference" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DocumentAiSchemaVersionSchemaEntityTypesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.putEnumValues">PutEnumValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.putProperties">PutProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetBaseTypes">ResetBaseTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetEnumValues">ResetEnumValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEnumValues` <a name="PutEnumValues" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.putEnumValues"></a>

```csharp
private void PutEnumValues(DocumentAiSchemaVersionSchemaEntityTypesEnumValues Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.putEnumValues.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValues">DocumentAiSchemaVersionSchemaEntityTypesEnumValues</a>

---

##### `PutProperties` <a name="PutProperties" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.putProperties"></a>

```csharp
private void PutProperties(IResolvable|DocumentAiSchemaVersionSchemaEntityTypesProperties[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.putProperties.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties">DocumentAiSchemaVersionSchemaEntityTypesProperties</a>[]

---

##### `ResetBaseTypes` <a name="ResetBaseTypes" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetBaseTypes"></a>

```csharp
private void ResetBaseTypes()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetEnumValues` <a name="ResetEnumValues" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetEnumValues"></a>

```csharp
private void ResetEnumValues()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.resetProperties"></a>

```csharp
private void ResetProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.enumValues">EnumValues</a></code> | <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference">DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.properties">Properties</a></code> | <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList">DocumentAiSchemaVersionSchemaEntityTypesPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.baseTypesInput">BaseTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.enumValuesInput">EnumValuesInput</a></code> | <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValues">DocumentAiSchemaVersionSchemaEntityTypesEnumValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties">DocumentAiSchemaVersionSchemaEntityTypesProperties</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.baseTypes">BaseTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes">DocumentAiSchemaVersionSchemaEntityTypes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnumValues`<sup>Required</sup> <a name="EnumValues" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.enumValues"></a>

```csharp
public DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference EnumValues { get; }
```

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference">DocumentAiSchemaVersionSchemaEntityTypesEnumValuesOutputReference</a>

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.properties"></a>

```csharp
public DocumentAiSchemaVersionSchemaEntityTypesPropertiesList Properties { get; }
```

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList">DocumentAiSchemaVersionSchemaEntityTypesPropertiesList</a>

---

##### `BaseTypesInput`<sup>Optional</sup> <a name="BaseTypesInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.baseTypesInput"></a>

```csharp
public string[] BaseTypesInput { get; }
```

- *Type:* string[]

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EnumValuesInput`<sup>Optional</sup> <a name="EnumValuesInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.enumValuesInput"></a>

```csharp
public DocumentAiSchemaVersionSchemaEntityTypesEnumValues EnumValuesInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesEnumValues">DocumentAiSchemaVersionSchemaEntityTypesEnumValues</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.propertiesInput"></a>

```csharp
public IResolvable|DocumentAiSchemaVersionSchemaEntityTypesProperties[] PropertiesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties">DocumentAiSchemaVersionSchemaEntityTypesProperties</a>[]

---

##### `BaseTypes`<sup>Required</sup> <a name="BaseTypes" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.baseTypes"></a>

```csharp
public string[] BaseTypes { get; }
```

- *Type:* string[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DocumentAiSchemaVersionSchemaEntityTypes InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes">DocumentAiSchemaVersionSchemaEntityTypes</a>

---


### DocumentAiSchemaVersionSchemaEntityTypesPropertiesList <a name="DocumentAiSchemaVersionSchemaEntityTypesPropertiesList" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DocumentAiSchemaVersionSchemaEntityTypesPropertiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.get"></a>

```csharp
private DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties">DocumentAiSchemaVersionSchemaEntityTypesProperties</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesList.property.internalValue"></a>

```csharp
public IResolvable|DocumentAiSchemaVersionSchemaEntityTypesProperties[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties">DocumentAiSchemaVersionSchemaEntityTypesProperties</a>[]

---


### DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference <a name="DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resetMethod">ResetMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resetOccurrenceType">ResetOccurrenceType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetMethod` <a name="ResetMethod" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resetMethod"></a>

```csharp
private void ResetMethod()
```

##### `ResetOccurrenceType` <a name="ResetOccurrenceType" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.resetOccurrenceType"></a>

```csharp
private void ResetOccurrenceType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.methodInput">MethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.occurrenceTypeInput">OccurrenceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.valueTypeInput">ValueTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.method">Method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.occurrenceType">OccurrenceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.valueType">ValueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties">DocumentAiSchemaVersionSchemaEntityTypesProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.methodInput"></a>

```csharp
public string MethodInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OccurrenceTypeInput`<sup>Optional</sup> <a name="OccurrenceTypeInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.occurrenceTypeInput"></a>

```csharp
public string OccurrenceTypeInput { get; }
```

- *Type:* string

---

##### `ValueTypeInput`<sup>Optional</sup> <a name="ValueTypeInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.valueTypeInput"></a>

```csharp
public string ValueTypeInput { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.method"></a>

```csharp
public string Method { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OccurrenceType`<sup>Required</sup> <a name="OccurrenceType" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.occurrenceType"></a>

```csharp
public string OccurrenceType { get; }
```

- *Type:* string

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.valueType"></a>

```csharp
public string ValueType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesPropertiesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DocumentAiSchemaVersionSchemaEntityTypesProperties InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesProperties">DocumentAiSchemaVersionSchemaEntityTypesProperties</a>

---


### DocumentAiSchemaVersionSchemaMetadataOutputReference <a name="DocumentAiSchemaVersionSchemaMetadataOutputReference" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DocumentAiSchemaVersionSchemaMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.resetDocumentAllowMultipleLabels">ResetDocumentAllowMultipleLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.resetDocumentSplitter">ResetDocumentSplitter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.resetPrefixedNamingOnProperties">ResetPrefixedNamingOnProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.resetSkipNamingValidation">ResetSkipNamingValidation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDocumentAllowMultipleLabels` <a name="ResetDocumentAllowMultipleLabels" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.resetDocumentAllowMultipleLabels"></a>

```csharp
private void ResetDocumentAllowMultipleLabels()
```

##### `ResetDocumentSplitter` <a name="ResetDocumentSplitter" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.resetDocumentSplitter"></a>

```csharp
private void ResetDocumentSplitter()
```

##### `ResetPrefixedNamingOnProperties` <a name="ResetPrefixedNamingOnProperties" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.resetPrefixedNamingOnProperties"></a>

```csharp
private void ResetPrefixedNamingOnProperties()
```

##### `ResetSkipNamingValidation` <a name="ResetSkipNamingValidation" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.resetSkipNamingValidation"></a>

```csharp
private void ResetSkipNamingValidation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentAllowMultipleLabelsInput">DocumentAllowMultipleLabelsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentSplitterInput">DocumentSplitterInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.prefixedNamingOnPropertiesInput">PrefixedNamingOnPropertiesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.skipNamingValidationInput">SkipNamingValidationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentAllowMultipleLabels">DocumentAllowMultipleLabels</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentSplitter">DocumentSplitter</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.prefixedNamingOnProperties">PrefixedNamingOnProperties</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.skipNamingValidation">SkipNamingValidation</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadata">DocumentAiSchemaVersionSchemaMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DocumentAllowMultipleLabelsInput`<sup>Optional</sup> <a name="DocumentAllowMultipleLabelsInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentAllowMultipleLabelsInput"></a>

```csharp
public bool|IResolvable DocumentAllowMultipleLabelsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DocumentSplitterInput`<sup>Optional</sup> <a name="DocumentSplitterInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentSplitterInput"></a>

```csharp
public bool|IResolvable DocumentSplitterInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PrefixedNamingOnPropertiesInput`<sup>Optional</sup> <a name="PrefixedNamingOnPropertiesInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.prefixedNamingOnPropertiesInput"></a>

```csharp
public bool|IResolvable PrefixedNamingOnPropertiesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SkipNamingValidationInput`<sup>Optional</sup> <a name="SkipNamingValidationInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.skipNamingValidationInput"></a>

```csharp
public bool|IResolvable SkipNamingValidationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DocumentAllowMultipleLabels`<sup>Required</sup> <a name="DocumentAllowMultipleLabels" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentAllowMultipleLabels"></a>

```csharp
public bool|IResolvable DocumentAllowMultipleLabels { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DocumentSplitter`<sup>Required</sup> <a name="DocumentSplitter" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.documentSplitter"></a>

```csharp
public bool|IResolvable DocumentSplitter { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PrefixedNamingOnProperties`<sup>Required</sup> <a name="PrefixedNamingOnProperties" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.prefixedNamingOnProperties"></a>

```csharp
public bool|IResolvable PrefixedNamingOnProperties { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SkipNamingValidation`<sup>Required</sup> <a name="SkipNamingValidation" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.skipNamingValidation"></a>

```csharp
public bool|IResolvable SkipNamingValidation { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference.property.internalValue"></a>

```csharp
public DocumentAiSchemaVersionSchemaMetadata InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadata">DocumentAiSchemaVersionSchemaMetadata</a>

---


### DocumentAiSchemaVersionSchemaOutputReference <a name="DocumentAiSchemaVersionSchemaOutputReference" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DocumentAiSchemaVersionSchemaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.putEntityTypes">PutEntityTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.resetDocumentPrompt">ResetDocumentPrompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.resetEntityTypes">ResetEntityTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.resetMetadata">ResetMetadata</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEntityTypes` <a name="PutEntityTypes" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.putEntityTypes"></a>

```csharp
private void PutEntityTypes(IResolvable|DocumentAiSchemaVersionSchemaEntityTypes[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.putEntityTypes.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes">DocumentAiSchemaVersionSchemaEntityTypes</a>[]

---

##### `PutMetadata` <a name="PutMetadata" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.putMetadata"></a>

```csharp
private void PutMetadata(DocumentAiSchemaVersionSchemaMetadata Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadata">DocumentAiSchemaVersionSchemaMetadata</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetDocumentPrompt` <a name="ResetDocumentPrompt" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.resetDocumentPrompt"></a>

```csharp
private void ResetDocumentPrompt()
```

##### `ResetEntityTypes` <a name="ResetEntityTypes" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.resetEntityTypes"></a>

```csharp
private void ResetEntityTypes()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.resetMetadata"></a>

```csharp
private void ResetMetadata()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.entityTypes">EntityTypes</a></code> | <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList">DocumentAiSchemaVersionSchemaEntityTypesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.metadata">Metadata</a></code> | <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference">DocumentAiSchemaVersionSchemaMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.documentPromptInput">DocumentPromptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.entityTypesInput">EntityTypesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes">DocumentAiSchemaVersionSchemaEntityTypes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.metadataInput">MetadataInput</a></code> | <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadata">DocumentAiSchemaVersionSchemaMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.documentPrompt">DocumentPrompt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema">DocumentAiSchemaVersionSchema</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EntityTypes`<sup>Required</sup> <a name="EntityTypes" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.entityTypes"></a>

```csharp
public DocumentAiSchemaVersionSchemaEntityTypesList EntityTypes { get; }
```

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypesList">DocumentAiSchemaVersionSchemaEntityTypesList</a>

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.metadata"></a>

```csharp
public DocumentAiSchemaVersionSchemaMetadataOutputReference Metadata { get; }
```

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadataOutputReference">DocumentAiSchemaVersionSchemaMetadataOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `DocumentPromptInput`<sup>Optional</sup> <a name="DocumentPromptInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.documentPromptInput"></a>

```csharp
public string DocumentPromptInput { get; }
```

- *Type:* string

---

##### `EntityTypesInput`<sup>Optional</sup> <a name="EntityTypesInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.entityTypesInput"></a>

```csharp
public IResolvable|DocumentAiSchemaVersionSchemaEntityTypes[] EntityTypesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaEntityTypes">DocumentAiSchemaVersionSchemaEntityTypes</a>[]

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.metadataInput"></a>

```csharp
public DocumentAiSchemaVersionSchemaMetadata MetadataInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaMetadata">DocumentAiSchemaVersionSchemaMetadata</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `DocumentPrompt`<sup>Required</sup> <a name="DocumentPrompt" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.documentPrompt"></a>

```csharp
public string DocumentPrompt { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchemaOutputReference.property.internalValue"></a>

```csharp
public DocumentAiSchemaVersionSchema InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionSchema">DocumentAiSchemaVersionSchema</a>

---


### DocumentAiSchemaVersionTimeoutsOutputReference <a name="DocumentAiSchemaVersionTimeoutsOutputReference" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DocumentAiSchemaVersionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeouts">DocumentAiSchemaVersionTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DocumentAiSchemaVersionTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.documentAiSchemaVersion.DocumentAiSchemaVersionTimeouts">DocumentAiSchemaVersionTimeouts</a>

---



