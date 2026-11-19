# `cloudIdentityInboundOidcSsoProfile` Submodule <a name="`cloudIdentityInboundOidcSsoProfile` Submodule" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudIdentityInboundOidcSsoProfile <a name="CloudIdentityInboundOidcSsoProfile" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile google_cloud_identity_inbound_oidc_sso_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CloudIdentityInboundOidcSsoProfile(Construct Scope, string Id, CloudIdentityInboundOidcSsoProfileConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig">CloudIdentityInboundOidcSsoProfileConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig">CloudIdentityInboundOidcSsoProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.putIdpConfig">PutIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.putRpConfig">PutRpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.resetCustomer">ResetCustomer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.resetRpConfig">ResetRpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIdpConfig` <a name="PutIdpConfig" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.putIdpConfig"></a>

```csharp
private void PutIdpConfig(CloudIdentityInboundOidcSsoProfileIdpConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.putIdpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig">CloudIdentityInboundOidcSsoProfileIdpConfig</a>

---

##### `PutRpConfig` <a name="PutRpConfig" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.putRpConfig"></a>

```csharp
private void PutRpConfig(CloudIdentityInboundOidcSsoProfileRpConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.putRpConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig">CloudIdentityInboundOidcSsoProfileRpConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.putTimeouts"></a>

```csharp
private void PutTimeouts(CloudIdentityInboundOidcSsoProfileTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts">CloudIdentityInboundOidcSsoProfileTimeouts</a>

---

##### `ResetCustomer` <a name="ResetCustomer" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.resetCustomer"></a>

```csharp
private void ResetCustomer()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRpConfig` <a name="ResetRpConfig" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.resetRpConfig"></a>

```csharp
private void ResetRpConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CloudIdentityInboundOidcSsoProfile resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

CloudIdentityInboundOidcSsoProfile.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

CloudIdentityInboundOidcSsoProfile.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

CloudIdentityInboundOidcSsoProfile.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

CloudIdentityInboundOidcSsoProfile.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CloudIdentityInboundOidcSsoProfile resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudIdentityInboundOidcSsoProfile to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudIdentityInboundOidcSsoProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CloudIdentityInboundOidcSsoProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.idpConfig">IdpConfig</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference">CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.inboundOidcSsoProfileId">InboundOidcSsoProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.rpConfig">RpConfig</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference">CloudIdentityInboundOidcSsoProfileRpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference">CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.customerInput">CustomerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.idpConfigInput">IdpConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig">CloudIdentityInboundOidcSsoProfileIdpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.rpConfigInput">RpConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig">CloudIdentityInboundOidcSsoProfileRpConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts">CloudIdentityInboundOidcSsoProfileTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.customer">Customer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `IdpConfig`<sup>Required</sup> <a name="IdpConfig" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.idpConfig"></a>

```csharp
public CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference IdpConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference">CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference</a>

---

##### `InboundOidcSsoProfileId`<sup>Required</sup> <a name="InboundOidcSsoProfileId" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.inboundOidcSsoProfileId"></a>

```csharp
public string InboundOidcSsoProfileId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RpConfig`<sup>Required</sup> <a name="RpConfig" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.rpConfig"></a>

```csharp
public CloudIdentityInboundOidcSsoProfileRpConfigOutputReference RpConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference">CloudIdentityInboundOidcSsoProfileRpConfigOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.timeouts"></a>

```csharp
public CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference">CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference</a>

---

##### `CustomerInput`<sup>Optional</sup> <a name="CustomerInput" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.customerInput"></a>

```csharp
public string CustomerInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IdpConfigInput`<sup>Optional</sup> <a name="IdpConfigInput" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.idpConfigInput"></a>

```csharp
public CloudIdentityInboundOidcSsoProfileIdpConfig IdpConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig">CloudIdentityInboundOidcSsoProfileIdpConfig</a>

---

##### `RpConfigInput`<sup>Optional</sup> <a name="RpConfigInput" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.rpConfigInput"></a>

```csharp
public CloudIdentityInboundOidcSsoProfileRpConfig RpConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig">CloudIdentityInboundOidcSsoProfileRpConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.timeoutsInput"></a>

```csharp
public IResolvable|CloudIdentityInboundOidcSsoProfileTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts">CloudIdentityInboundOidcSsoProfileTimeouts</a>

---

##### `Customer`<sup>Required</sup> <a name="Customer" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.customer"></a>

```csharp
public string Customer { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfile.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudIdentityInboundOidcSsoProfileConfig <a name="CloudIdentityInboundOidcSsoProfileConfig" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CloudIdentityInboundOidcSsoProfileConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    CloudIdentityInboundOidcSsoProfileIdpConfig IdpConfig,
    string Customer = null,
    string DeletionPolicy = null,
    string DisplayName = null,
    string Id = null,
    CloudIdentityInboundOidcSsoProfileRpConfig RpConfig = null,
    CloudIdentityInboundOidcSsoProfileTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.idpConfig">IdpConfig</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig">CloudIdentityInboundOidcSsoProfileIdpConfig</a></code> | idp_config block. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.customer">Customer</a></code> | <code>string</code> | The customer. For example: 'customers/C0123abc'. If omitted, the customer of the caller is used. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Human-readable name of the OIDC SSO profile. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#id CloudIdentityInboundOidcSsoProfile#id}. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.rpConfig">RpConfig</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig">CloudIdentityInboundOidcSsoProfileRpConfig</a></code> | rp_config block. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts">CloudIdentityInboundOidcSsoProfileTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `IdpConfig`<sup>Required</sup> <a name="IdpConfig" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.idpConfig"></a>

```csharp
public CloudIdentityInboundOidcSsoProfileIdpConfig IdpConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig">CloudIdentityInboundOidcSsoProfileIdpConfig</a>

idp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#idp_config CloudIdentityInboundOidcSsoProfile#idp_config}

---

##### `Customer`<sup>Optional</sup> <a name="Customer" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.customer"></a>

```csharp
public string Customer { get; set; }
```

- *Type:* string

The customer. For example: 'customers/C0123abc'. If omitted, the customer of the caller is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#customer CloudIdentityInboundOidcSsoProfile#customer}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#deletion_policy CloudIdentityInboundOidcSsoProfile#deletion_policy}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Human-readable name of the OIDC SSO profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#display_name CloudIdentityInboundOidcSsoProfile#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#id CloudIdentityInboundOidcSsoProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RpConfig`<sup>Optional</sup> <a name="RpConfig" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.rpConfig"></a>

```csharp
public CloudIdentityInboundOidcSsoProfileRpConfig RpConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig">CloudIdentityInboundOidcSsoProfileRpConfig</a>

rp_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#rp_config CloudIdentityInboundOidcSsoProfile#rp_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileConfig.property.timeouts"></a>

```csharp
public CloudIdentityInboundOidcSsoProfileTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts">CloudIdentityInboundOidcSsoProfileTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#timeouts CloudIdentityInboundOidcSsoProfile#timeouts}

---

### CloudIdentityInboundOidcSsoProfileIdpConfig <a name="CloudIdentityInboundOidcSsoProfileIdpConfig" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CloudIdentityInboundOidcSsoProfileIdpConfig {
    string IssuerUri,
    string ChangePasswordUri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig.property.issuerUri">IssuerUri</a></code> | <code>string</code> | The Issuer identifier for the IdP. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig.property.changePasswordUri">ChangePasswordUri</a></code> | <code>string</code> | The **Change Password URL** of the identity provider. |

---

##### `IssuerUri`<sup>Required</sup> <a name="IssuerUri" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig.property.issuerUri"></a>

```csharp
public string IssuerUri { get; set; }
```

- *Type:* string

The Issuer identifier for the IdP.

Must be a URL. The discovery URL will be derived
from this as described in Section 4 of the OIDC specification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#issuer_uri CloudIdentityInboundOidcSsoProfile#issuer_uri}

---

##### `ChangePasswordUri`<sup>Optional</sup> <a name="ChangePasswordUri" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig.property.changePasswordUri"></a>

```csharp
public string ChangePasswordUri { get; set; }
```

- *Type:* string

The **Change Password URL** of the identity provider.

Users will be sent to this URL
when changing their passwords at 'myaccount.google.com'. This takes precedence over
the change password URL configured at customer-level. Must use 'HTTPS'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#change_password_uri CloudIdentityInboundOidcSsoProfile#change_password_uri}

---

### CloudIdentityInboundOidcSsoProfileRpConfig <a name="CloudIdentityInboundOidcSsoProfileRpConfig" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CloudIdentityInboundOidcSsoProfileRpConfig {
    string ClientId = null,
    string ClientSecret = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig.property.clientId">ClientId</a></code> | <code>string</code> | OAuth2 client ID for OIDC. Must be set together with 'client_secret'. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig.property.clientSecret">ClientSecret</a></code> | <code>string</code> | Input only. OAuth2 client secret for OIDC. Must be set together with 'client_id'. |

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

OAuth2 client ID for OIDC. Must be set together with 'client_secret'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#client_id CloudIdentityInboundOidcSsoProfile#client_id}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

Input only. OAuth2 client secret for OIDC. Must be set together with 'client_id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#client_secret CloudIdentityInboundOidcSsoProfile#client_secret}

---

### CloudIdentityInboundOidcSsoProfileTimeouts <a name="CloudIdentityInboundOidcSsoProfileTimeouts" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CloudIdentityInboundOidcSsoProfileTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#create CloudIdentityInboundOidcSsoProfile#create}. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#delete CloudIdentityInboundOidcSsoProfile#delete}. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#update CloudIdentityInboundOidcSsoProfile#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#create CloudIdentityInboundOidcSsoProfile#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#delete CloudIdentityInboundOidcSsoProfile#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.12.0/docs/resources/cloud_identity_inbound_oidc_sso_profile#update CloudIdentityInboundOidcSsoProfile#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference <a name="CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.resetChangePasswordUri">ResetChangePasswordUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChangePasswordUri` <a name="ResetChangePasswordUri" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.resetChangePasswordUri"></a>

```csharp
private void ResetChangePasswordUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.changePasswordUriInput">ChangePasswordUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.issuerUriInput">IssuerUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.changePasswordUri">ChangePasswordUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.issuerUri">IssuerUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig">CloudIdentityInboundOidcSsoProfileIdpConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ChangePasswordUriInput`<sup>Optional</sup> <a name="ChangePasswordUriInput" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.changePasswordUriInput"></a>

```csharp
public string ChangePasswordUriInput { get; }
```

- *Type:* string

---

##### `IssuerUriInput`<sup>Optional</sup> <a name="IssuerUriInput" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.issuerUriInput"></a>

```csharp
public string IssuerUriInput { get; }
```

- *Type:* string

---

##### `ChangePasswordUri`<sup>Required</sup> <a name="ChangePasswordUri" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.changePasswordUri"></a>

```csharp
public string ChangePasswordUri { get; }
```

- *Type:* string

---

##### `IssuerUri`<sup>Required</sup> <a name="IssuerUri" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.issuerUri"></a>

```csharp
public string IssuerUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfigOutputReference.property.internalValue"></a>

```csharp
public CloudIdentityInboundOidcSsoProfileIdpConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileIdpConfig">CloudIdentityInboundOidcSsoProfileIdpConfig</a>

---


### CloudIdentityInboundOidcSsoProfileRpConfigOutputReference <a name="CloudIdentityInboundOidcSsoProfileRpConfigOutputReference" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CloudIdentityInboundOidcSsoProfileRpConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientId` <a name="ResetClientId" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.resetClientId"></a>

```csharp
private void ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.resetClientSecret"></a>

```csharp
private void ResetClientSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.redirectUris">RedirectUris</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig">CloudIdentityInboundOidcSsoProfileRpConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RedirectUris`<sup>Required</sup> <a name="RedirectUris" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.redirectUris"></a>

```csharp
public string[] RedirectUris { get; }
```

- *Type:* string[]

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfigOutputReference.property.internalValue"></a>

```csharp
public CloudIdentityInboundOidcSsoProfileRpConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileRpConfig">CloudIdentityInboundOidcSsoProfileRpConfig</a>

---


### CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference <a name="CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts">CloudIdentityInboundOidcSsoProfileTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CloudIdentityInboundOidcSsoProfileTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.cloudIdentityInboundOidcSsoProfile.CloudIdentityInboundOidcSsoProfileTimeouts">CloudIdentityInboundOidcSsoProfileTimeouts</a>

---



