# `identityPlatformTenantOauthIdpConfig` Submodule <a name="`identityPlatformTenantOauthIdpConfig` Submodule" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityPlatformTenantOauthIdpConfig <a name="IdentityPlatformTenantOauthIdpConfig" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/identity_platform_tenant_oauth_idp_config google_identity_platform_tenant_oauth_idp_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new IdentityPlatformTenantOauthIdpConfig(Construct Scope, string Id, IdentityPlatformTenantOauthIdpConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig">IdentityPlatformTenantOauthIdpConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig">IdentityPlatformTenantOauthIdpConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.putTimeouts"></a>

```csharp
private void PutTimeouts(IdentityPlatformTenantOauthIdpConfigTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeouts">IdentityPlatformTenantOauthIdpConfigTimeouts</a>

---

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.resetClientSecret"></a>

```csharp
private void ResetClientSecret()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IdentityPlatformTenantOauthIdpConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Google;

IdentityPlatformTenantOauthIdpConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Google;

IdentityPlatformTenantOauthIdpConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Google;

IdentityPlatformTenantOauthIdpConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Google;

IdentityPlatformTenantOauthIdpConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a IdentityPlatformTenantOauthIdpConfig resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IdentityPlatformTenantOauthIdpConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IdentityPlatformTenantOauthIdpConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/identity_platform_tenant_oauth_idp_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the IdentityPlatformTenantOauthIdpConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference">IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.issuerInput">IssuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.tenantInput">TenantInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeouts">IdentityPlatformTenantOauthIdpConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.issuer">Issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.tenant">Tenant</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.timeouts"></a>

```csharp
public IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference">IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference</a>

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.issuerInput"></a>

```csharp
public string IssuerInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TenantInput`<sup>Optional</sup> <a name="TenantInput" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.tenantInput"></a>

```csharp
public string TenantInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.timeoutsInput"></a>

```csharp
public IResolvable|IdentityPlatformTenantOauthIdpConfigTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeouts">IdentityPlatformTenantOauthIdpConfigTimeouts</a>

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.issuer"></a>

```csharp
public string Issuer { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Tenant`<sup>Required</sup> <a name="Tenant" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.tenant"></a>

```csharp
public string Tenant { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityPlatformTenantOauthIdpConfigConfig <a name="IdentityPlatformTenantOauthIdpConfigConfig" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new IdentityPlatformTenantOauthIdpConfigConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ClientId,
    string DisplayName,
    string Issuer,
    string Name,
    string Tenant,
    string ClientSecret = null,
    bool|IResolvable Enabled = null,
    string Id = null,
    string Project = null,
    IdentityPlatformTenantOauthIdpConfigTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.clientId">ClientId</a></code> | <code>string</code> | The client id of an OAuth client. |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Human friendly display name. |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.issuer">Issuer</a></code> | <code>string</code> | For OIDC Idps, the issuer identifier. |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.name">Name</a></code> | <code>string</code> | The name of the OauthIdpConfig. Must start with 'oidc.'. |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.tenant">Tenant</a></code> | <code>string</code> | The name of the tenant where this OIDC IDP configuration resource exists. |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.clientSecret">ClientSecret</a></code> | <code>string</code> | The client secret of the OAuth client, to enable OIDC code flow. |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If this config allows users to sign in with the provider. |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/identity_platform_tenant_oauth_idp_config#id IdentityPlatformTenantOauthIdpConfig#id}. |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/identity_platform_tenant_oauth_idp_config#project IdentityPlatformTenantOauthIdpConfig#project}. |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeouts">IdentityPlatformTenantOauthIdpConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

The client id of an OAuth client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/identity_platform_tenant_oauth_idp_config#client_id IdentityPlatformTenantOauthIdpConfig#client_id}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Human friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/identity_platform_tenant_oauth_idp_config#display_name IdentityPlatformTenantOauthIdpConfig#display_name}

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.issuer"></a>

```csharp
public string Issuer { get; set; }
```

- *Type:* string

For OIDC Idps, the issuer identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/identity_platform_tenant_oauth_idp_config#issuer IdentityPlatformTenantOauthIdpConfig#issuer}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the OauthIdpConfig. Must start with 'oidc.'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/identity_platform_tenant_oauth_idp_config#name IdentityPlatformTenantOauthIdpConfig#name}

---

##### `Tenant`<sup>Required</sup> <a name="Tenant" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.tenant"></a>

```csharp
public string Tenant { get; set; }
```

- *Type:* string

The name of the tenant where this OIDC IDP configuration resource exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/identity_platform_tenant_oauth_idp_config#tenant IdentityPlatformTenantOauthIdpConfig#tenant}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

The client secret of the OAuth client, to enable OIDC code flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/identity_platform_tenant_oauth_idp_config#client_secret IdentityPlatformTenantOauthIdpConfig#client_secret}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If this config allows users to sign in with the provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/identity_platform_tenant_oauth_idp_config#enabled IdentityPlatformTenantOauthIdpConfig#enabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/identity_platform_tenant_oauth_idp_config#id IdentityPlatformTenantOauthIdpConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/identity_platform_tenant_oauth_idp_config#project IdentityPlatformTenantOauthIdpConfig#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigConfig.property.timeouts"></a>

```csharp
public IdentityPlatformTenantOauthIdpConfigTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeouts">IdentityPlatformTenantOauthIdpConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/identity_platform_tenant_oauth_idp_config#timeouts IdentityPlatformTenantOauthIdpConfig#timeouts}

---

### IdentityPlatformTenantOauthIdpConfigTimeouts <a name="IdentityPlatformTenantOauthIdpConfigTimeouts" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new IdentityPlatformTenantOauthIdpConfigTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/identity_platform_tenant_oauth_idp_config#create IdentityPlatformTenantOauthIdpConfig#create}. |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/identity_platform_tenant_oauth_idp_config#delete IdentityPlatformTenantOauthIdpConfig#delete}. |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/identity_platform_tenant_oauth_idp_config#update IdentityPlatformTenantOauthIdpConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/identity_platform_tenant_oauth_idp_config#create IdentityPlatformTenantOauthIdpConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/identity_platform_tenant_oauth_idp_config#delete IdentityPlatformTenantOauthIdpConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/identity_platform_tenant_oauth_idp_config#update IdentityPlatformTenantOauthIdpConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference <a name="IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Google;

new IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeouts">IdentityPlatformTenantOauthIdpConfigTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IdentityPlatformTenantOauthIdpConfigTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google.identityPlatformTenantOauthIdpConfig.IdentityPlatformTenantOauthIdpConfigTimeouts">IdentityPlatformTenantOauthIdpConfigTimeouts</a>

---



