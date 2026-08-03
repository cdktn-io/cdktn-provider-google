# `dataplexMetadataFeed` Submodule <a name="`dataplexMetadataFeed` Submodule" id="@cdktn/provider-google.dataplexMetadataFeed"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataplexMetadataFeed <a name="DataplexMetadataFeed" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_metadata_feed google_dataplex_metadata_feed}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataplexMetadataFeed(Construct Scope, string Id, DataplexMetadataFeedConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig">DataplexMetadataFeedConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig">DataplexMetadataFeedConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.putFilters">PutFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.putScope">PutScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetFilters">ResetFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetPubsubTopic">ResetPubsubTopic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFilters` <a name="PutFilters" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.putFilters"></a>

```csharp
private void PutFilters(DataplexMetadataFeedFilters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.putFilters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters">DataplexMetadataFeedFilters</a>

---

##### `PutScope` <a name="PutScope" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.putScope"></a>

```csharp
private void PutScope(DataplexMetadataFeedScope Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.putScope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope">DataplexMetadataFeedScope</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.putTimeouts"></a>

```csharp
private void PutTimeouts(DataplexMetadataFeedTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts">DataplexMetadataFeedTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetFilters` <a name="ResetFilters" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetFilters"></a>

```csharp
private void ResetFilters()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetPubsubTopic` <a name="ResetPubsubTopic" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetPubsubTopic"></a>

```csharp
private void ResetPubsubTopic()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataplexMetadataFeed resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataplexMetadataFeed.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataplexMetadataFeed.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataplexMetadataFeed.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

DataplexMetadataFeed.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataplexMetadataFeed resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataplexMetadataFeed to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataplexMetadataFeed that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_metadata_feed#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataplexMetadataFeed to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.filters">Filters</a></code> | <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference">DataplexMetadataFeedFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.scope">Scope</a></code> | <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference">DataplexMetadataFeedScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference">DataplexMetadataFeedTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.filtersInput">FiltersInput</a></code> | <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters">DataplexMetadataFeedFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.metadataFeedIdInput">MetadataFeedIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.pubsubTopicInput">PubsubTopicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.scopeInput">ScopeInput</a></code> | <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope">DataplexMetadataFeedScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts">DataplexMetadataFeedTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.metadataFeedId">MetadataFeedId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.pubsubTopic">PubsubTopic</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.filters"></a>

```csharp
public DataplexMetadataFeedFiltersOutputReference Filters { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference">DataplexMetadataFeedFiltersOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.scope"></a>

```csharp
public DataplexMetadataFeedScopeOutputReference Scope { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference">DataplexMetadataFeedScopeOutputReference</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.timeouts"></a>

```csharp
public DataplexMetadataFeedTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference">DataplexMetadataFeedTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `FiltersInput`<sup>Optional</sup> <a name="FiltersInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.filtersInput"></a>

```csharp
public DataplexMetadataFeedFilters FiltersInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters">DataplexMetadataFeedFilters</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MetadataFeedIdInput`<sup>Optional</sup> <a name="MetadataFeedIdInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.metadataFeedIdInput"></a>

```csharp
public string MetadataFeedIdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `PubsubTopicInput`<sup>Optional</sup> <a name="PubsubTopicInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.pubsubTopicInput"></a>

```csharp
public string PubsubTopicInput { get; }
```

- *Type:* string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.scopeInput"></a>

```csharp
public DataplexMetadataFeedScope ScopeInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope">DataplexMetadataFeedScope</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.timeoutsInput"></a>

```csharp
public IResolvable|DataplexMetadataFeedTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts">DataplexMetadataFeedTimeouts</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `MetadataFeedId`<sup>Required</sup> <a name="MetadataFeedId" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.metadataFeedId"></a>

```csharp
public string MetadataFeedId { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `PubsubTopic`<sup>Required</sup> <a name="PubsubTopic" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.pubsubTopic"></a>

```csharp
public string PubsubTopic { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeed.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataplexMetadataFeedConfig <a name="DataplexMetadataFeedConfig" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataplexMetadataFeedConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string MetadataFeedId,
    DataplexMetadataFeedScope Scope,
    string DeletionPolicy = null,
    DataplexMetadataFeedFilters Filters = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    string PubsubTopic = null,
    DataplexMetadataFeedTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.metadataFeedId">MetadataFeedId</a></code> | <code>string</code> | The metadata job ID. If not provided, a unique ID is generated with the prefix metadata-job-. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.scope">Scope</a></code> | <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope">DataplexMetadataFeedScope</a></code> | scope block. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.filters">Filters</a></code> | <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters">DataplexMetadataFeedFilters</a></code> | filters block. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_metadata_feed#id DataplexMetadataFeed#id}. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | User-defined labels. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_metadata_feed#project DataplexMetadataFeed#project}. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.pubsubTopic">PubsubTopic</a></code> | <code>string</code> | The pubsub topic that you want the metadata feed messages to publish to. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts">DataplexMetadataFeedTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_metadata_feed#location DataplexMetadataFeed#location}

---

##### `MetadataFeedId`<sup>Required</sup> <a name="MetadataFeedId" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.metadataFeedId"></a>

```csharp
public string MetadataFeedId { get; set; }
```

- *Type:* string

The metadata job ID. If not provided, a unique ID is generated with the prefix metadata-job-.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_metadata_feed#metadata_feed_id DataplexMetadataFeed#metadata_feed_id}

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.scope"></a>

```csharp
public DataplexMetadataFeedScope Scope { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope">DataplexMetadataFeedScope</a>

scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_metadata_feed#scope DataplexMetadataFeed#scope}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_metadata_feed#deletion_policy DataplexMetadataFeed#deletion_policy}

---

##### `Filters`<sup>Optional</sup> <a name="Filters" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.filters"></a>

```csharp
public DataplexMetadataFeedFilters Filters { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters">DataplexMetadataFeedFilters</a>

filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_metadata_feed#filters DataplexMetadataFeed#filters}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_metadata_feed#id DataplexMetadataFeed#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_metadata_feed#labels DataplexMetadataFeed#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_metadata_feed#project DataplexMetadataFeed#project}.

---

##### `PubsubTopic`<sup>Optional</sup> <a name="PubsubTopic" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.pubsubTopic"></a>

```csharp
public string PubsubTopic { get; set; }
```

- *Type:* string

The pubsub topic that you want the metadata feed messages to publish to.

Please grant Dataplex service account the permission to publish messages to the topic. The service account is: service-{PROJECT_NUMBER}@gcp-sa-dataplex.iam.gserviceaccount.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_metadata_feed#pubsub_topic DataplexMetadataFeed#pubsub_topic}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedConfig.property.timeouts"></a>

```csharp
public DataplexMetadataFeedTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts">DataplexMetadataFeedTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_metadata_feed#timeouts DataplexMetadataFeed#timeouts}

---

### DataplexMetadataFeedFilters <a name="DataplexMetadataFeedFilters" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataplexMetadataFeedFilters {
    string[] AspectTypes = null,
    string[] ChangeTypes = null,
    string[] EntryTypes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters.property.aspectTypes">AspectTypes</a></code> | <code>string[]</code> | The aspect types that you want to listen to. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters.property.changeTypes">ChangeTypes</a></code> | <code>string[]</code> | The type of change that you want to listen to. If not specified, all changes are published. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters.property.entryTypes">EntryTypes</a></code> | <code>string[]</code> | The entry types that you want to listen to, specified as relative resource names in the format projects/{project_id_or_number}/locations/{location}/entryTypes/{entry_type_id}. |

---

##### `AspectTypes`<sup>Optional</sup> <a name="AspectTypes" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters.property.aspectTypes"></a>

```csharp
public string[] AspectTypes { get; set; }
```

- *Type:* string[]

The aspect types that you want to listen to.

Depending on how the aspect is attached to the entry, in the format: projects/{project_id_or_number}/locations/{location}/aspectTypes/{aspect_type_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_metadata_feed#aspect_types DataplexMetadataFeed#aspect_types}

---

##### `ChangeTypes`<sup>Optional</sup> <a name="ChangeTypes" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters.property.changeTypes"></a>

```csharp
public string[] ChangeTypes { get; set; }
```

- *Type:* string[]

The type of change that you want to listen to. If not specified, all changes are published.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_metadata_feed#change_types DataplexMetadataFeed#change_types}

---

##### `EntryTypes`<sup>Optional</sup> <a name="EntryTypes" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters.property.entryTypes"></a>

```csharp
public string[] EntryTypes { get; set; }
```

- *Type:* string[]

The entry types that you want to listen to, specified as relative resource names in the format projects/{project_id_or_number}/locations/{location}/entryTypes/{entry_type_id}.

Only entries that belong to the specified entry types are published.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_metadata_feed#entry_types DataplexMetadataFeed#entry_types}

---

### DataplexMetadataFeedScope <a name="DataplexMetadataFeedScope" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataplexMetadataFeedScope {
    string[] EntryGroups = null,
    bool|IResolvable OrganizationLevel = null,
    string[] Projects = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope.property.entryGroups">EntryGroups</a></code> | <code>string[]</code> | The entry groups whose entries you want to listen to. Must be in the format: projects/{project_id_or_number}/locations/{location_id}/entryGroups/{entry_group_id}. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope.property.organizationLevel">OrganizationLevel</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the metadata feed is at the organization-level. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope.property.projects">Projects</a></code> | <code>string[]</code> | The projects whose entries you want to listen to. |

---

##### `EntryGroups`<sup>Optional</sup> <a name="EntryGroups" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope.property.entryGroups"></a>

```csharp
public string[] EntryGroups { get; set; }
```

- *Type:* string[]

The entry groups whose entries you want to listen to. Must be in the format: projects/{project_id_or_number}/locations/{location_id}/entryGroups/{entry_group_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_metadata_feed#entry_groups DataplexMetadataFeed#entry_groups}

---

##### `OrganizationLevel`<sup>Optional</sup> <a name="OrganizationLevel" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope.property.organizationLevel"></a>

```csharp
public bool|IResolvable OrganizationLevel { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the metadata feed is at the organization-level.

If true, all changes happened to the entries in the same organization as the feed are published.
If false, you must specify a list of projects or a list of entry groups whose entries you want to listen to.The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_metadata_feed#organization_level DataplexMetadataFeed#organization_level}

---

##### `Projects`<sup>Optional</sup> <a name="Projects" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope.property.projects"></a>

```csharp
public string[] Projects { get; set; }
```

- *Type:* string[]

The projects whose entries you want to listen to.

Must be in the same organization as the feed. Must be in the format: projects/{project_id_or_number}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_metadata_feed#projects DataplexMetadataFeed#projects}

---

### DataplexMetadataFeedTimeouts <a name="DataplexMetadataFeedTimeouts" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataplexMetadataFeedTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_metadata_feed#create DataplexMetadataFeed#create}. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_metadata_feed#delete DataplexMetadataFeed#delete}. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_metadata_feed#update DataplexMetadataFeed#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_metadata_feed#create DataplexMetadataFeed#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_metadata_feed#delete DataplexMetadataFeed#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/dataplex_metadata_feed#update DataplexMetadataFeed#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataplexMetadataFeedFiltersOutputReference <a name="DataplexMetadataFeedFiltersOutputReference" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataplexMetadataFeedFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.resetAspectTypes">ResetAspectTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.resetChangeTypes">ResetChangeTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.resetEntryTypes">ResetEntryTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAspectTypes` <a name="ResetAspectTypes" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.resetAspectTypes"></a>

```csharp
private void ResetAspectTypes()
```

##### `ResetChangeTypes` <a name="ResetChangeTypes" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.resetChangeTypes"></a>

```csharp
private void ResetChangeTypes()
```

##### `ResetEntryTypes` <a name="ResetEntryTypes" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.resetEntryTypes"></a>

```csharp
private void ResetEntryTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.aspectTypesInput">AspectTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.changeTypesInput">ChangeTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.entryTypesInput">EntryTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.aspectTypes">AspectTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.changeTypes">ChangeTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.entryTypes">EntryTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters">DataplexMetadataFeedFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AspectTypesInput`<sup>Optional</sup> <a name="AspectTypesInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.aspectTypesInput"></a>

```csharp
public string[] AspectTypesInput { get; }
```

- *Type:* string[]

---

##### `ChangeTypesInput`<sup>Optional</sup> <a name="ChangeTypesInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.changeTypesInput"></a>

```csharp
public string[] ChangeTypesInput { get; }
```

- *Type:* string[]

---

##### `EntryTypesInput`<sup>Optional</sup> <a name="EntryTypesInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.entryTypesInput"></a>

```csharp
public string[] EntryTypesInput { get; }
```

- *Type:* string[]

---

##### `AspectTypes`<sup>Required</sup> <a name="AspectTypes" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.aspectTypes"></a>

```csharp
public string[] AspectTypes { get; }
```

- *Type:* string[]

---

##### `ChangeTypes`<sup>Required</sup> <a name="ChangeTypes" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.changeTypes"></a>

```csharp
public string[] ChangeTypes { get; }
```

- *Type:* string[]

---

##### `EntryTypes`<sup>Required</sup> <a name="EntryTypes" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.entryTypes"></a>

```csharp
public string[] EntryTypes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFiltersOutputReference.property.internalValue"></a>

```csharp
public DataplexMetadataFeedFilters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedFilters">DataplexMetadataFeedFilters</a>

---


### DataplexMetadataFeedScopeOutputReference <a name="DataplexMetadataFeedScopeOutputReference" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataplexMetadataFeedScopeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.resetEntryGroups">ResetEntryGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.resetOrganizationLevel">ResetOrganizationLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.resetProjects">ResetProjects</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEntryGroups` <a name="ResetEntryGroups" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.resetEntryGroups"></a>

```csharp
private void ResetEntryGroups()
```

##### `ResetOrganizationLevel` <a name="ResetOrganizationLevel" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.resetOrganizationLevel"></a>

```csharp
private void ResetOrganizationLevel()
```

##### `ResetProjects` <a name="ResetProjects" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.resetProjects"></a>

```csharp
private void ResetProjects()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.entryGroupsInput">EntryGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.organizationLevelInput">OrganizationLevelInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.projectsInput">ProjectsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.entryGroups">EntryGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.organizationLevel">OrganizationLevel</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.projects">Projects</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope">DataplexMetadataFeedScope</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EntryGroupsInput`<sup>Optional</sup> <a name="EntryGroupsInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.entryGroupsInput"></a>

```csharp
public string[] EntryGroupsInput { get; }
```

- *Type:* string[]

---

##### `OrganizationLevelInput`<sup>Optional</sup> <a name="OrganizationLevelInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.organizationLevelInput"></a>

```csharp
public bool|IResolvable OrganizationLevelInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ProjectsInput`<sup>Optional</sup> <a name="ProjectsInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.projectsInput"></a>

```csharp
public string[] ProjectsInput { get; }
```

- *Type:* string[]

---

##### `EntryGroups`<sup>Required</sup> <a name="EntryGroups" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.entryGroups"></a>

```csharp
public string[] EntryGroups { get; }
```

- *Type:* string[]

---

##### `OrganizationLevel`<sup>Required</sup> <a name="OrganizationLevel" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.organizationLevel"></a>

```csharp
public bool|IResolvable OrganizationLevel { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Projects`<sup>Required</sup> <a name="Projects" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.projects"></a>

```csharp
public string[] Projects { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScopeOutputReference.property.internalValue"></a>

```csharp
public DataplexMetadataFeedScope InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedScope">DataplexMetadataFeedScope</a>

---


### DataplexMetadataFeedTimeoutsOutputReference <a name="DataplexMetadataFeedTimeoutsOutputReference" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new DataplexMetadataFeedTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts">DataplexMetadataFeedTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataplexMetadataFeedTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.dataplexMetadataFeed.DataplexMetadataFeedTimeouts">DataplexMetadataFeedTimeouts</a>

---



