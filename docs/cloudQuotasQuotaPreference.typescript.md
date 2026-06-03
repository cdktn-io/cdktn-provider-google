# `cloudQuotasQuotaPreference` Submodule <a name="`cloudQuotasQuotaPreference` Submodule" id="@cdktn/provider-google.cloudQuotasQuotaPreference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudQuotasQuotaPreference <a name="CloudQuotasQuotaPreference" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/cloud_quotas_quota_preference google_cloud_quotas_quota_preference}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.Initializer"></a>

```typescript
import { cloudQuotasQuotaPreference } from '@cdktn/provider-google'

new cloudQuotasQuotaPreference.CloudQuotasQuotaPreference(scope: Construct, id: string, config: CloudQuotasQuotaPreferenceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig">CloudQuotasQuotaPreferenceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig">CloudQuotasQuotaPreferenceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.putQuotaConfig">putQuotaConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetContactEmail">resetContactEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetDimensions">resetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetIgnoreSafetyChecks">resetIgnoreSafetyChecks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetJustification">resetJustification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetParent">resetParent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetQuotaId">resetQuotaId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetService">resetService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putQuotaConfig` <a name="putQuotaConfig" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.putQuotaConfig"></a>

```typescript
public putQuotaConfig(value: CloudQuotasQuotaPreferenceQuotaConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.putQuotaConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfig">CloudQuotasQuotaPreferenceQuotaConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.putTimeouts"></a>

```typescript
public putTimeouts(value: CloudQuotasQuotaPreferenceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeouts">CloudQuotasQuotaPreferenceTimeouts</a>

---

##### `resetContactEmail` <a name="resetContactEmail" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetContactEmail"></a>

```typescript
public resetContactEmail(): void
```

##### `resetDimensions` <a name="resetDimensions" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetDimensions"></a>

```typescript
public resetDimensions(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIgnoreSafetyChecks` <a name="resetIgnoreSafetyChecks" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetIgnoreSafetyChecks"></a>

```typescript
public resetIgnoreSafetyChecks(): void
```

##### `resetJustification` <a name="resetJustification" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetJustification"></a>

```typescript
public resetJustification(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetParent` <a name="resetParent" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetParent"></a>

```typescript
public resetParent(): void
```

##### `resetQuotaId` <a name="resetQuotaId" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetQuotaId"></a>

```typescript
public resetQuotaId(): void
```

##### `resetService` <a name="resetService" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetService"></a>

```typescript
public resetService(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudQuotasQuotaPreference resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.isConstruct"></a>

```typescript
import { cloudQuotasQuotaPreference } from '@cdktn/provider-google'

cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.isTerraformElement"></a>

```typescript
import { cloudQuotasQuotaPreference } from '@cdktn/provider-google'

cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.isTerraformResource"></a>

```typescript
import { cloudQuotasQuotaPreference } from '@cdktn/provider-google'

cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.generateConfigForImport"></a>

```typescript
import { cloudQuotasQuotaPreference } from '@cdktn/provider-google'

cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CloudQuotasQuotaPreference resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudQuotasQuotaPreference to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudQuotasQuotaPreference that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/cloud_quotas_quota_preference#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudQuotasQuotaPreference to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.quotaConfig">quotaConfig</a></code> | <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference">CloudQuotasQuotaPreferenceQuotaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.reconciling">reconciling</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference">CloudQuotasQuotaPreferenceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.contactEmailInput">contactEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.dimensionsInput">dimensionsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.ignoreSafetyChecksInput">ignoreSafetyChecksInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.justificationInput">justificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.quotaConfigInput">quotaConfigInput</a></code> | <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfig">CloudQuotasQuotaPreferenceQuotaConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.quotaIdInput">quotaIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeouts">CloudQuotasQuotaPreferenceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.contactEmail">contactEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.dimensions">dimensions</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.ignoreSafetyChecks">ignoreSafetyChecks</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.justification">justification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.quotaId">quotaId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.service">service</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `quotaConfig`<sup>Required</sup> <a name="quotaConfig" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.quotaConfig"></a>

```typescript
public readonly quotaConfig: CloudQuotasQuotaPreferenceQuotaConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference">CloudQuotasQuotaPreferenceQuotaConfigOutputReference</a>

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.reconciling"></a>

```typescript
public readonly reconciling: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.timeouts"></a>

```typescript
public readonly timeouts: CloudQuotasQuotaPreferenceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference">CloudQuotasQuotaPreferenceTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `contactEmailInput`<sup>Optional</sup> <a name="contactEmailInput" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.contactEmailInput"></a>

```typescript
public readonly contactEmailInput: string;
```

- *Type:* string

---

##### `dimensionsInput`<sup>Optional</sup> <a name="dimensionsInput" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.dimensionsInput"></a>

```typescript
public readonly dimensionsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ignoreSafetyChecksInput`<sup>Optional</sup> <a name="ignoreSafetyChecksInput" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.ignoreSafetyChecksInput"></a>

```typescript
public readonly ignoreSafetyChecksInput: string;
```

- *Type:* string

---

##### `justificationInput`<sup>Optional</sup> <a name="justificationInput" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.justificationInput"></a>

```typescript
public readonly justificationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `quotaConfigInput`<sup>Optional</sup> <a name="quotaConfigInput" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.quotaConfigInput"></a>

```typescript
public readonly quotaConfigInput: CloudQuotasQuotaPreferenceQuotaConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfig">CloudQuotasQuotaPreferenceQuotaConfig</a>

---

##### `quotaIdInput`<sup>Optional</sup> <a name="quotaIdInput" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.quotaIdInput"></a>

```typescript
public readonly quotaIdInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CloudQuotasQuotaPreferenceTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeouts">CloudQuotasQuotaPreferenceTimeouts</a>

---

##### `contactEmail`<sup>Required</sup> <a name="contactEmail" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.contactEmail"></a>

```typescript
public readonly contactEmail: string;
```

- *Type:* string

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.dimensions"></a>

```typescript
public readonly dimensions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ignoreSafetyChecks`<sup>Required</sup> <a name="ignoreSafetyChecks" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.ignoreSafetyChecks"></a>

```typescript
public readonly ignoreSafetyChecks: string;
```

- *Type:* string

---

##### `justification`<sup>Required</sup> <a name="justification" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.justification"></a>

```typescript
public readonly justification: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `quotaId`<sup>Required</sup> <a name="quotaId" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.quotaId"></a>

```typescript
public readonly quotaId: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudQuotasQuotaPreferenceConfig <a name="CloudQuotasQuotaPreferenceConfig" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.Initializer"></a>

```typescript
import { cloudQuotasQuotaPreference } from '@cdktn/provider-google'

const cloudQuotasQuotaPreferenceConfig: cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.quotaConfig">quotaConfig</a></code> | <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfig">CloudQuotasQuotaPreferenceQuotaConfig</a></code> | quota_config block. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.contactEmail">contactEmail</a></code> | <code>string</code> | An email address that can be used for quota related communication between the Google Cloud and the user in case the Google Cloud needs further information to make a decision on whether the user preferred quota can be granted. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.dimensions">dimensions</a></code> | <code>{[ key: string ]: string}</code> | The dimensions that this quota preference applies to. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/cloud_quotas_quota_preference#id CloudQuotasQuotaPreference#id}. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.ignoreSafetyChecks">ignoreSafetyChecks</a></code> | <code>string</code> | The list of quota safety checks to be ignored. Default value: "QUOTA_SAFETY_CHECK_UNSPECIFIED" Possible values: ["QUOTA_SAFETY_CHECK_UNSPECIFIED", "QUOTA_DECREASE_BELOW_USAGE", "QUOTA_DECREASE_PERCENTAGE_TOO_HIGH"]. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.justification">justification</a></code> | <code>string</code> | The reason / justification for this quota preference. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.name">name</a></code> | <code>string</code> | The resource name of the quota preference. Required except in the CREATE requests. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.parent">parent</a></code> | <code>string</code> | The parent of the quota preference. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.quotaId">quotaId</a></code> | <code>string</code> | The id of the quota to which the quota preference is applied. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.service">service</a></code> | <code>string</code> | The name of the service to which the quota preference is applied. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeouts">CloudQuotasQuotaPreferenceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `quotaConfig`<sup>Required</sup> <a name="quotaConfig" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.quotaConfig"></a>

```typescript
public readonly quotaConfig: CloudQuotasQuotaPreferenceQuotaConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfig">CloudQuotasQuotaPreferenceQuotaConfig</a>

quota_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/cloud_quotas_quota_preference#quota_config CloudQuotasQuotaPreference#quota_config}

---

##### `contactEmail`<sup>Optional</sup> <a name="contactEmail" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.contactEmail"></a>

```typescript
public readonly contactEmail: string;
```

- *Type:* string

An email address that can be used for quota related communication between the Google Cloud and the user in case the Google Cloud needs further information to make a decision on whether the user preferred quota can be granted.

The Google account for the email address must have quota update permission for the project, folder or organization this quota preference is for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/cloud_quotas_quota_preference#contact_email CloudQuotasQuotaPreference#contact_email}

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.dimensions"></a>

```typescript
public readonly dimensions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The dimensions that this quota preference applies to.

The key of the map entry is the name of a dimension, such as "region", "zone", "network_id", and the value of the map entry is the dimension value. If a dimension is missing from the map of dimensions, the quota preference applies to all the dimension values except for those that have other quota preferences configured for the specific value.

NOTE: QuotaPreferences can only be applied across all values of "user" and "resource" dimension. Do not set values for "user" or "resource" in the dimension map.

Example: '{"provider": "Foo Inc"}' where "provider" is a service specific dimension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/cloud_quotas_quota_preference#dimensions CloudQuotasQuotaPreference#dimensions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/cloud_quotas_quota_preference#id CloudQuotasQuotaPreference#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreSafetyChecks`<sup>Optional</sup> <a name="ignoreSafetyChecks" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.ignoreSafetyChecks"></a>

```typescript
public readonly ignoreSafetyChecks: string;
```

- *Type:* string

The list of quota safety checks to be ignored. Default value: "QUOTA_SAFETY_CHECK_UNSPECIFIED" Possible values: ["QUOTA_SAFETY_CHECK_UNSPECIFIED", "QUOTA_DECREASE_BELOW_USAGE", "QUOTA_DECREASE_PERCENTAGE_TOO_HIGH"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/cloud_quotas_quota_preference#ignore_safety_checks CloudQuotasQuotaPreference#ignore_safety_checks}

---

##### `justification`<sup>Optional</sup> <a name="justification" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.justification"></a>

```typescript
public readonly justification: string;
```

- *Type:* string

The reason / justification for this quota preference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/cloud_quotas_quota_preference#justification CloudQuotasQuotaPreference#justification}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The resource name of the quota preference. Required except in the CREATE requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/cloud_quotas_quota_preference#name CloudQuotasQuotaPreference#name}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

The parent of the quota preference.

Allowed parents are "projects/[project-id / number]" or "folders/[folder-id / number]" or "organizations/[org-id / number]".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/cloud_quotas_quota_preference#parent CloudQuotasQuotaPreference#parent}

---

##### `quotaId`<sup>Optional</sup> <a name="quotaId" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.quotaId"></a>

```typescript
public readonly quotaId: string;
```

- *Type:* string

The id of the quota to which the quota preference is applied.

A quota id is unique in the service.
Example: 'CPUS-per-project-region'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/cloud_quotas_quota_preference#quota_id CloudQuotasQuotaPreference#quota_id}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

The name of the service to which the quota preference is applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/cloud_quotas_quota_preference#service CloudQuotasQuotaPreference#service}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CloudQuotasQuotaPreferenceTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeouts">CloudQuotasQuotaPreferenceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/cloud_quotas_quota_preference#timeouts CloudQuotasQuotaPreference#timeouts}

---

### CloudQuotasQuotaPreferenceQuotaConfig <a name="CloudQuotasQuotaPreferenceQuotaConfig" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfig.Initializer"></a>

```typescript
import { cloudQuotasQuotaPreference } from '@cdktn/provider-google'

const cloudQuotasQuotaPreferenceQuotaConfig: cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfig.property.preferredValue">preferredValue</a></code> | <code>string</code> | The preferred value. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | The annotations map for clients to store small amounts of arbitrary data. |

---

##### `preferredValue`<sup>Required</sup> <a name="preferredValue" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfig.property.preferredValue"></a>

```typescript
public readonly preferredValue: string;
```

- *Type:* string

The preferred value.

Must be greater than or equal to -1. If set to -1, it means the value is "unlimited".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/cloud_quotas_quota_preference#preferred_value CloudQuotasQuotaPreference#preferred_value}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The annotations map for clients to store small amounts of arbitrary data.

Do not put PII or other sensitive information here. See https://google.aip.dev/128#annotations.

An object containing a list of "key: value" pairs. Example: '{ "name": "wrench", "mass": "1.3kg", "count": "3" }'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/cloud_quotas_quota_preference#annotations CloudQuotasQuotaPreference#annotations}

---

### CloudQuotasQuotaPreferenceTimeouts <a name="CloudQuotasQuotaPreferenceTimeouts" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeouts.Initializer"></a>

```typescript
import { cloudQuotasQuotaPreference } from '@cdktn/provider-google'

const cloudQuotasQuotaPreferenceTimeouts: cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/cloud_quotas_quota_preference#create CloudQuotasQuotaPreference#create}. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/cloud_quotas_quota_preference#delete CloudQuotasQuotaPreference#delete}. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/cloud_quotas_quota_preference#update CloudQuotasQuotaPreference#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/cloud_quotas_quota_preference#create CloudQuotasQuotaPreference#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/cloud_quotas_quota_preference#delete CloudQuotasQuotaPreference#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/cloud_quotas_quota_preference#update CloudQuotasQuotaPreference#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudQuotasQuotaPreferenceQuotaConfigOutputReference <a name="CloudQuotasQuotaPreferenceQuotaConfigOutputReference" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.Initializer"></a>

```typescript
import { cloudQuotasQuotaPreference } from '@cdktn/provider-google'

new cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.resetAnnotations">resetAnnotations</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.grantedValue">grantedValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.requestOrigin">requestOrigin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.stateDetail">stateDetail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.traceId">traceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.preferredValueInput">preferredValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.preferredValue">preferredValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfig">CloudQuotasQuotaPreferenceQuotaConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `grantedValue`<sup>Required</sup> <a name="grantedValue" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.grantedValue"></a>

```typescript
public readonly grantedValue: string;
```

- *Type:* string

---

##### `requestOrigin`<sup>Required</sup> <a name="requestOrigin" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.requestOrigin"></a>

```typescript
public readonly requestOrigin: string;
```

- *Type:* string

---

##### `stateDetail`<sup>Required</sup> <a name="stateDetail" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.stateDetail"></a>

```typescript
public readonly stateDetail: string;
```

- *Type:* string

---

##### `traceId`<sup>Required</sup> <a name="traceId" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.traceId"></a>

```typescript
public readonly traceId: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `preferredValueInput`<sup>Optional</sup> <a name="preferredValueInput" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.preferredValueInput"></a>

```typescript
public readonly preferredValueInput: string;
```

- *Type:* string

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `preferredValue`<sup>Required</sup> <a name="preferredValue" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.preferredValue"></a>

```typescript
public readonly preferredValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudQuotasQuotaPreferenceQuotaConfig;
```

- *Type:* <a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfig">CloudQuotasQuotaPreferenceQuotaConfig</a>

---


### CloudQuotasQuotaPreferenceTimeoutsOutputReference <a name="CloudQuotasQuotaPreferenceTimeoutsOutputReference" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.Initializer"></a>

```typescript
import { cloudQuotasQuotaPreference } from '@cdktn/provider-google'

new cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeouts">CloudQuotasQuotaPreferenceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudQuotasQuotaPreferenceTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeouts">CloudQuotasQuotaPreferenceTimeouts</a>

---



