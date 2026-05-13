# `identityPlatformTenantDefaultSupportedIdpConfig` Submodule <a name="`identityPlatformTenantDefaultSupportedIdpConfig` Submodule" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityPlatformTenantDefaultSupportedIdpConfig <a name="IdentityPlatformTenantDefaultSupportedIdpConfig" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/identity_platform_tenant_default_supported_idp_config google_identity_platform_tenant_default_supported_idp_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.Initializer"></a>

```typescript
import { identityPlatformTenantDefaultSupportedIdpConfig } from '@cdktn/provider-google'

new identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig(scope: Construct, id: string, config: IdentityPlatformTenantDefaultSupportedIdpConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig">IdentityPlatformTenantDefaultSupportedIdpConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig">IdentityPlatformTenantDefaultSupportedIdpConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts">IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IdentityPlatformTenantDefaultSupportedIdpConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.isConstruct"></a>

```typescript
import { identityPlatformTenantDefaultSupportedIdpConfig } from '@cdktn/provider-google'

identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.isTerraformElement"></a>

```typescript
import { identityPlatformTenantDefaultSupportedIdpConfig } from '@cdktn/provider-google'

identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.isTerraformResource"></a>

```typescript
import { identityPlatformTenantDefaultSupportedIdpConfig } from '@cdktn/provider-google'

identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.generateConfigForImport"></a>

```typescript
import { identityPlatformTenantDefaultSupportedIdpConfig } from '@cdktn/provider-google'

identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IdentityPlatformTenantDefaultSupportedIdpConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IdentityPlatformTenantDefaultSupportedIdpConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IdentityPlatformTenantDefaultSupportedIdpConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/identity_platform_tenant_default_supported_idp_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IdentityPlatformTenantDefaultSupportedIdpConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference">IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.idpIdInput">idpIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.tenantInput">tenantInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts">IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.idpId">idpId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.tenant">tenant</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.timeouts"></a>

```typescript
public readonly timeouts: IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference">IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference</a>

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `idpIdInput`<sup>Optional</sup> <a name="idpIdInput" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.idpIdInput"></a>

```typescript
public readonly idpIdInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `tenantInput`<sup>Optional</sup> <a name="tenantInput" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.tenantInput"></a>

```typescript
public readonly tenantInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts">IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts</a>

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idpId`<sup>Required</sup> <a name="idpId" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.idpId"></a>

```typescript
public readonly idpId: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `tenant`<sup>Required</sup> <a name="tenant" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.tenant"></a>

```typescript
public readonly tenant: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityPlatformTenantDefaultSupportedIdpConfigConfig <a name="IdentityPlatformTenantDefaultSupportedIdpConfigConfig" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.Initializer"></a>

```typescript
import { identityPlatformTenantDefaultSupportedIdpConfig } from '@cdktn/provider-google'

const identityPlatformTenantDefaultSupportedIdpConfigConfig: identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.clientId">clientId</a></code> | <code>string</code> | OAuth client ID. |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.clientSecret">clientSecret</a></code> | <code>string</code> | OAuth client secret. |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.idpId">idpId</a></code> | <code>string</code> | ID of the IDP. Possible values include:. |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.tenant">tenant</a></code> | <code>string</code> | The name of the tenant where this DefaultSupportedIdpConfig resource exists. |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | If this IDP allows the user to sign in. |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/identity_platform_tenant_default_supported_idp_config#id IdentityPlatformTenantDefaultSupportedIdpConfig#id}. |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/identity_platform_tenant_default_supported_idp_config#project IdentityPlatformTenantDefaultSupportedIdpConfig#project}. |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts">IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

OAuth client ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/identity_platform_tenant_default_supported_idp_config#client_id IdentityPlatformTenantDefaultSupportedIdpConfig#client_id}

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

OAuth client secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/identity_platform_tenant_default_supported_idp_config#client_secret IdentityPlatformTenantDefaultSupportedIdpConfig#client_secret}

---

##### `idpId`<sup>Required</sup> <a name="idpId" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.idpId"></a>

```typescript
public readonly idpId: string;
```

- *Type:* string

ID of the IDP. Possible values include:.

* 'apple.com'

* 'facebook.com'

* 'gc.apple.com'

* 'github.com'

* 'google.com'

* 'linkedin.com'

* 'microsoft.com'

* 'playgames.google.com'

* 'twitter.com'

* 'yahoo.com'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/identity_platform_tenant_default_supported_idp_config#idp_id IdentityPlatformTenantDefaultSupportedIdpConfig#idp_id}

---

##### `tenant`<sup>Required</sup> <a name="tenant" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.tenant"></a>

```typescript
public readonly tenant: string;
```

- *Type:* string

The name of the tenant where this DefaultSupportedIdpConfig resource exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/identity_platform_tenant_default_supported_idp_config#tenant IdentityPlatformTenantDefaultSupportedIdpConfig#tenant}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If this IDP allows the user to sign in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/identity_platform_tenant_default_supported_idp_config#enabled IdentityPlatformTenantDefaultSupportedIdpConfig#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/identity_platform_tenant_default_supported_idp_config#id IdentityPlatformTenantDefaultSupportedIdpConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/identity_platform_tenant_default_supported_idp_config#project IdentityPlatformTenantDefaultSupportedIdpConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts">IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/identity_platform_tenant_default_supported_idp_config#timeouts IdentityPlatformTenantDefaultSupportedIdpConfig#timeouts}

---

### IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts <a name="IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts.Initializer"></a>

```typescript
import { identityPlatformTenantDefaultSupportedIdpConfig } from '@cdktn/provider-google'

const identityPlatformTenantDefaultSupportedIdpConfigTimeouts: identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/identity_platform_tenant_default_supported_idp_config#create IdentityPlatformTenantDefaultSupportedIdpConfig#create}. |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/identity_platform_tenant_default_supported_idp_config#delete IdentityPlatformTenantDefaultSupportedIdpConfig#delete}. |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/identity_platform_tenant_default_supported_idp_config#update IdentityPlatformTenantDefaultSupportedIdpConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/identity_platform_tenant_default_supported_idp_config#create IdentityPlatformTenantDefaultSupportedIdpConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/identity_platform_tenant_default_supported_idp_config#delete IdentityPlatformTenantDefaultSupportedIdpConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/resources/identity_platform_tenant_default_supported_idp_config#update IdentityPlatformTenantDefaultSupportedIdpConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference <a name="IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { identityPlatformTenantDefaultSupportedIdpConfig } from '@cdktn/provider-google'

new identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts">IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.identityPlatformTenantDefaultSupportedIdpConfig.IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts">IdentityPlatformTenantDefaultSupportedIdpConfigTimeouts</a>

---



